import { useState, useEffect } from 'react';
import type { Station } from '../types/station';
import { useRadioApi } from '../hooks/useRadioApi';

interface GenreExplorerProps {
  onStationClick: (station: Station) => void;
  currentStation: Station | null;
  favorites: Set<string>;
}

const GENRES = [
  'Jazz', 'Electronic', 'Classical', 'News', 'Rock',
  'Hip Hop', 'World', 'Ambient', 'Talk', 'Indie', 'Reggae', 'Blues',
];

export default function GenreExplorer({ onStationClick, currentStation, favorites }: GenreExplorerProps) {
  const [activeGenre, setActiveGenre] = useState('Jazz');
  const [stations, setStations] = useState<Station[]>([]);
  const { getStationsByTag, loading } = useRadioApi();

  useEffect(() => {
    const fetchStations = async () => {
      const data = await getStationsByTag(activeGenre, 3);
      setStations(data);
    };
    fetchStations();
  }, [activeGenre, getStationsByTag]);

  const getCountryCode = (code: string) => code?.toLowerCase() || '';

  return (
    <section id="genres" className="relative bg-white py-24 px-8 z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column: genre pills */}
          <div>
            <h2 className="font-serif text-[40px] leading-tight text-[#0A0A0A] mb-8">
              Explore by Genre
            </h2>
            <div className="flex flex-wrap gap-3">
              {GENRES.map(genre => (
                <button
                  key={genre}
                  onClick={() => setActiveGenre(genre)}
                  className={`px-5 py-2 border rounded-full font-serif text-[14px] uppercase tracking-wider transition-all duration-200 ${
                    activeGenre === genre
                      ? 'bg-[#E8542E] border-[#E8542E] text-white'
                      : 'border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#E8542E] hover:border-[#E8542E] hover:text-white'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>

            {/* Genre description */}
            <p className="mt-8 text-[16px] text-[#6B6560] leading-relaxed">
              Discover stations curated for the {activeGenre.toLowerCase()} genre. From mainstream hits to underground gems, tune into the sound that moves you.
            </p>
          </div>

          {/* Right column: featured stations */}
          <div>
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="font-mono text-[12px] uppercase tracking-wider text-[#6B6560]">Loading...</div>
              </div>
            ) : (
              <div className="space-y-3">
                {stations.map(station => {
                  const tags = station.tags?.split(',').filter(Boolean).slice(0, 3) || [];
                  const countryCode = getCountryCode(station.countrycode);
                  const isCurrent = currentStation?.stationuuid === station.stationuuid;

                  return (
                    <button
                      key={station.stationuuid}
                      onClick={() => onStationClick(station)}
                      className="w-full flex items-center gap-4 bg-[#F2EFE4] rounded-lg p-4 text-left transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer group"
                    >
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {station.favicon ? (
                          <img
                            src={station.favicon}
                            alt=""
                            className="w-8 h-8 object-contain"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                          />
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B6560" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-[16px] font-bold text-[#0A0A0A] truncate">
                          {station.name}
                        </h3>
                        <div className="flex items-center gap-2 text-[12px] text-[#6B6560]">
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
                      <span className={`font-mono text-[12px] uppercase tracking-wider flex-shrink-0 ${isCurrent ? 'text-[#E8542E]' : 'text-[#E8542E] opacity-0 group-hover:opacity-100 transition-opacity'}`}>
                        {isCurrent ? 'PLAYING' : 'TUNE IN'}
                      </span>
                      {favorites.has(station.stationuuid) && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#E8542E" className="flex-shrink-0">
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
      </div>
    </section>
  );
}
