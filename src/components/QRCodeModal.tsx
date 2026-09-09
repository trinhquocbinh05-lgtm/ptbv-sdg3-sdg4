import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloseIcon, SparklesIcon } from './Icons';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const webUrl = 'https://ptbv-sdg3-sdg4.vercel.app';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(webUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-lg liquid-glass-strong rounded-3xl p-6 sm:p-8 border-2 border-emerald-400/40 shadow-2xl flex flex-col items-center text-center bg-black/80"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 liquid-glass h-9 w-9 rounded-full flex items-center justify-center text-white/80 hover:text-white cursor-pointer hover:border-emerald-400/50"
              title="Đóng (Esc)"
            >
              <CloseIcon className="w-5 h-5" />
            </button>

            {/* Badge */}
            <div className="liquid-glass rounded-full px-4 py-1 text-xs font-mono text-emerald-300 font-semibold uppercase tracking-wider mb-3 border border-emerald-400/30 flex items-center gap-1.5">
              <SparklesIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>Quét Mã Để Theo Dõi Trực Tiếp</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading italic text-white font-bold mb-1">
              Bài Thuyết Trình Kỹ Thuật Số
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light mb-6">
              Đề tài: Phát triển bền vững SDG 3 & SDG 4 • Nhóm 4: CANDY • UEH
            </p>

            {/* Big High-Contrast QR Code Card */}
            <div className="bg-white p-5 rounded-3xl shadow-[0_0_40px_rgba(52,211,153,0.35)] border-4 border-emerald-400 mb-6 flex items-center justify-center">
              <img
                src="/qr_code.png"
                alt="QR Code ptbv-sdg3-sdg4.vercel.app"
                className="w-64 h-64 sm:w-72 sm:h-72 object-contain"
              />
            </div>

            {/* URL Display Pill */}
            <div className="w-full liquid-glass rounded-2xl px-4 py-2.5 mb-4 border border-white/15 flex items-center justify-between gap-2">
              <span className="font-mono text-xs sm:text-sm text-emerald-300 font-semibold truncate text-left">
                {webUrl}
              </span>
              <button
                type="button"
                onClick={handleCopyLink}
                className="liquid-glass px-3 py-1 rounded-xl text-xs font-medium text-white hover:text-emerald-300 transition-colors cursor-pointer border border-emerald-400/30 flex-shrink-0"
              >
                {copied ? '✓ Đã sao chép' : 'Sao chép link'}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full">
              <a
                href="/qr_code.png"
                download="QR_Code_Slide_Thuyet_Trinh.png"
                className="liquid-glass-strong rounded-xl px-4 py-2 text-xs font-medium text-white hover:brightness-125 transition-all flex items-center gap-2 border border-emerald-400/40 cursor-pointer"
              >
                <span>📥 Tải ảnh mã QR (PNG)</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="liquid-glass rounded-xl px-4 py-2 text-xs font-medium text-white/80 hover:text-white transition-all cursor-pointer border border-white/10"
              >
                Đóng cửa sổ
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
