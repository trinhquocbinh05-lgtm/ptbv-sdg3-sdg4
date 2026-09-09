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
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-3 flex flex-col justify-between min-h-[82vh]">
      {/* Top Header */}
      <div className="text-center mb-3 sm:mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass border border-emerald-400/40 text-emerald-300 text-xs font-mono mb-2 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>HƯỚNG DẪN THIẾT LẬP MÁY CHIẾU & ĐIỀU KHIỂN TRÌNH CHIẾU</span>
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading italic text-white tracking-tight mb-1">
          Cẩm Nang Sử Dụng & Chuẩn Bị Trình Chiếu
        </h1>
        <p className="text-xs sm:text-sm text-white/75 font-light max-w-3xl mx-auto">
          Tối ưu trải nghiệm màn chiếu lớn tại giảng đường UEH • Chuẩn hóa tỉ lệ 16:9 • Thao tác phím tắt & tương tác đa điểm
        </p>
      </div>

      {/* Live Calibration & Quick Check Bar */}
      <div className="liquid-glass-strong rounded-xl p-3 mb-4 border border-white/15 shadow-xl flex flex-wrap items-center justify-between gap-3 bg-black/40">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isFullscreen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
              }`}
            />
            <span className="text-xs font-mono text-white/90">
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
            className="px-3 py-1 rounded-lg text-xs font-mono font-medium liquid-glass border border-white/20 text-white hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>⛶</span>
            <span>{isFullscreen ? 'Thoát Toàn màn hình' : 'Bật Toàn Màn Hình Ngay'}</span>
          </button>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-white/70">
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400">🔍</span>
            <span>
              Màn hình: <strong className="text-white">{screenDim.width} x {screenDim.height}</strong> (Chuẩn 16:9)
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-cyan-300">
            <span>💡</span>
            <span>Reset Zoom 100%: <kbd className="px-1.5 py-0.5 rounded bg-white/15 text-[10px] text-white">Ctrl + 0</kbd></span>
          </div>
          <div className="flex items-center gap-1 text-emerald-300">
            <span>📚</span>
            <span>27 Slides</span>
          </div>
        </div>
      </div>

      {/* 4 Core Instruction Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 flex-1">
        {/* Card 1: Display & Calibration */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="liquid-glass rounded-2xl p-4 border border-emerald-500/30 flex flex-col justify-between hover:border-emerald-400/60 transition-all bg-gradient-to-b from-emerald-950/20 to-transparent"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-base">
                🖥️
              </span>
              <div>
                <h3 className="font-heading italic text-base sm:text-lg text-white font-semibold">
                  1. Hiển Thị Máy Chiếu
                </h3>
                <span className="text-[10px] font-mono text-emerald-300">CALIBRATION & FULLSCREEN</span>
              </div>
            </div>

            <div className="space-y-3 text-xs text-white/80">
              <div className="bg-black/30 rounded-lg p-2.5 border border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-emerald-300">Toàn Màn Hình:</span>
                  <kbd className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 font-mono text-[11px] font-bold">
                    F11
                  </kbd>
                </div>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  Ẩn thanh tab, địa chỉ web và taskbar Windows để bài chiếu bung 100% diện tích màn chiếu giảng đường.
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-2.5 border border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-cyan-300">Thu Phóng 100%:</span>
                  <kbd className="px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 font-mono text-[11px] font-bold">
                    Ctrl + 0
                  </kbd>
                </div>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  Đưa zoom trình duyệt về đúng chuẩn 100% để hệ thống Liquid Glass co giãn sắc nét, không bị vỡ layout.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-white/10 text-[10px] font-mono text-emerald-400/80 text-center">
            ✓ Tự động co giãn thích ứng máy chiếu
          </div>
        </motion.div>

        {/* Card 2: Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="liquid-glass rounded-2xl p-4 border border-sky-500/30 flex flex-col justify-between hover:border-sky-400/60 transition-all bg-gradient-to-b from-sky-950/20 to-transparent"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-base">
                ⌨️
              </span>
              <div>
                <h3 className="font-heading italic text-base sm:text-lg text-white font-semibold">
                  2. Chuyển Slide & Điều Khiển
                </h3>
                <span className="text-[10px] font-mono text-sky-300">NAVIGATION SHORTCUTS</span>
              </div>
            </div>

            <div className="space-y-3 text-xs text-white/80">
              <div className="bg-black/30 rounded-lg p-2.5 border border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sky-300">Tiến tới (Next):</span>
                  <div className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-white/15 text-[10px] font-mono">Space</kbd>
                    <kbd className="px-1.5 py-0.5 rounded bg-white/15 text-[10px] font-mono">→</kbd>
                  </div>
                </div>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  Nhấn <span className="text-white font-medium">Space</span> hoặc phím <span className="text-white font-medium">Mũi tên phải</span> hoặc cuộn chuột xuống để chuyển sang ý / slide tiếp theo.
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-2.5 border border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sky-300">Quay lại (Prev):</span>
                  <div className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-white/15 text-[10px] font-mono">←</kbd>
                    <kbd className="px-1.5 py-0.5 rounded bg-white/15 text-[10px] font-mono">PageUp</kbd>
                  </div>
                </div>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  Nhấn phím <span className="text-white font-medium">Mũi tên trái</span> hoặc <span className="text-white font-medium">Backspace</span> để quay về bước hoặc slide trước đó.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-white/10 text-[10px] font-mono text-sky-400/80 text-center">
            ✓ Nút tròn nổi hai bên mép màn hình
          </div>
        </motion.div>

        {/* Card 3: Interactive Touchpoints */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="liquid-glass rounded-2xl p-4 border border-amber-500/30 flex flex-col justify-between hover:border-amber-400/60 transition-all bg-gradient-to-b from-amber-950/20 to-transparent"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-base">
                🎯
              </span>
              <div>
                <h3 className="font-heading italic text-base sm:text-lg text-white font-semibold">
                  3. Tương Tác Trực Tiếp
                </h3>
                <span className="text-[10px] font-mono text-amber-300">INTERACTIVE FEATURES</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-white/80">
              <div className="bg-black/30 rounded-lg p-2 border border-white/10">
                <div className="font-semibold text-amber-300 flex items-center gap-1 mb-0.5">
                  <span>📱 Quét Mã QR (Slide 2):</span>
                </div>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  Bấm trực tiếp vào thẻ QR góc slide bìa để phóng to toàn màn hình cho cả khán phòng quét link web.
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-2 border border-white/10">
                <div className="font-semibold text-emerald-300 flex items-center gap-1 mb-0.5">
                  <span>📊 Biểu Đồ & Mạng Lưới:</span>
                </div>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  Nhấp vào DALYs (Slide 6), HDI (Slide 11), Mạng lưới SDGs (Slide 12 & 22) để mở phân tích chuyên sâu.
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-2 border border-white/10">
                <div className="font-semibold text-pink-300 flex items-center gap-1 mb-0.5">
                  <span>🎮 Minigame 12 Câu (Slide 27):</span>
                </div>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  Bấm chọn trực tiếp đáp án A, B, C, D để chấm điểm tức thì và đọc giải thích học thuật.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-white/10 text-[10px] font-mono text-amber-400/80 text-center">
            ✓ Trải nghiệm tương tác thuyết trình sống động
          </div>
        </motion.div>

        {/* Card 4: Quick Shortcuts & Menu */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="liquid-glass rounded-2xl p-4 border border-purple-500/30 flex flex-col justify-between hover:border-purple-400/60 transition-all bg-gradient-to-b from-purple-950/20 to-transparent"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-base">
                ⚡
              </span>
              <div>
                <h3 className="font-heading italic text-base sm:text-lg text-white font-semibold">
                  4. Phím Tắt & Thanh Menu
                </h3>
                <span className="text-[10px] font-mono text-purple-300">PRODUCTIVITY KEYS</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-white/80">
              <div className="flex items-center justify-between bg-black/30 p-2 rounded-lg border border-white/10">
                <span className="text-white/80">Đối chiếu PDF gốc:</span>
                <kbd className="px-2 py-0.5 rounded bg-white/15 text-[11px] font-mono font-bold text-purple-200">
                  Phím P
                </kbd>
              </div>

              <div className="flex items-center justify-between bg-black/30 p-2 rounded-lg border border-white/10">
                <span className="text-white/80">Ẩn/Hiện thanh Dock:</span>
                <kbd className="px-2 py-0.5 rounded bg-white/15 text-[11px] font-mono font-bold text-purple-200">
                  Phím D
                </kbd>
              </div>

              <div className="flex items-center justify-between bg-black/30 p-2 rounded-lg border border-white/10">
                <span className="text-white/80">Về Slide đầu (Slide 1):</span>
                <kbd className="px-2 py-0.5 rounded bg-white/15 text-[11px] font-mono font-bold text-purple-200">
                  Home
                </kbd>
              </div>

              <div className="flex items-center justify-between bg-black/30 p-2 rounded-lg border border-white/10">
                <span className="text-white/80">Đến Minigame (Slide 27):</span>
                <kbd className="px-2 py-0.5 rounded bg-white/15 text-[11px] font-mono font-bold text-purple-200">
                  End
                </kbd>
              </div>

              <div className="flex items-center justify-between bg-black/30 p-2 rounded-lg border border-white/10">
                <span className="text-white/80">Đóng popup / modal:</span>
                <kbd className="px-2 py-0.5 rounded bg-white/15 text-[11px] font-mono font-bold text-purple-200">
                  Esc
                </kbd>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-white/10 text-[10px] font-mono text-purple-400/80 text-center">
            ✓ Rê chuột lên đỉnh / đáy để hiện menu
          </div>
        </motion.div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="liquid-glass-strong rounded-2xl p-3 sm:p-4 border border-emerald-500/30 shadow-2xl flex flex-wrap items-center justify-between gap-3 bg-black/60">
        <div className="flex items-center gap-2 text-xs text-white/80 font-mono">
          <span className="text-emerald-400">🚀</span>
          <span>Sẵn sàng thuyết trình? Bấm nút bên phải hoặc phím <kbd className="px-1.5 py-0.5 rounded bg-white/15 text-[10px] text-white">Space</kbd> để vào bài!</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {onGoToSlide && (
            <>
              <button
                type="button"
                onClick={() => onGoToSlide(3)}
                className="liquid-glass rounded-full px-4 py-2 text-xs text-pink-300 hover:text-white border border-pink-400/30 hover:bg-pink-500/20 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>👥 Nhóm 4 CANDY (Slide 3)</span>
              </button>

              <button
                type="button"
                onClick={() => onGoToSlide(26)}
                className="liquid-glass rounded-full px-4 py-2 text-xs text-amber-300 hover:text-white border border-amber-400/30 hover:bg-amber-500/20 transition-all cursor-pointer flex items-center gap-1.5 hidden sm:flex"
              >
                <span>📖 Từ Điển & Q&A (Slide 26)</span>
              </button>

              <button
                type="button"
                onClick={() => onGoToSlide(27)}
                className="liquid-glass rounded-full px-4 py-2 text-xs text-purple-300 hover:text-white border border-purple-400/30 hover:bg-purple-500/20 transition-all cursor-pointer flex items-center gap-1.5 hidden sm:flex"
              >
                <span>🎯 Minigame Trắc Nghiệm (Slide 27)</span>
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
            className="liquid-glass-strong rounded-full px-6 py-2.5 text-xs sm:text-sm font-medium text-white flex items-center gap-2 hover:brightness-125 transition-all cursor-pointer border border-emerald-400/60 shadow-xl hover:scale-105 bg-emerald-600/30 hover:bg-emerald-600/50"
          >
            <span className="font-semibold tracking-wide">VÀO BÀI THUYẾT TRÌNH (TRANG BÌA)</span>
            <span className="text-emerald-300 font-bold">➔</span>
          </button>
        </div>
      </div>
    </div>
  );
};
