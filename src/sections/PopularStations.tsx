import { useRef } from 'react';
import type { Station } from '../types/station';

interface PopularStationsProps {
  stations: Station[];
  currentStation: Station | null;
  onStationClick: (station: Station) => void;
  favorites: Set<string>;
}

export default function PopularStations({ stations, currentStation, onStationClick, favorites }: PopularStationsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const getCountryCode = (code: string) => code?.toLowerCase() || '';

  return (
    <section id="popular" className="relative bg-[#F2EFE4] py-24 px-8 z-10">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-serif text-[24px] uppercase tracking-[0.08em] text-[#0A0A0A] mb-8">
          Popular Stations
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
        >
          {stations.map(station => {
            const tags = station.tags?.split(',').filter(Boolean).slice(0, 3) || [];
            const countryCode = getCountryCode(station.countrycode);
            const isCurrent = currentStation?.stationuuid === station.stationuuid;

            return (
              <button
                key={station.stationuuid}
                onClick={() => onStationClick(station)}
                className="flex-shrink-0 w-[280px] bg-white rounded-lg p-5 text-left transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer group"
              >
                {/* Top row: favicon + country flag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#F2EFE4] flex items-center justify-center overflow-hidden">
                    {station.favicon ? (
                      <img
                        src={station.favicon}
                        alt=""
                        className="w-7 h-7 object-contain"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B6560" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {countryCode && (
                      <img
                        src={`https://flagcdn.com/w20/${countryCode}.png`}
                        alt={station.country}
                        className="w-5 h-auto"
                      />
                    )}
                    {favorites.has(station.stationuuid) && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#E8542E" stroke="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Station name */}
                <h3 className="font-serif text-[16px] font-bold text-[#0A0A0A] mb-1 truncate">
                  {station.name}
                </h3>

                {/* Genre tags */}
                <p className="text-[12px] text-[#6B6560] mb-4 truncate">
                  {tags.join(', ') || 'General'}
                </p>

                {/* Tune in button */}
                <span className={`font-mono text-[14px] uppercase tracking-wider ${isCurrent ? 'text-[#E8542E]' : 'text-[#E8542E] group-hover:underline'}`}>
                  {isCurrent ? 'PLAYING' : 'TUNE IN'}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
