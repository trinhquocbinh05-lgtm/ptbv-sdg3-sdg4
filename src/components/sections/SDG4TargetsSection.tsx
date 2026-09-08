import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EyeIcon, ChevronDownIcon, BuildingIcon, SparklesIcon, GraduationCapIcon } from '../Icons';

interface SDG4TargetsSectionProps {
  onOpenSlide: (slideNum: number) => void;
}

export const SDG4TargetsSection: React.FC<SDG4TargetsSectionProps> = ({ onOpenSlide }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const targets = [
    {
      code: 'Target 4.1',
      title: 'Tiểu học & Trung học miễn phí',
      summary: 'Hoàn thành giáo dục tiểu học và trung học cơ sở & phổ thông miễn phí, công bằng, chất lượng.',
      detail: 'Đến năm 2030, đảm bảo tất cả trẻ em gái và trai đều hoàn thành giáo dục tiểu học và trung học miễn phí, bình đẳng và có chất lượng, mang lại kết quả học tập thực chất và hiệu quả.',
      tag: 'Phổ cập cơ bản',
    },
    {
      code: 'Target 4.2',
      title: 'Giáo dục mầm non chất lượng',
      summary: 'Tiếp cận chăm sóc mầm non và giáo dục tiền tiểu học toàn diện.',
      detail: 'Bảo đảm rằng tất cả các bé trai và bé gái đều được tiếp cận với sự phát triển, chăm sóc trẻ thơ có chất lượng và giáo dục mầm non để sẵn sàng bước vào lớp một.',
      tag: 'Giai đoạn vàng',
    },
    {
      code: 'Target 4.3',
      title: 'Giáo dục nghề nghiệp & Đại học bình đẳng',
      summary: 'Tiếp cận bình đẳng giáo dục kỹ thuật, dạy nghề và giáo dục đại học với chi phí hợp lý.',
      detail: 'Đảm bảo khả năng tiếp cận bình đẳng cho tất cả phụ nữ và nam giới đối với nền giáo dục kỹ thuật, giáo dục nghề nghiệp và đại học có chất lượng và chi phí phải chăng.',
      tag: 'Giáo dục bậc cao',
    },
    {
      code: 'Target 4.4',
      title: 'Kỹ năng nghề nghiệp & Khởi nghiệp',
      summary: 'Tăng đáng kể số lượng thanh thiếu niên và người trưởng thành có kỹ năng làm việc.',
      detail: 'Trang bị các kỹ năng kỹ thuật và nghề nghiệp thiết yếu cho việc làm, công việc thỏa đáng, tự tạo việc làm và tinh thần khởi nghiệp sáng tạo trong kỷ nguyên số.',
      tag: 'Kỹ năng thực tiễn',
    },
    {
      code: 'Target 4.5',
      title: 'Xóa bỏ bất bình đẳng trong giáo dục',
      summary: 'Bảo đảm quyền tiếp cận giáo dục bình đẳng cho phụ nữ và các nhóm yếu thế.',
      detail: 'Xóa bỏ chênh lệch giới trong giáo dục và đảm bảo tiếp cận bình đẳng ở tất cả các cấp học cho người khuyết tật, người dân tộc bản địa và trẻ em trong hoàn cảnh khó khăn.',
      tag: 'Bình đẳng & Hòa nhập',
    },
    {
      code: 'Target 4.6',
      title: 'Chuẩn biết chữ & Toán học phổ quát',
      summary: 'Đảm bảo thanh thiếu niên và người trưởng thành đạt chuẩn đọc viết và tính toán.',
      detail: 'Đến năm 2030, đảm bảo rằng tất cả thanh niên và một tỷ lệ đáng kể người trưởng thành (cả nam lẫn nữ) đạt được năng lực biết đọc, biết viết và làm các phép tính cơ bản.',
      tag: 'Năng lực cốt lõi',
    },
    {
      code: 'Target 4.7',
      title: 'Kiến thức phát triển bền vững',
      summary: 'Trang bị tri thức về phát triển bền vững, quyền con người và lối sống xanh.',
      detail: 'Đảm bảo mọi người học lĩnh hội được kiến thức và kỹ năng cần thiết để thúc đẩy phát triển bền vững, bao gồm giáo dục về lối sống bền vững, bình đẳng giới, văn hóa hòa bình và quyền công dân toàn cầu.',
      tag: 'Tư duy toàn cầu',
    },
  ];

  const means = [
    {
      code: 'Target 4.a',
      title: 'Cơ sở giáo dục an toàn & hòa nhập',
      desc: 'Xây dựng và nâng cấp các cơ sở giáo dục an toàn, thân thiện với trẻ em, không bạo lực và bình đẳng giới.',
      metric: 'Điện lưới, nước sạch, nhà vệ sinh riêng biệt cho nam/nữ, lối đi xe lăn cho người khuyết tật.',
      icon: BuildingIcon,
      color: 'border-rose-400',
    },
    {
      code: 'Target 4.b',
      title: 'Mở rộng học bổng quốc tế STEM',
      desc: 'Mở rộng đáng kể số lượng học bổng dành cho các nước đang phát triển tiếp cận giáo dục bậc cao tại các quốc gia tiên tiến.',
      metric: 'Chương trình đào tạo STEM, công nghệ thông tin, trí tuệ nhân tạo và y sinh quốc tế.',
      icon: SparklesIcon,
      color: 'border-amber-400',
    },
    {
      code: 'Target 4.c',
      title: 'Chuẩn hóa & Tăng nguồn cung giáo viên',
      desc: 'Tăng đáng kể nguồn cung giáo viên có đủ trình độ chuyên môn thông qua hợp tác quốc tế về đào tạo sư phạm.',
      metric: 'Tỷ lệ giáo viên qua đào tạo sư phạm chính quy đạt chuẩn năng lực quốc gia.',
      icon: GraduationCapIcon,
      color: 'border-teal-400',
    },
  ];

  return (
    <section id="sdg4-targets" className="relative py-28 px-6 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="liquid-glass rounded-full px-3 py-1 text-xs text-rose-300 font-mono">
              HỆ THỐNG MỤC TIÊU • TƯƠNG ĐƯƠNG SLIDE 15 & 16
            </span>
            <span className="text-white/40 text-xs">| Quality Education Targets (4.1—4.7 & 4.a—4.c)</span>
          </div>
          <h2 className="font-heading italic text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-2px]">
            Hệ thống Mục tiêu & Phương tiện SDG 4
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenSlide(15)}
            className="liquid-glass px-4 py-2 rounded-full text-xs text-white/80 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <EyeIcon className="w-3.5 h-3.5 text-rose-300" />
            <span>Slide 15</span>
          </button>
          <button
            type="button"
            onClick={() => onOpenSlide(16)}
            className="liquid-glass px-4 py-2 rounded-full text-xs text-white/80 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <EyeIcon className="w-3.5 h-3.5 text-rose-300" />
            <span>Slide 16</span>
          </button>
        </div>
      </div>

      {/* Part A: 7 Core Targets Accordion (Slide 15) */}
      <div className="mt-12">
        <div className="text-xs uppercase tracking-widest text-rose-400 font-semibold mb-6 flex items-center gap-2">
          <GraduationCapIcon className="w-4 h-4" />
          <span>A. Nhóm Mục Tiêu Chính (Target 4.1 — 4.7) • Slide 15</span>
        </div>

        <div className="space-y-4">
          {targets.map((target, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={target.code}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="liquid-glass rounded-2xl overflow-hidden border border-white/5 hover:border-rose-400/30 transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="font-mono text-xs text-rose-300 bg-rose-500/10 px-3 py-1 rounded-full flex-shrink-0 border border-rose-500/20">
                      {target.code}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-heading italic text-xl sm:text-2xl text-white">
                          {target.title}
                        </h3>
                        <span className="hidden sm:inline text-[10px] text-white/50 liquid-glass px-2 py-0.5 rounded-full">
                          {target.tag}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/70 font-light line-clamp-1">
                        {target.summary}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`liquid-glass h-8 w-8 rounded-full flex items-center justify-center text-white/70 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-rose-300' : ''
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 sm:p-6 pt-0 border-t border-white/5 mt-1 text-sm text-white/90 font-light leading-relaxed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/[0.01]">
                        <div className="max-w-3xl">
                          <div className="text-xs text-rose-300/80 font-mono mb-1.5 uppercase tracking-wider">
                            Nội dung cam kết từ Liên Hợp Quốc:
                          </div>
                          <p>{target.detail}</p>
                        </div>
                        <div className="liquid-glass rounded-xl p-3 text-center sm:self-stretch flex flex-col justify-center flex-shrink-0 min-w-[140px]">
                          <span className="text-[11px] text-white/50">Mốc thời hạn</span>
                          <span className="font-heading italic text-xl text-white">Năm 2030</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Part B: 3 Means of Implementation (Slide 16) */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-2">
            <BuildingIcon className="w-4 h-4" />
            <span>B. Nhóm Phương Tiện Thực Hiện (Target 4.a — 4.c) • Slide 16</span>
          </div>
          <span className="text-xs text-white/40">3 Đòn bẩy hạ tầng, tài trợ & nhân lực</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {means.map((m) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`liquid-glass-natural rounded-[1.5rem] p-6 border-t-2 ${m.color} flex flex-col justify-between shadow-xl`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-white/90 bg-white/10 px-2.5 py-0.5 rounded-full">
                      {m.code}
                    </span>
                    <Icon className="w-5 h-5 text-amber-300" />
                  </div>
                  <h3 className="font-heading italic text-xl text-white mb-2">{m.title}</h3>
                  <p className="text-xs text-white/80 font-light leading-relaxed mb-4">{m.desc}</p>
                </div>
                <div className="liquid-glass rounded-xl p-3 border border-white/10 text-xs text-white/70 font-mono">
                  <span className="text-amber-300">Chỉ số:</span> {m.metric}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
