import { useRef, useEffect } from 'react';

interface AudioVisualizerProps {
  analyser: AnalyserNode | null;
  isPlaying: boolean;
  width?: number;
  height?: number;
  barColor?: string;
  className?: string;
}

export default function AudioVisualizer({
  analyser,
  isPlaying,
  width = 120,
  height = 40,
  barColor = '#E8542E',
  className = '',
}: AudioVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const barCount = 48;
    const barWidth = width / barCount;

    function draw() {
      animRef.current = requestAnimationFrame(draw);
      ctx!.clearRect(0, 0, width, height);

      if (!isPlaying || !analyser) {
        // Flat line at 20%
        ctx!.fillStyle = barColor;
        for (let i = 0; i < barCount; i++) {
          const h = height * 0.2;
          const x = i * barWidth;
          const y = (height - h) / 2;
          ctx!.fillRect(x, y, barWidth - 1, h);
        }
        return;
      }

      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(dataArray);

      ctx!.fillStyle = barColor;
      for (let i = 0; i < barCount; i++) {
        const dataIndex = Math.floor(i * (dataArray.length / barCount));
        const h = (dataArray[dataIndex] / 255) * height * 0.8;
        const x = i * barWidth;
        const y = height - h;

        // Rounded top bar
        const radius = Math.min(barWidth / 2, 2);
        ctx!.beginPath();
        ctx!.moveTo(x, y + radius);
        ctx!.arcTo(x, y, x + radius, y, radius);
        ctx!.lineTo(x + barWidth - 1 - radius, y);
        ctx!.arcTo(x + barWidth - 1, y, x + barWidth - 1, y + radius, radius);
        ctx!.lineTo(x + barWidth - 1, height);
        ctx!.lineTo(x, height);
        ctx!.closePath();
        ctx!.fill();
      }
    }

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
    };
  }, [analyser, isPlaying, width, height, barColor]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={{ width, height }}
    />
  );
}
