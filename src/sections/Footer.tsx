export default function Footer() {
  const links = [
    { label: 'About', href: '#' },
    { label: 'API', href: 'https://api.radio-browser.info/' },
    { label: 'GitHub', href: '#' },
    { label: 'Privacy', href: '#' },
  ];

  return (
    <footer id="footer" className="relative bg-[#0A0A0A] py-12 px-8 z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Links */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#6B6560] mb-4">Links</h3>
            <div className="space-y-2">
              {links.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-serif text-[14px] text-[#F2EFE4] hover:text-[#E8542E] transition-colors duration-200"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Listen info */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#6B6560] mb-4">Powered By</h3>
            <p className="font-serif text-[14px] text-[#F2EFE4]">
              Radio Browser API — a community-driven open-source database of internet radio stations worldwide.
            </p>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#6B6560] mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-[#F2EFE4] hover:text-[#E8542E] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" className="text-[#F2EFE4] hover:text-[#E8542E] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="text-[#F2EFE4] hover:text-[#E8542E] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#6B6560]/30 pt-6">
          <p className="font-mono text-[11px] uppercase tracking-wider text-[#6B6560]">
            Tuner Global 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
