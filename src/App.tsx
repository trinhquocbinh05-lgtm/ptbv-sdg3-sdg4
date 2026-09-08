import React, { useState } from 'react';
import { SlideDeck } from './components/SlideDeck';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { SDG3OverviewSection } from './components/sections/SDG3OverviewSection';
import { SDG3TargetsSection } from './components/sections/SDG3TargetsSection';
import { VietnamVinamilkSection } from './components/sections/VietnamVinamilkSection';
import { SDG4OverviewSection } from './components/sections/SDG4OverviewSection';
import { SDG4TargetsSection } from './components/sections/SDG4TargetsSection';
import { CrisisNestleFooterSection } from './components/sections/CrisisNestleFooterSection';
import { SlideViewerModal } from './components/SlideViewerModal';

export const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<'slides' | 'scroll'>('slides');
  const [activeSlide, setActiveSlide] = useState<number | null>(null);

  const handleOpenSlide = (slideNum: number) => {
    setActiveSlide(slideNum);
  };

  const handleCloseSlide = () => {
    setActiveSlide(null);
  };

  const handleNavigateSlide = (direction: 'prev' | 'next') => {
    if (activeSlide === null) return;
    if (direction === 'prev') {
      setActiveSlide((prev) => (prev && prev > 1 ? prev - 1 : 1));
    } else {
      setActiveSlide((prev) => (prev && prev < 23 ? prev + 1 : 23));
    }
  };

  if (viewMode === 'slides') {
    return (
      <>
        <SlideDeck
          onSwitchToScrollMode={() => setViewMode('scroll')}
          onOpenSlideModal={handleOpenSlide}
        />
        <SlideViewerModal
          slideNumber={activeSlide}
          onClose={handleCloseSlide}
          onNavigate={handleNavigateSlide}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/20 selection:text-emerald-200 relative overflow-x-hidden">
      {/* Sticky Navigation Header */}
      <Navigation
        onOpenSlide={handleOpenSlide}
        onToggleMode={() => setViewMode('slides')}
      />

      {/* Main Content: 7 Sections (16 Slides) */}
      <main className="relative z-10">
        <HeroSection onOpenSlide={handleOpenSlide} />
        <SDG3OverviewSection onOpenSlide={handleOpenSlide} />
        <SDG3TargetsSection onOpenSlide={handleOpenSlide} />
        <VietnamVinamilkSection onOpenSlide={handleOpenSlide} />
        <SDG4OverviewSection onOpenSlide={handleOpenSlide} />
        <SDG4TargetsSection onOpenSlide={handleOpenSlide} />
        <CrisisNestleFooterSection onOpenSlide={handleOpenSlide} />
      </main>

      {/* Floating Action Button to Switch to Slide Mode */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          type="button"
          onClick={() => setViewMode('slides')}
          className="liquid-glass-strong rounded-full px-5 py-3 text-sm font-body font-medium text-white flex items-center gap-2 hover:brightness-125 transition-all shadow-2xl hover:scale-105 active:scale-95 cursor-pointer border border-emerald-400/40"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Vào Chế độ Trình chiếu (Từng Slide)</span>
        </button>
      </div>

      {/* Interactive Lightbox Slide Viewer */}
      <SlideViewerModal
        slideNumber={activeSlide}
        onClose={handleCloseSlide}
        onNavigate={handleNavigateSlide}
      />
    </div>
  );
};

export default App;
