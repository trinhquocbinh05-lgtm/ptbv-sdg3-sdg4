import React from 'react';
import { AlertTriangleIcon } from '../Icons';
import { AnimatedNumber, AnimatedProgressBar } from '../AnimatedCounter';

export const GlobalCrisisBarChart: React.FC = () => {
  const bars = [
    {
      metric: 'Tử vong mẹ (trên 100k ca sinh)',
      current: 223,
      target: 70,
      unit: '/100k',
      note: 'Cao gấp 3.2 lần ngưỡng an toàn của SDG 3',
      color: 'from-rose-500 to-rose-600',
    },
    {
      metric: 'Bao phủ tiêm chủng toàn cầu',
      current: 81,
      target: 95,
      unit: '%',
      note: 'Sụt giảm từ 86% xuống 81%, 25 triệu trẻ bỏ lỡ',
      color: 'from-amber-500 to-orange-500',
    },
    {
      metric: 'Tử vong do Lao hàng năm',
      current: 1.6,
      target: 0.2,
      unit: 'Triệu ca',
      note: 'Gia tăng trở lại mức cao nhất trong 1 thập kỷ',
      color: 'from-purple-500 to-rose-500',
    },
  ];

  return (
    <div className="liquid-glass rounded-2xl p-5 border border-rose-500/30 shadow-xl">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <AlertTriangleIcon className="w-4 h-4 text-rose-400" />
          <span className="text-xs font-mono font-bold text-rose-300 uppercase tracking-wider">
            Biểu đồ Báo động Khủng hoảng Y tế Toàn cầu
          </span>
        </div>
        <span className="text-[11px] text-white/50">UN SDG Progress Report 2024</span>
      </div>

      <div className="space-y-4">
        {bars.map((item) => {
          const ratio = Math.min(100, Math.round((item.target / item.current) * 100));
          return (
            <div key={item.metric} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-white/90 font-medium">{item.metric}</span>
                <div className="flex items-center gap-2 font-mono">
                  <span className="text-rose-400 font-bold">
                    Hiện tại: <AnimatedNumber text={`${item.current}${item.unit}`} duration={1100} />
                  </span>
                  <span className="text-white/40">|</span>
                  <span className="text-emerald-400">
                    Mục tiêu: <AnimatedNumber text={`${item.target}${item.unit}`} duration={1100} />
                  </span>
                </div>
              </div>

              {/* Progress visualizer */}
              <div className="h-2.5 w-full bg-black/60 rounded-full overflow-hidden flex p-0.5 border border-white/10 relative">
                <AnimatedProgressBar
                  width={`${ratio}%`}
                  duration={1.2}
                  className="h-full bg-emerald-400 rounded-full z-10"
                  title={`Tiến độ đạt được: ${ratio}%`}
                />
                <div
                  className={`h-full bg-gradient-to-r ${item.color} rounded-full absolute inset-0 opacity-40`}
                />
              </div>

              <div className="flex justify-between items-center text-[10px] text-white/60 mt-1">
                <span>{item.note}</span>
                <span className="font-mono text-amber-300">
                  Khoảng cách: <AnimatedNumber text={`${(item.current - item.target).toFixed(1)} ${item.unit}`} duration={1100} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
