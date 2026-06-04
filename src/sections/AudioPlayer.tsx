import AudioVisualizer from '../components/AudioVisualizer';
import type { Station } from '../types/station';

interface AudioPlayerProps {
  station: Station | null;
  isPlaying: boolean;
  isLoading: boolean;
  error: string | null;
  volume: number;
  isMuted: boolean;
  analyser: AnalyserNode | null;
  onTogglePlay: () => void;
  onVolumeChange: (vol: number) => void;
  onToggleMute: () => void;
}

export default function AudioPlayer({
  station,
  isPlaying,
  isLoading,
  error,
  volume,
  isMuted,
  analyser,
  onTogglePlay,
  onVolumeChange,
  onToggleMute,
}: AudioPlayerProps) {
  if (!station) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[72px] bg-[#0A0A0A] z-[200] flex items-center px-6">
      <div className="flex items-center justify-between w-full max-w-[1600px] mx-auto">
        {/* Left: visualizer + on air */}
        <div className="flex items-center gap-3">
          <AudioVisualizer
            analyser={analyser}
            isPlaying={isPlaying}
            width={120}
            height={40}
            barColor="#E8542E"
          />
          {isPlaying && (
            <div className="hidden sm:flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#E8542E] animate-on-air" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#E8542E]">ON AIR</span>
            </div>
          )}
        </div>

        {/* Center: station name + play button */}
        <div className="flex items-center gap-4">
          <span className="font-serif text-[16px] text-[#F2EFE4] hidden sm:block max-w-[200px] truncate">
            {station.name}
          </span>

          <button
            onClick={onTogglePlay}
            disabled={isLoading}
            className="w-10 h-10 rounded-full border border-[#F2EFE4] flex items-center justify-center text-[#F2EFE4] hover:border-[#E8542E] hover:text-[#E8542E] transition-colors duration-200 disabled:opacity-50"
          >
            {isLoading ? (
              <svg width="16" height="16" viewBox="0 0 16 16" className="animate-spin">
                <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="20 10" />
              </svg>
            ) : isPlaying ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <rect x="2" y="1" width="3.5" height="12" rx="1" />
                <rect x="8.5" y="1" width="3.5" height="12" rx="1" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <polygon points="3,1 13,7 3,13" />
              </svg>
            )}
          </button>
        </div>

        {/* Right: volume */}
        <div className="flex items-center gap-3">
          {error && (
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#E8542E] hidden md:block">
              {error}
            </span>
          )}

          <button
            onClick={onToggleMute}
            className="text-[#F2EFE4] hover:text-[#E8542E] transition-colors"
          >
            {isMuted || volume === 0 ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            className="w-20 h-0.5 appearance-none bg-[#6B6560] rounded-full accent-[#E8542E] cursor-pointer"
            style={{
              background: `linear-gradient(to right, #E8542E ${(isMuted ? 0 : volume) * 100}%, #6B6560 ${(isMuted ? 0 : volume) * 100}%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
