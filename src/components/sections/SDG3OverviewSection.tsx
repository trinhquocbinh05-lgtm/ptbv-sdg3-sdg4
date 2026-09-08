import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulseIcon, AlertTriangleIcon, EyeIcon, NetworkIcon } from '../Icons';
import { DALYsBreakdownChart } from '../charts/DALYsBreakdownChart';
import { GlobalCrisisBarChart } from '../charts/GlobalCrisisBarChart';
import { SDG3LinkageNetworkChart } from '../charts/SDG3LinkageNetworkChart';
import { SDG17ReferenceList } from '../charts/SDG17ReferenceList';

interface SDG3OverviewSectionProps {
  onOpenSlide: (slideNum: number) => void;
}

export const SDG3OverviewSection: React.FC<SDG3OverviewSectionProps> = ({ onOpenSlide }) => {
  const concepts = [
    {
      code: 'DALYs',
      title: 'Disability-Adjusted Life Years',
      desc: 'Số năm sống khỏe mạnh mất đi do tử vong sớm hoặc bệnh tật.',
      detail: 'Thước đo gánh nặng bệnh tật tổng hợp, kết hợp giữa số năm mất đi do chết sớm (YLL) và số năm sống chung với bệnh tật (YLD).',
      tag: 'Chỉ số đo lường',
    },
    {
      code: 'Life Expectancy',
      title: 'Tuổi thọ & HALE',
      desc: 'Tuổi thọ trung bình & tuổi thọ khỏe mạnh của dân số.',
      detail: 'Không chỉ kéo dài thời gian sống của con người, SDG 3 chú trọng nâng cao chất lượng năm sống không bị thương tật hay suy giảm thể chất.',
      tag: 'Chất lượng sống',
    },
    {
      code: 'HDI',
      title: 'Human Development Index',
      desc: 'Sức khỏe chiếm 1/3 cấu thành chỉ số phát triển con người.',
      detail: 'Cùng với Giáo dục (SDG 4) và Thu nhập bình quân, Sức khỏe là trụ cột cốt lõi xác định mức độ thịnh vượng và hạnh phúc của quốc gia.',
      tag: 'Trụ cột HDI',
    },
  ];

  const crisisMetrics = [
    {
      title: 'Tử vong mẹ và bé',
      stat: '223 / 100k',
      sub: '5 triệu trẻ dưới 5 tuổi',
      desc: 'Tỷ lệ tử vong mẹ toàn cầu ở mức 223/100.000 ca sinh sống; khoảng 5 triệu trẻ em dưới 5 tuổi tử vong mỗi năm vì các nguyên nhân có thể ngăn ngừa.',
      badge: 'Cấp bách',
    },
    {
      title: 'Khủng hoảng tiêm chủng',
      stat: '81%',
      sub: '25 triệu trẻ bỏ lỡ',
      desc: 'Tỷ lệ bao phủ tiêm chủng cơ bản sụt giảm xuống còn 81%, khiến 25 triệu trẻ em trên thế giới bỏ lỡ các liều vaccine thiết yếu cứu sống tính mạng.',
      badge: 'Báo động',
    },
    {
      title: 'Bệnh truyền nhiễm',
      stat: '1.6M & 247M',
      sub: 'Lao & Sốt rét bùng phát',
      desc: 'Tử vong do bệnh lao tăng vọt lên 1.6 triệu ca; 247 triệu ca sốt rét mới được ghi nhận, làm đảo ngược tiến trình phòng chống nhiều năm qua.',
      badge: 'Nguy cơ tái bùng phát',
    },
  ];

  return (
    <section id="sdg3-overview" className="relative py-28 px-6 lg:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="liquid-glass rounded-full px-3 py-1 text-xs text-emerald-300 font-mono">
              PHẦN I • TƯƠNG ĐƯƠNG SLIDE 2 & 5
            </span>
            <span className="text-white/40 text-xs">| Good Health and Well-being</span>
          </div>
          <h2 className="font-heading italic text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-2px]">
            SDG 3: Đảm bảo sức khỏe tốt và cuộc sống hạnh phúc
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenSlide(2)}
            className="liquid-glass px-3 py-1.5 rounded-full text-xs text-white/80 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <EyeIcon className="w-3.5 h-3.5 text-emerald-300" />
            <span>Slide 2</span>
          </button>
          <button
            type="button"
            onClick={() => onOpenSlide(3)}
            className="liquid-glass px-3 py-1.5 rounded-full text-xs text-white/80 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <EyeIcon className="w-3.5 h-3.5 text-emerald-300" />
            <span>Slide 3</span>
          </button>
          <button
            type="button"
            onClick={() => onOpenSlide(4)}
            className="liquid-glass px-3 py-1.5 rounded-full text-xs text-white/80 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <EyeIcon className="w-3.5 h-3.5 text-emerald-300" />
            <span>Slide 4</span>
          </button>
        </div>
      </div>

      {/* Wedding Cake Model & 3Es Theory Card (Slide 3) */}
      <div className="mt-12 liquid-glass-natural rounded-2xl p-6 border border-emerald-500/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 bg-white/95 rounded-xl p-4 shadow-inner flex flex-col items-center justify-center">
            <img
              src="/slides/wedding_cake.png"
              alt="Mô hình Bánh cưới SDGs - Stockholm Resilience Centre"
              className="w-full max-h-[240px] object-contain"
            />
          </div>
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-emerald-300 uppercase">Khung Lý Thuyết (Slide 3)</div>
            <h3 className="text-2xl font-heading italic text-white">Mô hình Bánh cưới SDGs (Wedding Cake Model)</h3>
            <p className="text-xs text-white/80 font-light leading-relaxed space-y-1">
              <span>• <strong>3Es:</strong> Environment – Equity – Economy (Lisa Benton-Short)</span><br />
              <span>• <strong>SDG 3:</strong> Sức khỏe là quyền con người, không phải đặc quyền</span><br />
              <span>• <strong>Phát triển bền vững:</strong> Công bằng y tế + Bảo vệ môi trường</span>
            </p>
            <div className="text-[11px] text-emerald-300/80 font-mono pt-1">
              SDG 3 &amp; SDG 4 nằm tại tầng trung tâm Xã hội (Society), được nâng đỡ bởi nền tảng Sinh quyển (Biosphere).
            </div>
          </div>
        </div>
      </div>

      {/* 3 Concept Cards */}
      <div className="mt-14">
        <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-6 flex items-center gap-2">
          <HeartPulseIcon className="w-4 h-4" />
          <span>Khái niệm & Thước đo cốt lõi</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {concepts.map((card, idx) => (
            <motion.div
              key={card.code}
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' as const, delay: idx * 0.15 }}
              className="liquid-glass rounded-[1.25rem] p-6 flex flex-col justify-between hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-emerald-300 liquid-glass rounded-full px-2.5 py-0.5 font-medium">
                    {card.tag}
                  </span>
                  <span className="font-heading italic text-2xl text-white/60">0{idx + 1}</span>
                </div>
                <h3 className="font-heading italic text-3xl text-white mb-1">{card.code}</h3>
                <p className="text-xs text-white/50 mb-4 font-mono">{card.title}</p>
                <p className="text-sm text-white/90 font-light leading-relaxed mb-4">
                  {card.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs text-white/60 leading-relaxed font-light">
                {card.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Interactive DALYs & HALE Chart */}
        <div className="mt-8">
          <DALYsBreakdownChart />
        </div>
      </div>

      {/* Global Crisis Alert Box (Slide 5) */}
      <motion.div
        initial={{ filter: 'blur(10px)', opacity: 0, y: 30 }}
        whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' as const }}
        className="mt-16 liquid-glass-strong rounded-[1.5rem] p-8 lg:p-10 border border-rose-500/20 shadow-2xl relative overflow-hidden"
      >
        {/* Ambient red accent glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="liquid-glass h-10 w-10 rounded-xl flex items-center justify-center text-rose-400 bg-rose-950/30">
                <AlertTriangleIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-rose-400 font-semibold">
                  Cảnh báo toàn cầu • Báo cáo Tiến độ 2024
                </span>
                <h3 className="font-heading italic text-2xl sm:text-3xl text-white">
                  Bức tranh khủng hoảng y tế toàn cầu (Global Crisis Alert)
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => onOpenSlide(7)}
                className="liquid-glass rounded-full px-3.5 py-1.5 text-xs text-white/80 hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                <EyeIcon className="w-3.5 h-3.5 text-rose-300" />
                <span>Slide 7</span>
              </button>
              <button
                type="button"
                onClick={() => onOpenSlide(8)}
                className="liquid-glass rounded-full px-3.5 py-1.5 text-xs text-white/80 hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                <EyeIcon className="w-3.5 h-3.5 text-rose-300" />
                <span>Slide 8</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {crisisMetrics.map((crisis) => (
              <div
                key={crisis.title}
                className="liquid-glass rounded-xl p-5 border border-white/5 flex flex-col justify-between hover:border-rose-500/30 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded-full font-medium">
                      {crisis.badge}
                    </span>
                    <span className="text-xs text-white/40">{crisis.sub}</span>
                  </div>
                  <div className="font-heading italic text-3xl lg:text-4xl text-white mb-2">
                    {crisis.stat}
                  </div>
                  <h4 className="font-medium text-sm text-white/90 mb-2">{crisis.title}</h4>
                </div>
                <p className="text-xs text-white/70 font-light leading-relaxed mt-2 pt-3 border-t border-white/5">
                  {crisis.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Global Crisis Progress & Gap Bar Chart */}
          <div className="mt-8">
            <GlobalCrisisBarChart />
          </div>
        </div>
      </motion.div>

      {/* SDG 3 Ecosystem Linkage & Double Burden Section (Slide 6) */}
      <motion.div
        initial={{ filter: 'blur(10px)', opacity: 0, y: 30 }}
        whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' as const }}
        className="mt-16 liquid-glass-strong rounded-[1.5rem] p-8 lg:p-10 border border-emerald-500/20 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="liquid-glass h-10 w-10 rounded-xl flex items-center justify-center text-emerald-400 bg-emerald-950/30">
                <NetworkIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                  Tính liên kết hệ thống • Báo cáo Chiến lược
                </span>
                <h3 className="font-heading italic text-2xl sm:text-3xl text-white">
                  Sơ đồ Lan tỏa: SDG 3 và Hệ sinh thái SDGs
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenSlide(10)}
              className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/80 hover:text-white flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-emerald-300" />
              <span>Đối chiếu Slide 10</span>
            </button>
          </div>

          <p className="text-sm text-white/80 font-light leading-relaxed mb-6 max-w-3xl">
            Sức khỏe tốt (SDG 3) là tâm điểm tương hỗ đa chiều trong chương trình Nghị sự 2030. Mối liên kết chia làm 2 vòng: Vòng trong (Quan hệ Tích cực Mạnh với SDG 1, 2, 4, 6) và Vòng ngoài (Quan hệ Tích cực với SDG 8, 11, 13), đồng thời giải quyết thách thức Gánh nặng kép (Double Burden).
          </p>

          <SDG3LinkageNetworkChart />
          <SDG17ReferenceList currentPrimarySDG={3} />
        </div>
      </motion.div>
    </section>
  );
};
