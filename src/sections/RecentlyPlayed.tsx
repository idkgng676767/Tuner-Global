import type { Station } from '../types/station';

interface RecentlyPlayedProps {
  stations: Station[];
  onStationClick: (station: Station) => void;
  currentStation: Station | null;
}

export default function RecentlyPlayed({ stations, onStationClick, currentStation }: RecentlyPlayedProps) {
  return (
    <section className="relative bg-[#F2EFE4] py-12 px-8 z-10">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-serif text-[24px] uppercase tracking-[0.08em] text-[#0A0A0A] mb-6">
          Recently Played
        </h2>

        <div className="max-h-[300px] overflow-y-auto scrollbar-hide">
          {stations.length === 0 ? (
            <p className="text-[14px] text-[#6B6560]">No stations played yet. Start tuning!</p>
          ) : (
            stations.map((station, index) => {
              const isCurrent = currentStation?.stationuuid === station.stationuuid;
              return (
                <button
                  key={`${station.stationuuid}-${index}`}
                  onClick={() => onStationClick(station)}
                  className={`w-full flex items-center justify-between py-3 px-4 text-left transition-colors duration-200 rounded-md ${
                    isCurrent ? 'bg-white' : 'hover:bg-white/50'
                  }`}
                >
                  <span className={`font-serif text-[14px] truncate ${isCurrent ? 'text-[#E8542E]' : 'text-[#0A0A0A]'}`}>
                    {station.name}
                  </span>
                  <span className="font-mono text-[12px] uppercase tracking-wider text-[#6B6560] flex-shrink-0">
                    {station.country || 'Unknown'}
                  </span>
                </button>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
