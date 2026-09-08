import React, { useState, useEffect } from 'react';
import { EyeIcon } from './Icons';

interface NavigationProps {
  onOpenSlide: (slideNum: number) => void;
  onToggleMode: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenSlide, onToggleMode }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'SDG 3', href: '#sdg3-overview' },
    { label: 'Target 3.x', href: '#sdg3-targets' },
    { label: 'VN & Vinamilk', href: '#vietnam-vinamilk' },
    { label: 'SDG 4', href: '#sdg4-overview' },
    { label: 'Target 4.x', href: '#sdg4-targets' },
    { label: 'Khủng hoảng & Nestlé', href: '#crisis-nestle' },
  ];

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/5 z-[60] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navbar */}
      <header className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 pointer-events-none">
        {/* Left: UEH Brand Pill */}
        <a
          href="#hero"
          className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2.5 pointer-events-auto cursor-pointer group"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-heading italic text-lg text-white group-hover:text-emerald-300 transition-colors">
            UEH • Nhóm Candy
          </span>
          <span className="hidden sm:inline text-xs text-white/60 font-body">| SDG 3 & 4</span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center liquid-glass rounded-full px-2 py-1.5 pointer-events-auto gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-xs lg:text-sm font-medium text-white/80 font-body hover:text-white rounded-full hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Slide Viewer & Mode Button */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            type="button"
            onClick={onToggleMode}
            className="liquid-glass rounded-full px-3.5 py-2 text-xs md:text-sm font-body font-medium text-emerald-300 flex items-center gap-1.5 hover:bg-white/10 transition-all cursor-pointer"
            title="Chuyển sang chế độ trình chiếu từng slide một"
          >
            <span>Chế độ Slide</span>
          </button>

          <button
            type="button"
            onClick={() => onOpenSlide(1)}
            className="liquid-glass-strong rounded-full px-4 py-2 text-xs md:text-sm font-body font-medium text-white flex items-center gap-2 hover:brightness-110 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
          >
            <EyeIcon className="w-4 h-4 text-emerald-300" />
            <span className="hidden sm:inline">Xem Slide Gốc</span>
            <span className="sm:hidden">22 Slides</span>
          </button>
        </div>
      </header>
    </>
  );
};
