import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, SparklesIcon, HeartPulseIcon } from '../Icons';
import { AnimatedNumber, AnimatedProgressBar } from '../AnimatedCounter';

export interface TargetData {
  id: string;
  code: string;
  name: string;
  targetContent: string;
  focusIndicators: string[];
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
  type: 'maternal' | 'child' | 'epidemic' | 'ncd' | 'substance' | 'traffic' | 'fp' | 'uhc' | 'pollution';
}

export const targetsList: TargetData[] = [
  {
    id: '3.1',
    code: 'Target 3.1',
    name: 'Tử vong mẹ',
    targetContent: 'Tử vong mẹ (Giảm xuống <70/100.000 ca sinh)',
    focusIndicators: ['Tỷ lệ tử vong bà mẹ (MMR)', 'Tỷ lệ sinh có hỗ trợ y tế'],
    shortDesc: 'Giảm tử vong mẹ xuống dưới 70 / 100.000 ca sinh.',
    sdgGoal: 'Giảm xuống <70/100.000 ca sinh',
    statusBadge: 'Khoảng cách lớn',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    accentColor: '#F43F5E',
    borderColor: 'border-rose-500/50',
    bgGlow: 'from-rose-500/15 to-transparent',
    keyMetric: '223 / 100k',
    metricLabel: 'Tử vong mẹ toàn cầu',
    globalStat: 'Khoảng 287.000 phụ nữ tử vong mỗi năm do biến chứng thai sản (gần 800 ca/ngày toàn cầu).',
    vietnamStat: 'Việt Nam đạt ~44 / 100.000 ca sinh, đã hoàn thành mục tiêu 3.1 trước hạn 2030.',
    insight: '95% ca tử vong xảy ra ở các nước thu nhập thấp/trung bình và hoàn toàn có thể phòng ngừa nếu có nhân viên y tế đỡ đẻ có chuyên môn.',
    type: 'maternal',
  },
  {
    id: '3.2',
    code: 'Target 3.2',
    name: 'Tử vong trẻ em',
    targetContent: 'Tử vong trẻ em (Sơ sinh ≤12‰, dưới 5 tuổi ≤25‰)',
    focusIndicators: ['Tỷ lệ tử vong trẻ dưới 5 tuổi', 'Tỷ lệ tử vong sơ sinh'],
    shortDesc: 'Sơ sinh ≤12‰, dưới 5 tuổi ≤25‰.',
    sdgGoal: 'Sơ sinh ≤12‰, dưới 5 tuổi ≤25‰',
    statusBadge: 'Báo động toàn cầu',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    accentColor: '#F59E0B',
    borderColor: 'border-amber-500/50',
    bgGlow: 'from-amber-500/15 to-transparent',
    keyMetric: '4.9 Triệu',
    metricLabel: 'Trẻ < 5t tử vong mỗi năm',
    globalStat: 'Tử vong sơ sinh toàn cầu 17‰; trẻ dưới 5 tuổi 37‰ (vượt xa ngưỡng an toàn).',
    vietnamStat: 'Việt Nam: Trẻ dưới 5t là 18.9‰; sơ sinh 9.8‰ (đạt ngưỡng an toàn SDG).',
    insight: 'Cứ mỗi 4.4 giây có 1 trẻ em tử vong trên thế giới, phần lớn do viêm phổi, sốt rét và tiêu chảy.',
    type: 'child',
  },
  {
    id: '3.3',
    code: 'Target 3.3',
    name: 'Bệnh truyền nhiễm',
    targetContent: 'Bệnh truyền nhiễm (Chấm dứt AIDS, lao, sốt rét, NTDs)',
    focusIndicators: ['Số ca nhiễm HIV, lao, sốt rét', 'viêm gan B mới'],
    shortDesc: 'Chấm dứt AIDS, lao, sốt rét, NTDs.',
    sdgGoal: 'Chấm dứt AIDS, lao, sốt rét, NTDs',
    statusBadge: 'Nguy cơ bùng phát lại',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    accentColor: '#06B6D4',
    borderColor: 'border-cyan-500/50',
    bgGlow: 'from-cyan-500/15 to-transparent',
    keyMetric: '1.6M & 249M',
    metricLabel: 'Tử vong Lao & Ca mắc Sốt rét',
    globalStat: 'Lao cướp đi 1.6 triệu sinh mạng; 249 triệu ca sốt rét và 1.3 triệu ca nhiễm HIV mới/năm.',
    vietnamStat: 'Việt Nam đặt mục tiêu thanh toán bệnh lao vào năm 2035; duy trì khống chế HIV < 0.3%.',
    insight: 'Sự gián đoạn y tế hậu Covid-19 và biến đổi khí hậu đang làm gia tăng số ca sốt rét tại hơn 80 quốc gia.',
    type: 'epidemic',
  },
  {
    id: '3.4',
    code: 'Target 3.4',
    name: 'Bệnh không lây nhiễm (NCDs)',
    targetContent: 'Bệnh không lây nhiễm (NCDs) (Giảm 1/3 tử vong sớm)',
    focusIndicators: ['Tỷ lệ tử vong do tim mạch', 'ung thư, tiểu đường, tự tử'],
    shortDesc: 'Giảm 1/3 tử vong sớm do NCDs & sức khỏe tâm thần.',
    sdgGoal: 'Giảm 1/3 tử vong sớm do NCDs & Sức khỏe tâm thần',
    statusBadge: 'Gánh nặng tử vong số 1',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    accentColor: '#10B981',
    borderColor: 'border-emerald-500/50',
    bgGlow: 'from-emerald-500/15 to-transparent',
    keyMetric: '41 Triệu',
    metricLabel: 'Tử vong NCDs / năm (74% toàn cầu)',
    globalStat: '17 triệu người chết sớm trước tuổi 70. Bốn nhóm lớn: Tim mạch (17.9M), Ung thư (9.3M), Hô hấp (4.1M), Tiểu đường (2.0M).',
    vietnamStat: 'Tại Việt Nam, NCDs chiếm ~70% - 77% tổng số ca tử vong cả nước và có xu hướng trẻ hóa.',
    insight: 'Dinh dưỡng dư thừa muối/đường, khói thuốc lá, ô nhiễm không khí và lười vận động là tác nhân cốt lõi.',
    type: 'ncd',
  },
  {
    id: '3.5',
    code: 'Target 3.5',
    name: 'Chất gây nghiện',
    targetContent: 'Chất gây nghiện (Phòng ngừa ma túy, rượu bia)',
    focusIndicators: ['Bao phủ điều trị nghiện', 'Mức tiêu thụ cồn bình quân'],
    shortDesc: 'Phòng ngừa ma túy, rượu bia.',
    sdgGoal: 'Phòng ngừa ma túy, rượu bia',
    statusBadge: 'Thách thức xã hội',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    accentColor: '#818CF8',
    borderColor: 'border-indigo-500/50',
    bgGlow: 'from-indigo-500/15 to-transparent',
    keyMetric: '3.0 Triệu',
    metricLabel: 'Tử vong do rượu bia (5.3% toàn cầu)',
    globalStat: 'Rượu bia liên quan trực tiếp đến 200+ bệnh tật và chấn thương; 296 triệu người lạm dụng ma túy.',
    vietnamStat: 'Việt Nam tiêu thụ bình quân ~8.3L cồn nguyên chất/người lớn/năm, đứng top đầu Đông Nam Á.',
    insight: 'Thuế tiêu thụ đặc biệt và xử phạt nồng độ cồn nghiêm ngặt là các công cụ chính sách hiệu quả nhất.',
    type: 'substance',
  },
  {
    id: '3.6',
    code: 'Target 3.6',
    name: 'Tai nạn giao thông',
    targetContent: 'Tai nạn giao thông (Giảm 50% số ca tử vong)',
    focusIndicators: ['Tỷ lệ tử vong do tai nạn giao thông đường bộ'],
    shortDesc: 'Giảm 50% số ca tử vong do tai nạn giao thông.',
    sdgGoal: 'Giảm 50% số ca tử vong',
    statusBadge: 'Sát thủ số 1 giới trẻ',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    accentColor: '#14B8A6',
    borderColor: 'border-teal-500/50',
    bgGlow: 'from-teal-500/15 to-transparent',
    keyMetric: '1.19 Triệu',
    metricLabel: 'Tử vong giao thông toàn cầu / năm',
    globalStat: 'Là nguyên nhân gây tử vong số 1 thế giới đối với thanh thiếu niên từ 5 đến 29 tuổi.',
    vietnamStat: 'Nhờ Nghị định 100/168 kiểm soát nồng độ cồn, số ca tử vong TNGT ở VN đã kéo giảm rõ rệt.',
    insight: '92% ca tử vong đường bộ tập trung ở các nước đang phát triển nơi hạ tầng và ý thức chưa đồng bộ.',
    type: 'traffic',
  },
  {
    id: '3.7',
    code: 'Target 3.7',
    name: 'Sức khỏe sinh sản',
    targetContent: 'Sức khỏe sinh sản (Tiếp cận dịch vụ toàn dân)',
    focusIndicators: ['Tỷ lệ đáp ứng nhu cầu KHHGĐ', 'Tỷ lệ sinh vị thành niên'],
    shortDesc: 'Tiếp cận dịch vụ toàn dân.',
    sdgGoal: 'Tiếp cận dịch vụ toàn dân',
    statusBadge: 'Tiến trình khả quan',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    accentColor: '#10B981',
    borderColor: 'border-emerald-500/50',
    bgGlow: 'from-emerald-500/15 to-transparent',
    keyMetric: '77.5% & 218M',
    metricLabel: 'Đáp ứng KHHGĐ toàn cầu & Phụ nữ chưa được đáp ứng',
    globalStat: '77.5% phụ nữ được đáp ứng nhu cầu tránh thai hiện đại; vẫn còn 218 triệu phụ nữ ở các nước nghèo chưa tiếp cận được dịch vụ an toàn.',
    vietnamStat: 'Việt Nam đạt ~85% tỷ lệ đáp ứng nhu cầu KHHGĐ; 60.2% sử dụng biện pháp hiện đại, là điểm sáng chăm sóc sức khỏe ban đầu.',
    insight: 'Đáp ứng đủ nhu cầu KHHGĐ giúp ngăn chặn 76.000 ca tử vong mẹ và 1.1 triệu ca tử vong sơ sinh mỗi năm trên toàn cầu.',
    type: 'fp',
  },
  {
    id: '3.8',
    code: 'Target 3.8',
    name: 'Bao phủ y tế toàn dân (UHC)',
    targetContent: 'Bao phủ y tế toàn dân (UHC) (Bảo vệ rủi ro tài chính)',
    focusIndicators: ['Chỉ số UHC (0-100)', 'Tỷ lệ dân số chi lớn cho y tế'],
    shortDesc: 'Bảo vệ rủi ro tài chính, tiếp cận thuốc thiết yếu giá rẻ.',
    sdgGoal: 'Bảo vệ rủi ro tài chính',
    statusBadge: 'Thách thức then chốt',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    accentColor: '#3B82F6',
    borderColor: 'border-blue-500/50',
    bgGlow: 'from-blue-500/15 to-transparent',
    keyMetric: '4.5 Tỷ người',
    metricLabel: 'Chưa được bao phủ đầy đủ dịch vụ y tế thiết yếu',
    globalStat: 'Hơn một nửa dân số thế giới (4.5 tỷ người) thiếu dịch vụ y tế cơ bản; 2 tỷ người gặp khó khăn tài chính nghiêm trọng do chi phí y tế tự chi trả.',
    vietnamStat: 'Độ bao phủ Bảo hiểm Y tế (BHYT) tại Việt Nam vượt 93.3% dân số; đang nỗ lực kéo giảm chi tiêu y tế từ tiền túi hộ gia đình xuống dưới 30%.',
    insight: 'UHC là chìa khóa xóa nghèo y tế. Doanh nghiệp cần đóng BHYT đầy đủ và hỗ trợ thuốc generic thiết yếu trong chuỗi cung ứng.',
    type: 'uhc',
  },
  {
    id: '3.9',
    code: 'Target 3.9',
    name: 'Ô nhiễm môi trường',
    targetContent: 'Ô nhiễm môi trường (Giảm tử vong do hóa chất, không khí)',
    focusIndicators: ['Tử vong do ô nhiễm không khí', 'Tử vong do nước/vệ sinh'],
    shortDesc: 'Giảm tử vong do hóa chất, không khí.',
    sdgGoal: 'Giảm tử vong do hóa chất, không khí',
    statusBadge: 'Báo động ô nhiễm',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    accentColor: '#F43F5E',
    borderColor: 'border-rose-500/50',
    bgGlow: 'from-rose-500/15 to-transparent',
    keyMetric: '9.0 Triệu',
    metricLabel: 'Ca tử vong do ô nhiễm môi trường / năm (1/6 toàn cầu)',
    globalStat: 'Ô nhiễm không khí gây ra 6.7 triệu ca tử vong/năm; 99% dân số thế giới đang hít thở bầu không khí vượt quá giới hạn an toàn của WHO.',
    vietnamStat: 'Ước tính có khoảng 60.000 ca tử vong/năm liên quan đến ô nhiễm bụi mịn PM2.5 và chất lượng không khí tại các đô thị lớn ở Việt Nam.',
    insight: 'Chuyển đổi giao thông xanh, năng lượng tái tạo và kiểm soát phát thải nhà máy là biện pháp căn cơ bảo vệ phổi cộng đồng.',
    type: 'pollution',
  },
];

interface SDG3TargetsBreakdownProps {
  currentStep?: number;
  showAll?: boolean;
}

export const SDG3TargetsBreakdown: React.FC<SDG3TargetsBreakdownProps> = ({
  currentStep = 0,
  showAll = false,
}) => {
  const initialIndex = Math.max(0, Math.min(targetsList.length - 1, currentStep));
  const [selectedTargetId, setSelectedTargetId] = useState<string>(targetsList[initialIndex]?.id || '3.1');

  // Sync with presenter step advancement
  useEffect(() => {
    if (!showAll) {
      const targetIndex = Math.min(targetsList.length - 1, Math.max(0, currentStep));
      if (targetsList[targetIndex]) {
        setSelectedTargetId(targetsList[targetIndex].id);
      }
    }
  }, [currentStep, showAll]);

  const activeTarget = targetsList.find((t) => t.id === selectedTargetId) || targetsList[0];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        {/* =============================================================
            LEFT COLUMN: INTERACTIVE TARGETS SELECTOR LIST (5 COLS)
            ============================================================= */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="liquid-glass-natural rounded-xl p-2.5 sm:p-3 border border-emerald-500/20">
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10">
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-emerald-300 uppercase">
                <CheckCircleIcon className="w-3 h-3 text-emerald-400" />
                <span>Mục tiêu Chính (Target 3.1 — 3.9)</span>
              </div>
              <span className="text-xs text-white/40 font-mono">9 Mục tiêu</span>
            </div>

            <div className="space-y-1 max-h-[460px] overflow-y-auto pr-1 custom-scrollbar">
              {targetsList.map((item) => {
                const isSelected = item.id === selectedTargetId;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedTargetId(item.id)}
                    className={`w-full text-left p-1.5 sm:p-2 rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-between border ${
                      isSelected
                        ? `bg-white/10 ${item.borderColor} shadow-[0_0_12px_rgba(255,255,255,0.12)] border-2`
                        : 'liquid-glass border-white/5 hover:border-white/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="font-mono text-xs font-bold px-1.5 py-0.5 rounded"
                        style={{
                          backgroundColor: `${item.accentColor}25`,
                          color: item.accentColor,
                        }}
                      >
                        {item.id}
                      </span>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-white line-clamp-1">
                          {item.name}
                        </div>
                        <div className="text-xs text-white/60 line-clamp-1">
                          {item.shortDesc}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`h-1.5 w-1.5 rounded-full flex-shrink-0 transition-transform ${
                        isSelected ? 'scale-125 shadow-[0_0_6px]' : 'bg-white/20'
                      }`}
                      style={{
                        backgroundColor: isSelected ? item.accentColor : undefined,
                        boxShadow: isSelected ? `0 0 6px ${item.accentColor}` : undefined,
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
              initial={{ opacity: 0, x: 20, filter: 'blur(6px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -20, filter: 'blur(6px)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`liquid-glass-strong rounded-xl p-3.5 sm:p-4 border flex-1 flex flex-col justify-between shadow-xl relative overflow-hidden ${activeTarget.borderColor}`}
            >
              {/* Radial glow backdrop */}
              <div
                className="absolute top-0 right-0 w-60 h-60 blur-[80px] pointer-events-none opacity-20"
                style={{ backgroundColor: activeTarget.accentColor }}
              />

              <div className="relative z-10">
                {/* Header: Code, Title & Status Badge */}
                <div className="flex items-start justify-between gap-2 pb-2 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span
                        className="font-mono text-xs px-1.5 py-0.5 rounded font-bold"
                        style={{
                          backgroundColor: `${activeTarget.accentColor}25`,
                          color: activeTarget.accentColor,
                        }}
                      >
                        {activeTarget.code}
                      </span>
                      <span className="text-xs text-white/40 font-mono">SDG 3</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {activeTarget.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-300/90 font-mono mt-0.5">
                      Mục tiêu: {activeTarget.sdgGoal}
                    </p>
                  </div>

                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded-full border flex-shrink-0 ${activeTarget.badgeColor}`}
                  >
                    {activeTarget.statusBadge}
                  </span>
                </div>

                {/* Big Metric Display with Animated Count Up */}
                <div className="my-2 flex items-baseline gap-2.5">
                  <span
                    className="font-heading italic text-2xl sm:text-3xl font-bold tracking-tight"
                    style={{ color: activeTarget.accentColor }}
                  >
                    <AnimatedNumber text={activeTarget.keyMetric} duration={1300} />
                  </span>
                  <span className="text-xs sm:text-sm text-white/60 font-light">
                    {activeTarget.metricLabel}
                  </span>
                </div>

                {/* Khung nội dung mục tiêu & chỉ số đo lường trọng tâm theo chuẩn PDF Slide 5 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2">
                  <div className="liquid-glass rounded-lg p-2 sm:p-2.5 border border-emerald-500/20">
                    <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider mb-0.5">
                      Nội dung mục tiêu:
                    </div>
                    <p className="text-xs sm:text-sm sm:text-xs font-medium text-white">
                      {activeTarget.targetContent}
                    </p>
                  </div>
                  <div className="liquid-glass rounded-lg p-2 sm:p-2.5 border border-cyan-500/20">
                    <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-0.5">
                      Chỉ số đo lường trọng tâm:
                    </div>
                    <div className="text-xs sm:text-sm text-white/90 space-y-0.5 font-light">
                      {activeTarget.focusIndicators.map((ind, idx) => (
                        <div key={idx} className="flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                          <span>{ind}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Custom Interactive SVG Mini Data Chart for This Target */}
                <div className="my-2 bg-black/40 rounded-lg p-2 border border-white/5">
                  {renderTargetMiniChart(activeTarget)}
                </div>

                {/* 3 Structured Columns: Global, Vietnam, UN Blueprint */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                  {/* Global Picture */}
                  <div className="liquid-glass rounded-lg p-2 border border-white/5">
                    <div className="text-xs font-mono text-white/50 uppercase tracking-wider mb-0.5">
                      Bức tranh Toàn cầu
                    </div>
                    <p className="text-xs text-white/80 font-light leading-relaxed">
                      {activeTarget.globalStat}
                    </p>
                  </div>

                  {/* Vietnam Context */}
                  <div className="liquid-glass rounded-lg p-2 border border-emerald-500/20">
                    <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider mb-0.5 flex items-center gap-1">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Thực trạng Việt Nam</span>
                    </div>
                    <p className="text-xs text-white/85 font-light leading-relaxed">
                      {activeTarget.vietnamStat}
                    </p>
                  </div>

                  {/* UN Blueprint Action */}
                  <div className="liquid-glass rounded-lg p-2 border border-amber-500/20">
                    <div className="text-xs font-mono text-amber-300 uppercase tracking-wider mb-0.5 flex items-center gap-1">
                      <SparklesIcon className="w-3.5 h-3.5 text-amber-400" />
                      <span>Hành động UN Blueprint</span>
                    </div>
                    <p className="text-xs text-white/90 font-light leading-relaxed">
                      {activeTarget.insight}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/40 mt-2">
                <span className="flex items-center gap-1">
                  <HeartPulseIcon className="w-3 h-3 text-emerald-400" />
                  Chỉ tiêu Trọng tâm Sức khỏe Bền vững
                </span>
                <span className="font-mono text-emerald-300">
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
   CUSTOM MINI SVG DATA CHARTS FOR TARGETS 3.1 - 3.6 (WITH SMOOTH PROGRESS ANIMATIONS)
   ========================================================================= */

function renderTargetMiniChart(target: TargetData) {
  switch (target.type) {
    case 'maternal':
      return (
        <div className="space-y-1.5 text-xs font-mono">
          <div className="flex justify-between text-white/60">
            <span>Toàn cầu: <AnimatedNumber text="223" duration={1000} /></span>
            <span className="text-rose-400 font-bold">Gấp <AnimatedNumber text="3.2x" duration={1000} /> mục tiêu</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="85%" duration={1.2} className="h-full bg-rose-500 rounded-full" />
          </div>
          <div className="flex justify-between text-white/60 pt-0.5">
            <span className="text-emerald-300">Việt Nam: ~<AnimatedNumber text="44" duration={1000} /></span>
            <span className="text-white/40">Mục tiêu SDG: &lt;70</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="25%" duration={1.2} delay={0.15} className="h-full bg-emerald-400 rounded-full" />
          </div>
        </div>
      );

    case 'child':
      return (
        <div className="space-y-1.5 text-xs font-mono">
          <div>
            <div className="flex justify-between text-white/70 mb-0.5">
              <span>Sơ sinh: <AnimatedNumber text="17‰" duration={1000} /></span>
              <span className="text-amber-300">Mục tiêu: ≤ 12‰</span>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <AnimatedProgressBar width="70%" duration={1.2} className="h-full bg-amber-400 rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-white/70 mb-0.5">
              <span>Dưới 5t: <AnimatedNumber text="37‰" duration={1000} /></span>
              <span className="text-amber-300">Mục tiêu: ≤ 25‰</span>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <AnimatedProgressBar width="78%" duration={1.2} delay={0.15} className="h-full bg-amber-500 rounded-full" />
            </div>
          </div>
        </div>
      );

    case 'epidemic':
      return (
        <div className="text-xs font-mono space-y-1">
          <div className="flex justify-between text-white/70">
            <span className="text-cyan-300">Lao: <AnimatedNumber text="1.6M" duration={1000} /></span>
            <span className="text-teal-300">Sốt rét: <AnimatedNumber text="249M" duration={1000} /></span>
            <span className="text-indigo-300">HIV: <AnimatedNumber text="1.3M" duration={1000} /></span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex gap-0.5">
            <AnimatedProgressBar width="45%" duration={1.2} className="h-full bg-cyan-400 rounded-l-full" />
            <AnimatedProgressBar width="35%" duration={1.2} delay={0.1} className="h-full bg-teal-400" />
            <AnimatedProgressBar width="20%" duration={1.2} delay={0.2} className="h-full bg-indigo-400 rounded-r-full" />
          </div>
          <div className="text-xs text-white/40">Dịch bệnh truyền nhiễm nguy hiểm hàng đầu</div>
        </div>
      );

    case 'ncd':
      return (
        <div className="text-xs font-mono space-y-1">
          <div className="flex justify-between text-white/70">
            <span>Tim mạch <AnimatedNumber text="44%" duration={1000} /></span>
            <span>Ung thư <AnimatedNumber text="23%" duration={1000} /></span>
            <span>Hô hấp <AnimatedNumber text="10%" duration={1000} /></span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex gap-0.5">
            <AnimatedProgressBar width="44%" duration={1.2} className="h-full bg-rose-500 rounded-l-full" />
            <AnimatedProgressBar width="23%" duration={1.2} delay={0.1} className="h-full bg-amber-400" />
            <AnimatedProgressBar width="33%" duration={1.2} delay={0.2} className="h-full bg-emerald-400 rounded-r-full" />
          </div>
          <div className="text-xs text-emerald-300/80">
            Chiếm <AnimatedNumber text="74%" duration={1000} /> tổng ca tử vong toàn cầu (41M ca)
          </div>
        </div>
      );

    case 'substance':
      return (
        <div className="text-xs font-mono space-y-1">
          <div className="flex justify-between text-white/70">
            <span>Rượu bia (<AnimatedNumber text="3M" duration={1000} /> tử vong)</span>
            <span className="text-indigo-300 font-bold"><AnimatedNumber text="5.3%" duration={1000} /> ca chết toàn cầu</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex gap-0.5">
            <AnimatedProgressBar width="65%" duration={1.2} className="h-full bg-indigo-500 rounded-full" />
          </div>
          <div className="text-xs text-white/40 flex justify-between">
            <span>Tai nạn <AnimatedNumber text="28%" duration={1000} /></span>
            <span>Xơ gan <AnimatedNumber text="21%" duration={1000} /></span>
            <span>Tim mạch <AnimatedNumber text="19%" duration={1000} /></span>
          </div>
        </div>
      );

    case 'traffic':
      return (
        <div className="text-xs font-mono space-y-1">
          <div className="flex justify-between text-white/70">
            <span>Hiện tại: <AnimatedNumber text="1.19M ca" duration={1000} /></span>
            <span className="text-teal-300">Mục tiêu -50%: ~<AnimatedNumber text="0.60M" duration={1000} /></span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="50%" duration={1.2} className="h-full bg-teal-400 rounded-full" />
          </div>
          <div className="text-xs text-teal-300/80">
            Sát thủ số 1 đối với thanh thiếu niên từ 5 - 29 tuổi
          </div>
        </div>
      );

    case 'fp':
      return (
        <div className="space-y-1.5 text-xs font-mono">
          <div className="flex justify-between text-white/70">
            <span>Việt Nam đáp ứng: ~<AnimatedNumber text="85%" duration={1000} /></span>
            <span className="text-emerald-300 font-bold">Mục tiêu phổ cập KHHGĐ</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="85%" duration={1.2} className="h-full bg-emerald-400 rounded-full" />
          </div>
          <div className="flex justify-between text-white/60 pt-0.5">
            <span>Toàn cầu: <AnimatedNumber text="77.5%" duration={1000} /></span>
            <span className="text-rose-400">Cận Sahara: <AnimatedNumber text="56%" duration={1000} /> (Khoảng cách lớn)</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="77.5%" duration={1.2} delay={0.15} className="h-full bg-teal-400 rounded-full" />
          </div>
        </div>
      );

    case 'uhc':
      return (
        <div className="space-y-1.5 text-xs font-mono">
          <div className="flex justify-between text-white/70">
            <span className="text-blue-300 font-bold">Bao phủ BHYT Việt Nam: &gt; <AnimatedNumber text="93.3%" duration={1000} /></span>
            <span className="text-white/40">Mục tiêu toàn dân</span>
          </div>
          <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="93.3%" duration={1.2} className="h-full bg-blue-500 rounded-full" />
          </div>
          <div className="flex justify-between text-white/60 pt-0.5">
            <span>Chỉ số UHC Toàn cầu: <AnimatedNumber text="68/100" duration={1000} /></span>
            <span className="text-rose-400"><AnimatedNumber text="4.5 tỷ" duration={1000} /> người thiếu dịch vụ</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
            <AnimatedProgressBar width="68%" duration={1.2} delay={0.15} className="h-full bg-indigo-400 rounded-full" />
          </div>
        </div>
      );

    case 'pollution':
      return (
        <div className="space-y-1 text-xs font-mono">
          <div className="flex justify-between text-white/70">
            <span className="text-rose-400">Không khí: <AnimatedNumber text="6.7M (74%)" duration={1000} /></span>
            <span className="text-cyan-300">Nước: <AnimatedNumber text="1.4M (16%)" duration={1000} /></span>
            <span className="text-amber-300">Chì & Hóa chất: <AnimatedNumber text="0.9M (10%)" duration={1000} /></span>
          </div>
          <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden flex gap-0.5">
            <AnimatedProgressBar width="74%" duration={1.2} className="h-full bg-rose-500 rounded-l-full" />
            <AnimatedProgressBar width="16%" duration={1.2} delay={0.1} className="h-full bg-cyan-400" />
            <AnimatedProgressBar width="10%" duration={1.2} delay={0.2} className="h-full bg-amber-400 rounded-r-full" />
          </div>
          <div className="text-xs text-rose-300/80">99% dân số thế giới hít thở không khí vượt ngưỡng an toàn của WHO</div>
        </div>
      );

    default:
      return null;
  }
}
