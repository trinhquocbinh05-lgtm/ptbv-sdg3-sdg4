import React, { useState } from 'react';
import { HeartPulseIcon, LeafIcon } from '../Icons';
import { AnimatedNumber, AnimatedProgressBar } from '../AnimatedCounter';

export const DALYsBreakdownChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dalys' | 'hale'>('dalys');

  return (
    <div className="liquid-glass-natural rounded-2xl p-5 border border-emerald-500/20 shadow-xl">
      {/* Tab Switcher */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <HeartPulseIcon className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
            Biểu đồ Trực quan Sức khỏe
          </span>
        </div>
        <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded-lg border border-white/5 text-[11px]">
          <button
            type="button"
            onClick={() => setActiveTab('dalys')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              activeTab === 'dalys'
                ? 'bg-emerald-500 text-black font-semibold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Cơ cấu DALYs
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('hale')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              activeTab === 'hale'
                ? 'bg-emerald-500 text-black font-semibold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Khoảng cách HALE
          </button>
        </div>
      </div>

      {/* Content based on Tab */}
      {activeTab === 'dalys' ? (
        <div>
          <div className="flex items-center justify-between text-xs sm:text-sm mb-2.5">
            <span className="text-white/90 font-mono font-semibold">Công thức: DALYs = YLL + YLD</span>
            <span className="text-emerald-400 font-bold font-mono">100% Gánh nặng bệnh tật toàn cầu</span>
          </div>

          {/* Stacked Animated Bar */}
          <div className="h-8 sm:h-9 w-full bg-black/60 rounded-full overflow-hidden flex p-1 border border-white/10 mb-4 shadow-inner">
            <AnimatedProgressBar
              width="58%"
              duration={1.2}
              className="h-full bg-gradient-to-r from-rose-500 to-rose-400 rounded-l-full flex items-center justify-center text-xs sm:text-sm font-bold text-white shadow-lg overflow-hidden"
              title="YLL: 58% (Tử vong sớm)"
            >
              YLL <AnimatedNumber text="58%" duration={1200} />
            </AnimatedProgressBar>
            <AnimatedProgressBar
              width="42%"
              duration={1.2}
              delay={0.15}
              className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded-r-full flex items-center justify-center text-xs sm:text-sm font-bold text-black shadow-lg overflow-hidden"
              title="YLD: 42% (Sống với tàn tật)"
            >
              YLD <AnimatedNumber text="42%" duration={1200} />
            </AnimatedProgressBar>
          </div>

          {/* Legend Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-left">
            <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/30">
              <div className="flex items-center gap-2 text-rose-300 font-semibold text-sm sm:text-base mb-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400 shrink-0" />
                <span>YLL (<AnimatedNumber text="58%" duration={1000} />): Tử vong sớm</span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                Số năm sống mất đi do chết sớm trước tuổi thọ kỳ vọng (Years of Life Lost).
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
              <div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm sm:text-base mb-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shrink-0" />
                <span>YLD (<AnimatedNumber text="42%" duration={1000} />): Sống tàn tật</span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                Số năm sống suy giảm chức năng do thương tật hoặc bệnh mạn tính (Years Lived with Disability).
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* HALE Gap Indicator */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs sm:text-sm mb-1.5">
                <span className="text-white/90">Tuổi thọ trung bình toàn cầu (LE)</span>
                <span className="font-bold text-white font-mono text-sm sm:text-base">
                  <AnimatedNumber text="73.6 năm" duration={1200} />
                </span>
              </div>
              <div className="h-4 sm:h-5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                <AnimatedProgressBar
                  width="100%"
                  duration={1.2}
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs sm:text-sm mb-1.5">
                <span className="text-emerald-300 font-medium">Tuổi thọ khỏe mạnh (HALE)</span>
                <span className="font-bold text-emerald-400 font-mono text-sm sm:text-base">
                  <AnimatedNumber text="65.0 năm" duration={1200} />
                </span>
              </div>
              <div className="h-4 sm:h-5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                <AnimatedProgressBar
                  width="88%"
                  duration={1.2}
                  delay={0.15}
                  className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full"
                />
              </div>
            </div>

            {/* Gap box */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/40 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <LeafIcon className="w-5 h-5 text-amber-400" />
                <span className="text-white/90 font-medium">Khoảng cách gánh nặng bệnh tật:</span>
              </div>
              <span className="font-mono text-amber-300 font-bold text-sm sm:text-base">
                ~<AnimatedNumber text="8.6 năm" duration={1200} /> sống chung với bệnh
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
