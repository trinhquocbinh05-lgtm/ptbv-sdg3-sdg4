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
import { QRCodeModal } from './QRCodeModal';

interface SlideDeckProps {
  onSwitchToScrollMode: () => void;
  onOpenSlideModal: (slideNum: number) => void;
}

const slideMaxSteps: Record<number, number> = {
  1: 1,  // 0: Cẩm nang hướng dẫn sử dụng & Thiết lập máy chiếu 100% zoom, F11
  2: 2,  // 0: Title, 1: Subtitle & UEH Details
  3: 3,  // 0: Header & Leader, 1: 6 thành viên đầu, 2: 6 thành viên sau
  4: 2,  // 0: Header & Icon, 1: Giới thiệu chuyên đề SDG 3
  5: 3,  // 0: Header, 1: Định nghĩa SDG 3, 2: Nguyên tắc 3Es Benton-Short
  6: 4,  // 0: Header, 1: DALYs, 2: Life Expectancy, 3: HDI Sức khỏe
  7: 9,  // 0..8: Target 3.1 — 3.9
  8: 4,  // 0: 3.a, 1: 3.b, 2: 3.c, 3: 3.d
  9: 4,  // 0: Header, 1: Tử vong mẹ/bé, 2: Tiêm chủng, 3: Bệnh truyền nhiễm
  10: 5, // 0: Header, 1: Tai nạn 1.19M, 2: UHC 4.5 Tỷ, 3: NCDs >70%, 4: Nhân lực 10M
  11: 4, // 0: Header, 1: HDI 0.766, 2: VNeID 34M+, 3: NCDs 80%
  12: 14, // 0..13: Duyệt 14 mục tiêu (9 Mạnh: SDG 1, 2, 4, 7, 8, 10, 11, 12, 15; 5 Tương hỗ: SDG 5, 6, 13, 14, 16)
  13: 4, // 0: Header, 1: Hành động 1, 2: Hành động 2, 3: Hành động 3
  14: 2, // 0: Header & Icon, 1: Giới thiệu chuyên đề SDG 4
  15: 3, // 0: Header & Định nghĩa SDG 4, 1: Mô hình Bánh cưới SDGs, 2: Nguyên tắc 3Es Benton-Short
  16: 3, // 0: Header, 1: GER vs NER, 2: HDI Giáo dục (EYS 18 năm, MYS 15 năm)
  17: 7, // 0..6: Duyệt tuần tự 7 mục tiêu Target 4.1 — 4.7
  18: 4, // 0: Header, 1: 4.a Hạ tầng, 2: 4.b Học bổng STEM, 3: 4.c Giáo viên
  19: 4, // 0: Header, 1: Khủng hoảng học tập 84M, 2: Cơ sở hạ tầng 1/4, 3: Giáo viên >14%
  20: 4, // 0: Header, 1: Khoảng cách Giới, 2: Khoảng cách Số hóa, 3: Bất bình đẳng Hệ thống
  21: 3, // 0: Header, 1: Thực trạng Việt Nam, 2: 4 Giải pháp trọng tâm
  22: 12, // 0..11: Duyệt 12 mục tiêu (8 Mạnh: SDG 1, 2, 3, 7, 8, 9, 11, 16; 4 Tương hỗ: SDG 5, 6, 10, 12)
  23: 5, // 0: Header, 1: Đào tạo nông dân, 2: Lương đủ sống CLMRS, 3: Yếu thế, 4: Nestlé needs YOUth
  24: 2, // 0: Header & Lời cảm ơn, 1: Thông tin nhóm & Q&A
  25: 1, // 0: Toàn bộ bảng danh mục trích dẫn nguồn & tài liệu tham khảo
  26: 1, // 0: Từ điển thuật ngữ & Kịch bản phản biện Q&A
  27: 1, // 0: Bộ câu hỏi trắc nghiệm & Minigame 12 câu
};

const slideTitles = [
  'Hướng dẫn sử dụng & Thiết lập trình chiếu (Setup & User Guide)',
  'Trang bìa: SDG 3 & SDG 4 (Nhóm Candy - UEH)',
  'Thành viên thực hiện: Nhóm 4 — CANDY (13 Thành viên)',
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
  'Định nghĩa & Khung khái niệm: 3Es - Trụ cột Equity & Bánh cưới SDGs',
  'Thước đo đo lường giáo dục: GER vs NER, EYS, MYS & HDI',
  'A. Nhóm mục tiêu chính: Target 4.1 — 4.7',
  'B. Nhóm phương tiện thực hiện: Target 4.a — 4.c',
  'Khủng hoảng học tập toàn cầu: 84M trẻ, Hạ tầng & Giáo viên',
  'Các rào cản cốt lõi: Giới, Số hóa & Bất bình đẳng hệ thống',
  'Thực trạng & Giải pháp tại Việt Nam (SDG 4)',
  'Tính liên kết SDG 4: Sơ đồ mạng lưới tương hỗ SDGs',
  'Vai trò doanh nghiệp: Nestlé (4 Trụ cột hành động)',
  'Bìa kết & Lời tri ân (UEH University)',
  'Danh mục Trích nguồn & Cơ sở dữ liệu (References)',
  'Từ điển Thuật ngữ & Kịch bản Phản biện Q&A (Glossary)',
  'Bộ Câu hỏi Trắc nghiệm & Minigame 12 Câu (Quiz)',
];

export const SlideDeck: React.FC<SlideDeckProps> = ({
  onSwitchToScrollMode,
  onOpenSlideModal,
}) => {
  const isCleanMode = typeof window !== 'undefined' && (
    window.location.search.includes('clean=1') ||
    window.location.search.includes('export=1') ||
    window.location.hash.includes('clean=1') ||
    window.location.hash.includes('export=1')
  );

  const [currentSlide, setCurrentSlide] = useState(() => {
    try {
      const hash = window.location.hash.replace('#', '');
      const match = hash.match(/slide=(\d+)/);
      if (match) {
        const num = parseInt(match[1], 10);
        return num >= 1 && num <= 27 ? num : 1;
      }
      return 1;
    } catch {
      return 1;
    }
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showPdfSplit, setShowPdfSplit] = useState(false);
  const [showAllSteps, setShowAllSteps] = useState(false);
  const [isDockVisible, setIsDockVisible] = useState(true);
  const [isDockPinned, setIsDockPinned] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [slideZoom, setSlideZoom] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('deck_zoom_v90');
      return saved ? parseFloat(saved) : 0.9;
    } catch {
      return 0.9;
    }
  });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleZoomChange = (newZoom: number) => {
    setSlideZoom(newZoom);
    try {
      localStorage.setItem('deck_zoom_v90', newZoom.toString());
    } catch {}
  };

  const totalSlides = 27;
  const maxStepForCurrentSlide = slideMaxSteps[currentSlide] || 1;

  useEffect(() => {
    const isClean = window.location.search.includes('clean=1') || window.location.hash.includes('clean=1');
    window.location.hash = isClean ? `slide=${currentSlide}&clean=1` : `slide=${currentSlide}`;
    const titleText = slideTitles[currentSlide - 1] || `Slide ${currentSlide}`;
    document.title = `${titleText} | Phát triển bền vững SDG3 và SDG4`;
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentSlide]);

  useEffect(() => {
    const handleHashChange = () => {
      const match = window.location.hash.match(/slide=(\d+)/);
      if (match) {
        const num = parseInt(match[1], 10);
        if (num >= 1 && num <= totalSlides && num !== currentSlide) {
          setCurrentSlide(num);
          setCurrentStep(0);
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentSlide]);

  // Step-by-step advance
  const handleNext = () => {
    if (currentStep < maxStepForCurrentSlide - 1) {
      setCurrentStep((prev) => prev + 1);
    } else if (currentSlide < totalSlides) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
      setCurrentStep(0);
    }
  };

  // Step-by-step back
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    } else if (currentSlide > 1) {
      setDirection(-1);
      const prevSlide = currentSlide - 1;
      const prevMaxStep = slideMaxSteps[prevSlide] || 1;
      setCurrentSlide(prevSlide);
      setCurrentStep(prevMaxStep - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentSlide < totalSlides) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
      setCurrentStep(0);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 1) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
      setCurrentStep(0);
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
      // Don't intercept when user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.shiftKey && (e.key === 'ArrowRight' || e.key === 'PageDown')) {
        e.preventDefault();
        goToNextSlide();
      } else if (e.shiftKey && (e.key === 'ArrowLeft' || e.key === 'PageUp')) {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === '?' || e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        goToSlide(1);
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
  }, [currentSlide, currentStep, maxStepForCurrentSlide]);

  // Proximity hover detection: Top Header (first 50px) & Bottom Dock (last 55px)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Top header proximity
      if (e.clientY <= 50) {
        setIsHeaderVisible(true);
      } else if (e.clientY > 90) {
        setIsHeaderVisible(false);
      }

      // Bottom dock proximity
      if (!isDockPinned) {
        if (e.clientY >= window.innerHeight - 55) {
          setIsDockVisible(true);
        } else if (e.clientY < window.innerHeight - 110) {
          setIsDockVisible(false);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDockPinned]);

  const slideVariants = isCleanMode
    ? {
        enter: { x: 0, opacity: 1, filter: 'none', scale: 1 },
        center: { x: 0, opacity: 1, filter: 'none', scale: 1, transition: { duration: 0 } },
        exit: { x: 0, opacity: 1, filter: 'none', scale: 1, transition: { duration: 0 } },
      }
    : {
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

  const isSDG3 = currentSlide <= 12;

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

      {/* Top Controls (Hidden in Clean Export Mode) */}
      {!isCleanMode && (
        <>
          {/* Top Proximity Hover Trigger Strip */}
          <div
            className="fixed top-0 left-0 right-0 h-4 z-40 pointer-events-auto"
            onMouseEnter={() => setIsHeaderVisible(true)}
          />

          {/* Subtle Top Peek Pill when Header is Hidden */}
          <div
            className={`fixed top-1.5 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 pointer-events-auto ${
              isHeaderVisible
                ? 'opacity-0 -translate-y-full pointer-events-none'
                : 'opacity-85 hover:opacity-100 translate-y-0'
            }`}
            onMouseEnter={() => setIsHeaderVisible(true)}
            onClick={() => setIsHeaderVisible(true)}
          >
            <div className="liquid-glass-strong px-4 py-1 rounded-full text-[11px] font-mono text-white/90 border border-white/15 shadow-xl flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform bg-black/85">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-emerald-300">Slide {currentSlide}/{totalSlides}</span>
              <span className="text-white/40 text-[10px] hidden sm:inline">▼ Rê chuột mở menu</span>
            </div>
          </div>

          {/* Top Header Bar: Auto-hide & Hover to Reveal */}
          <header
            onMouseEnter={() => setIsHeaderVisible(true)}
            onMouseLeave={() => setIsHeaderVisible(false)}
            className={`fixed top-0 left-0 right-0 z-50 px-6 py-2.5 flex items-center justify-between border-b border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl transition-all duration-300 ease-out pointer-events-auto ${
              isHeaderVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-full opacity-0 pointer-events-none'
            }`}
          >
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
              {/* Download PDF Button */}
              <a
                href="/Bao_Cao_Thuyet_Trinh_SDG3_SDG4_Nhom4_CANDY.pdf"
                download="Bao_Cao_Thuyet_Trinh_SDG3_SDG4_Nhom4_CANDY.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass rounded-full px-3 py-1.5 text-xs text-amber-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 border border-amber-400/30 hover:bg-amber-500/20"
                title="Tải toàn bộ slide bản PDF chuẩn 16:9 để nộp bài hoặc in ấn"
              >
                <span>📥 Tải PDF</span>
              </a>

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

              {/* QR Code Button */}
              <button
                type="button"
                onClick={() => setShowQRModal(true)}
                className="liquid-glass rounded-full px-3 py-1.5 text-xs text-emerald-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 border border-emerald-400/30 hover:bg-emerald-500/20"
                title="Phóng to mã QR để quét trên điện thoại"
              >
                <span>📱 Mã QR</span>
              </button>

              {/* Fullscreen Button */}
              <button
                type="button"
                onClick={toggleFullscreen}
                className="liquid-glass rounded-full px-3 py-1.5 text-xs text-emerald-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 border border-emerald-400/30 hover:bg-emerald-500/20"
                title="Bật/tắt toàn màn hình (F11)"
              >
                <span>{isFullscreen ? 'Thu nhỏ' : '⛶ Toàn màn hình (F11)'}</span>
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
        </>
      )}

      {/* Main Slide Canvas */}
      <div
        ref={scrollContainerRef}
        className={`relative z-10 flex-1 flex flex-col ${
          isCleanMode
            ? 'overflow-hidden px-4 py-2 justify-center'
            : 'overflow-y-auto px-2 sm:px-4 lg:px-8 pt-1 sm:pt-1.5 pb-6 sm:pb-8'
        } custom-scrollbar`}
      >
        {/* Left Side: Modern Interactive Slide Content */}
        <div
          className={`flex-1 flex flex-col items-center w-full min-h-full transition-all duration-300 ${
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
              className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto flex flex-col flex-1 py-0.5 my-auto justify-center"
              style={{
                zoom: isCleanMode ? 0.9 : slideZoom,
              }}
            >
              <NaturalSlideContent
                slideNum={currentSlide}
                step={currentStep}
                showAll={showAllSteps || isCleanMode}
                onOpenModal={onOpenSlideModal}
                onNextStep={handleNext}
                onSetStep={setCurrentStep}
                onGoToSlide={goToSlide}
                onOpenQRModal={() => setShowQRModal(true)}
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
                  {currentSlide === 1
                    ? 'Cẩm nang Hướng dẫn sử dụng & Thiết lập trình chiếu'
                    : currentSlide === 2
                    ? 'Bản trình chiếu gốc (PDF Slide 1 - Trang bìa)'
                    : currentSlide === 3
                    ? 'Bảng phân chia 3 khu vực & Danh sách nhóm (Nhóm 4 CANDY)'
                    : currentSlide === 25
                    ? 'Bản trình chiếu gốc (PDF Slide 22 - Trích nguồn)'
                    : currentSlide === 26
                    ? 'Phụ lục Từ điển Thuật ngữ & Kịch bản Q&A'
                    : currentSlide === 27
                    ? 'Phụ lục Bộ câu hỏi Trắc nghiệm 12 câu'
                    : `Bản trình chiếu gốc (PDF Slide ${currentSlide > 3 ? currentSlide - 2 : currentSlide - 1})`}
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
                  src={
                    currentSlide === 1
                      ? '/qr_poster.png'
                      : currentSlide === 2
                      ? '/slides/slide_1.png'
                      : currentSlide === 3
                      ? '/slides/team_candy.png'
                      : currentSlide >= 25
                      ? '/slides/slide_22.png'
                      : `/slides/slide_${currentSlide - 2}.png`
                  }
                  alt={`Slide ${currentSlide}`}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Floating Left/Right Navigation Arrow Buttons (Hidden in Clean Export Mode) */}
      {!isCleanMode && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentSlide <= 1 && currentStep <= 0}
            aria-label="Slide trước (Lùi)"
            className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full liquid-glass-strong border border-white/20 text-white flex items-center justify-center cursor-pointer shadow-2xl backdrop-blur-xl transition-all duration-200 hover:scale-110 active:scale-95 hover:border-emerald-400/60 hover:bg-emerald-500/20 disabled:opacity-0 disabled:pointer-events-none group"
            title={currentStep > 0 ? (currentSlide === 10 || currentSlide === 20 ? 'SDG trước (←)' : 'Ý trước (←)') : 'Trang trước (←)'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 group-hover:text-emerald-300 transition-colors -translate-x-0.5"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentSlide >= totalSlides && currentStep >= maxStepForCurrentSlide - 1}
            aria-label="Slide tiếp theo (Tiến)"
            className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full liquid-glass-strong border border-white/20 text-white flex items-center justify-center cursor-pointer shadow-2xl backdrop-blur-xl transition-all duration-200 hover:scale-110 active:scale-95 hover:border-emerald-400/60 hover:bg-emerald-500/20 disabled:opacity-0 disabled:pointer-events-none group"
            title={currentStep < maxStepForCurrentSlide - 1 ? (currentSlide === 10 || currentSlide === 20 ? 'SDG tiếp theo (→)' : 'Tiếp ý (→ hoặc Space)') : 'Trang sau (→)'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 group-hover:text-emerald-300 transition-colors translate-x-0.5"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      {/* Bottom Floating Control Dock - Auto-hide & Hover to Reveal (Hidden in Clean Export Mode) */}
      {!isCleanMode && (
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
              {maxStepForCurrentSlide > 1 && (
                <div className="liquid-glass-natural rounded-full px-3 py-1 flex items-center gap-2">
                  <SparklesIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-white/80">
                    {currentSlide === 10 || currentSlide === 20 ? (
                      <>Mục tiêu SDG: <strong>{currentStep + 1} / {maxStepForCurrentSlide}</strong></>
                    ) : (
                      <>Nhịp thuyết trình: <strong>Ý {currentStep + 1} / {maxStepForCurrentSlide}</strong></>
                    )}
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
                  {currentStep < maxStepForCurrentSlide - 1
                    ? (currentSlide === 10 || currentSlide === 20 ? 'SDG tiếp theo →' : 'Tiếp ý →')
                    : 'Sang Slide →'}
                </span>
              </button>

              {/* Zoom / Scale Selector for Projector */}
              <div className="hidden sm:flex items-center gap-1 bg-black/60 p-1 rounded-full border border-white/10 text-xs font-mono">
                <span className="text-[10px] text-white/40 px-1.5 hidden md:inline">Thu phóng:</span>
                <button
                  type="button"
                  onClick={() => handleZoomChange(0.9)}
                  className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer flex items-center gap-1 ${
                    slideZoom === 0.9
                      ? 'bg-emerald-500 text-black font-bold shadow-sm'
                      : 'text-white/60 hover:text-white'
                  }`}
                  title="Cỡ 90% (Khuyến nghị chuẩn UEH - Vừa vặn toàn diện mọi màn hình)"
                >
                  <span>90%</span>
                  <span className="text-[9px] opacity-75">(Chuẩn)</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleZoomChange(1)}
                  className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                    slideZoom === 1
                      ? 'bg-emerald-500 text-black font-bold shadow-sm'
                      : 'text-white/60 hover:text-white'
                  }`}
                  title="Cỡ 100%"
                >
                  100%
                </button>
                <button
                  type="button"
                  onClick={() => handleZoomChange(1.1)}
                  className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                    slideZoom === 1.1
                      ? 'bg-emerald-500 text-black font-bold shadow-sm'
                      : 'text-white/60 hover:text-white'
                  }`}
                  title="Phóng to 110%"
                >
                  110%
                </button>
              </div>

              {/* Download PDF Button */}
              <a
                href="/Bao_Cao_Thuyet_Trinh_SDG3_SDG4_Nhom4_CANDY.pdf"
                download="Bao_Cao_Thuyet_Trinh_SDG3_SDG4_Nhom4_CANDY.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass rounded-full px-2.5 py-1.5 text-xs text-amber-300 hover:text-white flex items-center gap-1 cursor-pointer border border-amber-400/30 hover:bg-amber-500/20"
                title="Tải toàn bộ bài thuyết trình dạng file PDF 16:9 nộp bài"
              >
                <span>📥 PDF</span>
              </a>

              {/* QR Code Button */}
              <button
                type="button"
                onClick={() => setShowQRModal(true)}
                className="liquid-glass rounded-full px-2.5 py-1.5 text-xs text-emerald-300 hover:text-white flex items-center gap-1 cursor-pointer border border-emerald-400/30 hover:bg-emerald-500/20"
                title="Mở mã QR chia sẻ bài thuyết trình"
              >
                <span>📱 QR</span>
              </button>

              {/* Fullscreen Button */}
              <button
                type="button"
                onClick={toggleFullscreen}
                className="liquid-glass rounded-full px-3 py-1.5 text-xs text-white/80 hover:text-white flex items-center gap-1 cursor-pointer hover:border-emerald-400/50"
                title="Bật/tắt toàn màn hình (Phím F11)"
              >
                <span>{isFullscreen ? '⛶ Thu nhỏ' : '⛶ F11'}</span>
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
      )}
      {/* Big QR Code Modal */}
      <QRCodeModal isOpen={showQRModal} onClose={() => setShowQRModal(false)} />
    </div>
  );
};

