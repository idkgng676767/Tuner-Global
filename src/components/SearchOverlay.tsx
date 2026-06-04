import { useState, useEffect, useRef, useCallback } from 'react';
import type { Station } from '../types/station';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => Promise<Station[]>;
  onStationClick: (station: Station) => void;
  currentStation: Station | null;
  favorites: Set<string>;
}

export default function SearchOverlay({ isOpen, onClose, onSearch, onStationClick, currentStation, favorites }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Station[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  const performSearch = useCallback(async (q: string) => {
    if (!q.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const data = await onSearch(q);
      setResults(data);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, [onSearch]);

  useEffect(() => {
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    searchTimeoutRef.current = setTimeout(() => {
      performSearch(query);
    }, 300);
    return () => { if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current); };
  }, [query, performSearch]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  };

  if (!isOpen) return null;

  const getCountryCode = (code: string) => code?.toLowerCase() || '';

  return (
    <div className="fixed inset-0 bg-[#F2EFE4]/95 backdrop-blur-md z-[150] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-[#E8E4D9]">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#6B6560]">
          Search Stations
        </span>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center text-[#6B6560] hover:text-[#E8542E] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="4" y1="4" x2="16" y2="16" />
            <line x1="16" y1="4" x2="4" y2="16" />
          </svg>
        </button>
      </div>

      {/* Search input */}
      <div className="px-8 py-6">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search by station name, country, or genre..."
          className="w-full bg-transparent border-b-2 border-[#0A0A0A] pb-3 font-serif text-[32px] text-[#0A0A0A] placeholder:text-[#6B6560] placeholder:text-[24px] focus:outline-none focus:border-[#E8542E] transition-colors"
        />
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto px-8 pb-8">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="font-mono text-[12px] uppercase tracking-wider text-[#6B6560]">Searching...</div>
          </div>
        ) : results.length === 0 && query.trim() ? (
          <div className="text-center py-12">
            <p className="font-serif text-[18px] text-[#6B6560]">No stations found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {results.map(station => {
              const tags = station.tags?.split(',').filter(Boolean).slice(0, 3) || [];
              const countryCode = getCountryCode(station.countrycode);
              const isCurrent = currentStation?.stationuuid === station.stationuuid;

              return (
                <button
                  key={station.stationuuid}
                  onClick={() => {
                    onStationClick(station);
                    onClose();
                  }}
                  className={`flex items-center gap-4 p-4 rounded-lg text-left transition-all duration-200 cursor-pointer ${
                    isCurrent ? 'bg-[#E8542E] text-white' : 'bg-white hover:-translate-y-0.5'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden ${isCurrent ? 'bg-white/20' : 'bg-[#F2EFE4]'}`}>
                    {station.favicon ? (
                      <img
                        src={station.favicon}
                        alt=""
                        className="w-8 h-8 object-contain"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isCurrent ? 'white' : '#6B6560'} strokeWidth="1.5">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-serif text-[16px] font-bold truncate ${isCurrent ? 'text-white' : 'text-[#0A0A0A]'}`}>
                      {station.name}
                    </h3>
                    <div className={`flex items-center gap-2 text-[12px] ${isCurrent ? 'text-white/80' : 'text-[#6B6560]'}`}>
                      {countryCode && (
                        <img src={`https://flagcdn.com/w20/${countryCode}.png`} alt="" className="w-4 h-auto" />
                      )}
                      <span className="truncate">{station.country || 'Unknown'}</span>
                      {tags.length > 0 && (
                        <>
                          <span>·</span>
                          <span className="truncate">{tags.join(', ')}</span>
                        </>
                      )}
                    </div>
                  </div>
                  {favorites.has(station.stationuuid) && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill={isCurrent ? 'white' : '#E8542E'} className="flex-shrink-0">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
