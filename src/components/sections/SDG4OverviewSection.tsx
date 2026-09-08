import React from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, GraduationCapIcon, SparklesIcon } from '../Icons';

interface SDG4OverviewSectionProps {
  onOpenSlide: (slideNum: number) => void;
}

export const SDG4OverviewSection: React.FC<SDG4OverviewSectionProps> = ({ onOpenSlide }) => {
  return (
    <section id="sdg4-overview" className="relative py-28 px-6 lg:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="liquid-glass rounded-full px-3 py-1 text-xs text-rose-300 font-mono">
              PHẦN II • TƯƠNG ĐƯƠNG SLIDE 12, 13 & 14
            </span>
            <span className="text-white/40 text-xs">| Quality Education & Conceptual Framework</span>
          </div>
          <h2 className="font-heading italic text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-2px]">
            SDG 4: Đảm bảo giáo dục có chất lượng
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {[12, 13, 14].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => onOpenSlide(num)}
              className="liquid-glass px-3.5 py-1.5 rounded-full text-xs text-white/80 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-300" />
              <span>Slide {num}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Intro Definition Banner (Slide 13) */}
      <div className="mt-12 liquid-glass-strong rounded-[1.5rem] p-6 sm:p-8 border-l-4 border-rose-400">
        <div className="flex items-start gap-4">
          <div className="liquid-glass h-12 w-12 rounded-2xl flex items-center justify-center text-rose-300 flex-shrink-0">
            <GraduationCapIcon className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-rose-300 mb-1">
              Định Nghĩa Chính Thức Liên Hợp Quốc • Slide 13
            </div>
            <p className="text-lg sm:text-xl text-white font-light italic leading-relaxed">
              “Đảm bảo nền giáo dục có chất lượng, công bằng, toàn diện và thúc đẩy cơ hội học tập suốt đời cho tất cả mọi người”
            </p>
          </div>
        </div>
      </div>

      {/* 3Es Framework & Equity Focus (Slide 13) */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-glass rounded-[1.25rem] p-6 border-t-2 border-rose-400 flex flex-col justify-between"
        >
          <div>
            <div className="text-xs text-rose-300 font-mono mb-1">Mô hình 3Es Lisa Benton-Short</div>
            <h3 className="text-2xl font-heading italic text-white mb-3">
              Trụ Cột Equity — Công Cụ Bình Đẳng Hóa
            </h3>
            <p className="text-sm text-white/85 font-light leading-relaxed mb-4">
              Trong mô hình 3Es (Environment – Equity – Economy), giáo dục thuộc về <strong>trụ cột Công bằng (Equity)</strong> và được tôn vinh là “công cụ bình đẳng hóa” (Great Equalizer) vĩ đại nhất của xã hội.
            </p>
          </div>
          <div className="liquid-glass rounded-xl p-3.5 border border-white/10 text-xs text-rose-200 font-light">
            Cơ hội giáo dục bình đẳng quyết định trực tiếp đến sự phân hóa kinh tế & khả năng dịch chuyển xã hội (social mobility).
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="liquid-glass rounded-[1.25rem] p-6 border-t-2 border-amber-400 flex flex-col justify-between"
        >
          <div>
            <div className="text-xs text-amber-300 font-mono mb-1">Cơ chế Tác động Bền vững</div>
            <h3 className="text-2xl font-heading italic text-white mb-3">
              Thu Hẹp Bất Bình Đẳng Đa Chiều
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-light">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">•</span>
                <span>Phá vỡ vòng luẩn quẩn đói nghèo truyền kiếp của các thế hệ yếu thế.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">•</span>
                <span>Nâng cao nhận thức bảo vệ sinh thái (Environment) và quyền con người.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">•</span>
                <span>Cung ứng nguồn nhân lực chất lượng cao thúc đẩy nền kinh tế tri thức (Economy).</span>
              </li>
            </ul>
          </div>
          <div className="liquid-glass rounded-xl p-3.5 border border-white/10 text-xs text-amber-200 font-light">
            Phương trình: Phát triển giáo dục = Nâng cao vốn con người + Công bằng xã hội.
          </div>
        </motion.div>
      </div>

      {/* Academic Measurement Tools & Formula (Slide 14) */}
      <div className="mt-14">
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs uppercase tracking-widest text-rose-400 font-semibold flex items-center gap-2">
            <SparklesIcon className="w-4 h-4" />
            <span>Thước Đo Đo Lường Giáo Dục & Công Thức Học Thuật (Slide 14)</span>
          </div>
          <span className="text-xs text-white/40 font-mono">Chuẩn UNESCO & UNDP</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Tỉ lệ ghi danh GER vs NER */}
          <div className="liquid-glass-natural rounded-[1.5rem] p-6 border-t-2 border-rose-400 shadow-xl">
            <div className="text-xs font-mono text-rose-300 mb-1">Thước đo Tiếp cận</div>
            <h3 className="text-2xl font-heading italic text-white mb-3">
              Tỉ Lệ Ghi Danh (Enrollment)
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-4">
              Đo lường mức độ tiếp cận giáo dục qua các cấp học và phát hiện vấn đề bất cập:
            </p>
            <div className="space-y-3">
              <div className="liquid-glass rounded-xl p-3.5 border border-white/10">
                <div className="text-xs font-mono text-rose-300 font-semibold mb-1">
                  GER (Gross Enrollment Ratio) — Tỉ lệ nhập học gộp:
                </div>
                <div className="text-xs text-white/75 font-light leading-relaxed">
                  Tổng số học sinh nhập học bất kể tuổi so với dân số trong độ tuổi chuẩn.
                </div>
              </div>
              <div className="liquid-glass rounded-xl p-3.5 border border-white/10">
                <div className="text-xs font-mono text-amber-300 font-semibold mb-1">
                  NER (Net Enrollment Ratio) — Tỉ lệ nhập học thuần:
                </div>
                <div className="text-xs text-white/75 font-light leading-relaxed">
                  Tỷ lệ học sinh đúng tuổi đang theo học, phản ánh chính xác hiện tượng lưu ban, đi học muộn & nguy cơ bỏ học.
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: HDI Education Component Formula */}
          <div className="liquid-glass-natural rounded-[1.5rem] p-6 border-t-2 border-amber-400 shadow-xl">
            <div className="text-xs font-mono text-amber-300 mb-1">Chỉ số Phát triển Con người (UNDP)</div>
            <h3 className="text-2xl font-heading italic text-white mb-3">
              HDI: Chỉ Số Thành Phần Giáo Dục
            </h3>
            <div className="liquid-glass rounded-xl p-3 text-center border border-amber-400/30 mb-4">
              <span className="font-mono text-xs sm:text-sm text-amber-200 font-medium">
                I_Education = [ (EYS / 18) × (MYS / 15) ]^(1/2) / 0.971
              </span>
            </div>
            <div className="space-y-3">
              <div className="liquid-glass rounded-xl p-3.5 border border-white/10">
                <div className="text-xs font-mono text-amber-300 font-semibold mb-1">
                  EYS (Expected Years of Schooling):
                </div>
                <div className="text-xs text-white/75 font-light leading-relaxed">
                  Số năm đi học kỳ vọng của trẻ em bắt đầu tuổi đến trường. <strong>Chuẩn tối đa thế giới: 18 năm</strong>.
                </div>
              </div>
              <div className="liquid-glass rounded-xl p-3.5 border border-white/10">
                <div className="text-xs font-mono text-teal-300 font-semibold mb-1">
                  MYS (Mean Years of Schooling):
                </div>
                <div className="text-xs text-white/75 font-light leading-relaxed">
                  Số năm đi học trung bình của người trưởng thành từ 25 tuổi trở lên. <strong>Chuẩn tối đa thế giới: 15 năm</strong>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
