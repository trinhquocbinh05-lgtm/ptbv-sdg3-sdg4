import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloseIcon } from './Icons';

interface SlideViewerModalProps {
  slideNumber: number | null;
  onClose: () => void;
  onNavigate?: (direction: 'prev' | 'next') => void;
}

export const SlideViewerModal: React.FC<SlideViewerModalProps> = ({
  slideNumber,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onNavigate) onNavigate('prev');
      if (e.key === 'ArrowRight' && onNavigate) onNavigate('next');
    };
    if (slideNumber !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [slideNumber, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {slideNumber !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-5xl liquid-glass-strong rounded-2xl p-4 md:p-6 overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-3">
                <span className="liquid-glass rounded-full px-3 py-1 text-xs font-semibold text-white/90">
                  Slide {slideNumber} / 22
                </span>
                <h3 className="font-heading italic text-xl md:text-2xl text-white">
                  Bản trình chiếu gốc (PDF Presentation)
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="liquid-glass h-9 w-9 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                title="Đóng (Esc)"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Image Container */}
            <div className="flex-1 overflow-auto rounded-xl bg-black/50 border border-white/5 flex items-center justify-center p-2">
              <img
                src={`/slides/slide_${slideNumber}.png`}
                alt={`Slide ${slideNumber}`}
                className="max-h-[65vh] w-auto object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Footer Navigation */}
            <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/10 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-0.5 rounded bg-white/10 text-[10px]">Esc</kbd>
                <span>Đóng</span>
                <span className="mx-1">•</span>
                <kbd className="px-2 py-0.5 rounded bg-white/10 text-[10px]">←</kbd>
                <kbd className="px-2 py-0.5 rounded bg-white/10 text-[10px]">→</kbd>
                <span>Chuyển slide</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('prev')}
                  disabled={slideNumber <= 1}
                  className="liquid-glass px-3 py-1 rounded-full text-white/80 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Trang trước
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('next')}
                  disabled={slideNumber >= 16}
                  className="liquid-glass px-3 py-1 rounded-full text-white/80 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Trang tiếp
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
