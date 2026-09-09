import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export interface UserGuideSlideProps {
  onGoToSlide?: (slideNum: number) => void;
  onNextStep?: () => void;
}

export const UserGuideSlide: React.FC<UserGuideSlideProps> = ({
  onGoToSlide,
  onNextStep,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [screenDim, setScreenDim] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const checkFullscreen = () => {
      setIsFullscreen(!!document.fullscreenElement);
      setScreenDim({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    checkFullscreen();
    window.addEventListener('resize', checkFullscreen);
    document.addEventListener('fullscreenchange', checkFullscreen);

    return () => {
      window.removeEventListener('resize', checkFullscreen);
      document.removeEventListener('fullscreenchange', checkFullscreen);
    };
  }, []);

  const handleToggleFullscreen = () => {
    try {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    } catch {
      // ignore
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-3 py-1 flex flex-col justify-between flex-1">
      {/* Top Header */}
      <div className="text-center mb-1.5 sm:mb-2">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full liquid-glass border border-emerald-400/40 text-emerald-300 text-[10px] sm:text-xs font-mono mb-1 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>HƯỚNG DẪN THIẾT LẬP MÁY CHIẾU & ĐIỀU KHIỂN TRÌNH CHIẾU</span>
        </div>
        <h1 className="text-xl sm:text-3xl lg:text-3.5xl font-heading italic text-white tracking-tight leading-tight mb-0.5">
          Cẩm Nang Sử Dụng & Chuẩn Bị Trình Chiếu
        </h1>
        <p className="text-[11px] sm:text-xs text-white/75 font-light max-w-2xl mx-auto truncate">
          Tối ưu hiển thị máy chiếu UEH • Chuẩn hóa tỉ lệ 16:9 • Phím tắt & tương tác đa điểm
        </p>
      </div>

      {/* Live Calibration & Quick Check Bar */}
      <div className="liquid-glass-strong rounded-xl px-3 py-1.5 mb-2 border border-white/15 shadow-md flex flex-wrap items-center justify-between gap-2 bg-black/40 text-[11px]">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span
              className={`w-2 h-2 rounded-full ${
                isFullscreen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
              }`}
            />
            <span className="font-mono text-white/90 text-xs">
              Trạng thái:{' '}
              {isFullscreen ? (
                <strong className="text-emerald-300">Đã bật Toàn màn hình (F11)</strong>
              ) : (
                <strong className="text-amber-300">Chưa bật F11 (Khuyến nghị bật)</strong>
              )}
            </span>
          </div>

          <button
            type="button"
            onClick={handleToggleFullscreen}
            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium liquid-glass border border-white/20 text-white hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all cursor-pointer flex items-center gap-1"
          >
            <span>⛶</span>
            <span>{isFullscreen ? 'Thoát F11' : 'Bật F11 Ngay'}</span>
          </button>
        </div>

        <div className="flex items-center gap-3 font-mono text-white/70 text-[11px]">
          <div className="flex items-center gap-1">
            <span className="text-emerald-400">🔍</span>
            <span>
              Màn hình: <strong className="text-white">{screenDim.width} x {screenDim.height}</strong> (16:9)
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1 text-cyan-300">
            <span>💡</span>
            <span>Thu phóng: <strong className="text-emerald-300">Mặc định 90% (Chuẩn UEH)</strong></span>
          </div>
          <div className="flex items-center gap-1 text-emerald-300 font-semibold">
            <span>📚 27 Slides</span>
          </div>
        </div>
      </div>

      {/* 4 Core Instruction Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5 mb-2 flex-1">
        {/* Card 1: Display & Calibration */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="liquid-glass rounded-xl p-2.5 sm:p-3 border border-emerald-500/30 flex flex-col justify-between hover:border-emerald-400/60 transition-all bg-gradient-to-b from-emerald-950/20 to-transparent shadow-md"
        >
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-xs">
                🖥️
              </span>
              <div>
                <h3 className="font-heading italic text-xs sm:text-sm text-white font-semibold">
                  1. Hiển Thị Máy Chiếu
                </h3>
                <span className="text-[9px] font-mono text-emerald-300">FULLSCREEN & SCALE</span>
              </div>
            </div>

            <div className="space-y-1.5 text-[11px] text-white/80">
              <div className="bg-black/30 rounded-lg p-2 border border-white/5">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-semibold text-emerald-300 text-xs">Toàn Màn Hình:</span>
                  <kbd className="px-1.5 py-0.2 rounded bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 font-mono text-[10px] font-bold">
                    F11
                  </kbd>
                </div>
                <p className="text-[10px] text-white/70 leading-snug">
                  Ẩn thanh tab, URL và taskbar để bài chiếu bung trọn 100% diện tích màn chiếu giảng đường.
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-2 border border-white/5">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-semibold text-cyan-300 text-xs">Thu Phóng 90% (Mặc định):</span>
                  <kbd className="px-1.5 py-0.2 rounded bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 font-mono text-[10px] font-bold">
                    Ctrl + 0
                  </kbd>
                </div>
                <p className="text-[10px] text-white/70 leading-snug">
                  Hệ thống đã tự động thiết lập 90% ngay khi truy cập, giúp hiển thị trọn vẹn 100% đồ họa mà không cần lăn chuột.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-1.5 pt-1 border-t border-white/10 text-[9px] font-mono text-emerald-400/80 text-center">
            ✓ Tự động co giãn thích ứng máy chiếu
          </div>
        </motion.div>

        {/* Card 2: Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="liquid-glass rounded-xl p-2.5 sm:p-3 border border-sky-500/30 flex flex-col justify-between hover:border-sky-400/60 transition-all bg-gradient-to-b from-sky-950/20 to-transparent shadow-md"
        >
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="w-6 h-6 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-xs">
                ⌨️
              </span>
              <div>
                <h3 className="font-heading italic text-xs sm:text-sm text-white font-semibold">
                  2. Chuyển Slide & Điều Khiển
                </h3>
                <span className="text-[9px] font-mono text-sky-300">SHORTCUTS & CLICKER</span>
              </div>
            </div>

            <div className="space-y-1.5 text-[11px] text-white/80">
              <div className="bg-black/30 rounded-lg p-2 border border-white/5">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-semibold text-sky-300 text-xs">Tiến tới (Next):</span>
                  <div className="flex items-center gap-1">
                    <kbd className="px-1 py-0.2 rounded bg-white/15 text-[10px] font-mono">Space</kbd>
                    <kbd className="px-1 py-0.2 rounded bg-white/15 text-[10px] font-mono">→</kbd>
                  </div>
                </div>
                <p className="text-[10px] text-white/70 leading-snug">
                  Nhấn <span className="text-white font-medium">Space</span>, <span className="text-white font-medium">→</span> hoặc cuộn chuột xuống để mở ý / slide tiếp theo.
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-2 border border-white/5">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-semibold text-sky-300 text-xs">Quay lại (Prev):</span>
                  <div className="flex items-center gap-1">
                    <kbd className="px-1 py-0.2 rounded bg-white/15 text-[10px] font-mono">←</kbd>
                    <kbd className="px-1 py-0.2 rounded bg-white/15 text-[10px] font-mono">PgUp</kbd>
                  </div>
                </div>
                <p className="text-[10px] text-white/70 leading-snug">
                  Nhấn <span className="text-white font-medium">←</span> hoặc <span className="text-white font-medium">Backspace</span> để lùi về bước hoặc slide trước đó.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-1.5 pt-1 border-t border-white/10 text-[9px] font-mono text-sky-400/80 text-center">
            ✓ Nút tròn nổi hai bên mép màn hình
          </div>
        </motion.div>

        {/* Card 3: Interactive Touchpoints */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="liquid-glass rounded-xl p-2.5 sm:p-3 border border-amber-500/30 flex flex-col justify-between hover:border-amber-400/60 transition-all bg-gradient-to-b from-amber-950/20 to-transparent shadow-md"
        >
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-xs">
                🎯
              </span>
              <div>
                <h3 className="font-heading italic text-xs sm:text-sm text-white font-semibold">
                  3. Tương Tác Trực Tiếp
                </h3>
                <span className="text-[9px] font-mono text-amber-300">TOUCHPOINTS</span>
              </div>
            </div>

            <div className="space-y-1 text-[11px] text-white/80">
              <div className="bg-black/30 rounded-lg p-1.5 border border-white/5">
                <span className="font-semibold text-amber-300 text-[11px] block">📱 Mã QR (Slide 2):</span>
                <p className="text-[10px] text-white/70 leading-snug">
                  Bấm trực tiếp vào thẻ QR góc slide bìa để phóng to cho cả khán phòng quét link web.
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-1.5 border border-white/5">
                <span className="font-semibold text-emerald-300 text-[11px] block">📊 Biểu Đồ Phóng To:</span>
                <p className="text-[10px] text-white/70 leading-snug">
                  Nhấp DALYs (Slide 6), HDI (Slide 11), Mạng lưới (Slide 12 & 22) để xem chi tiết.
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-1.5 border border-white/5">
                <span className="font-semibold text-pink-300 text-[11px] block">🎮 Quiz 12 Câu (Slide 27):</span>
                <p className="text-[10px] text-white/70 leading-snug">
                  Bấm chọn đáp án A, B, C, D để kiểm tra kết quả tức thì và giải thích học thuật.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-1.5 pt-1 border-t border-white/10 text-[9px] font-mono text-amber-400/80 text-center">
            ✓ Trải nghiệm tương tác thuyết trình sống động
          </div>
        </motion.div>

        {/* Card 4: Quick Shortcuts & Menu */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="liquid-glass rounded-xl p-2.5 sm:p-3 border border-purple-500/30 flex flex-col justify-between hover:border-purple-400/60 transition-all bg-gradient-to-b from-purple-950/20 to-transparent shadow-md"
        >
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="w-6 h-6 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-xs">
                ⚡
              </span>
              <div>
                <h3 className="font-heading italic text-xs sm:text-sm text-white font-semibold">
                  4. Phím Tắt Tiện Dụng
                </h3>
                <span className="text-[9px] font-mono text-purple-300">HOTKEYS</span>
              </div>
            </div>

            <div className="space-y-1 text-[11px] text-white/80">
              <div className="flex items-center justify-between bg-black/30 px-2 py-1 rounded-md border border-white/5">
                <span>Đối chiếu PDF gốc:</span>
                <kbd className="px-1.5 py-0.2 rounded bg-white/15 text-[10px] font-mono font-bold text-purple-200">
                  Phím P
                </kbd>
              </div>

              <div className="flex items-center justify-between bg-black/30 px-2 py-1 rounded-md border border-white/5">
                <span>Ẩn/Hiện thanh Dock:</span>
                <kbd className="px-1.5 py-0.2 rounded bg-white/15 text-[10px] font-mono font-bold text-purple-200">
                  Phím D
                </kbd>
              </div>

              <div className="flex items-center justify-between bg-black/30 px-2 py-1 rounded-md border border-white/5">
                <span>Về Slide đầu (Slide 1):</span>
                <kbd className="px-1.5 py-0.2 rounded bg-white/15 text-[10px] font-mono font-bold text-purple-200">
                  Home
                </kbd>
              </div>

              <div className="flex items-center justify-between bg-black/30 px-2 py-1 rounded-md border border-white/5">
                <span>Đến Minigame (Slide 27):</span>
                <kbd className="px-1.5 py-0.2 rounded bg-white/15 text-[10px] font-mono font-bold text-purple-200">
                  End
                </kbd>
              </div>

              <div className="flex items-center justify-between bg-black/30 px-2 py-1 rounded-md border border-white/5">
                <span>Đóng popup / modal:</span>
                <kbd className="px-1.5 py-0.2 rounded bg-white/15 text-[10px] font-mono font-bold text-purple-200">
                  Esc
                </kbd>
              </div>
            </div>
          </div>

          <div className="mt-1.5 pt-1 border-t border-white/10 text-[9px] font-mono text-purple-400/80 text-center">
            ✓ Rê chuột lên đỉnh / đáy để hiện menu
          </div>
        </motion.div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="liquid-glass-strong rounded-xl px-3 py-1.5 sm:py-2 border border-emerald-500/30 shadow-xl flex flex-wrap items-center justify-between gap-2 bg-black/60">
        <div className="flex items-center gap-1.5 text-[11px] text-white/80 font-mono">
          <span className="text-emerald-400">🚀</span>
          <span>Sẵn sàng? Bấm nút hoặc phím <kbd className="px-1 py-0.2 rounded bg-white/15 text-[10px] text-white">Space</kbd> để vào bài!</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {onGoToSlide && (
            <>
              <button
                type="button"
                onClick={() => onGoToSlide(3)}
                className="liquid-glass rounded-full px-3 py-1 text-xs text-pink-300 hover:text-white border border-pink-400/30 hover:bg-pink-500/20 transition-all cursor-pointer flex items-center gap-1"
              >
                <span>👥 Nhóm 4 CANDY (Slide 3)</span>
              </button>

              <button
                type="button"
                onClick={() => onGoToSlide(26)}
                className="liquid-glass rounded-full px-3 py-1 text-xs text-amber-300 hover:text-white border border-amber-400/30 hover:bg-amber-500/20 transition-all cursor-pointer flex items-center gap-1 hidden sm:flex"
              >
                <span>📖 Từ Điển & Q&A (Slide 26)</span>
              </button>

              <button
                type="button"
                onClick={() => onGoToSlide(27)}
                className="liquid-glass rounded-full px-3 py-1 text-xs text-purple-300 hover:text-white border border-purple-400/30 hover:bg-purple-500/20 transition-all cursor-pointer flex items-center gap-1 hidden sm:flex"
              >
                <span>🎯 Minigame (Slide 27)</span>
              </button>
            </>
          )}

          <button
            type="button"
            onClick={() => {
              if (onGoToSlide) {
                onGoToSlide(2);
              } else if (onNextStep) {
                onNextStep();
              }
            }}
            className="liquid-glass-strong rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-white flex items-center gap-1.5 hover:brightness-125 transition-all cursor-pointer border border-emerald-400/60 shadow-lg hover:scale-105 bg-emerald-600/30 hover:bg-emerald-600/50"
          >
            <span className="font-semibold tracking-wide">VÀO BÀI THUYẾT TRÌNH (TRANG BÌA)</span>
            <span className="text-emerald-300 font-bold">➔</span>
          </button>
        </div>
      </div>
    </div>
  );
};
