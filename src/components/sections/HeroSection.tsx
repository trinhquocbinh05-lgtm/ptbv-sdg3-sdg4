import React from 'react';
import { motion } from 'framer-motion';
import { FadingVideo } from '../FadingVideo';
import { BlurText } from '../BlurText';
import { ArrowDown, EyeIcon, SparklesIcon } from '../Icons';

interface HeroSectionProps {
  onOpenSlide: (slideNum: number) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSlide }) => {
  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden bg-black flex flex-col justify-between"
    >
      {/* Cinematic Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0 pointer-events-none"
        style={{ width: '120%', height: '120%' }}
      />

      {/* Dark atmospheric overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none z-[1]" />

      {/* Main Centered Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-20 px-6 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 0.3 }}
          className="liquid-glass rounded-full px-4 py-1.5 flex items-center gap-2.5 text-xs md:text-sm font-body text-white/90 select-none shadow-xl mb-6"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-medium tracking-wide">Năm học: 2026 | Lớp: 26C3ECO50122002 | UEH University</span>
        </motion.div>

        {/* Headline */}
        <div className="w-full">
          <BlurText
            text="Phân tích chuyên sâu Phát Triển Bền Vững: SDG 3 & SDG 4"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-heading italic text-white leading-[0.95] tracking-[-2px] md:tracking-[-3px]"
          />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 0.8 }}
          className="mt-6 text-base sm:text-lg text-white/90 max-w-2xl font-body font-light leading-relaxed"
        >
          Thực hiện bởi <span className="text-white font-medium">Nhóm Candy</span> — Lớp:{' '}
          <span className="text-white font-semibold underline decoration-emerald-400/60 underline-offset-4">
            26C3ECO50122002
          </span>
          . Năm học: 2026.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 1.1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#sdg3-overview"
            className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-body font-medium text-white flex items-center gap-2.5 hover:brightness-125 transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            <span>Bắt đầu khám phá</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          <button
            type="button"
            onClick={() => onOpenSlide(1)}
            className="liquid-glass rounded-full px-5 py-3 text-sm font-body font-medium text-white/80 hover:text-white flex items-center gap-2 hover:bg-white/5 transition-all cursor-pointer"
          >
            <EyeIcon className="w-4 h-4 text-emerald-300" />
            <span>Xem Slide 1 (Bản gốc)</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Bar: Slide equivalence indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="relative z-10 flex items-center justify-between px-8 py-6 text-xs text-white/60 font-body border-t border-white/5"
      >
        <div className="flex items-center gap-2">
          <SparklesIcon className="w-4 h-4 text-emerald-400" />
          <span>Toàn bộ 22 Slides báo cáo được số hóa chuẩn 1-to-1 Cinematic Landing Page</span>
        </div>
        <div className="hidden sm:block">
          Cuộn chuột hoặc bấm các mục để điều hướng ↓
        </div>
      </motion.div>
    </section>
  );
};
