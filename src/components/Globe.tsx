import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import type { Station } from '../types/station';

const EARTH_RADIUS = 3;

interface GlobeProps {
  stations: Station[];
  selectedStation: Station | null;
  onStationClick: (station: Station) => void;
}

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lng + 180) * Math.PI / 180;
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function latLngToRotation(lat: number, lng: number): { x: number; y: number } {
  return {
    y: -(lng + 180) * Math.PI / 180,
    x: lat * Math.PI / 180,
  };
}

const earthVertexShader = `
varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;
void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const earthFragmentShader = `
uniform vec3 uLandColor;
uniform vec3 uWaterColor;
uniform float uShowTexture;
uniform sampler2D uTexture;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

#define PI 3.141592653589793

vec2 latLngToUV(vec3 pos) {
  vec3 npos = normalize(pos);
  float u = 0.5 - atan(npos.z, npos.x) / (2.0 * PI);
  float v = 0.5 - asin(npos.y) / PI;
  return vec2(u, v);
}

float simplex3D(vec3 p) {
  return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
}

void main() {
  vec3 normal = normalize(vNormal);
  vec3 baseColor;
  
  if (uShowTexture > 0.5) {
    vec4 textureColor = texture2D(uTexture, vUv);
    float pattern = dot(textureColor.rgb, vec3(0.299, 0.587, 0.114));
    baseColor = pattern > 0.4 ? uLandColor : uWaterColor;
  } else {
    float lat = asin(normal.y);
    float lng = atan(normal.z, normal.x);
    vec2 uv = latLngToUV(normal);
    float noise = simplex3D(vec3(uv * 5.0, 0.0));
    baseColor = noise > 0.1 ? uLandColor : uWaterColor;
  }
  
  vec3 lightDir = normalize(vec3(5.0, 3.0, 5.0));
  float lightIntensity = max(dot(normal, lightDir), 0.0);
  vec3 finalColor = baseColor * (0.6 + 0.4 * lightIntensity);
  
  vec3 viewDir = normalize(-vPosition);
  float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
  finalColor += vec3(1.0) * fresnel * 0.15;
  
  gl_FragColor = vec4(finalColor, 1.0);
}
`;

const atmosphereVertexShader = `
varying vec3 vNormal;
void main() {
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const atmosphereFragmentShader = `
uniform vec3 uAtmosphereColor;
varying vec3 vNormal;
void main() {
  float viewDot = max(dot(vNormal, vec3(0, 0, 1.0)), 0.0);
  float intensity = pow(viewDot, 3.0);
  gl_FragColor = vec4(uAtmosphereColor, intensity * 0.4);
}
`;

interface SceneState {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  earthGroup: THREE.Group;
  stars: THREE.Points;
  markers: Map<string, HTMLDivElement>;
  animId: number;
  isAutoRotating: boolean;
}

export default function Globe({ stations, selectedStation, onStationClick }: GlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const markersRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<SceneState | null>(null);
  const selectedStationRef = useRef<Station | null>(selectedStation);
  selectedStationRef.current = selectedStation;
  const onStationClickRef = useRef(onStationClick);
  onStationClickRef.current = onStationClick;
  const stationsRef = useRef<Station[]>(stations);
  stationsRef.current = stations;

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Earth group
    const earthGroup = new THREE.Group();
    scene.add(earthGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(5, 3, 5);
    scene.add(dirLight1);
    const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
    dirLight2.position.set(-5, 0, 5);
    scene.add(dirLight2);

    // Earth mesh
    const earthGeometry = new THREE.SphereGeometry(EARTH_RADIUS, 64, 64);
    const earthMaterial = new THREE.ShaderMaterial({
      vertexShader: earthVertexShader,
      fragmentShader: earthFragmentShader,
      uniforms: {
        uLandColor: { value: new THREE.Color(0xF2EFE4) },
        uWaterColor: { value: new THREE.Color(0xC4D7D1) },
        uShowTexture: { value: 0.0 },
        uTexture: { value: null },
      },
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    earthGroup.add(earthMesh);

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('/earth-texture.jpg', (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      earthMaterial.uniforms.uTexture.value = texture;
      earthMaterial.uniforms.uShowTexture.value = 1.0;
    });

    // Atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(EARTH_RADIUS + 0.15, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        uAtmosphereColor: { value: new THREE.Color(0xE8542E) },
      },
      side: THREE.BackSide,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    earthGroup.add(atmosphereMesh);

    // Stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 2000;
    const starsPositions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount; i++) {
      const radius = 50 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starsPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starsPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starsPositions[i * 3 + 2] = radius * Math.cos(phi);
    }
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({
      size: 2,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
      color: 0xFFFFFF,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // State
    const markers = new Map<string, HTMLDivElement>();
    let rotateDeltaX = 0;
    let rotateDeltaY = 0;
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;
    let isAutoRotating = true;
    let mouseX = 0;
    let mouseY = 0;

    const s: SceneState = {
      scene,
      camera,
      renderer,
      earthGroup,
      stars,
      markers,
      animId: 0,
      isAutoRotating,
    };
    sceneRef.current = s;

    // Create markers for initial stations
    function createStationMarker(station: Station) {
      if (!station.geo_lat || !station.geo_long) return;
      if (markers.has(station.stationuuid)) return;

      const marker = document.createElement('div');
      marker.className = 'absolute pointer-events-auto cursor-pointer';
      marker.style.cssText = 'transform: translate(-50%, -50%); z-index: 10;';

      const dotWrapper = document.createElement('div');
      dotWrapper.className = 'relative';

      const ring = document.createElement('div');
      ring.className = 'absolute inset-0 rounded-full animate-pulse-ring';
      ring.style.cssText = 'border: 1px solid #E8542E; width: 8px; height: 8px;';

      const dot = document.createElement('div');
      dot.className = 'station-dot relative rounded-full transition-all duration-200';
      dot.style.cssText = 'width: 8px; height: 8px; background-color: #E8542E;';

      dotWrapper.appendChild(ring);
      dotWrapper.appendChild(dot);
      marker.appendChild(dotWrapper);

      // Tooltip
      const tooltip = document.createElement('div');
      tooltip.className = 'absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 bg-white/90 text-[#0A0A0A] opacity-0 transition-opacity duration-200 pointer-events-none';
      tooltip.textContent = station.name.length > 25 ? station.name.slice(0, 25) + '...' : station.name;
      marker.addEventListener('mouseenter', () => { tooltip.style.opacity = '1'; });
      marker.addEventListener('mouseleave', () => { tooltip.style.opacity = '0'; });

      marker.appendChild(tooltip);

      marker.addEventListener('click', () => {
        onStationClickRef.current(station);
      });

      if (markersRef.current) {
        markersRef.current.appendChild(marker);
      }
      markers.set(station.stationuuid, marker);
    }

    stationsRef.current.forEach(createStationMarker);

    // Animation loop
    function animate() {
      s.animId = requestAnimationFrame(animate);

      // Auto-rotate when idle
      if (Math.abs(rotateDeltaX) < 0.001 && s.isAutoRotating && !isDragging) {
        earthGroup.rotation.y += 0.001;
      }

      // Apply drag rotation
      earthGroup.rotation.y += rotateDeltaX;
      earthGroup.rotation.x += rotateDeltaY;

      // Damping
      rotateDeltaX *= 0.95;
      rotateDeltaY *= 0.95;

      // Clamp X rotation
      earthGroup.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, earthGroup.rotation.x));

      // Star parallax
      stars.rotation.x = mouseY * 0.02;
      stars.rotation.y = mouseX * 0.02;

      // Update markers
      const cont = containerRef.current;
      if (!cont) return;
      const containerW = cont.clientWidth;
      const containerH = cont.clientHeight;

      s.markers.forEach((marker, uuid) => {
        const station = stationsRef.current.find(st => st.stationuuid === uuid);
        if (!station || station.geo_lat == null || station.geo_long == null) {
          marker.style.display = 'none';
          return;
        }

        const pos = latLngToVector3(station.geo_lat, station.geo_long, EARTH_RADIUS + 0.1);
        pos.applyMatrix4(earthGroup.matrixWorld);
        pos.project(camera);

        if (pos.z > 1) {
          marker.style.display = 'none';
          return;
        }

        const x = (pos.x * 0.5 + 0.5) * containerW;
        const y = (-pos.y * 0.5 + 0.5) * containerH;

        marker.style.display = 'block';
        marker.style.transform = `translate(${x - 4}px, ${y - 4}px)`;

        const dotEl = marker.querySelector('.station-dot') as HTMLElement;
        const isSelected = selectedStationRef.current?.stationuuid === uuid;
        if (dotEl) {
          dotEl.style.width = isSelected ? '12px' : '8px';
          dotEl.style.height = isSelected ? '12px' : '8px';
          dotEl.style.backgroundColor = isSelected ? '#0A0A0A' : '#E8542E';
        }
      });

      renderer.render(scene, camera);
    }
    animate();

    // Mouse events for dragging
    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      isAutoRotating = false;
      s.isAutoRotating = false;
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      const cont = containerRef.current;
      if (!cont) return;
      mouseX = (e.clientX / cont.clientWidth) * 2 - 1;
      mouseY = (e.clientY / cont.clientHeight) * 2 - 1;
      if (!isDragging) return;
      const deltaX = (e.clientX - lastX) * 0.005;
      const deltaY = (e.clientY - lastY) * 0.005;
      rotateDeltaX = deltaX;
      rotateDeltaY = deltaY;
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Touch events
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        isAutoRotating = false;
        s.isAutoRotating = false;
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      e.preventDefault();
      const deltaX = (e.touches[0].clientX - lastX) * 0.005;
      const deltaY = (e.touches[0].clientY - lastY) * 0.005;
      rotateDeltaX = deltaX;
      rotateDeltaY = deltaY;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    canvas.addEventListener('touchmove', onTouchMove, { passive: false });
    canvas.addEventListener('touchend', onTouchEnd);

    // Resize
    const onResize = () => {
      const cont = containerRef.current;
      if (!cont) return;
      const w = cont.clientWidth;
      const h = cont.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(s.animId);
      canvas.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);
      markers.forEach(marker => marker.remove());
      renderer.dispose();
      earthGeometry.dispose();
      earthMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
    };
  }, []);

  // Update markers when stations change
  useEffect(() => {
    const s = sceneRef.current;
    if (!s) return;

    stations.forEach(station => {
      if (!station.geo_lat || !station.geo_long) return;
      if (s.markers.has(station.stationuuid)) return;

      const marker = document.createElement('div');
      marker.className = 'absolute pointer-events-auto cursor-pointer';
      marker.style.cssText = 'transform: translate(-50%, -50%); z-index: 10;';

      const dotWrapper = document.createElement('div');
      dotWrapper.className = 'relative';

      const ring = document.createElement('div');
      ring.className = 'absolute inset-0 rounded-full animate-pulse-ring';
      ring.style.cssText = 'border: 1px solid #E8542E; width: 8px; height: 8px;';

      const dot = document.createElement('div');
      dot.className = 'station-dot relative rounded-full transition-all duration-200';
      dot.style.cssText = 'width: 8px; height: 8px; background-color: #E8542E;';

      dotWrapper.appendChild(ring);
      dotWrapper.appendChild(dot);
      marker.appendChild(dotWrapper);

      const tooltip = document.createElement('div');
      tooltip.className = 'absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 bg-white/90 text-[#0A0A0A] opacity-0 transition-opacity duration-200 pointer-events-none';
      tooltip.textContent = station.name.length > 25 ? station.name.slice(0, 25) + '...' : station.name;
      marker.addEventListener('mouseenter', () => { tooltip.style.opacity = '1'; });
      marker.addEventListener('mouseleave', () => { tooltip.style.opacity = '0'; });

      marker.appendChild(tooltip);

      marker.addEventListener('click', () => {
        onStationClickRef.current(station);
      });

      if (markersRef.current) {
        markersRef.current.appendChild(marker);
      }
      s.markers.set(station.stationuuid, marker);
    });
  }, [stations]);

  // Center globe on selected station
  useEffect(() => {
    const s = sceneRef.current;
    if (!s || !selectedStation || selectedStation.geo_lat == null || selectedStation.geo_long == null) return;

    s.isAutoRotating = false;
    const target = latLngToRotation(selectedStation.geo_lat, selectedStation.geo_long);

    gsap.to(s.earthGroup.rotation, {
      x: target.x,
      y: target.y,
      duration: 1.2,
      ease: 'power2.inOut',
    });
  }, [selectedStation]);

  return (
    <div ref={containerRef} className="absolute inset-0 touch-none">
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />
      <div
        ref={markersRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 2 }}
      />
    </div>
  );
}
