import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, SparklesIcon, HeartPulseIcon } from '../Icons';
import { AnimatedNumber, AnimatedProgressBar } from '../AnimatedCounter';

export interface ExtendedTargetItem {
  id: string;
  code: string;
  title: string;
  targetContent: string;
  focusIndicators: string[];
  shortDesc: string;
  category: 'means';
  sdgGoal: string;
  statusBadge: string;
  badgeColor: string;
  accentColor: string;
  borderColor: string;
  bgGlow: string;
  keyMetric: string;
  metricLabel: string;
  globalStat: string;
  vietnamStat: string;
  insight: string;
  type: 'tobacco' | 'rnd' | 'workforce' | 'earlywarning';
}

export const extendedTargetsList: ExtendedTargetItem[] = [
  // NHÓM PHƯƠNG TIỆN THỰC THI (3.a - 3.d)
  {
    id: '3.a',
    code: 'Target 3.a',
    title: 'Kiểm soát Thuốc lá (WHO-FCTC)',
    targetContent: 'Thực thi Công ước kiểm soát thuốc lá (WHO-FCTC)',
    focusIndicators: ['Tỷ lệ sử dụng thuốc lá (người ≥15 tuổi)'],
    shortDesc: 'Thực thi Công ước kiểm soát thuốc lá (WHO-FCTC).',
    category: 'means',
    sdgGoal: 'Thực thi Công ước kiểm soát thuốc lá (WHO-FCTC)',
    statusBadge: 'Chính sách can thiệp',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    accentColor: '#F59E0B',
    borderColor: 'border-amber-500/50',
    bgGlow: 'from-amber-500/15 to-transparent',
    keyMetric: '8.0 Triệu',
    metricLabel: 'Ca tử vong do thuốc lá / năm (1.3M do hút thụ động)',
    globalStat: 'Thuốc lá là tác nhân hàng đầu gây ung thư phổi, tim mạch và đột quỵ, gây thiệt hại hơn 1.400 tỷ USD chi phí y tế toàn cầu mỗi năm.',
    vietnamStat: 'Tỷ lệ hút thuốc lá ở nam giới Việt Nam còn ở mức cao (~38.9%); mức thuế thuốc lá ở VN (~38.8% giá bán lẻ) thấp hơn mức khuyến cáo 75% của WHO.',
    insight: 'Tăng thuế thuốc lá kết hợp cấm thuốc lá điện tử thế hệ mới và xây dựng môi trường làm việc không khói thuốc là ưu tiên số 1.',
    type: 'tobacco',
  },
  {
    id: '3.b',
    code: 'Target 3.b',
    title: 'Nghiên cứu & phát triển (R&D) Vaccine & Thuốc',
    targetContent: 'Hỗ trợ nghiên cứu & phát triển (R&D) giúp tiếp cận vaccine/thuốc giá rẻ',
    focusIndicators: ['Tỷ lệ tiêm chủng quốc gia', 'Dòng vốn ODA y tế'],
    shortDesc: 'R&D giúp tiếp cận vaccine/thuốc giá rẻ.',
    category: 'means',
    sdgGoal: 'Hỗ trợ R&D giúp tiếp cận vaccine/thuốc giá rẻ',
    statusBadge: 'Đột phá khoa học',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    accentColor: '#06B6D4',
    borderColor: 'border-cyan-500/50',
    bgGlow: 'from-cyan-500/15 to-transparent',
    keyMetric: '25 Triệu',
    metricLabel: 'Trẻ em bỏ lỡ vaccine thiết yếu trên thế giới',
    globalStat: 'Khoảng cách công nghệ vaccine giữa các nước giàu và nghèo còn rất lớn; nguy cơ bùng phát dịch bệnh do đứt gãy chuỗi cung ứng tiêm chủng.',
    vietnamStat: 'Việt Nam tự chủ sản xuất hầu hết vaccine trong Chương trình Tiêm chủng Mở rộng và đang đẩy mạnh công nghệ sinh học y tế cao.',
    insight: 'Thúc đẩy cơ chế cấp phép linh hoạt và liên minh công tư (PPP) chia sẻ bản quyền sáng chế vaccine là trọng tâm của UN Blueprint.',
    type: 'rnd',
  },
  {
    id: '3.c',
    code: 'Target 3.c',
    title: 'Tài chính Y tế & Nhân lực',
    targetContent: 'Tài chính y tế và nhân lực',
    focusIndicators: ['Mật độ và phân bổ bác sĩ/nhân viên y tế'],
    shortDesc: 'Tài chính y tế và nhân lực.',
    category: 'means',
    sdgGoal: 'Tài chính y tế và nhân lực',
    statusBadge: 'Nguồn lực cốt lõi',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    accentColor: '#14B8A6',
    borderColor: 'border-teal-500/50',
    bgGlow: 'from-teal-500/15 to-transparent',
    keyMetric: '10 Triệu',
    metricLabel: 'Dự báo thiếu hụt nhân viên y tế toàn cầu 2030',
    globalStat: 'Thế giới đối mặt nguy cơ thiếu 10 triệu bác sĩ, y tá và hộ sinh vào năm 2030, tập trung chủ yếu ở các nước thu nhập thấp và trung bình.',
    vietnamStat: 'Việt Nam đạt khoảng 12.5 bác sĩ và 15 điều dưỡng trên 10.000 dân; đang tập trung đầu tư nâng cao chất lượng mạng lưới y tế cơ sở.',
    insight: 'Đầu tư 1 USD vào nhân lực y tế tạo ra tới 9 USD giá trị tăng trưởng kinh tế xã hội bền vững.',
    type: 'workforce',
  },
  {
    id: '3.d',
    code: 'Target 3.d',
    title: 'Cảnh báo sớm rủi ro (vd: kháng thuốc)',
    targetContent: 'Cảnh báo sớm rủi ro (vd: kháng thuốc)',
    focusIndicators: ['Năng lực IHR', 'Tỷ lệ nhiễm trùng do kháng sinh'],
    shortDesc: 'Cảnh báo sớm rủi ro (vd: kháng thuốc).',
    category: 'means',
    sdgGoal: 'Cảnh báo sớm rủi ro (vd: kháng thuốc)',
    statusBadge: 'An ninh y tế',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    accentColor: '#818CF8',
    borderColor: 'border-indigo-500/50',
    bgGlow: 'from-indigo-500/15 to-transparent',
    keyMetric: '196 Quốc gia',
    metricLabel: 'Thành viên thực thi Điều lệ Y tế Quốc tế (WHO IHR)',
    globalStat: 'Hơn 50% các quốc gia chưa đạt chuẩn năng lực cốt lõi theo IHR để giám sát và phát hiện sớm các đợt bùng phát mầm bệnh nguy hiểm.',
    vietnamStat: 'Việt Nam đi đầu triển khai hệ thống giám sát dịch tễ dựa trên sự kiện (EBS) và số hóa hồ sơ y tế với hơn 34 triệu sổ sức khỏe trên VNeID.',
    insight: 'Ứng dụng mô hình Một Sức Khỏe (One Health) phối hợp liên ngành Y tế - Thú y - Môi trường là hàng rào phòng thủ đại dịch hiệu quả nhất.',
    type: 'earlywarning',
  },
];

interface SDG3ExtendedTargetsProps {
  currentStep?: number;
  showAll?: boolean;
}

export const SDG3ExtendedTargets: React.FC<SDG3ExtendedTargetsProps> = ({
  currentStep = 0,
  showAll = false,
}) => {
  // Step maps 0 -> 3.a, 1 -> 3.b, 2 -> 3.c, 3 -> 3.d
  const initialIndex = Math.max(0, Math.min(extendedTargetsList.length - 1, currentStep));
  const [selectedTargetId, setSelectedTargetId] = useState<string>(extendedTargetsList[initialIndex]?.id || '3.a');

  // Sync with presenter step advancement
  useEffect(() => {
    if (!showAll) {
      const targetIndex = Math.min(extendedTargetsList.length - 1, Math.max(0, currentStep));
      if (extendedTargetsList[targetIndex]) {
        setSelectedTargetId(extendedTargetsList[targetIndex].id);
      }
    }
  }, [currentStep, showAll]);

  const activeTarget = extendedTargetsList.find((t) => t.id === selectedTargetId) || extendedTargetsList[0];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* =============================================================
            LEFT COLUMN: 4 MEANS OF IMPLEMENTATION SELECTOR LIST (5 COLS)
            ============================================================= */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="liquid-glass-natural rounded-2xl p-4 sm:p-5 border border-amber-500/20 shadow-xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-300 uppercase">
                <SparklesIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>Phương tiện Thực thi (Target 3.a — 3.d)</span>
              </div>
              <span className="text-xs text-white/40 font-mono">4 Phương tiện</span>
            </div>

            <div className="space-y-3">
              {extendedTargetsList.map((item) => {
                const isSelected = item.id === selectedTargetId;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedTargetId(item.id)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-between border ${
                      isSelected
                        ? `bg-white/10 ${item.borderColor} shadow-[0_0_15px_rgba(255,255,255,0.15)] border-2`
                        : 'liquid-glass border-white/5 hover:border-white/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono text-xs font-bold px-2.5 py-1 rounded-md"
                        style={{
                          backgroundColor: `${item.accentColor}25`,
                          color: item.accentColor,
                        }}
                      >
                        {item.id}
                      </span>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-white line-clamp-1">
                          {item.title}
                        </div>
                        <div className="text-xs sm:text-sm text-white/60 line-clamp-1 mt-0.5">
                          {item.shortDesc}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`h-2.5 w-2.5 rounded-full flex-shrink-0 transition-transform ${
                        isSelected ? 'scale-125 bg-amber-400 shadow-[0_0_8px_#F59E0B]' : 'bg-white/20'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =============================================================
            RIGHT COLUMN: EXPANDED DETAILED DATA, KPI & CHARTS (7 COLS)
            ============================================================= */}
        <div className="lg:col-span-7 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTarget.id}
              initial={{ opacity: 0, x: 25, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -25, filter: 'blur(8px)' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className={`liquid-glass-strong rounded-2xl p-5 sm:p-6 border flex-1 flex flex-col justify-between shadow-2xl relative overflow-hidden ${activeTarget.borderColor}`}
            >
              {/* Radial glow backdrop */}
              <div
                className="absolute top-0 right-0 w-80 h-80 blur-[100px] pointer-events-none opacity-25"
                style={{ backgroundColor: activeTarget.accentColor }}
              />

              <div className="relative z-10">
                {/* Header: Code, Title & Status Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-10 w-10 rounded-xl flex items-center justify-center font-bold font-mono text-sm text-white shadow-lg flex-shrink-0"
                      style={{ backgroundColor: `${activeTarget.accentColor}35` }}
                    >
                      {activeTarget.id}
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-mono text-white/50 uppercase tracking-wider">
                        {activeTarget.code} • SDG 3
                      </span>
                      <h3 className="font-heading italic text-xl sm:text-2xl text-white">
                        {activeTarget.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    className={`text-xs sm:text-sm px-3 py-0.5 rounded-full font-mono border self-start sm:self-auto ${activeTarget.badgeColor}`}
                  >
                    {activeTarget.statusBadge}
                  </span>
                </div>

                {/* Khung nội dung mục tiêu & chỉ số đo lường trọng tâm theo chuẩn PDF Slide 6 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                  <div className="liquid-glass rounded-xl p-3 border border-amber-500/20">
                    <div className="text-xs font-mono text-amber-300 uppercase tracking-wider mb-1">
                      Nội dung mục tiêu:
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-white">
                      {activeTarget.targetContent}
                    </p>
                  </div>
                  <div className="liquid-glass rounded-xl p-3 border border-cyan-500/20">
                    <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-1">
                      Chỉ số đo lường trọng tâm:
                    </div>
                    <div className="text-xs text-white/90 space-y-1 font-light">
                      {activeTarget.focusIndicators.map((ind, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span>{ind}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Custom Interactive SVG Mini Data Chart for This Target */}
                <div className="my-3 bg-black/40 rounded-xl p-3 border border-white/5">
                  {renderExtendedTargetChart(activeTarget)}
                </div>

                {/* 3 Structured Columns: Global, Vietnam, UN Blueprint */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                  {/* Global Picture */}
                  <div className="liquid-glass rounded-xl p-3 border border-white/5">
                    <div className="text-xs font-mono text-white/50 uppercase tracking-wider mb-1">
                      Bức tranh Toàn cầu
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                      {activeTarget.globalStat}
                    </p>
                  </div>

                  {/* Vietnam Context */}
                  <div className="liquid-glass rounded-xl p-3 border border-emerald-500/20">
                    <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <CheckCircleIcon className="w-3 h-3 text-emerald-400" />
                      <span>Thực trạng Việt Nam</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
                      {activeTarget.vietnamStat}
                    </p>
                  </div>

                  {/* UN Blueprint Action */}
                  <div className="liquid-glass rounded-xl p-3 border border-amber-500/20">
                    <div className="text-xs font-mono text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <SparklesIcon className="w-3 h-3 text-amber-400" />
                      <span>Hành động UN Blueprint</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                      {activeTarget.insight}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-white/40 mt-4">
                <span className="flex items-center gap-1">
                  <HeartPulseIcon className="w-3.5 h-3.5 text-emerald-400" />
                  Chỉ tiêu Hành động Sức khỏe Bền vững
                </span>
                <span className="font-mono text-amber-300">
                  {activeTarget.code}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   CUSTOM MINI SVG DATA CHARTS FOR TARGETS 3.a - 3.d
   ========================================================================= */

function renderExtendedTargetChart(item: ExtendedTargetItem) {
  switch (item.type) {
    /* 3.a: Tobacco Tax & Harm Reduction */
    case 'tobacco':
      return (
        <div className="space-y-1.5 text-xs font-mono">
          <div className="flex justify-between text-white/70">
            <span>Thuế thuốc lá VN: <AnimatedNumber text="38.8%" duration={1000} /></span>
            <span className="text-amber-300">Khuyến nghị WHO: 75% giá bán lẻ</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="38.8%" duration={1.2} className="h-full bg-amber-500 rounded-full" />
          </div>
          <div className="text-xs text-white/50 flex justify-between">
            <span><AnimatedNumber text="8 triệu" duration={1000} /> ca tử vong/năm</span>
            <span className="text-rose-400"><AnimatedNumber text="1.3 triệu" duration={1000} /> do hút thụ động</span>
          </div>
        </div>
      );

    /* 3.b: Vaccine R&D and Coverage Gap */
    case 'rnd':
      return (
        <div className="space-y-1.5 text-xs font-mono">
          <div className="flex justify-between text-white/70">
            <span>Bao phủ tiêm chủng toàn cầu: <AnimatedNumber text="84%" duration={1000} /></span>
            <span className="text-cyan-300">Mục tiêu SDG: 95%</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="84%" duration={1.2} className="h-full bg-cyan-400 rounded-full" />
          </div>
          <div className="text-xs text-cyan-300/80">Cơ chế TRIPs & Chuyển giao công nghệ mRNA cứu sống tính mạng</div>
        </div>
      );

    /* 3.c: Health Workforce Shortage */
    case 'workforce':
      return (
        <div className="space-y-1.5 text-xs font-mono">
          <div className="flex justify-between text-white/70">
            <span>Việt Nam: <AnimatedNumber text="12.5" duration={1000} /> bác sĩ / 10k dân</span>
            <span className="text-teal-300 font-bold">Thiếu hụt toàn cầu: <AnimatedNumber text="10 triệu" duration={1000} /> nhân lực</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="60%" duration={1.2} className="h-full bg-teal-400 rounded-full" />
          </div>
          <div className="text-xs text-white/50">Đầu tư 1 USD vào nhân lực y tế sinh lợi tức kinh tế 9 USD</div>
        </div>
      );

    /* 3.d: Early Warning IHR 2005 Core Capacity */
    case 'earlywarning':
      return (
        <div className="space-y-1.5 text-xs font-mono">
          <div className="flex justify-between text-white/70">
            <span>Năng lực cốt lõi IHR Toàn cầu: <AnimatedNumber text="65%" duration={1000} /></span>
            <span className="text-indigo-300 font-bold">Việt Nam: Giám sát EBS & <AnimatedNumber text="34M" duration={1000} /> VNeID</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="65%" duration={1.2} className="h-full bg-indigo-500 rounded-full" />
          </div>
          <div className="text-xs text-indigo-300/80">Mô hình Một Sức Khỏe (One Health) phòng ngừa đại dịch từ sớm</div>
        </div>
      );

    default:
      return null;
  }
}
