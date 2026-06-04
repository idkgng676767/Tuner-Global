import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import type { Station } from '../types/station';
import AudioVisualizer from './AudioVisualizer';

interface StationDetailPanelProps {
  station: Station | null;
  isOpen: boolean;
  onClose: () => void;
  isPlaying: boolean;
  analyser: AnalyserNode | null;
  onTogglePlay: () => void;
  onAddFavorite: (station: Station) => void;
  isFavorite: boolean;
}

export default function StationDetailPanel({
  station,
  isOpen,
  onClose,
  isPlaying,
  analyser,
  onTogglePlay,
  onAddFavorite,
  isFavorite,
}: StationDetailPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!panelRef.current) return;
    if (isOpen) {
      gsap.to(panelRef.current, {
        x: 0,
        duration: 0.4,
        ease: 'power3.out',
      });
    } else {
      gsap.to(panelRef.current, {
        x: '100%',
        duration: 0.3,
        ease: 'power3.in',
      });
    }
  }, [isOpen]);

  if (!station) return null;

  const tags = station.tags?.split(',').filter(Boolean).slice(0, 5) || [];
  const countryCode = station.countrycode?.toLowerCase() || '';

  return (
    <div
      ref={panelRef}
      className="fixed top-0 right-0 h-full bg-white overflow-y-auto z-50"
      style={{
        width: '400px',
        maxWidth: '100vw',
        transform: 'translateX(100%)',
        boxShadow: '-8px 0 32px rgba(0,0,0,0.08)',
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-[#6B6560] hover:text-[#E8542E] transition-colors z-10"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="4" y1="4" x2="16" y2="16" />
          <line x1="16" y1="4" x2="4" y2="16" />
        </svg>
      </button>

      <div className="p-8 pt-16">
        {/* Station favicon */}
        <div className="w-16 h-16 rounded-full bg-[#F2EFE4] flex items-center justify-center overflow-hidden mb-6">
          {station.favicon ? (
            <img
              src={station.favicon}
              alt=""
              className="w-12 h-12 object-contain"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6B6560" strokeWidth="1.5">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          )}
        </div>

        {/* Station name */}
        <h2 className="font-serif text-[32px] leading-tight text-[#0A0A0A] mb-2">
          {station.name}
        </h2>

        {/* Country + genre */}
        <div className="flex items-center gap-2 text-[14px] text-[#6B6560] mb-6">
          {countryCode && (
            <img
              src={`https://flagcdn.com/w20/${countryCode}.png`}
              alt={station.country}
              className="w-5 h-auto"
            />
          )}
          <span>{station.country || 'Unknown'}</span>
          {tags.length > 0 && (
            <>
              <span className="text-[#6B6560]">·</span>
              <span>{tags.slice(0, 3).join(', ')}</span>
            </>
          )}
        </div>

        {/* Now playing label */}
        {isPlaying && (
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#E8542E] mb-4">
            NOW PLAYING
          </div>
        )}

        {/* Audio visualizer */}
        <div className="mb-6">
          <AudioVisualizer
            analyser={analyser}
            isPlaying={isPlaying}
            width={336}
            height={60}
            barColor="#E8542E"
          />
        </div>

        {/* Play/Pause button */}
        <button
          onClick={onTogglePlay}
          className="w-full py-3 bg-[#0A0A0A] text-[#F2EFE4] font-mono text-[14px] uppercase tracking-wider hover:bg-[#E8542E] transition-colors duration-200 rounded-md mb-6 flex items-center justify-center gap-2"
        >
          {isPlaying ? (
            <>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="3" y="2" width="4" height="12" />
                <rect x="9" y="2" width="4" height="12" />
              </svg>
              PAUSE
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <polygon points="4,2 14,8 4,14" />
              </svg>
              PLAY
            </>
          )}
        </button>

        {/* Bitrate and codec */}
        {(station.bitrate || station.codec) && (
          <div className="text-[12px] text-[#6B6560] mb-4 font-mono">
            {station.bitrate > 0 && `${station.bitrate} kbps`}
            {station.bitrate > 0 && station.codec && ' · '}
            {station.codec && station.codec.toUpperCase()}
          </div>
        )}

        {/* Visit website */}
        {station.homepage && (
          <a
            href={station.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[14px] uppercase font-mono tracking-wider text-[#E8542E] hover:underline mb-4"
          >
            Visit Website
          </a>
        )}

        {/* Add to favorites */}
        <button
          onClick={() => onAddFavorite(station)}
          className="block w-full py-3 border border-[#0A0A0A] text-[#0A0A0A] font-mono text-[14px] uppercase tracking-wider hover:bg-[#0A0A0A] hover:text-white transition-colors duration-200 rounded-md text-center"
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
}
