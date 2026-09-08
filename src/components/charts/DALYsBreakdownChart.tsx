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
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-white/80 font-mono">Công thức DALYs = YLL + YLD</span>
            <span className="text-emerald-400 font-bold">100% Gánh nặng bệnh tật</span>
          </div>

          {/* Stacked Animated Bar */}
          <div className="h-6 w-full bg-black/50 rounded-full overflow-hidden flex p-0.5 border border-white/10 mb-3">
            <AnimatedProgressBar
              width="58%"
              duration={1.2}
              className="h-full bg-gradient-to-r from-rose-500 to-rose-400 rounded-l-full flex items-center justify-center text-[10px] font-bold text-white shadow-lg overflow-hidden"
              title="YLL: 58% (Tử vong sớm)"
            >
              YLL <AnimatedNumber text="58%" duration={1200} />
            </AnimatedProgressBar>
            <AnimatedProgressBar
              width="42%"
              duration={1.2}
              delay={0.15}
              className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded-r-full flex items-center justify-center text-[10px] font-bold text-black shadow-lg overflow-hidden"
              title="YLD: 42% (Sống với tàn tật)"
            >
              YLD <AnimatedNumber text="42%" duration={1200} />
            </AnimatedProgressBar>
          </div>

          {/* Legend Details */}
          <div className="grid grid-cols-2 gap-3 text-left text-xs">
            <div className="p-2.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
              <div className="flex items-center gap-1.5 text-rose-300 font-semibold mb-1">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <span>YLL (<AnimatedNumber text="58%" duration={1000} />): Tử vong sớm</span>
              </div>
              <p className="text-[11px] text-white/70 font-light leading-snug">
                Số năm sống mất đi do chết sớm trước tuổi thọ kỳ vọng (Years of Life Lost).
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
              <div className="flex items-center gap-1.5 text-emerald-300 font-semibold mb-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>YLD (<AnimatedNumber text="42%" duration={1000} />): Sống tàn tật</span>
              </div>
              <p className="text-[11px] text-white/70 font-light leading-snug">
                Số năm sống suy giảm chức năng do thương tật hoặc bệnh mạn tính (Years Lived with Disability).
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* HALE Gap Indicator */}
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-white/80">Tuổi thọ trung bình toàn cầu</span>
                <span className="font-bold text-white font-mono">
                  <AnimatedNumber text="73.6 năm" duration={1200} />
                </span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <AnimatedProgressBar
                  width="100%"
                  duration={1.2}
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-emerald-300 font-medium">Tuổi thọ khỏe mạnh (HALE)</span>
                <span className="font-bold text-emerald-400 font-mono">
                  <AnimatedNumber text="65.0 năm" duration={1200} />
                </span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <AnimatedProgressBar
                  width="88%"
                  duration={1.2}
                  delay={0.15}
                  className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full"
                />
              </div>
            </div>

            {/* Gap box */}
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <LeafIcon className="w-4 h-4 text-amber-400" />
                <span className="text-white/90">Khoảng cách gánh nặng bệnh tật:</span>
              </div>
              <span className="font-mono text-amber-300 font-bold">
                ~<AnimatedNumber text="8.6 năm" duration={1200} /> sống yếu
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
