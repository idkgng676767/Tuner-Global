import { useState, useEffect, useCallback, useRef } from 'react';
import Globe from './components/Globe';
import StationDetailPanel from './components/StationDetailPanel';
import SearchOverlay from './components/SearchOverlay';
import Navigation from './sections/Navigation';
import PopularStations from './sections/PopularStations';
import GenreExplorer from './sections/GenreExplorer';
import RecentlyPlayed from './sections/RecentlyPlayed';
import Footer from './sections/Footer';
import AudioPlayer from './sections/AudioPlayer';
import { useRadioApi } from './hooks/useRadioApi';
import { useAudioPlayer } from './hooks/useAudioPlayer';
import type { Station } from './types/station';

export default function App() {
  const [topStations, setTopStations] = useState<Station[]>([]);
  const [globeStations, setGlobeStations] = useState<Station[]>([]);
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('tuner_favorites');
      return saved ? new Set(JSON.parse(saved)) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });
  const [recentlyPlayed, setRecentlyPlayed] = useState<Station[]>(() => {
    try {
      const saved = localStorage.getItem('tuner_recent');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [globeOpacity, setGlobeOpacity] = useState(1);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { getTopStations, getStationsWithGeo, searchStations, recordClick } = useRadioApi();
  const audio = useAudioPlayer();

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      const [top, geo] = await Promise.all([
        getTopStations(20),
        getStationsWithGeo(30),
      ]);
      setTopStations(top);
      setGlobeStations(geo);
    };

    loadData();
  }, [getTopStations, getStationsWithGeo]);

  // Scroll-based globe opacity
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const opacity = Math.max(0, 1 - scrollY / vh);
      setGlobeOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Persist favorites
  useEffect(() => {
    localStorage.setItem('tuner_favorites', JSON.stringify([...favorites]));
  }, [favorites]);

  // Persist recently played
  useEffect(() => {
    localStorage.setItem('tuner_recent', JSON.stringify(recentlyPlayed));
  }, [recentlyPlayed]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !searchOpen) {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === ' ' && selectedStation) {
        e.preventDefault();
        audio.togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen, selectedStation, audio]);

  const handleStationClick = useCallback((station: Station) => {
    setSelectedStation(station);
    setDetailOpen(true);

    // Play the station
    const streamUrl = station.url_resolved || station.url;
    if (streamUrl) {
      audio.play(streamUrl);
      recordClick(station.stationuuid);
    }

    // Add to recently played
    setRecentlyPlayed(prev => {
      const filtered = prev.filter(s => s.stationuuid !== station.stationuuid);
      return [station, ...filtered].slice(0, 10);
    });
  }, [audio, recordClick]);

  const handleToggleFavorite = useCallback((station: Station) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(station.stationuuid)) {
        next.delete(station.stationuuid);
      } else {
        next.add(station.stationuuid);
      }
      return next;
    });
  }, []);

  const handleNavClick = useCallback((section: string) => {
    if (section === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleSearch = useCallback(async (query: string) => {
    return searchStations(query, 30);
  }, [searchStations]);

  return (
    <div className="relative min-h-screen bg-[#F2EFE4]">
      {/* Globe background - fixed, fades on scroll */}
      <div
        className="fixed inset-0 z-0"
        style={{ opacity: globeOpacity }}
      >
        <Globe
          stations={globeStations}
          selectedStation={selectedStation}
          onStationClick={handleStationClick}
        />
      </div>

      {/* Navigation */}
      <Navigation
        onNavClick={handleNavClick}
        isPlaying={audio.isPlaying}
      />

      {/* Hero Section */}
      <div
        ref={heroRef}
        id="hero"
        className="relative z-10 h-screen flex items-start justify-start pointer-events-none"
      >
        <div className="pt-32 pl-12 max-w-[500px]">
          <h1
            className="font-serif text-[64px] leading-none text-[#0A0A0A] mb-4"
            style={{ textShadow: '0 1px 8px rgba(242, 238, 228, 0.8)' }}
          >
            Tune Into the World
          </h1>
          <p
            className="font-serif text-[24px] text-[#6B6560]"
            style={{ textShadow: '0 1px 8px rgba(242, 238, 228, 0.8)' }}
          >
            50,000+ live radio stations. One click away.
          </p>

          {/* Search trigger */}
          <button
            onClick={() => setSearchOpen(true)}
            className="pointer-events-auto mt-8 flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-[#E8E4D9] hover:border-[#E8542E] transition-colors group"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B6560" strokeWidth="1.5" className="group-hover:stroke-[#E8542E] transition-colors">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="font-serif text-[14px] text-[#6B6560] group-hover:text-[#0A0A0A]">
              Search stations... <span className="font-mono text-[11px]">(Press /)</span>
            </span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E8542E"
            strokeWidth="1.5"
            className="animate-bounce-chevron"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Content sections (scroll over globe) */}
      <div ref={contentRef} className="relative z-10">
        <PopularStations
          stations={topStations}
          currentStation={selectedStation}
          onStationClick={handleStationClick}
          favorites={favorites}
        />

        <GenreExplorer
          onStationClick={handleStationClick}
          currentStation={selectedStation}
          favorites={favorites}
        />

        <RecentlyPlayed
          stations={recentlyPlayed}
          onStationClick={handleStationClick}
          currentStation={selectedStation}
        />

        <Footer />
      </div>

      {/* Station Detail Panel */}
      <StationDetailPanel
        station={selectedStation}
        isOpen={detailOpen}
        onClose={() => setDetailOpen(false)}
        isPlaying={audio.isPlaying}
        analyser={audio.getAnalyser()}
        onTogglePlay={audio.togglePlay}
        onAddFavorite={handleToggleFavorite}
        isFavorite={selectedStation ? favorites.has(selectedStation.stationuuid) : false}
      />

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSearch={handleSearch}
        onStationClick={handleStationClick}
        currentStation={selectedStation}
        favorites={favorites}
      />

      {/* Audio Player Bar */}
      <AudioPlayer
        station={selectedStation}
        isPlaying={audio.isPlaying}
        isLoading={audio.isLoading}
        error={audio.error}
        volume={audio.volume}
        isMuted={audio.isMuted}
        analyser={audio.getAnalyser()}
        onTogglePlay={audio.togglePlay}
        onVolumeChange={audio.setVolume}
        onToggleMute={audio.toggleMute}
      />
    </div>
  );
}
