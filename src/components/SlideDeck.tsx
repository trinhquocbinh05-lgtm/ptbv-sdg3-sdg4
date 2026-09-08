import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadingVideo } from './FadingVideo';
import {
  LeafIcon,
  SparklesIcon,
  EyeIcon,
  CloseIcon,
} from './Icons';
import { NaturalSlideContent } from './NaturalSlideContent';

interface SlideDeckProps {
  onSwitchToScrollMode: () => void;
  onOpenSlideModal: (slideNum: number) => void;
}

const slideMaxSteps: Record<number, number> = {
  1: 2,  // 0: Title, 1: Subtitle & UEH Details
  2: 2,  // 0: Header & Icon, 1: Giới thiệu chuyên đề SDG 3
  3: 3,  // 0: Header, 1: Định nghĩa SDG 3, 2: Nguyên tắc 3Es Benton-Short
  4: 4,  // 0: Header, 1: DALYs, 2: Life Expectancy, 3: HDI Sức khỏe
  5: 9,  // 0..8: Target 3.1 — 3.9
  6: 4,  // 0: 3.a, 1: 3.b, 2: 3.c, 3: 3.d
  7: 4,  // 0: Header, 1: Tử vong mẹ/bé, 2: Tiêm chủng, 3: Bệnh truyền nhiễm
  8: 5,  // 0: Header, 1: Tai nạn 1.19M, 2: UHC 4.5 Tỷ, 3: NCDs >70%, 4: Nhân lực 10M
  9: 4,  // 0: Header, 1: HDI 0.766, 2: VNeID 34M+, 3: NCDs 80%
  10: 14, // 0..13: Duyệt 14 mục tiêu (9 Mạnh: SDG 1, 2, 4, 7, 8, 10, 11, 12, 16; 5 Tương hỗ: SDG 5, 6, 13, 14, 15)
  11: 4, // 0: Header, 1: Hành động 1, 2: Hành động 2, 3: Hành động 3
  12: 2, // 0: Header & Icon, 1: Giới thiệu chuyên đề SDG 4
  13: 3, // 0: Header, 1: Định nghĩa SDG 4, 2: Trụ cột Equity (Công cụ bình đẳng hóa)
  14: 3, // 0: Header, 1: GER vs NER, 2: HDI Giáo dục (EYS 18 năm, MYS 15 năm)
  15: 7, // 0..6: Duyệt tuần tự 7 mục tiêu Target 4.1 — 4.7
  16: 4, // 0: Header, 1: 4.a Hạ tầng, 2: 4.b Học bổng STEM, 3: 4.c Giáo viên
  17: 4, // 0: Header, 1: Khủng hoảng học tập 84M, 2: Cơ sở hạ tầng 1/4, 3: Giáo viên >14%
  18: 4, // 0: Header, 1: Khoảng cách Giới, 2: Khoảng cách Số hóa, 3: Bất bình đẳng Hệ thống
  19: 3, // 0: Header, 1: Thực trạng Việt Nam, 2: 4 Giải pháp trọng tâm
  20: 12, // 0..11: Duyệt 12 mục tiêu (8 Mạnh: SDG 1, 2, 3, 7, 8, 9, 11, 16; 4 Tương hỗ: SDG 5, 6, 10, 12)
  21: 5, // 0: Header, 1: Đào tạo nông dân, 2: Lương đủ sống CLMRS, 3: Yếu thế, 4: Nestlé needs YOUth
  22: 2, // 0: Header & Lời cảm ơn, 1: Thông tin nhóm & Q&A
};

const slideTitles = [
  'Trang bìa: SDG 3 & SDG 4 (Nhóm Candy - UEH)',
  'Phần I — SDG 3: Sức khỏe tốt & Cuộc sống hạnh phúc',
  'Định nghĩa & Khung khái niệm 3Es (Lisa Benton-Short)',
  'Công cụ đo lường: DALYs, Tuổi thọ LE & HDI Sức khỏe',
  'A. Nhóm mục tiêu chính: Target 3.1 — 3.9',
  'B. Nhóm phương tiện thực hiện: Target 3.a — 3.d',
  'Bức tranh toàn cầu I: Tử vong mẹ/bé, Tiêm chủng, Dịch bệnh',
  'Bức tranh toàn cầu II: Tai nạn, UHC, NCDs & Nhân lực y tế',
  'Thực trạng tại Việt Nam: HDI, VNeID & Gánh nặng NCDs',
  'Tính liên kết SDG 3: Hệ sinh thái 17 Mục tiêu SDGs',
  'Vai trò doanh nghiệp: Vinamilk (3 Hành động & Net Zero)',
  'Phần II — SDG 4: Đảm bảo giáo dục có chất lượng',
  'Định nghĩa & Khung khái niệm: 3Es - Trụ cột Equity',
  'Thước đo đo lường giáo dục: GER vs NER, EYS, MYS & HDI',
  'A. Nhóm mục tiêu chính: Target 4.1 — 4.7',
  'B. Nhóm phương tiện thực hiện: Target 4.a — 4.c',
  'Khủng hoảng học tập toàn cầu: 84M trẻ, Hạ tầng & Giáo viên',
  'Các rào cản cốt lõi: Giới, Số hóa & Bất bình đẳng hệ thống',
  'Thực trạng & Giải pháp tại Việt Nam (SDG 4)',
  'Tính liên kết SDG 4: Sơ đồ mạng lưới tương hỗ SDGs',
  'Vai trò doanh nghiệp: Nestlé (4 Trụ cột hành động)',
  'Bìa kết & Lời tri ân (UEH University)',
];

export const SlideDeck: React.FC<SlideDeckProps> = ({
  onSwitchToScrollMode,
  onOpenSlideModal,
}) => {
  const [currentSlide, setCurrentSlide] = useState(() => {
    try {
      const hash = window.location.hash.replace('#', '');
      const num = parseInt(hash.replace('slide=', ''), 10);
      return num >= 1 && num <= 22 ? num : 1;
    } catch {
      return 1;
    }
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showPdfSplit, setShowPdfSplit] = useState(false);
  const [showAllSteps, setShowAllSteps] = useState(false);
  const [isDockVisible, setIsDockVisible] = useState(false);
  const [isDockPinned, setIsDockPinned] = useState(false);
  const wheelLockRef = useRef(false);

  const totalSlides = 22;
  const maxStepForCurrentSlide = slideMaxSteps[currentSlide] || 1;

  useEffect(() => {
    window.location.hash = `slide=${currentSlide}`;
    const titleText = slideTitles[currentSlide - 1] || `Slide ${currentSlide}`;
    document.title = `Slide ${currentSlide}/22: ${titleText} | SDG 3 & SDG 4 - UEH`;
  }, [currentSlide]);

  // Step-by-step advance
  const handleNext = () => {
    if (!showAllSteps && currentStep < maxStepForCurrentSlide - 1) {
      setCurrentStep((prev) => prev + 1);
    } else if (currentSlide < totalSlides) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
      setCurrentStep(0);
    }
  };

  // Step-by-step back
  const handlePrev = () => {
    if (!showAllSteps && currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    } else if (currentSlide > 1) {
      setDirection(-1);
      const prevSlide = currentSlide - 1;
      const prevMaxStep = slideMaxSteps[prevSlide] || 1;
      setCurrentSlide(prevSlide);
      setCurrentStep(showAllSteps ? 0 : prevMaxStep - 1);
    }
  };

  const goToSlide = (slideNum: number) => {
    if (slideNum === currentSlide) return;
    setDirection(slideNum > currentSlide ? 1 : -1);
    setCurrentSlide(Math.max(1, Math.min(totalSlides, slideNum)));
    setCurrentStep(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(totalSlides);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, currentStep, showAllSteps]);

  // Mouse wheel debounce
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (wheelLockRef.current) return;
      if (Math.abs(e.deltaY) > 30) {
        wheelLockRef.current = true;
        if (e.deltaY > 0) {
          handleNext();
        } else {
          handlePrev();
        }
        setTimeout(() => {
          wheelLockRef.current = false;
        }, 600);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSlide, currentStep, showAllSteps]);

  // Proximity hover detection near the bottom of the screen (last 55px)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDockPinned) return;
      if (e.clientY >= window.innerHeight - 55) {
        setIsDockVisible(true);
      } else if (e.clientY < window.innerHeight - 110) {
        setIsDockVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDockPinned]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      filter: 'blur(10px)',
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeInOut' as const,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      filter: 'blur(10px)',
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
      },
    }),
  };

  const isSDG3 = currentSlide <= 11;

  return (
    <div className="fixed inset-0 bg-[#030806] text-white overflow-hidden flex flex-col justify-between select-none">
      {/* Dynamic Natural Background Video with Atmospheric Tint */}
      <FadingVideo
        src={
          isSDG3
            ? 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4'
            : 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4'
        }
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 pointer-events-none"
      />

      {/* Natural Ambient Lighting Radial Glows */}
      <div
        className={`absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none z-[1] transition-all duration-700 ${
          isSDG3 ? 'bg-emerald-500/10' : 'bg-rose-500/10'
        }`}
      />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black/90 pointer-events-none z-[2]" />

      {/* Top Header Bar: UN Blueprint Inspiration */}
      <header className="relative z-30 px-6 py-3.5 flex items-center justify-between border-b border-white/10 backdrop-blur-md">
        {/* Left: UN Global Compact & UEH Badge */}
        <div className="flex items-center gap-3">
          <div className="liquid-glass-natural rounded-full px-3.5 py-1 flex items-center gap-2">
            <LeafIcon className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="font-heading italic text-sm text-white">UN Global Compact Blueprint</span>
            <span className="text-white/40 text-xs hidden sm:inline">• UEH</span>
          </div>
          <span className="text-white/40 text-xs hidden md:inline">|</span>
          <span className="text-xs sm:text-sm text-white/90 font-medium font-body hidden lg:inline truncate max-w-sm">
            Slide {currentSlide}: {slideTitles[currentSlide - 1]}
          </span>
        </div>

        {/* Center: Slide Progress Pill */}
        <div className="liquid-glass-strong rounded-full px-4 py-1.5 flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-emerald-300">
            {currentSlide < 10 ? `0${currentSlide}` : currentSlide}
          </span>
          <div className="w-24 sm:w-36 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ease-out ${
                isSDG3
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-300'
                  : 'bg-gradient-to-r from-rose-400 to-amber-300'
              }`}
              style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
            />
          </div>
          <span className="font-mono text-xs text-white/50">{totalSlides}</span>
        </div>

        {/* Right: Controls & Modes */}
        <div className="flex items-center gap-2">
          {/* Toggle Step-by-Step vs Show All */}
          <button
            type="button"
            onClick={() => setShowAllSteps((prev) => !prev)}
            className={`liquid-glass rounded-full px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              showAllSteps
                ? 'bg-amber-400/20 border border-amber-400 text-amber-300'
                : 'text-white/80 hover:text-white'
            }`}
            title="Bật/Tắt chế độ hiện từng ý theo nhịp bấm người thuyết trình"
          >
            <span>{showAllSteps ? 'Đang Hiện Đầy Đủ' : 'Nhịp Thuyết Trình'}</span>
          </button>

          {/* Toggle PDF Comparison */}
          <button
            type="button"
            onClick={() => setShowPdfSplit((prev) => !prev)}
            className={`liquid-glass rounded-full px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              showPdfSplit
                ? 'bg-white/20 border border-emerald-400 text-emerald-300'
                : 'text-white/80 hover:text-white'
            }`}
            title="So sánh với slide gốc từ PDF"
          >
            <EyeIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {showPdfSplit ? 'Ẩn Slide gốc' : 'So sánh'}
            </span>
          </button>

          {/* Switch to Scroll Mode */}
          <button
            type="button"
            onClick={onSwitchToScrollMode}
            className="liquid-glass rounded-full px-3 py-1.5 text-xs text-white/80 hover:text-white transition-all cursor-pointer"
          >
            Dạng Cuộn
          </button>
        </div>
      </header>

      {/* Main Slide Canvas */}
      <div className="relative z-10 flex-1 flex overflow-y-auto p-4 md:p-6 lg:p-8 pb-16 custom-scrollbar">
        {/* Left Side: Modern Interactive Slide Content */}
        <div
          className={`flex-1 flex flex-col justify-center min-h-full transition-all duration-300 ${
            showPdfSplit ? 'w-1/2 pr-4 hidden md:flex' : 'w-full'
          }`}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full max-w-5xl mx-auto my-auto flex flex-col justify-center min-h-full py-2"
            >
              <NaturalSlideContent
                slideNum={currentSlide}
                step={currentStep}
                showAll={showAllSteps}
                onOpenModal={onOpenSlideModal}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Original PDF Slide Comparison (when enabled) */}
        {showPdfSplit && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="w-full md:w-1/2 flex flex-col justify-center pl-0 md:pl-4"
          >
            <div className="liquid-glass-strong rounded-2xl p-4 flex flex-col h-full max-h-[75vh] border border-white/15">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-xs">
                <span className="font-mono text-emerald-300">
                  Bản trình chiếu gốc (PDF Slide {currentSlide})
                </span>
                <button
                  type="button"
                  onClick={() => setShowPdfSplit(false)}
                  className="liquid-glass h-6 w-6 rounded-full flex items-center justify-center text-white/70 hover:text-white cursor-pointer"
                >
                  <CloseIcon className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex-1 bg-black/60 rounded-xl overflow-hidden flex items-center justify-center p-2">
                <img
                  src={`/slides/slide_${currentSlide}.png`}
                  alt={`Slide ${currentSlide}`}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom Floating Control Dock - Auto-hide & Hover to Reveal */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ease-out pointer-events-auto ${
          isDockVisible || isDockPinned
            ? 'translate-y-0 opacity-100'
            : 'translate-y-[calc(100%-10px)] opacity-50 hover:opacity-100 hover:translate-y-0'
        }`}
        onMouseEnter={() => setIsDockVisible(true)}
        onMouseLeave={() => {
          if (!isDockPinned) setIsDockVisible(false);
        }}
      >
        {/* Subtle Peek Pill when Collapsed */}
        <div className="flex justify-center -translate-y-2.5 pointer-events-auto">
          <button
            type="button"
            onClick={() => setIsDockVisible((prev) => !prev)}
            className={`liquid-glass-strong px-4 py-1 rounded-full text-[11px] font-mono flex items-center gap-2 transition-all cursor-pointer border border-white/15 shadow-xl ${
              isDockVisible || isDockPinned
                ? 'opacity-0 pointer-events-none scale-95 h-0 py-0 overflow-hidden -my-1'
                : 'opacity-85 hover:opacity-100 hover:scale-105 bg-black/90'
            }`}
            title="Bấm hoặc rê chuột vào đây để mở thanh điều khiển"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/80">Điều khiển Slide</span>
            <span className="text-emerald-300 font-bold">{currentSlide}/{totalSlides}</span>
            <span className="text-white/40 text-[10px]">▲ Rê chuột để mở</span>
          </button>
        </div>

        {/* Floating Dock Body */}
        <footer className="relative px-6 py-3.5 bg-black/90 backdrop-blur-xl border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_-15px_40px_rgba(0,0,0,0.9)]">
          {/* Left: Step Indicator for Presenter */}
          <div className="flex items-center gap-3 text-xs">
            {!showAllSteps && maxStepForCurrentSlide > 1 && (
              <div className="liquid-glass-natural rounded-full px-3 py-1 flex items-center gap-2">
                <SparklesIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-white/80">
                  Nhịp thuyết trình: <strong>Ý {currentStep + 1} / {maxStepForCurrentSlide}</strong>
                </span>
                <div className="flex items-center gap-1 ml-1">
                  {Array.from({ length: maxStepForCurrentSlide }).map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i <= currentStep ? 'w-3 bg-emerald-400' : 'w-1.5 bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="hidden lg:flex items-center gap-1.5 text-white/40 text-[11px]">
              <span>Phím</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 text-[10px]">Space</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 text-[10px]">→</kbd>
              <span>để mở ý tiếp theo</span>
            </div>
          </div>

          {/* Center: Slide Numbers Quick Selector */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto max-w-full py-1">
            {Array.from({ length: totalSlides }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => goToSlide(num)}
                className={`h-7 w-7 sm:h-8 sm:w-8 rounded-lg text-xs font-mono font-medium transition-all flex items-center justify-center cursor-pointer ${
                  num === currentSlide
                    ? 'bg-white text-black font-bold scale-110 shadow-lg'
                    : 'liquid-glass text-white/70 hover:text-white hover:bg-white/10'
                }`}
                title={`Slide ${num}: ${slideTitles[num - 1]}`}
              >
                {num}
              </button>
            ))}
          </div>

          {/* Right: Prev & Next Action Buttons + Pin Toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentSlide <= 1 && currentStep <= 0}
              className="liquid-glass rounded-full px-4 py-2 text-xs sm:text-sm font-medium text-white flex items-center gap-1.5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all"
            >
              <span>← Lùi</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentSlide >= totalSlides && currentStep >= maxStepForCurrentSlide - 1}
              className="liquid-glass-strong rounded-full px-5 py-2 text-xs sm:text-sm font-medium text-white flex items-center gap-1.5 hover:brightness-125 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all shadow-lg border border-emerald-400/40"
            >
              <span>
                {!showAllSteps && currentStep < maxStepForCurrentSlide - 1
                  ? 'Tiếp ý →'
                  : 'Sang Slide →'}
              </span>
            </button>

            {/* Pin Toggle Button */}
            <button
              type="button"
              onClick={() => setIsDockPinned((prev) => !prev)}
              className={`liquid-glass h-8 w-8 rounded-full flex items-center justify-center text-xs transition-all cursor-pointer ${
                isDockPinned
                  ? 'text-amber-300 bg-amber-400/20 border border-amber-400/50 shadow-md'
                  : 'text-white/40 hover:text-white hover:bg-white/10'
              }`}
              title={isDockPinned ? 'Bỏ ghim (tự động ẩn khi không rê chuột)' : 'Ghim cố định thanh điều khiển'}
            >
              <span>{isDockPinned ? '📌' : '📍'}</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

