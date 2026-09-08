import React from 'react';
import { BentoGrid, BentoItem } from '../BentoGrid';
import { EyeIcon, CheckCircleIcon, SparklesIcon, LeafIcon } from '../Icons';
import { SDG3TargetsBreakdown } from '../charts/SDG3TargetsBreakdown';
import { SDG3ExtendedTargets } from '../charts/SDG3ExtendedTargets';

interface SDG3TargetsSectionProps {
  onOpenSlide: (slideNum: number) => void;
}

export const SDG3TargetsSection: React.FC<SDG3TargetsSectionProps> = ({ onOpenSlide }) => {
  const mainTargets = [
    {
      code: 'Target 3.1',
      title: 'Tử vong mẹ',
      kpi: '< 70 / 100.000',
      kpiLabel: 'Ca sinh sống toàn cầu',
      desc: 'Giảm tỷ lệ tử vong mẹ trên toàn cầu xuống dưới 70 trên 100.000 trẻ sinh sống.',
      colSpan: 1 as const,
      color: 'from-pink-500/20 to-transparent',
    },
    {
      code: 'Target 3.2',
      title: 'Tử vong trẻ em',
      kpi: '≤ 12‰ & ≤ 25‰',
      kpiLabel: 'Sơ sinh & Trẻ dưới 5 tuổi',
      desc: 'Chấm dứt tử vong có thể phòng ngừa ở trẻ sơ sinh (≤12‰) và trẻ em dưới 5 tuổi (≤25‰).',
      colSpan: 1 as const,
      color: 'from-amber-500/20 to-transparent',
    },
    {
      code: 'Target 3.3',
      title: 'Bệnh truyền nhiễm',
      kpi: 'Zero Epidemics',
      kpiLabel: 'Chấm dứt đại dịch',
      desc: 'Chấm dứt các đại dịch AIDS, lao, sốt rét và các bệnh nhiệt đới bị lãng quên; phòng chống viêm gan.',
      colSpan: 2 as const,
      color: 'from-emerald-500/20 to-transparent',
    },
    {
      code: 'Target 3.4',
      title: 'Bệnh không lây nhiễm (NCDs)',
      kpi: 'Giảm 1/3',
      kpiLabel: 'Tử vong sớm trước 2030',
      desc: 'Giảm 1/3 tỷ lệ tử vong sớm do các bệnh không lây nhiễm thông qua phòng ngừa, điều trị và tăng cường sức khỏe tâm thần.',
      colSpan: 2 as const,
      color: 'from-blue-500/20 to-transparent',
    },
    {
      code: 'Target 3.5',
      title: 'Chất gây nghiện',
      kpi: 'Prevention',
      kpiLabel: 'Phòng ngừa lạm dụng',
      desc: 'Tăng cường phòng ngừa và điều trị việc lạm dụng các chất gây nghiện, bao gồm ma túy và rượu bia có hại.',
      colSpan: 1 as const,
      color: 'from-purple-500/20 to-transparent',
    },
    {
      code: 'Target 3.6',
      title: 'Tai nạn giao thông',
      kpi: 'Giảm 50%',
      kpiLabel: 'Thương vong đường bộ',
      desc: 'Đến năm 2030, giảm một nửa số ca tử vong và thương tật do tai nạn giao thông đường bộ trên toàn thế giới.',
      colSpan: 1 as const,
      color: 'from-cyan-500/20 to-transparent',
    },
    {
      code: 'Target 3.7',
      title: 'Sức khỏe sinh sản',
      kpi: 'Phổ cập 100%',
      kpiLabel: 'KHHGĐ & Giáo dục',
      desc: 'Bảo đảm tiếp cận phổ cập các dịch vụ chăm sóc sức khỏe sinh sản, bao gồm Kế hoạch hóa gia đình.',
      colSpan: 1 as const,
      color: 'from-teal-500/20 to-transparent',
    },
    {
      code: 'Target 3.8',
      title: 'Bao phủ y tế toàn dân (UHC)',
      kpi: 'UHC Coverage',
      kpiLabel: 'Bảo vệ tài chính y tế',
      desc: 'Bảo đảm tiếp cận các dịch vụ chăm sóc sức khỏe cơ bản có chất lượng và thuốc, vaccine thiết yếu an toàn.',
      colSpan: 2 as const,
      color: 'from-emerald-500/20 to-transparent',
    },
    {
      code: 'Target 3.9',
      title: 'Ô nhiễm môi trường',
      kpi: 'Clean Environment',
      kpiLabel: 'Hóa chất & Ô nhiễm',
      desc: 'Giảm đáng kể số ca tử vong và bệnh tật do các hóa chất độc hại, ô nhiễm không khí, nước và đất.',
      colSpan: 1 as const,
      color: 'from-indigo-500/20 to-transparent',
    },
  ];

  return (
    <section id="sdg3-targets" className="relative py-28 px-6 lg:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="liquid-glass rounded-full px-3 py-1 text-xs text-emerald-300 font-mono">
              HỆ THỐNG MỤC TIÊU • TƯƠNG ĐƯƠNG SLIDE 5 & 6
            </span>
            <span className="text-white/40 text-xs">| Targets & Means of Implementation</span>
          </div>
          <h2 className="font-heading italic text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-2px]">
            Hệ thống Mục tiêu & Chỉ số SDG 3
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenSlide(5)}
            className="liquid-glass px-3.5 py-2 rounded-full text-xs text-white/80 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <EyeIcon className="w-3.5 h-3.5 text-emerald-300" />
            <span>Slide 5</span>
          </button>
          <button
            type="button"
            onClick={() => onOpenSlide(6)}
            className="liquid-glass px-3.5 py-2 rounded-full text-xs text-white/80 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <EyeIcon className="w-3.5 h-3.5 text-emerald-300" />
            <span>Slide 6</span>
          </button>
        </div>
      </div>

      {/* 6 Core Targets Detailed Visual Dashboard (Slide 3) */}
      <div className="mt-12 mb-16">
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-2">
            <LeafIcon className="w-4 h-4" />
            <span>Phân hệ Mục tiêu Trọng tâm (Target 3.1 — 3.9)</span>
          </div>
          <span className="text-xs text-white/40">Bấm từng thẻ để xem phân tích số liệu & đồ thị</span>
        </div>

        <SDG3TargetsBreakdown showAll={true} />
      </div>

      {/* Bento Grid: 3.1 to 3.9 */}
      <div className="mt-14">
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-2">
            <SparklesIcon className="w-4 h-4" />
            <span>Tổng quan Hệ thống Mục tiêu Mở rộng (Targets 3.1 — 3.9)</span>
          </div>
          <span className="text-xs text-white/40">Di chuột để làm nổi bật thẻ</span>
        </div>

        <BentoGrid>
          {mainTargets.map((target) => (
            <BentoItem
              key={target.code}
              colSpan={target.colSpan}
              className={`bg-gradient-to-br ${target.color} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-emerald-300 font-semibold">
                    {target.code}
                  </span>
                  <span className="text-[11px] text-white/50">{target.kpiLabel}</span>
                </div>
                <div className="font-heading italic text-2xl sm:text-3xl text-white mb-2 tracking-tight">
                  {target.kpi}
                </div>
                <h3 className="text-base font-medium text-white/95 mb-2">{target.title}</h3>
              </div>

              <p className="text-xs text-white/70 font-light leading-relaxed pt-3 border-t border-white/5 mt-4">
                {target.desc}
              </p>
            </BentoItem>
          ))}
        </BentoGrid>
      </div>

      {/* Phân hệ Mục tiêu Bổ trợ (3.7 - 3.9) & Phương tiện Thực thi (3.a - 3.d) (Slide 4) */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-2">
            <CheckCircleIcon className="w-4 h-4" />
            <span>Phân hệ Phương tiện Thực thi (Target 3.a — 3.d)</span>
          </div>
          <span className="text-xs text-white/40">Bấm từng mục bên trái để khám phá số liệu, KPI & biểu đồ chi tiết bên phải</span>
        </div>

        <SDG3ExtendedTargets showAll={true} />
      </div>
    </section>
  );
};
