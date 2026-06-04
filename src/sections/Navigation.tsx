import { useState, useEffect } from 'react';

interface NavigationProps {
  onNavClick: (section: string) => void;
  isPlaying: boolean;
}

export default function Navigation({ onNavClick, isPlaying }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'DISCOVER', section: 'hero' },
    { label: 'STATIONS', section: 'popular' },
    { label: 'GENRES', section: 'genres' },
    { label: 'ABOUT', section: 'footer' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 h-16 z-[100] transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(242, 238, 228, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div className="flex items-center justify-between h-full px-8 max-w-[1600px] mx-auto">
        {/* Logo */}
        <div className="font-mono text-[14px] font-bold uppercase tracking-[0.2em] text-[#0A0A0A]">
          TUNER
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link.section}
              onClick={() => onNavClick(link.section)}
              className="font-serif text-[14px] uppercase tracking-[0.08em] text-[#0A0A0A] hover:text-[#E8542E] transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Playing indicator */}
          {isPlaying && (
            <div className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#E8542E] animate-on-air" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#E8542E]">LIVE</span>
            </div>
          )}

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`block w-5 h-0.5 bg-[#0A0A0A] transition-transform duration-200 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#0A0A0A] transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#0A0A0A] transition-transform duration-200 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#F2EFE4]/95 backdrop-blur-md border-t border-[#E8E4D9] py-4">
          {navLinks.map(link => (
            <button
              key={link.section}
              onClick={() => {
                onNavClick(link.section);
                setMobileOpen(false);
              }}
              className="block w-full text-left px-8 py-3 font-serif text-[14px] uppercase tracking-[0.08em] text-[#0A0A0A] hover:text-[#E8542E] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
