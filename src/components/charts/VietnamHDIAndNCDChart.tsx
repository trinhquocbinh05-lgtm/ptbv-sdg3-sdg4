import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const VietnamHDIAndNCDChart: React.FC = () => {
  const [selectedCause, setSelectedCause] = useState<string>('NCDs');

  const causes = [
    {
      id: 'NCDs',
      name: 'Bệnh không lây (NCDs)',
      pct: 70,
      color: '#F43F5E',
      desc: 'Tim mạch (31%), Ung thư (19%), Hô hấp mạn (7%), Đái tháo đường (4%) & bệnh khác.',
    },
    {
      id: 'Injury',
      name: 'Tai nạn thương tích',
      pct: 19,
      color: '#F59E0B',
      desc: 'Tai nạn giao thông, thương tích lao động và tai nạn sinh hoạt.',
    },
    {
      id: 'Infectious',
      name: 'Bệnh truyền nhiễm & Sản khoa',
      pct: 11,
      color: '#10B981',
      desc: 'Viêm phổi, sốt xuất huyết, bệnh lao, nhiễm trùng chu sinh.',
    },
  ];

  const activeItem = causes.find((c) => c.id === selectedCause) || causes[0];

  return (
    <div className="liquid-glass-natural rounded-2xl p-5 sm:p-6 lg:p-7 border border-white/10 shadow-xl">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
        <span className="text-xs sm:text-sm font-mono font-bold text-emerald-300 uppercase tracking-wider">
          Biểu đồ Cơ cấu Tử vong & Thách thức Y tế VN
        </span>
        <span className="text-xs text-white/50 font-mono">WHO & Bộ Y Tế</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        {/* SVG Donut Chart (5 cols) */}
        <div className="sm:col-span-5 flex flex-col items-center justify-center relative">
          <svg viewBox="0 0 120 120" className="w-40 h-40 sm:w-48 sm:h-48 transform -rotate-90">
            {/* Background ring */}
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="transparent"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="18"
            />
            {/* NCDs 70% (dasharray = 2 * PI * 45 = 282.74; 70% = 197.9) */}
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="transparent"
              stroke="#F43F5E"
              strokeWidth="18"
              strokeDasharray="197.9 282.74"
              strokeDashoffset="0"
              className="transition-all duration-700 cursor-pointer hover:stroke-rose-400"
              onClick={() => setSelectedCause('NCDs')}
            />
            {/* Injury 19% (19% = 53.7, offset = -197.9) */}
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="transparent"
              stroke="#F59E0B"
              strokeWidth="18"
              strokeDasharray="53.7 282.74"
              strokeDashoffset="-197.9"
              className="transition-all duration-700 cursor-pointer hover:stroke-amber-400"
              onClick={() => setSelectedCause('Injury')}
            />
            {/* Infectious 11% (11% = 31.1, offset = -251.6) */}
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="transparent"
              stroke="#10B981"
              strokeWidth="18"
              strokeDasharray="31.1 282.74"
              strokeDashoffset="-251.6"
              className="transition-all duration-700 cursor-pointer hover:stroke-emerald-400"
              onClick={() => setSelectedCause('Infectious')}
            />
          </svg>

          {/* Center Text inside Donut */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <span className="font-heading italic text-3xl sm:text-4xl font-bold text-white leading-none">
              {activeItem.pct}%
            </span>
            <span className="text-xs text-white/60 font-mono mt-1">Tử vong</span>
          </div>
        </div>

        {/* Breakdown details (7 cols) */}
        <div className="sm:col-span-7 space-y-3">
          {causes.map((c) => {
            const isSelected = c.id === selectedCause;
            return (
              <div
                key={c.id}
                onClick={() => setSelectedCause(c.id)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white/10 border-white/30 shadow-md'
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex items-center justify-between text-sm sm:text-base mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: c.color }}
                    />
                    <span className="font-semibold text-white">{c.name}</span>
                  </div>
                  <span className="font-mono font-bold text-base sm:text-lg" style={{ color: c.color }}>
                    {c.pct}%
                  </span>
                </div>
                {isSelected && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-xs sm:text-sm text-white/85 font-light pl-5 pt-1.5 border-t border-white/5 mt-1.5 leading-relaxed"
                  >
                    {c.desc}
                  </motion.p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
