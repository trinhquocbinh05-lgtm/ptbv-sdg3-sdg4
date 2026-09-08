import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, SparklesIcon, GraduationCapIcon } from '../Icons';
import { AnimatedNumber, AnimatedProgressBar } from '../AnimatedCounter';

export interface Target4Data {
  id: string;
  code: string;
  name: string;
  shortDesc: string;
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
  metricType: 'primary' | 'earlychildhood' | 'tertiary' | 'skills' | 'equity' | 'literacy' | 'sustainability';
}

export const targets4List: Target4Data[] = [
  {
    id: '4.1',
    code: 'Target 4.1',
    name: 'Phổ cập Tiểu học & Trung học',
    shortDesc: 'Giáo dục tiểu học & trung học miễn phí, công bằng và có chất lượng.',
    sdgGoal: '100% trẻ em gái & trai hoàn thành tiểu học & trung học trước 2030',
    statusBadge: 'Nền tảng cơ bản',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    accentColor: '#F43F5E',
    borderColor: 'border-rose-500/50',
    bgGlow: 'from-rose-500/15 to-transparent',
    keyMetric: '99.1% vs 87%',
    metricLabel: 'Hoàn thành tiểu học tại Việt Nam vs Toàn cầu',
    globalStat: 'Toàn cầu đạt 87% tỷ lệ hoàn thành tiểu học; vẫn còn hơn 84 triệu trẻ em độ tuổi đi học hoàn toàn đứng ngoài ghế nhà trường.',
    vietnamStat: 'Việt Nam đạt tỷ lệ hoàn thành tiểu học >99.1%, trung học cơ sở >95%; duy trì vững chắc chuẩn phổ cập giáo dục bắt buộc.',
    insight: 'Tập trung chống bỏ học ở cấp trung học phổ thông tại vùng dân tộc thiểu số và hỗ trợ học sinh có hoàn cảnh khó khăn.',
    metricType: 'primary',
  },
  {
    id: '4.2',
    code: 'Target 4.2',
    name: 'Phát triển & Giáo dục Mầm non',
    shortDesc: 'Tiếp cận chăm sóc trẻ thơ và giáo dục mầm non chất lượng cao.',
    sdgGoal: 'Sẵn sàng toàn diện về thể chất và nhận thức trước khi vào lớp một',
    statusBadge: 'Giai đoạn vàng',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    accentColor: '#F59E0B',
    borderColor: 'border-amber-500/50',
    bgGlow: 'from-amber-500/15 to-transparent',
    keyMetric: '> 99.8%',
    metricLabel: 'Phổ cập giáo dục mầm non 5 tuổi tại Việt Nam',
    globalStat: 'Chỉ 75% trẻ em toàn cầu được tham gia giáo dục tiền tiểu học có tổ chức; khoảng cách rất lớn giữa nông thôn và thành thị.',
    vietnamStat: 'Việt Nam hoàn thành xuất sắc phổ cập mầm non 5 tuổi (>99.8%); đang thí điểm mở rộng phổ cập mầm non cho trẻ 3-4 tuổi.',
    insight: '1 USD đầu tư vào giáo dục sớm cho trẻ mầm non mang lại tỷ suất hoàn vốn xã hội lên tới 7-10 USD trong tương lai.',
    metricType: 'earlychildhood',
  },
  {
    id: '4.3',
    code: 'Target 4.3',
    name: 'Bình đẳng Giáo dục Kỹ thuật, Nghề & ĐH',
    shortDesc: 'Tiếp cận bình đẳng giáo dục nghề nghiệp và đại học chi phí hợp lý.',
    sdgGoal: 'Bình đẳng tiếp cận giáo dục bậc cao có chất lượng cho nam và nữ',
    statusBadge: 'Giáo dục bậc cao',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    accentColor: '#06B6D4',
    borderColor: 'border-cyan-500/50',
    bgGlow: 'from-cyan-500/15 to-transparent',
    keyMetric: '42% & 2.1M',
    metricLabel: 'Tỷ lệ nhập học ĐH toàn cầu & Sinh viên ĐH tại Việt Nam',
    globalStat: 'Tỷ lệ theo học đại học toàn cầu đạt 42%; tuy nhiên tại các nước thu nhập thấp tỷ lệ này chưa vượt qua ngưỡng 9%.',
    vietnamStat: 'Quy mô đào tạo đại học Việt Nam đạt hơn 2.1 triệu sinh viên; đang đẩy mạnh tự chủ đại học và chuẩn kiểm định quốc tế AUN-QA.',
    insight: 'Hợp tác đại học - doanh nghiệp là chìa khóa then chốt giải quyết nghịch lý thừa thầy thiếu thợ.',
    metricType: 'tertiary',
  },
  {
    id: '4.4',
    code: 'Target 4.4',
    name: 'Kỹ năng cho Việc làm & Khởi nghiệp',
    shortDesc: 'Kỹ năng kỹ thuật, công nghệ số và tinh thần khởi nghiệp sáng tạo.',
    sdgGoal: 'Tăng mạnh tỷ lệ thanh niên có kỹ năng nghề nghiệp và kỹ năng số',
    statusBadge: 'Kỷ nguyên AI & Số hóa',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    accentColor: '#10B981',
    borderColor: 'border-emerald-500/50',
    bgGlow: 'from-emerald-500/15 to-transparent',
    keyMetric: '70% Kỹ năng mới',
    metricLabel: 'Yêu cầu chuyển đổi kỹ năng số và AI trước 2030',
    globalStat: 'Hơn 50% lao động toàn cầu cần đào tạo lại kỹ năng số; làn sóng Generative AI định hình lại hoàn toàn tiêu chuẩn tuyển dụng.',
    vietnamStat: 'Tỷ lệ lao động qua đào tạo có bằng cấp/chứng chỉ đạt ~28%; mục tiêu đạt trên 35% vào 2030 để đón đầu ngành bán dẫn và AI.',
    insight: 'Doanh nghiệp cần đồng kiến tạo giáo trình đào tạo thực chiến và cấp học bổng kỹ năng số chuyên sâu.',
    metricType: 'skills',
  },
  {
    id: '4.5',
    code: 'Target 4.5',
    name: 'Bình đẳng Giới & Bảo vệ Người Yếu thế',
    shortDesc: 'Xóa bỏ chênh lệch giới và bảo đảm hòa nhập cho nhóm khuyết tật, thiểu số.',
    sdgGoal: 'Tiếp cận giáo dục bình đẳng tuyệt đối, không để ai bị bỏ lại phía sau',
    statusBadge: 'Công bằng & Hòa nhập',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    accentColor: '#818CF8',
    borderColor: 'border-indigo-500/50',
    bgGlow: 'from-indigo-500/15 to-transparent',
    keyMetric: 'GPI = 1.00',
    metricLabel: 'Chỉ số bình đẳng giới trong giáo dục phổ thông',
    globalStat: 'Trẻ em khuyết tật có nguy cơ không biết đọc biết viết cao gấp 2.5 lần; bất bình đẳng giới tính vẫn nghiêm trọng ở Nam Á và châu Phi.',
    vietnamStat: 'Việt Nam đạt chỉ số bình đẳng giới GPI xấp xỉ 1.00 ở bậc tiểu học và THCS; chính sách miễn học phí cho vùng dân tộc thiểu số phát huy hiệu quả.',
    insight: 'Xây dựng môi trường trường học thân thiện, trang bị công cụ trợ năng và tài liệu hòa nhập là yêu cầu bắt buộc.',
    metricType: 'equity',
  },
  {
    id: '4.6',
    code: 'Target 4.6',
    name: 'Phổ cập Biết chữ & Tính toán',
    shortDesc: 'Toàn bộ thanh niên và người lớn đạt chuẩn đọc viết và toán học.',
    sdgGoal: 'Xóa mù chữ chức năng, đạt chuẩn năng lực tính toán cơ bản',
    statusBadge: 'Năng lực cốt lõi',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    accentColor: '#14B8A6',
    borderColor: 'border-teal-500/50',
    bgGlow: 'from-teal-500/15 to-transparent',
    keyMetric: '98.5%',
    metricLabel: 'Tỷ lệ biết chữ thanh niên Việt Nam (15-24 tuổi)',
    globalStat: '763 triệu người trưởng thành trên thế giới không biết đọc biết viết, 2/3 trong số đó là phụ nữ.',
    vietnamStat: 'Tỷ lệ biết chữ của người từ 15 tuổi trở lên đạt ~96%; tỷ lệ biết chữ ở thanh niên 15-24 tuổi đạt mức ấn tượng 98.5%.',
    insight: 'Chuyển từ xóa mù chữ truyền thống sang xóa mù chữ kỹ thuật số (Digital Literacy) cho người lớn tuổi và vùng sâu vùng xa.',
    metricType: 'literacy',
  },
  {
    id: '4.7',
    code: 'Target 4.7',
    name: 'Kiến thức Phát triển Bền vững',
    shortDesc: 'Trang bị tri thức về SDGs, lối sống xanh và công dân toàn cầu.',
    sdgGoal: 'Tích hợp giáo dục phát triển bền vững (ESD) vào hệ thống giáo dục quốc gia',
    statusBadge: 'Tư duy toàn cầu',
    badgeColor: 'bg-rose-400/20 text-rose-300 border-rose-400/30',
    accentColor: '#FB7185',
    borderColor: 'border-rose-400/50',
    bgGlow: 'from-rose-400/15 to-transparent',
    keyMetric: '100% Trường học',
    metricLabel: 'Mục tiêu tích hợp giáo dục biến đổi khí hậu & SDGs',
    globalStat: 'Chỉ 50% chương trình giảng dạy quốc gia trên thế giới đề cập rõ ràng đến biến đổi khí hậu hoặc phát triển bền vững.',
    vietnamStat: 'Bộ GD&ĐT đã đưa nội dung bảo vệ môi trường, phân loại rác và ứng phó thiên tai vào chương trình Giáo dục phổ thông 2018.',
    insight: 'Mỗi trường học là một mô hình sống động về Net Zero, tiết kiệm năng lượng và thực hành tiêu dùng có trách nhiệm.',
    metricType: 'sustainability',
  },
];

interface SDG4TargetsBreakdownProps {
  currentStep?: number;
  showAll?: boolean;
}

export const SDG4TargetsBreakdown: React.FC<SDG4TargetsBreakdownProps> = ({
  currentStep = 0,
  showAll = false,
}) => {
  const initialIndex = Math.max(0, Math.min(targets4List.length - 1, currentStep));
  const [selectedTargetId, setSelectedTargetId] = useState<string>(targets4List[initialIndex]?.id || '4.1');
  const [isAutoTour, setIsAutoTour] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Sync with presenter step advancement (Space, Arrow keys, Clicker)
  useEffect(() => {
    if (!showAll && typeof currentStep === 'number') {
      const targetIndex = Math.min(targets4List.length - 1, Math.max(0, currentStep));
      if (targets4List[targetIndex]) {
        setSelectedTargetId(targets4List[targetIndex].id);
        setIsAutoTour(false); // Let presenter clicker control take precedence
      }
    }
  }, [currentStep, showAll]);

  // Auto-tour rotation (4 seconds per target)
  useEffect(() => {
    if (!isAutoTour || isHovered) return;

    const timer = setInterval(() => {
      setSelectedTargetId((prevId) => {
        const idx = targets4List.findIndex((t) => t.id === prevId);
        const nextIdx = (idx + 1) % targets4List.length;
        return targets4List[nextIdx].id;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoTour, isHovered]);

  const handlePrevTarget = () => {
    const idx = targets4List.findIndex((t) => t.id === selectedTargetId);
    const prevIdx = (idx - 1 + targets4List.length) % targets4List.length;
    setSelectedTargetId(targets4List[prevIdx].id);
  };

  const handleNextTarget = () => {
    const idx = targets4List.findIndex((t) => t.id === selectedTargetId);
    const nextIdx = (idx + 1) % targets4List.length;
    setSelectedTargetId(targets4List[nextIdx].id);
  };

  const activeTarget = targets4List.find((t) => t.id === selectedTargetId) || targets4List[0];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* =============================================================
            LEFT COLUMN: 7 TARGETS SELECTOR LIST (5 COLS)
            ============================================================= */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          <div className="liquid-glass-natural rounded-2xl p-4 border border-rose-500/20 shadow-xl">
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-300 uppercase">
                <GraduationCapIcon className="w-3.5 h-3.5 text-rose-400" />
                <span>Mục tiêu Chính (Target 4.1 — 4.7)</span>
              </div>

              {/* Auto-Tour Toggle */}
              <button
                type="button"
                onClick={() => setIsAutoTour(!isAutoTour)}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono flex items-center gap-1 transition-all cursor-pointer border ${
                  isAutoTour
                    ? 'bg-rose-500/20 text-rose-300 border-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.3)]'
                    : 'liquid-glass text-white/50 hover:text-white border-white/10'
                }`}
                title={isAutoTour ? 'Bấm để dừng tự động chạy' : 'Bấm để bật tự động chạy tuần tự (4s)'}
              >
                {isAutoTour ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                    <span>Tự động: BẬT</span>
                  </>
                ) : (
                  <>
                    <span>▶</span>
                    <span>Tự động</span>
                  </>
                )}
              </button>
            </div>

            {/* Auto-Tour Mini Status */}
            {isAutoTour && (
              <div className="mb-2 px-2.5 py-1 rounded-lg bg-black/40 border border-rose-500/20 flex items-center justify-between text-[10px] font-mono">
                <span className={isHovered ? 'text-amber-300' : 'text-rose-300'}>
                  {isHovered ? '⏸ Đang dừng để thuyết minh' : 'Tự động chuyển (4s/mục tiêu)'}
                </span>
                <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                  {!isHovered && (
                    <motion.div
                      key={selectedTargetId}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 4, ease: 'linear' }}
                      className="h-full bg-rose-400 rounded-full"
                    />
                  )}
                  {isHovered && <div className="h-full w-full bg-amber-400/60 rounded-full" />}
                </div>
              </div>
            )}

            <div className="space-y-1.5 max-h-[520px] overflow-y-auto pr-1 custom-scrollbar">
              {targets4List.map((item) => {
                const isSelected = item.id === selectedTargetId;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSelectedTargetId(item.id);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-between border ${
                      isSelected
                        ? `bg-white/10 ${item.borderColor} shadow-[0_0_15px_rgba(244,63,94,0.25)] border-2`
                        : 'liquid-glass border-white/5 hover:border-white/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="font-mono text-xs font-bold px-2 py-0.5 rounded-md flex-shrink-0"
                        style={{
                          backgroundColor: `${item.accentColor}25`,
                          color: item.accentColor,
                        }}
                      >
                        {item.id}
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-white line-clamp-1">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-white/60 line-clamp-1">
                          {item.shortDesc}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`h-2 w-2 rounded-full flex-shrink-0 transition-transform ${
                        isSelected ? 'scale-125 shadow-[0_0_8px]' : 'bg-white/20'
                      }`}
                      style={{
                        backgroundColor: isSelected ? item.accentColor : undefined,
                        boxShadow: isSelected ? `0 0 8px ${item.accentColor}` : undefined,
                      }}
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
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded font-bold"
                        style={{
                          backgroundColor: `${activeTarget.accentColor}25`,
                          color: activeTarget.accentColor,
                        }}
                      >
                        {activeTarget.code}
                      </span>
                      <span className="text-xs text-white/40 font-mono">SDG 4</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {activeTarget.name}
                    </h3>
                    <p className="text-xs text-rose-300/90 font-mono mt-0.5">
                      Mục tiêu: {activeTarget.sdgGoal}
                    </p>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2.5 py-1 rounded-full border flex-shrink-0 ${activeTarget.badgeColor}`}
                  >
                    {activeTarget.statusBadge}
                  </span>
                </div>

                {/* Big Metric Display with Animated Count Up */}
                <div className="my-3.5 flex items-baseline gap-3">
                  <span
                    className="font-heading italic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
                    style={{ color: activeTarget.accentColor }}
                  >
                    <AnimatedNumber text={activeTarget.keyMetric} duration={1300} />
                  </span>
                  <span className="text-xs text-white/60 font-light">
                    {activeTarget.metricLabel}
                  </span>
                </div>

                {/* Custom Interactive SVG Mini Data Chart for This Target */}
                <div className="my-3 bg-black/40 rounded-xl p-3 border border-white/5">
                  {renderTarget4MiniChart(activeTarget)}
                </div>

                {/* 3 Structured Columns: Global, Vietnam, UN Blueprint */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                  {/* Global Picture */}
                  <div className="liquid-glass rounded-xl p-3 border border-white/5">
                    <div className="text-[10px] font-mono text-white/50 uppercase tracking-wider mb-1">
                      Bức tranh Toàn cầu
                    </div>
                    <p className="text-[11px] text-white/80 font-light leading-relaxed">
                      {activeTarget.globalStat}
                    </p>
                  </div>

                  {/* Vietnam Context */}
                  <div className="liquid-glass rounded-xl p-3 border border-rose-500/20">
                    <div className="text-[10px] font-mono text-rose-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <CheckCircleIcon className="w-3 h-3 text-rose-400" />
                      <span>Thực trạng Việt Nam</span>
                    </div>
                    <p className="text-[11px] text-white/85 font-light leading-relaxed">
                      {activeTarget.vietnamStat}
                    </p>
                  </div>

                  {/* UN Blueprint Action */}
                  <div className="liquid-glass rounded-xl p-3 border border-amber-500/20">
                    <div className="text-[10px] font-mono text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <SparklesIcon className="w-3 h-3 text-amber-400" />
                      <span>Hành động Doanh nghiệp</span>
                    </div>
                    <p className="text-[11px] text-white/90 font-light leading-relaxed">
                      {activeTarget.insight}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Card Controls: Prev/Next & Quick Chips */}
              <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between gap-2 flex-wrap mt-4">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrevTarget}
                    className="liquid-glass px-3 py-1 rounded-lg text-xs text-white/80 hover:text-white hover:bg-white/10 border border-white/10 flex items-center gap-1 cursor-pointer transition-all active:scale-95"
                    title="Mục tiêu trước"
                  >
                    <span>◀ Trước</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextTarget}
                    className="liquid-glass px-3 py-1 rounded-lg text-xs text-rose-300 hover:text-white hover:bg-rose-500/20 border border-rose-500/30 flex items-center gap-1 cursor-pointer font-medium transition-all active:scale-95"
                    title="Mục tiêu tiếp theo"
                  >
                    <span>Tiếp ▶</span>
                  </button>
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-mono text-white/40 mr-1 hidden sm:inline">Xem nhanh:</span>
                  {targets4List.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTargetId(t.id)}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all flex items-center justify-center cursor-pointer ${
                        t.id === selectedTargetId
                          ? 'bg-white text-black font-bold scale-110 shadow-md ring-2 ring-rose-400'
                          : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {t.id}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   CUSTOM MINI SVG DATA CHARTS FOR TARGETS 4.1 - 4.7
   ========================================================================= */

function renderTarget4MiniChart(target: Target4Data) {
  switch (target.metricType) {
    case 'primary':
      return (
        <div className="space-y-1.5 text-[10px] font-mono">
          <div className="flex justify-between text-white/70">
            <span className="text-rose-300 font-bold">Việt Nam: &gt;<AnimatedNumber text="99.1%" duration={1000} /> hoàn thành tiểu học</span>
            <span className="text-white/40">Mục tiêu SDG: 100%</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="99.1%" duration={1.2} className="h-full bg-rose-500 rounded-full" />
          </div>
          <div className="flex justify-between text-white/60 pt-0.5">
            <span>Toàn cầu: <AnimatedNumber text="87%" duration={1000} /></span>
            <span className="text-amber-400"><AnimatedNumber text="84M" duration={1000} /> trẻ em ngoài nhà trường</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="87%" duration={1.2} delay={0.15} className="h-full bg-amber-400 rounded-full" />
          </div>
        </div>
      );

    case 'earlychildhood':
      return (
        <div className="space-y-1.5 text-[10px] font-mono">
          <div className="flex justify-between text-white/70">
            <span className="text-amber-300 font-bold">Việt Nam: &gt;<AnimatedNumber text="99.8%" duration={1000} /> phổ cập mầm non 5 tuổi</span>
            <span className="text-emerald-300">Đạt chuẩn SDG</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="99.8%" duration={1.2} className="h-full bg-amber-400 rounded-full" />
          </div>
          <div className="flex justify-between text-white/60 pt-0.5">
            <span>Toàn cầu: <AnimatedNumber text="75%" duration={1000} /> trẻ em tiền tiểu học</span>
            <span className="text-rose-400">Thiếu hụt trường mầm non nông thôn</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="75%" duration={1.2} delay={0.15} className="h-full bg-rose-400 rounded-full" />
          </div>
        </div>
      );

    case 'tertiary':
      return (
        <div className="space-y-1.5 text-[10px] font-mono">
          <div className="flex justify-between text-white/70">
            <span className="text-cyan-300">Sinh viên ĐH Việt Nam: <AnimatedNumber text="2.1M" duration={1000} /> người</span>
            <span className="text-white/40">Chuẩn AUN-QA & Tự chủ</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="68%" duration={1.2} className="h-full bg-cyan-400 rounded-full" />
          </div>
          <div className="text-[9px] text-cyan-300/80">Nhập học bậc cao toàn cầu: 42% (Nước thu nhập thấp &lt; 9%)</div>
        </div>
      );

    case 'skills':
      return (
        <div className="space-y-1.5 text-[10px] font-mono">
          <div className="flex justify-between text-white/70">
            <span>Lao động có chứng chỉ/bằng cấp: <AnimatedNumber text="28%" duration={1000} /></span>
            <span className="text-emerald-300">Mục tiêu 2030: &gt;35%</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="28%" duration={1.2} className="h-full bg-emerald-400 rounded-full" />
          </div>
          <div className="text-[9px] text-emerald-300/80">Đào tạo nhân lực chất lượng cao ngành Bán dẫn, CNTT & Trí tuệ Nhân tạo</div>
        </div>
      );

    case 'equity':
      return (
        <div className="space-y-1.5 text-[10px] font-mono">
          <div className="flex justify-between text-white/70">
            <span className="text-indigo-300 font-bold">Chỉ số Bình đẳng giới GPI: <AnimatedNumber text="1.00" duration={1000} /></span>
            <span className="text-emerald-300">Cân bằng hoàn hảo</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="100%" duration={1.2} className="h-full bg-indigo-400 rounded-full" />
          </div>
          <div className="text-[9px] text-white/50">Miễn học phí & Trợ cấp bán trú học sinh dân tộc thiểu số và yếu thế</div>
        </div>
      );

    case 'literacy':
      return (
        <div className="space-y-1.5 text-[10px] font-mono">
          <div className="flex justify-between text-white/70">
            <span className="text-teal-300">Thanh niên VN biết chữ: <AnimatedNumber text="98.5%" duration={1000} /></span>
            <span className="text-white/40">Dân số 15+: ~96%</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="98.5%" duration={1.2} className="h-full bg-teal-400 rounded-full" />
          </div>
          <div className="text-[9px] text-rose-300/80">Thế giới: 763 triệu người mù chữ (2/3 là phụ nữ)</div>
        </div>
      );

    case 'sustainability':
      return (
        <div className="space-y-1.5 text-[10px] font-mono">
          <div className="flex justify-between text-white/70">
            <span className="text-rose-300 font-bold">Tích hợp giáo dục SDGs: GDPT 2018</span>
            <span className="text-amber-300">Trường học Xanh</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="85%" duration={1.2} className="h-full bg-rose-400 rounded-full" />
          </div>
          <div className="text-[9px] text-rose-300/80">Giáo dục lối sống bền vững, Net Zero và quyền công dân toàn cầu</div>
        </div>
      );

    default:
      return null;
  }
}
