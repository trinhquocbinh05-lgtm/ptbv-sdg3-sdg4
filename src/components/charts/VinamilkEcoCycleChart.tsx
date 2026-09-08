import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LeafIcon, BuildingIcon, CheckCircleIcon, SparklesIcon } from '../Icons';

export const VinamilkEcoCycleChart: React.FC = () => {
  const [activeCycle, setActiveCycle] = useState(0);

  const steps = [
    {
      title: 'Trang trại Green Farm',
      tag: 'Nông nghiệp sinh thái',
      kpi: '100% Năng lượng sạch',
      desc: 'Sử dụng công nghệ Biogas xử lý chất thải thành phân bón hữu cơ và điện năng, trung hòa khí methane.',
      icon: LeafIcon,
      color: '#10B981',
    },
    {
      title: 'Nhà máy Net Zero',
      tag: 'Sản xuất bền vững',
      kpi: 'Trung hòa Carbon',
      desc: 'Nhà máy sữa Vinamilk Nghệ An và Nước giải khát Việt Nam đạt chứng nhận trung hòa Carbon PAS 2060.',
      icon: BuildingIcon,
      color: '#06B6D4',
    },
    {
      title: 'Dinh dưỡng Đột phá',
      tag: 'Sức khỏe & Miễn dịch',
      kpi: '42M+ Ly Sữa',
      desc: 'Sữa chua men sống Probi tăng đề kháng; Quỹ sữa Vươn cao Việt Nam bảo trợ thể trạng 500.000 trẻ em nghèo.',
      icon: SparklesIcon,
      color: '#F59E0B',
    },
    {
      title: 'Cánh rừng Net Zero',
      tag: 'Bù đắp phát thải',
      kpi: 'Hấp thụ CO2 lâu dài',
      desc: 'Hợp tác Bộ TN&MT trồng hàng triệu cây xanh tại các vườn quốc gia, hướng đến mục tiêu Phát thải ròng bằng 0 vào 2050.',
      icon: CheckCircleIcon,
      color: '#84CC16',
    },
  ];

  const current = steps[activeCycle];
  const IconComponent = current.icon;

  return (
    <div className="liquid-glass-natural rounded-2xl p-5 border border-emerald-500/20 shadow-xl">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <LeafIcon className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
            Vòng tuần hoàn Dinh dưỡng Bền vững & Net Zero Vinamilk
          </span>
        </div>
        <span className="text-[11px] text-white/50">UN Global Compact Action</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Step Selector Pills (5 cols) */}
        <div className="md:col-span-5 space-y-2.5">
          {steps.map((s, idx) => {
            const isSel = idx === activeCycle;
            return (
              <button
                key={s.title}
                type="button"
                onClick={() => setActiveCycle(idx)}
                className={`w-full p-3 sm:p-3.5 rounded-xl text-left transition-all cursor-pointer flex items-center justify-between border ${
                  isSel
                    ? 'bg-white/15 border-emerald-400 shadow-md scale-[1.02]'
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-7 w-7 rounded-lg flex items-center justify-center font-mono text-xs sm:text-sm font-bold"
                    style={{
                      backgroundColor: isSel ? s.color : 'rgba(255,255,255,0.1)',
                      color: isSel ? '#000' : '#fff',
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-white">{s.title}</div>
                    <div className="text-xs text-white/60 font-mono">{s.tag}</div>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-mono font-bold" style={{ color: s.color }}>
                  {s.kpi}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Focus Card (7 cols) */}
        <div className="md:col-span-7">
          <motion.div
            key={current.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="liquid-glass rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span
                  className="text-xs sm:text-sm font-mono px-3 py-1 rounded-full font-semibold"
                  style={{
                    backgroundColor: `${current.color}20`,
                    color: current.color,
                  }}
                >
                  {current.tag}
                </span>
                <div
                  className="h-9 w-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${current.color}30`, color: current.color }}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
              </div>

              <h4 className="font-heading italic text-2xl sm:text-3xl text-white mb-1.5">{current.title}</h4>
              <div className="font-mono text-sm sm:text-base font-bold mb-3" style={{ color: current.color }}>
                Chỉ số nổi bật: {current.kpi}
              </div>
              <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed">{current.desc}</p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50 font-mono mt-4">
              <span>Đóng góp then chốt: SDG 3 & SDG 12</span>
              <span>Lộ trình Net Zero 2050</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
