import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurText } from './BlurText';
import {
  LeafIcon,
  HeartPulseIcon,
  GraduationCapIcon,
  AlertTriangleIcon,
  BuildingIcon,
  SparklesIcon,
  EyeIcon,
  NetworkIcon,
} from './Icons';
import { DALYsBreakdownChart } from './charts/DALYsBreakdownChart';
import { VietnamHDIAndNCDChart } from './charts/VietnamHDIAndNCDChart';
import { GlobalCrisisBarChart } from './charts/GlobalCrisisBarChart';
import { VinamilkEcoCycleChart } from './charts/VinamilkEcoCycleChart';
import { SDGLinkageNetworkChart } from './charts/SDGLinkageNetworkChart';
import { SDG3LinkageNetworkChart } from './charts/SDG3LinkageNetworkChart';
import { EducationDeficitInfographic } from './charts/EducationDeficitInfographic';
import { SDG3TargetsBreakdown } from './charts/SDG3TargetsBreakdown';
import { SDG3ExtendedTargets } from './charts/SDG3ExtendedTargets';
import { SDG4TargetsBreakdown } from './charts/SDG4TargetsBreakdown';
import { AnimatedNumber } from './AnimatedCounter';

export interface NaturalSlideContentProps {
  slideNum: number;
  step: number;
  showAll: boolean;
  onOpenModal: (n: number) => void;
}

export const NaturalSlideContent: React.FC<NaturalSlideContentProps> = ({
  slideNum,
  step,
  showAll,
  onOpenModal,
}) => {
  const isVisible = (targetStep: number) => showAll || step >= targetStep;

  switch (slideNum) {
    /* =========================================================================
       SLIDE 1: Trang bìa chính
       Nhóm: Candy • Lớp: 26C3ECO50122002 • Năm học: 2026 • UEH
       ========================================================================= */
    case 1:
      return (
        <div className="text-center flex flex-col items-center justify-center my-auto py-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="liquid-glass-natural rounded-full px-5 py-2 text-xs sm:text-sm text-emerald-300 font-medium mb-6 flex items-center gap-2.5 border border-emerald-500/30 shadow-lg"
          >
            <LeafIcon className="w-4 h-4 text-emerald-400" />
            <span>Năm học: 2026 | Lớp: 26C3ECO50122002 | UEH University</span>
          </motion.div>

          <BlurText
            text="Phát Triển Bền Vững: SDG 3 & SDG 4"
            className="text-4xl sm:text-5xl lg:text-6xl font-heading italic text-white leading-tight tracking-[-2px] mb-4 max-w-4xl"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-emerald-300/90 font-medium tracking-wide mb-8"
          >
            Phân Tích Chuyên Sâu Mục Tiêu, Thước Đo Học Thuật & Hành Động Doanh Nghiệp
          </motion.p>

          <AnimatePresence>
            {isVisible(1) && (
              <motion.div
                initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="flex flex-col items-center"
              >
                <div className="liquid-glass rounded-2xl px-8 py-4 mb-6 border border-white/15 shadow-xl max-w-xl">
                  <div className="text-xs text-white/50 uppercase tracking-widest font-mono mb-1">
                    Nhóm Thực Hiện Nghiên Cứu
                  </div>
                  <div className="text-2xl font-heading italic text-white mb-1">
                    Nhóm: Candy
                  </div>
                  <div className="text-xs text-emerald-300 font-mono">
                    Học phần: Phát triển bền vững • Giảng đường UEH
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/60 flex items-center gap-2">
                    <SparklesIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Bộ slide chuẩn hóa 22 trang học thuật 1-to-1</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenModal(1)}
                    className="liquid-glass rounded-full px-4 py-1.5 text-xs text-emerald-300 hover:text-white transition-all flex items-center gap-1.5 border border-emerald-400/30 hover:bg-emerald-500/20 cursor-pointer"
                  >
                    <EyeIcon className="w-3.5 h-3.5" />
                    <span>Xem slide 1 gốc</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );

    /* =========================================================================
       SLIDE 2: Bìa Phần I — SDG 3
       ========================================================================= */
    case 2:
      return (
        <div className="text-center flex flex-col items-center justify-center my-auto py-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-400/30 to-teal-600/20 flex items-center justify-center border border-emerald-400/40 shadow-2xl mb-6"
          >
            <HeartPulseIcon className="w-10 h-10 text-emerald-300 animate-pulse" />
          </motion.div>

          <div className="liquid-glass-natural rounded-full px-5 py-1.5 text-xs font-mono uppercase tracking-widest text-emerald-300 mb-4 border border-emerald-500/20">
            Phần I — Chuyên Đề Trọng Điểm
          </div>

          <h2 className="font-heading italic text-4xl sm:text-6xl text-white tracking-[-2px] mb-4 max-w-3xl">
            SDG 3: Đảm Bảo Sức Khỏe Tốt & Cuộc Sống Hạnh Phúc
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-light max-w-xl mb-8">
            Ensure healthy lives and promote well-being for all at all ages
          </p>

          <AnimatePresence>
            {isVisible(1) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full"
              >
                <div className="liquid-glass rounded-xl p-4 border-t-2 border-emerald-400 text-left">
                  <div className="text-xs font-mono text-emerald-300 mb-1">01. Khung lý thuyết</div>
                  <div className="text-sm text-white font-medium">Nguyên tắc 3Es Benton-Short & DALYs</div>
                </div>
                <div className="liquid-glass rounded-xl p-4 border-t-2 border-teal-400 text-left">
                  <div className="text-xs font-mono text-teal-300 mb-1">02. Hệ thống mục tiêu</div>
                  <div className="text-sm text-white font-medium">9 Mục tiêu chính & 4 Phương tiện</div>
                </div>
                <div className="liquid-glass rounded-xl p-4 border-t-2 border-amber-400 text-left">
                  <div className="text-xs font-mono text-amber-300 mb-1">03. Thực tiễn & Liên kết</div>
                  <div className="text-sm text-white font-medium">Bức tranh VN & Case study Vinamilk</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );

    /* =========================================================================
       SLIDE 3: Định nghĩa & Khung khái niệm (Nguyên tắc 3Es Lisa Benton-Short)
       ========================================================================= */
    case 3:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <LeafIcon className="w-4 h-4" />
              <span>Slide 03 • Khung Khái Niệm & Nền Tảng Lý Thuyết</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(3)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-emerald-300" />
              <span>Slide 3 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-[-2px] mb-4">
            Định nghĩa & Khung khái niệm SDG 3
          </h2>

          <div className="liquid-glass-strong rounded-2xl p-5 sm:p-6 mb-6 border-l-4 border-emerald-400">
            <div className="text-xs text-emerald-300 font-mono uppercase tracking-widest mb-1">
              Tuyên ngôn cốt lõi Liên Hợp Quốc
            </div>
            <p className="text-lg sm:text-xl text-white font-light italic leading-relaxed">
              “Đảm bảo cuộc sống khỏe mạnh và nâng cao phúc lợi cho mọi người ở mọi lứa tuổi”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Nguyên tắc 3Es */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-5 h-full flex flex-col justify-between border-t-2 border-emerald-400"
                  >
                    <div>
                      <div className="text-xs text-emerald-300 font-mono mb-1">Mô hình Benton-Short</div>
                      <div className="text-xl font-heading italic text-white mb-2">
                        Nguyên tắc 3Es
                      </div>
                      <div className="space-y-1.5 text-xs text-white/80 font-light">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span><strong>Environment:</strong> Môi trường sinh thái trong lành</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-teal-400" />
                          <span><strong>Equity:</strong> Công bằng trong tiếp cận y tế</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                          <span><strong>Economy:</strong> Nền tảng năng suất kinh tế</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (3Es)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 2: Sức khỏe là quyền con người */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-5 h-full flex flex-col justify-between border-t-2 border-teal-400"
                  >
                    <div>
                      <div className="text-xs text-teal-300 font-mono mb-1">Triết lý Nhân quyền</div>
                      <div className="text-xl font-heading italic text-white mb-2">
                        Quyền Con Người
                      </div>
                      <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
                        SDG 3 khẳng định: Sức khỏe là <strong>quyền con người căn bản</strong>, không phải là đặc quyền dành riêng cho tầng lớp giàu có. Mọi công dân đều có quyền được bảo vệ trước rủi ro sức khỏe.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Quyền con người)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 3: Phương trình Bền vững */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-5 h-full flex flex-col justify-between border-t-2 border-amber-400"
                  >
                    <div>
                      <div className="text-xs text-amber-300 font-mono mb-1">Phương trình Bền vững</div>
                      <div className="text-xl font-heading italic text-white mb-2">
                        Công Thức Cốt Lõi
                      </div>
                      <div className="liquid-glass rounded-xl p-3 text-center border border-amber-400/30 mb-2">
                        <span className="text-xs sm:text-sm font-semibold text-amber-200">
                          Phát triển bền vững = Công bằng y tế + Bảo vệ môi trường
                        </span>
                      </div>
                      <p className="text-xs text-white/70 font-light leading-relaxed">
                        Không thể có nền kinh tế phát triển bền vững trên một hành tinh ô nhiễm và một lực lượng lao động suy kiệt vì bệnh tật.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Phương trình)
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      );

    /* =========================================================================
       SLIDE 4: Các Công cụ Đo lường Sức khỏe Toàn diện (DALYs, LE, HDI)
       ========================================================================= */
    case 4:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <LeafIcon className="w-4 h-4" />
              <span>Slide 04 • Thước Đo Học Thuật Toàn Diện</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(4)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-emerald-300" />
              <span>Slide 4 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-[-2px] mb-6">
            Các Công cụ Đo lường Sức khỏe Toàn diện
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {/* Card 1: DALYs */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-5 h-full flex flex-col justify-between border-t-2 border-emerald-400 shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-emerald-300 font-mono">Gánh nặng Bệnh tật</span>
                        <HeartPulseIcon className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="font-heading italic text-2xl sm:text-3xl text-white mb-1">
                        DALYs = YLL + YLD
                      </div>
                      <div className="text-xs font-mono text-emerald-300/80 mb-2">
                        Disability-Adjusted Life Years
                      </div>
                      <div className="space-y-1 text-xs text-white/80 font-light leading-relaxed">
                        <p>• <strong>YLL (Years of Life Lost):</strong> Số năm sống mất đi do chết sớm.</p>
                        <p>• <strong>YLD (Years Lived with Disability):</strong> Số năm sống chung với bệnh tật.</p>
                        <p className="text-emerald-200/90 italic mt-1.5">
                          (1 DALY tương đương mất đi 1 năm sống hoàn toàn khỏe mạnh).
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (DALYs)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 2: LE (Life Expectancy) */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-5 h-full flex flex-col justify-between border-t-2 border-teal-400 shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-teal-300 font-mono">Tuổi thọ Kỳ vọng</span>
                        <LeafIcon className="w-4 h-4 text-teal-400" />
                      </div>
                      <div className="font-heading italic text-2xl sm:text-3xl text-white mb-1">
                        LE (Life Expectancy)
                      </div>
                      <div className="text-xs font-mono text-teal-300/80 mb-2">
                        Tuổi thọ kỳ vọng khi sinh
                      </div>
                      <ul className="space-y-1.5 text-xs text-white/80 font-light">
                        <li>• Là tuổi thọ bình quân kỳ vọng của một người khi mới sinh.</li>
                        <li>• Thước đo tổng hợp về dinh dưỡng, y tế, vệ sinh và an sinh xã hội.</li>
                        <li>• Phản ánh toàn diện điều kiện sống và sức khỏe của toàn bộ quốc gia.</li>
                      </ul>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (LE)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 3: HDI Sức khỏe */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(3) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-5 h-full flex flex-col justify-between border-t-2 border-amber-400 shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-amber-300 font-mono">Trọng số HDI 1/3</span>
                        <SparklesIcon className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="font-heading italic text-2xl sm:text-3xl text-white mb-1">
                        HDI Sức Khỏe
                      </div>
                      <div className="text-xs font-mono text-amber-300/80 mb-2">
                        I_Health = (LE - 20) / (85 - 20)
                      </div>
                      <div className="space-y-1 text-xs text-white/80 font-light leading-relaxed">
                        <p>• Chỉ số thành phần Sức khỏe được chuẩn hóa theo tuổi thọ kỳ vọng.</p>
                        <p>• <strong>20 tuổi:</strong> Mức cận dưới tối thiểu sinh tồn.</p>
                        <p>• <strong>85 tuổi:</strong> Mức cận trên chuẩn tắc tối ưu của thế giới.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (HDI Sức khỏe)
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Interactive DALYs Breakdown Visual */}
          <div className="mt-4">
            <DALYsBreakdownChart />
          </div>
        </div>
      );

    /* =========================================================================
       SLIDE 5: A. Nhóm mục tiêu chính (Target 3.1 — 3.9)
       ========================================================================= */
    case 5:
      return (
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <LeafIcon className="w-4 h-4" />
              <span>Slide 05 • A. Nhóm Mục Tiêu Chính (Target 3.1 — 3.9)</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(5)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-emerald-300" />
              <span>Slide 5 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-white tracking-[-2px] mb-3">
            A. Nhóm Mục Tiêu Chính (Target 3.1 — 3.9)
          </h2>

          <p className="text-xs sm:text-sm text-white/70 font-light mb-4">
            Nhấp chọn từng mục tiêu bên dưới để khám phá chỉ số đo lường trọng tâm, số liệu thực tế và biểu đồ trực quan hóa:
          </p>

          <SDG3TargetsBreakdown currentStep={step} showAll={showAll} />
        </div>
      );

    /* =========================================================================
       SLIDE 6: B. Nhóm Phương tiện thực hiện (Target 3.a — 3.d)
       ========================================================================= */
    case 6:
      return (
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <LeafIcon className="w-4 h-4" />
              <span>Slide 06 • B. Nhóm Phương Tiện Thực Hiện (Target 3.a — 3.d)</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(6)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-emerald-300" />
              <span>Slide 6 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-4xl text-white tracking-[-2px] mb-3">
            B. Nhóm Phương Tiện Thực Hiện (Target 3.a — 3.d)
          </h2>

          <p className="text-xs sm:text-sm text-white/70 font-light mb-4">
            Các cơ chế then chốt: Công ước thuốc lá FCTC, nghiên cứu R&D thuốc giá rẻ, tài chính nhân lực y tế và năng lực cảnh báo sớm IHR.
          </p>

          <SDG3ExtendedTargets currentStep={step} showAll={showAll} />
        </div>
      );

    /* =========================================================================
       SLIDE 7: Bức tranh toàn cầu I (Tử vong mẹ/bé, Tiêm chủng, Bệnh truyền nhiễm)
       ========================================================================= */
    case 7:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-rose-400 uppercase tracking-wider flex items-center gap-2">
              <AlertTriangleIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 07 • Bức Tranh Toàn Cầu (Phần I)</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(7)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 7 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-[-2px] mb-2">
            Bức Tranh Toàn Cầu: Khủng Hoảng Y Tế Liên Tiếp
          </h2>

          <p className="text-sm text-rose-300/80 mb-6 font-light">
            Tiến trình thực hiện SDG 3 đang chịu ảnh hưởng nặng nề từ các cuộc khủng hoảng liên tiếp toàn cầu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {/* Card 1: Tử vong mẹ và bé */}
            <div className="min-h-[200px]">
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass rounded-2xl p-5 h-full border border-rose-500/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs text-rose-400 font-mono mb-1">Báo động sinh nở</div>
                      <div className="text-xl font-heading italic text-white mb-2">
                        Tử Vong Mẹ & Bé
                      </div>
                      <div className="text-2xl font-bold font-mono text-rose-300 mb-1">
                        <AnimatedNumber text="223" /> / 100.000
                      </div>
                      <p className="text-xs text-white/80 font-light leading-relaxed">
                        Cứ <strong>2 phút có 1 phụ nữ tử vong</strong> do biến chứng thai sản. Có tới{' '}
                        <strong><AnimatedNumber text="5" /> triệu trẻ em dưới 5 tuổi</strong> tử vong trong năm 2021.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Tử vong mẹ/bé)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 2: Khủng hoảng tiêm chủng */}
            <div className="min-h-[200px]">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass rounded-2xl p-5 h-full border border-amber-500/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs text-amber-400 font-mono mb-1">Lỗ hổng phòng dịch</div>
                      <div className="text-xl font-heading italic text-white mb-2">
                        Khủng Hoảng Tiêm Chủng
                      </div>
                      <div className="text-2xl font-bold font-mono text-amber-300 mb-1">
                        <AnimatedNumber text="81" />% Tỷ Lệ Bao Phủ
                      </div>
                      <p className="text-xs text-white/80 font-light leading-relaxed">
                        Tỷ lệ tiêm chủng giảm xuống mức <strong>thấp nhất trong 30 năm</strong>. Có tới{' '}
                        <strong><AnimatedNumber text="25" /> triệu trẻ bỏ lỡ tiêm chủng</strong>; tỷ lệ vaccine sởi chỉ đạt{' '}
                        <strong><AnimatedNumber text="70" />%</strong>.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Tiêm chủng)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 3: Sự trở lại bệnh truyền nhiễm */}
            <div className="min-h-[200px]">
              <AnimatePresence>
                {isVisible(3) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass rounded-2xl p-5 h-full border border-purple-500/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs text-purple-400 font-mono mb-1">Tái bùng phát dịch bệnh</div>
                      <div className="text-xl font-heading italic text-white mb-2">
                        Sự Trở Lại Dịch Bệnh
                      </div>
                      <div className="text-2xl font-bold font-mono text-purple-300 mb-1">
                        <AnimatedNumber text="1.6" />M & <AnimatedNumber text="247" />M
                      </div>
                      <p className="text-xs text-white/80 font-light leading-relaxed">
                        Tử vong do <strong>Lao (TB)</strong> tăng ngược trở lại lên{' '}
                        <strong><AnimatedNumber text="1.6" /> triệu ca</strong>. Số ca nhiễm{' '}
                        <strong>Sốt rét</strong> bùng phát đạt <strong><AnimatedNumber text="247" /> triệu ca</strong> toàn cầu.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Bệnh truyền nhiễm)
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <GlobalCrisisBarChart />
        </div>
      );

    /* =========================================================================
       SLIDE 8: Bức tranh toàn cầu II (Tai nạn 1.19M, UHC 4.5 Tỷ, NCDs >70%, Nhân lực 10M)
       ========================================================================= */
    case 8:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-rose-400 uppercase tracking-wider flex items-center gap-2">
              <AlertTriangleIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 08 • Bức Tranh Toàn Cầu (Phần II)</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(8)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 8 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-[-2px] mb-2">
            Bức Tranh Toàn Cầu: Bất Bình Đẳng & Khủng Hoảng Hệ Thống
          </h2>

          <p className="text-sm text-rose-300/80 mb-6 font-light">
            Gánh nặng kép từ tai nạn giao thông, sự đình trệ bao phủ y tế toàn dân đến sự thiếu hụt 10 triệu y bác sĩ.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Tai nạn giao thông */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="liquid-glass rounded-2xl p-5 h-full border-t-2 border-rose-500 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs text-rose-400 font-mono mb-1">Giao thông đường bộ</div>
                      <div className="text-lg font-heading italic text-white mb-2">Tai Nạn Giao Thông</div>
                      <div className="text-3xl font-bold font-mono text-rose-400 mb-2">
                        <AnimatedNumber text="1.19" />M
                      </div>
                      <p className="text-xs text-white/80 font-light leading-relaxed">
                        1,19 triệu ca tử vong/năm trên thế giới. Là <strong>nguyên nhân tử vong hàng đầu</strong> ở nhóm thanh thiếu niên từ 5–29 tuổi.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Tai nạn)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 2: Bất bình đẳng bao phủ Y tế */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="liquid-glass rounded-2xl p-5 h-full border-t-2 border-amber-500 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs text-amber-400 font-mono mb-1">Bao phủ y tế toàn dân</div>
                      <div className="text-lg font-heading italic text-white mb-2">Bất Bình Đẳng UHC</div>
                      <div className="text-3xl font-bold font-mono text-amber-300 mb-2">
                        <AnimatedNumber text="4.5" /> Tỷ
                      </div>
                      <div className="text-xs text-white/80 font-light space-y-1">
                        <p>• UHC đình trệ: Chỉ số SCI chỉ đạt <strong>68/100</strong>.</p>
                        <p>• 4,5 tỷ người thiếu dịch vụ y tế thiết yếu.</p>
                        <p>• <strong><AnimatedNumber text="381" /> triệu người</strong> bị đẩy vào nghèo cùng cực do chi phí y tế.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (UHC)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 3: NCDs & Sức khỏe tâm thần */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(3) ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="liquid-glass rounded-2xl p-5 h-full border-t-2 border-teal-500 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs text-teal-400 font-mono mb-1">Không lây nhiễm & Tâm lý</div>
                      <div className="text-lg font-heading italic text-white mb-2">NCDs & Tâm Thần</div>
                      <div className="text-3xl font-bold font-mono text-teal-300 mb-2">
                        &gt; <AnimatedNumber text="70" />%
                      </div>
                      <div className="text-xs text-white/80 font-light space-y-1">
                        <p>• NCDs chiếm &gt;70% tử vong toàn cầu.</p>
                        <p>• Rối loạn lo âu & trầm cảm tăng <strong>25%</strong> sau đại dịch.</p>
                        <p>• Các nước nghèo chi &lt;<strong>2%</strong> ngân sách cho sức khỏe tâm thần.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (NCDs)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 4: Khủng hoảng nhân lực y tế */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(4) ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="liquid-glass rounded-2xl p-5 h-full border-t-2 border-blue-500 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs text-blue-400 font-mono mb-1">Nhân sự toàn cầu 2030</div>
                      <div className="text-lg font-heading italic text-white mb-2">Thiếu Nhân Lực</div>
                      <div className="text-3xl font-bold font-mono text-blue-300 mb-2">
                        <AnimatedNumber text="10" /> Triệu
                      </div>
                      <p className="text-xs text-white/80 font-light leading-relaxed">
                        Dự báo thiếu hụt <strong>10 triệu y bác sĩ, điều dưỡng</strong> vào năm 2030. Nơi thiếu hụt gay gắt nhất là châu Phi và Nam Á.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Nhân lực)
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      );

    /* =========================================================================
       SLIDE 9: Thực trạng tại Việt Nam (HDI 0.766, VNeID 34M+, NCDs ~80%)
       ========================================================================= */
    case 9:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <LeafIcon className="w-4 h-4" />
              <span>Slide 09 • Dữ Liệu & Thực Tiễn Quốc Gia</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(9)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-emerald-300" />
              <span>Slide 9 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-[-2px] mb-6">
            Thực trạng Sức khỏe & Chuyển đổi số Y tế tại Việt Nam
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {/* Card 1: HDI */}
            <div className="min-h-[200px]">
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-5 h-full flex flex-col justify-between border-t-2 border-emerald-400 shadow-xl"
                  >
                    <div>
                      <div className="text-xs text-emerald-300 font-mono mb-1">Chỉ số Phát triển Con người</div>
                      <div className="text-xl font-heading italic text-white mb-2">HDI Việt Nam</div>
                      <div className="text-3xl font-bold font-mono text-emerald-300 mb-2">
                        <AnimatedNumber text="0.766" />
                      </div>
                      <p className="text-xs text-white/85 font-light leading-relaxed">
                        Việt Nam chính thức bước vào <strong>nhóm quốc gia có mức độ phát triển con người cao</strong> (High Human Development) theo báo cáo UNDP.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (HDI Việt Nam)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 2: VNeID */}
            <div className="min-h-[200px]">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-5 h-full flex flex-col justify-between border-t-2 border-teal-400 shadow-xl"
                  >
                    <div>
                      <div className="text-xs text-teal-300 font-mono mb-1">Chuyển đổi số Y tế Quốc gia</div>
                      <div className="text-xl font-heading italic text-white mb-2">Hồ Sơ Điện Tử VNeID</div>
                      <div className="text-3xl font-bold font-mono text-teal-300 mb-2">
                        &gt; <AnimatedNumber text="34" /> Triệu
                      </div>
                      <p className="text-xs text-white/85 font-light leading-relaxed">
                        Hơn 34 triệu hồ sơ sức khỏe điện tử đã tích hợp thành công trên nền tảng định danh số <strong>VNeID</strong>, tối ưu hóa việc khám chữa bệnh và lưu trữ dữ liệu.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (VNeID Chuyển đổi số)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 3: NCDs */}
            <div className="min-h-[200px]">
              <AnimatePresence>
                {isVisible(3) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-5 h-full flex flex-col justify-between border-t-2 border-rose-400 shadow-xl"
                  >
                    <div>
                      <div className="text-xs text-rose-300 font-mono mb-1">Gánh nặng Bệnh không lây</div>
                      <div className="text-xl font-heading italic text-white mb-2">NCDs tại Việt Nam</div>
                      <div className="text-3xl font-bold font-mono text-rose-400 mb-2">
                        ~ <AnimatedNumber text="80" />% Ca Tử Vong
                      </div>
                      <p className="text-xs text-white/85 font-light leading-relaxed">
                        Các bệnh tim mạch, ung thư, đái tháo đường chiếm khoảng <strong>80% số ca tử vong</strong>, gây áp lực tài chính rất lớn lên hệ thống y tế cơ sở và quỹ BHYT.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Gánh nặng NCDs)
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <VietnamHDIAndNCDChart />
        </div>
      );

    /* =========================================================================
       SLIDE 10: Tính liên kết SDG 3 (Sơ đồ Mạng lưới Quỹ đạo Đồng tâm)
       ========================================================================= */
    case 10:
      return (
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <NetworkIcon className="w-4 h-4 text-emerald-400" />
              <span>Slide 10 • Tính Liên Kết Hệ Thống SDG 3</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(10)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-emerald-300" />
              <span>Slide 10 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-white tracking-[-2px] mb-2">
            Tính Liên Kết SDG 3: Hệ Sinh Thái 17 Mục Tiêu
          </h2>

          <div className="flex flex-wrap items-center gap-4 mb-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="text-emerald-200 font-medium">Vòng trong: 9 Mối quan hệ tích cực MẠNH (SDG 1, 2, 4, 7, 8, 10, 11, 12, 16)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span className="text-cyan-200 font-medium">Vòng ngoài: 5 Mối quan hệ tương hỗ TÍCH CỰC (SDG 5, 6, 13, 14, 15)</span>
            </div>
          </div>

          <SDG3LinkageNetworkChart currentStep={step} showAll={showAll} />
        </div>
      );

    /* =========================================================================
       SLIDE 11: Vai trò doanh nghiệp — Vinamilk (3 Hành động & Net Zero 2050)
       ========================================================================= */
    case 11:
      return (
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <BuildingIcon className="w-4 h-4 text-emerald-400" />
              <span>Slide 11 • Vai Trò Doanh Nghiệp (Case Study Vinamilk)</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(11)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-emerald-300" />
              <span>Slide 11 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-[-2px] mb-4">
            Vai Trò Doanh Nghiệp: Vinamilk Đồng Hành Cùng Sức Khỏe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {/* Card 1: Hành động 1 */}
            <div className="min-h-[240px]">
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-5 h-full flex flex-col justify-between border-t-2 border-emerald-400 shadow-xl"
                  >
                    <div>
                      <div className="text-xs text-emerald-300 font-mono mb-1">Hành Động 1</div>
                      <div className="text-xl font-heading italic text-white mb-2">
                        Sức Khỏe Nhân Viên & Chuỗi Cung Ứng
                      </div>
                      <div className="space-y-1.5 text-xs text-white/80 font-light">
                        <p>• Hệ thống QMS đạt chuẩn <strong>FSSC 22000, ISO 9001 & 5S</strong>.</p>
                        <p>• <strong>14 trang trại</strong> sinh thái ứng dụng công nghệ <strong>Cow Care 4.0</strong>.</p>
                        <p>• Kiểm soát nghiêm ngặt sức khỏe đàn bò & loại bỏ dư lượng kháng sinh.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Hành động 1)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 2: Hành động 2 */}
            <div className="min-h-[240px]">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-5 h-full flex flex-col justify-between border-t-2 border-teal-400 shadow-xl"
                  >
                    <div>
                      <div className="text-xs text-teal-300 font-mono mb-1">Hành Động 2</div>
                      <div className="text-xl font-heading italic text-white mb-2">
                        Phát Triển Sản Phẩm Dinh Dưỡng
                      </div>
                      <div className="space-y-1.5 text-xs text-white/80 font-light">
                        <p>• Cải tiến công thức: <strong>Giảm đường, bổ sung Canxi, Vitamin D, Kẽm</strong>.</p>
                        <p>• Quỹ sữa Vươn cao Việt Nam: Trao hơn <strong><AnimatedNumber text="43" /> triệu hộp sữa</strong> cho trẻ em có hoàn cảnh khó khăn trên toàn quốc.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Hành động 2)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 3: Hành động 3 */}
            <div className="min-h-[240px]">
              <AnimatePresence>
                {isVisible(3) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-5 h-full flex flex-col justify-between border-t-2 border-amber-400 shadow-xl"
                  >
                    <div>
                      <div className="text-xs text-amber-300 font-mono mb-1">Hành Động 3</div>
                      <div className="text-xl font-heading italic text-white mb-2">
                        Lối Sống Lành Mạnh & Net Zero
                      </div>
                      <div className="space-y-1.5 text-xs text-white/80 font-light">
                        <p>• Cam kết <strong>Net Zero 2050</strong>, giảm <strong><AnimatedNumber text="55" />%</strong> phát thải nhà kính vào năm 2035.</p>
                        <p>• Đã có <strong>3 cơ sở</strong> (nhà máy & trang trại) đạt chứng nhận trung hòa carbon theo chuẩn quốc tế <strong>PAS 2060</strong>.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Hành động 3)
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <VinamilkEcoCycleChart />
        </div>
      );

    /* =========================================================================
       SLIDE 12: Bìa Phần II — SDG 4
       ========================================================================= */
    case 12:
      return (
        <div className="text-center flex flex-col items-center justify-center my-auto py-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 rounded-3xl bg-gradient-to-br from-rose-500/30 to-amber-500/20 flex items-center justify-center border border-rose-400/40 shadow-2xl mb-6"
          >
            <GraduationCapIcon className="w-10 h-10 text-rose-300" />
          </motion.div>

          <div className="liquid-glass-natural rounded-full px-5 py-1.5 text-xs font-mono uppercase tracking-widest text-rose-300 mb-4 border border-rose-500/20">
            Phần II — Chuyên Đề Trọng Điểm
          </div>

          <h2 className="font-heading italic text-4xl sm:text-6xl text-white tracking-[-2px] mb-4 max-w-3xl">
            SDG 4: Đảm Bảo Giáo Dục Có Chất Lượng
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-light max-w-xl mb-8">
            Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all
          </p>

          <AnimatePresence>
            {isVisible(1) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full"
              >
                <div className="liquid-glass rounded-xl p-4 border-t-2 border-rose-400 text-left">
                  <div className="text-xs font-mono text-rose-300 mb-1">01. Khung lý thuyết & Đo lường</div>
                  <div className="text-sm text-white font-medium">Trụ cột Equity, GER/NER, EYS & MYS</div>
                </div>
                <div className="liquid-glass rounded-xl p-4 border-t-2 border-amber-400 text-left">
                  <div className="text-xs font-mono text-amber-300 mb-1">02. Mục tiêu (Target 4.1 - 4.c)</div>
                  <div className="text-sm text-white font-medium">7 Mục tiêu chính & 3 Phương tiện hạ tầng</div>
                </div>
                <div className="liquid-glass rounded-xl p-4 border-t-2 border-blue-400 text-left">
                  <div className="text-xs font-mono text-blue-300 mb-1">03. Khủng hoảng, VN & Nestlé</div>
                  <div className="text-sm text-white font-medium">Rào cản số, giải pháp và case Nestlé</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );

    /* =========================================================================
       SLIDE 13: Định nghĩa & Khung khái niệm: 3Es - Trụ cột Equity (SDG 4)
       ========================================================================= */
    case 13:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-rose-300 uppercase tracking-wider flex items-center gap-2">
              <GraduationCapIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 13 • Khung Khái Niệm & Nền Tảng Lý Thuyết (SDG 4)</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(13)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 13 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-[-2px] mb-4">
            Định nghĩa & Khung khái niệm SDG 4
          </h2>

          <div className="liquid-glass-strong rounded-2xl p-5 sm:p-6 mb-6 border-l-4 border-rose-400">
            <div className="text-xs text-rose-300 font-mono uppercase tracking-widest mb-1">
              Định nghĩa chính thức Liên Hợp Quốc
            </div>
            <p className="text-lg sm:text-xl text-white font-light italic leading-relaxed">
              “Đảm bảo nền giáo dục có chất lượng, công bằng, toàn diện và thúc đẩy cơ hội học tập suốt đời cho tất cả mọi người”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Card 1: Nguyên tắc 3Es - Trụ cột Equity */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-6 h-full flex flex-col justify-between border-t-2 border-rose-400 shadow-xl"
                  >
                    <div>
                      <div className="text-xs text-rose-300 font-mono mb-1">Mô hình 3Es Lisa Benton-Short</div>
                      <div className="text-2xl font-heading italic text-white mb-3">
                        Trụ Cột Equity (Công Bằng)
                      </div>
                      <p className="text-sm text-white/85 font-light leading-relaxed mb-2">
                        Trong mô hình phát triển bền vững 3Es (Environment – Equity – Economy), giáo dục thuộc về <strong>trụ cột Công bằng (Equity)</strong>.
                      </p>
                      <div className="liquid-glass rounded-xl p-3 border border-rose-400/30">
                        <span className="text-xs sm:text-sm font-semibold text-rose-200">
                          Giáo dục được định nghĩa là “Công cụ bình đẳng hóa” (Great Equalizer) vĩ đại nhất của nhân loại.
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-6 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Trụ cột Equity)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 2: Thu hẹp bất bình đẳng */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-6 h-full flex flex-col justify-between border-t-2 border-amber-400 shadow-xl"
                  >
                    <div>
                      <div className="text-xs text-amber-300 font-mono mb-1">Cơ chế Tác động Xã hội</div>
                      <div className="text-2xl font-heading italic text-white mb-3">
                        Thu Hẹp Bất Bình Đẳng
                      </div>
                      <p className="text-sm text-white/85 font-light leading-relaxed mb-3">
                        Cơ hội tiếp cận giáo dục bình đẳng quyết định sự phân hóa kinh tế & xã hội trong nhiều thế hệ.
                      </p>
                      <ul className="space-y-2 text-xs text-white/80 font-light">
                        <li>• Phá vỡ chu kỳ đói nghèo truyền kiếp của các hộ gia đình yếu thế.</li>
                        <li>• Nâng cao nhận thức bảo vệ sinh thái và tăng cường trách nhiệm công dân.</li>
                        <li>• Cung cấp lực lượng lao động có trình độ cho tăng trưởng kinh tế bao trùm.</li>
                      </ul>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-6 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Thu hẹp bất bình đẳng)
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      );

    /* =========================================================================
       SLIDE 14: Thước đo Đo lường Giáo dục và Công thức Học thuật
       ========================================================================= */
    case 14:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-rose-300 uppercase tracking-wider flex items-center gap-2">
              <GraduationCapIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 14 • Thước Đo Đo Lường Giáo Dục & Công Thức Học Thuật</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(14)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 14 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-[-2px] mb-6">
            Thước đo Đo lường Giáo dục và Công thức Học thuật
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1: Tỉ lệ ghi danh GER vs NER */}
            <div className="min-h-[260px]">
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-6 h-full flex flex-col justify-between border-t-2 border-rose-400 shadow-xl"
                  >
                    <div>
                      <div className="text-xs text-rose-300 font-mono mb-1">Thước đo Tiếp cận</div>
                      <div className="text-2xl font-heading italic text-white mb-2">
                        Tỉ Lệ Ghi Danh (Enrollment)
                      </div>
                      <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-4">
                        Đo lường mức độ tiếp cận giáo dục qua các cấp học (tiểu học, trung học cơ sở, THPT và đại học).
                      </p>

                      <div className="space-y-3">
                        <div className="liquid-glass rounded-xl p-3 border border-white/10">
                          <div className="text-xs font-mono text-rose-300 font-semibold mb-1">
                            GER (Gross Enrollment Ratio) — Tỉ lệ nhập học gộp:
                          </div>
                          <div className="text-xs text-white/75 font-light">
                            Tổng số học sinh nhập học bất kể độ tuổi trên tổng dân số thuộc độ tuổi chuẩn.
                          </div>
                        </div>

                        <div className="liquid-glass rounded-xl p-3 border border-white/10">
                          <div className="text-xs font-mono text-amber-300 font-semibold mb-1">
                            NER (Net Enrollment Ratio) — Tỉ lệ nhập học thuần:
                          </div>
                          <div className="text-xs text-white/75 font-light">
                            Phản ánh chính xác tỷ lệ nhập học đúng tuổi, phát hiện hiện tượng lưu ban, đi học muộn & bỏ học.
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-6 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (GER vs NER)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Box 2: Chỉ số HDI Giáo dục (EYS & MYS) */}
            <div className="min-h-[260px]">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-6 h-full flex flex-col justify-between border-t-2 border-amber-400 shadow-xl"
                  >
                    <div>
                      <div className="text-xs text-amber-300 font-mono mb-1">Chỉ số Phát triển Con người (UNDP)</div>
                      <div className="text-2xl font-heading italic text-white mb-2">
                        HDI: Chỉ Số Thành Phần Giáo Dục
                      </div>

                      <div className="liquid-glass rounded-xl p-3 text-center border border-amber-400/30 mb-4">
                        <span className="font-mono text-xs sm:text-sm text-amber-200">
                          I_Education = [ (EYS / 18) × (MYS / 15) ]^(1/2) / 0.971
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="liquid-glass rounded-xl p-3 border border-white/10">
                          <div className="text-xs font-mono text-amber-300 font-semibold mb-1">
                            EYS (Expected Years of Schooling):
                          </div>
                          <div className="text-xs text-white/75 font-light">
                            Số năm đi học kỳ vọng của trẻ em khi bắt đầu đến trường. <strong>Chuẩn tối đa thế giới: 18 năm</strong>.
                          </div>
                        </div>

                        <div className="liquid-glass rounded-xl p-3 border border-white/10">
                          <div className="text-xs font-mono text-teal-300 font-semibold mb-1">
                            MYS (Mean Years of Schooling):
                          </div>
                          <div className="text-xs text-white/75 font-light">
                            Số năm đi học trung bình của người trưởng thành từ 25 tuổi trở lên. <strong>Chuẩn tối đa thế giới: 15 năm</strong>.
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-6 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (HDI Giáo dục)
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      );

    /* =========================================================================
       SLIDE 15: A. Nhóm mục tiêu chính (Target 4.1 — 4.7)
       ========================================================================= */
    case 15:
      return (
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-mono text-rose-300 uppercase tracking-wider flex items-center gap-2">
              <GraduationCapIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 15 • A. Nhóm Mục Tiêu Chính (Target 4.1 — 4.7)</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(15)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 15 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-white tracking-[-2px] mb-3">
            A. Nhóm Mục Tiêu Chính: Target 4.1 — 4.7
          </h2>

          <p className="text-xs sm:text-sm text-white/70 font-light mb-4">
            Bấm chọn từng Target hoặc dùng phím nhịp thuyết trình để khám phá các chỉ số đo lường trọng tâm theo chuẩn UNESCO:
          </p>

          <SDG4TargetsBreakdown currentStep={step} showAll={showAll} />
        </div>
      );

    /* =========================================================================
       SLIDE 16: B. Nhóm Phương tiện thực hiện (Target 4.a — 4.c)
       ========================================================================= */
    case 16:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-rose-300 uppercase tracking-wider flex items-center gap-2">
              <GraduationCapIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 16 • B. Nhóm Phương Tiện Thực Hiện (Target 4.a — 4.c)</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(16)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 16 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-[-2px] mb-4">
            B. Nhóm Phương Tiện Thực Hiện (Target 4.a — 4.c)
          </h2>

          <p className="text-xs sm:text-sm text-white/70 font-light mb-6">
            Ba đòn bẩy phương tiện then chốt nhằm hiện thực hóa các mục tiêu phát triển bền vững trong giáo dục:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Target 4.a */}
            <div className="min-h-[260px]">
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-6 h-full flex flex-col justify-between border-t-2 border-rose-400 shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-rose-300 font-mono bg-rose-500/10 px-2 py-0.5 rounded-full">
                          Target 4.a
                        </span>
                        <BuildingIcon className="w-4 h-4 text-rose-400" />
                      </div>
                      <div className="font-heading italic text-2xl text-white mb-2">
                        Hạ Tầng Trường Học An Toàn & Hòa Nhập
                      </div>
                      <div className="liquid-glass rounded-xl p-3 border border-white/10 mb-3 text-xs text-white/85 font-light">
                        <strong>Nội dung:</strong> Xây dựng & nâng cấp các cơ sở giáo dục an toàn, thân thiện với trẻ em, không bạo lực và bình đẳng giới.
                      </div>
                      <div className="text-xs text-rose-200/90 font-mono">
                        Chỉ số trọng tâm: Điện lưới, nước sạch, nhà vệ sinh riêng biệt cho nam/nữ, lối đi cho người khuyết tật.
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-6 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Target 4.a Hạ tầng)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 2: Target 4.b */}
            <div className="min-h-[260px]">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-6 h-full flex flex-col justify-between border-t-2 border-amber-400 shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-amber-300 font-mono bg-amber-500/10 px-2 py-0.5 rounded-full">
                          Target 4.b
                        </span>
                        <SparklesIcon className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="font-heading italic text-2xl text-white mb-2">
                        Mở Rộng Học Bổng Toàn Cầu
                      </div>
                      <div className="liquid-glass rounded-xl p-3 border border-white/10 mb-3 text-xs text-white/85 font-light">
                        <strong>Nội dung:</strong> Mở rộng đáng kể số lượng học bổng dành cho các nước đang phát triển tiếp cận giáo dục bậc cao.
                      </div>
                      <div className="text-xs text-amber-200/90 font-mono">
                        Chỉ số trọng tâm: Tiếp cận đào tạo STEM, CNTT và nghiên cứu y sinh tại các trường đại học tiên tiến trên thế giới.
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-6 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Target 4.b Học bổng)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 3: Target 4.c */}
            <div className="min-h-[260px]">
              <AnimatePresence>
                {isVisible(3) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-6 h-full flex flex-col justify-between border-t-2 border-teal-400 shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-teal-300 font-mono bg-teal-500/10 px-2 py-0.5 rounded-full">
                          Target 4.c
                        </span>
                        <GraduationCapIcon className="w-4 h-4 text-teal-400" />
                      </div>
                      <div className="font-heading italic text-2xl text-white mb-2">
                        Nguồn Cung & Chuẩn Hóa Giáo Viên
                      </div>
                      <div className="liquid-glass rounded-xl p-3 border border-white/10 mb-3 text-xs text-white/85 font-light">
                        <strong>Nội dung:</strong> Tăng cường nguồn cung giáo viên có đủ năng lực và chuyên môn thông qua hợp tác quốc tế.
                      </div>
                      <div className="text-xs text-teal-200/90 font-mono">
                        Chỉ số trọng tâm: Tỷ lệ giáo viên qua đào tạo sư phạm chính quy đạt chuẩn quốc gia.
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-6 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Target 4.c Giáo viên)
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      );

    /* =========================================================================
       SLIDE 17: Khủng hoảng học tập toàn cầu (84M trẻ, 300M thiếu kỹ năng, 1/4 trường thiếu hạ tầng)
       ========================================================================= */
    case 17:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-rose-400 uppercase tracking-wider flex items-center gap-2">
              <AlertTriangleIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 17 • Khủng Hoảng Học Tập Toàn Cầu</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(17)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 17 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-[-2px] mb-2">
            Khủng Hoảng Học Tập Toàn Cầu
          </h2>

          <p className="text-sm text-rose-300/80 mb-6 font-light">
            Nghịch lý đi học và chất lượng thực tế cùng khoảng cách hạ tầng trầm trọng kìm hãm thế hệ tương lai.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {/* Card 1: Nghịch lý đi học và chất lượng */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass rounded-2xl p-5 h-full border border-rose-500/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs text-rose-400 font-mono mb-1">Nghịch lý giáo dục</div>
                      <div className="text-xl font-heading italic text-white mb-2">
                        Đi Học Nhưng Không Đạt Chuẩn
                      </div>
                      <div className="text-3xl font-bold font-mono text-rose-300 mb-2">
                        <AnimatedNumber text="84" />M & <AnimatedNumber text="300" />M
                      </div>
                      <div className="text-xs text-white/80 font-light space-y-1">
                        <p>• <strong>84 triệu trẻ em, thanh thiếu niên</strong> có nguy cơ thất học vào năm 2030.</p>
                        <p>• <strong>300 triệu học sinh</strong> thiếu kỹ năng toán & đọc hiểu cơ bản dù đang ngồi trên ghế nhà trường.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (84M & 300M)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 2: Khủng hoảng cơ sở hạ tầng học đường */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass rounded-2xl p-5 h-full border border-amber-500/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs text-amber-400 font-mono mb-1">Thiếu hạ tầng cơ bản</div>
                      <div className="text-xl font-heading italic text-white mb-2">
                        Hạ Tầng Học Đường
                      </div>
                      <div className="text-3xl font-bold font-mono text-amber-300 mb-2">
                        1/4 Trường Tiểu Học
                      </div>
                      <div className="text-xs text-white/80 font-light space-y-1">
                        <p>• <strong>1/4 (25%) trường tiểu học</strong> thiếu các dịch vụ cơ bản: điện, nước sạch, công trình vệ sinh, chỗ rửa tay.</p>
                        <p>• Cơ sở vật chất hạn chế cản trở nghiêm trọng việc tiếp cận giáo dục bình đẳng.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (1/4 trường học)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Card 3: Chất lượng giáo viên */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(3) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass rounded-2xl p-5 h-full border border-purple-500/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs text-purple-400 font-mono mb-1">Năng lực giảng dạy</div>
                      <div className="text-xl font-heading italic text-white mb-2">
                        Chất Lượng Giáo Viên
                      </div>
                      <div className="text-3xl font-bold font-mono text-purple-300 mb-2">
                        &gt; <AnimatedNumber text="14" />% Chưa Chuẩn
                      </div>
                      <div className="text-xs text-white/80 font-light space-y-1">
                        <p>• <strong>Hơn 14% giáo viên</strong> chưa đạt chuẩn chuyên môn tối thiểu theo tiêu chuẩn quốc gia (2020).</p>
                        <p>• Khu vực châu Phi cận Sahara chịu ảnh hưởng nặng nề nhất.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Giáo viên &gt;14%)
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <EducationDeficitInfographic />
        </div>
      );

    /* =========================================================================
       SLIDE 18: Các rào cản cốt lõi (Khoảng cách Giới, Số hóa, Bất bình đẳng Hệ thống)
       ========================================================================= */
    case 18:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-rose-300 uppercase tracking-wider flex items-center gap-2">
              <AlertTriangleIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 18 • Thách Thức Hệ Thống & Cấu Trúc</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(18)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 18 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-[-2px] mb-4">
            Các Rào Cản Cốt Lõi Kìm Hãm Tiến Trình Giáo Dục
          </h2>

          <p className="text-xs sm:text-sm text-white/70 font-light mb-6">
            Ba rào cản cấu trúc lớn nhất ngăn cản hàng trăm triệu người tiếp cận cơ hội học tập bình đẳng và toàn diện:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Barrier 1: Khoảng cách về Giới */}
            <div className="min-h-[260px]">
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-6 h-full flex flex-col justify-between border-t-2 border-rose-400 shadow-xl"
                  >
                    <div>
                      <div className="text-xs text-rose-300 font-mono mb-1">Rào cản 01</div>
                      <div className="text-2xl font-heading italic text-white mb-3">
                        Khoảng Cách Về Giới
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                        <li>• Định kiến văn hóa truyền thống ưu tiên nam giới tiếp cận học vấn cao hơn.</li>
                        <li>• Nạn tảo hôn và mang thai vị thành niên tước đi cơ hội học tập của trẻ em gái.</li>
                        <li>• Thiếu thốn công trình vệ sinh và sự an toàn trên đường đến trường.</li>
                      </ul>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-6 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Khoảng cách Giới)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Barrier 2: Khoảng cách Số hóa */}
            <div className="min-h-[260px]">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-6 h-full flex flex-col justify-between border-t-2 border-amber-400 shadow-xl"
                  >
                    <div>
                      <div className="text-xs text-amber-300 font-mono mb-1">Rào cản 02</div>
                      <div className="text-2xl font-heading italic text-white mb-3">
                        Khoảng Cách Số Hóa
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                        <li>• Hàng trăm triệu học sinh không có thiết bị máy tính hoặc internet tại nhà.</li>
                        <li>• Giáo viên và học sinh vùng nông thôn thiếu kỹ năng số căn bản.</li>
                        <li>• Nguy cơ gia tăng phân hóa nhận thức sâu sắc trước làn sóng bùng nổ của AI.</li>
                      </ul>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-6 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Khoảng cách Số hóa)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Barrier 3: Bất bình đẳng Hệ thống */}
            <div className="min-h-[260px]">
              <AnimatePresence>
                {isVisible(3) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-6 h-full flex flex-col justify-between border-t-2 border-teal-400 shadow-xl"
                  >
                    <div>
                      <div className="text-xs text-teal-300 font-mono mb-1">Rào cản 03</div>
                      <div className="text-2xl font-heading italic text-white mb-3">
                        Bất Bình Đẳng Hệ Thống
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                        <li>• Phân bổ ngân sách công không đồng đều giữa các đô thị và vùng sâu vùng xa.</li>
                        <li>• Thiếu vắng các chính sách trợ giá học tập và bảo trợ người khuyết tật.</li>
                        <li>• Tình trạng đứt gãy giáo dục do xung đột vũ trang và biến đổi khí hậu.</li>
                      </ul>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-6 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Bất bình đẳng Hệ thống)
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      );

    /* =========================================================================
       SLIDE 19: Thực trạng & Giải pháp tại Việt Nam (SDG 4)
       ========================================================================= */
    case 19:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-rose-300 uppercase tracking-wider flex items-center gap-2">
              <GraduationCapIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 19 • Thực Trạng & Chiến Lược Việt Nam (SDG 4)</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(19)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 19 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-[-2px] mb-6">
            Thực trạng & Giải pháp Giáo dục tại Việt Nam
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1: Thực trạng Việt Nam */}
            <div className="min-h-[300px]">
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-6 h-full flex flex-col justify-between border-t-4 border-rose-400 shadow-xl"
                  >
                    <div>
                      <div className="text-xs text-rose-300 font-mono mb-1">Dữ liệu thực tiễn</div>
                      <div className="text-2xl font-heading italic text-white mb-4">
                        Thực Trạng Giáo Dục
                      </div>

                      <div className="space-y-3">
                        <div className="liquid-glass rounded-xl p-3 border border-white/10 flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-white/90">Hoàn thành tiểu học:</span>
                          <span className="text-xl font-bold font-mono text-emerald-300">
                            &gt; <AnimatedNumber text="99.1" />%
                          </span>
                        </div>

                        <div className="liquid-glass rounded-xl p-3 border border-white/10 flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-white/90">Phổ cập mầm non 5 tuổi:</span>
                          <span className="text-xl font-bold font-mono text-teal-300">
                            &gt; <AnimatedNumber text="99.8" />%
                          </span>
                        </div>

                        <div className="liquid-glass rounded-xl p-3 border border-amber-500/20 text-xs text-amber-200 font-light">
                          <strong>Thách thức:</strong> Chênh lệch chất lượng giáo dục đáng kể giữa các vùng miền đô thị và miền núi/hải đảo xa xôi.
                        </div>

                        <div className="liquid-glass rounded-xl p-3 border border-rose-500/20 text-xs text-rose-200 font-light">
                          <strong>Kỷ nguyên số:</strong> Thiếu kỹ năng thực hành & kỹ năng số của sinh viên trước yêu cầu bùng nổ của Trí tuệ Nhân tạo (AI).
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-6 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Thực trạng)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Column 2: 4 Giải pháp trọng tâm */}
            <div className="min-h-[300px]">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-6 h-full flex flex-col justify-between border-t-4 border-amber-400 shadow-xl"
                  >
                    <div>
                      <div className="text-xs text-amber-300 font-mono mb-1">Chiến lược trọng điểm</div>
                      <div className="text-2xl font-heading italic text-white mb-4">
                        4 Giải Pháp Trọng Tâm
                      </div>

                      <div className="space-y-2.5">
                        <div className="liquid-glass rounded-xl p-3 border border-white/10 flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-300 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                            1
                          </span>
                          <span className="text-xs sm:text-sm text-white/90 font-light">
                            <strong>Nâng cấp & đầu tư công bằng</strong> cho các cơ sở trường học vùng khó khăn, miền núi và biên giới.
                          </span>
                        </div>

                        <div className="liquid-glass rounded-xl p-3 border border-white/10 flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                            2
                          </span>
                          <span className="text-xs sm:text-sm text-white/90 font-light">
                            <strong>Thu hẹp khoảng cách giới, dân tộc & địa lý</strong> thông qua các chính sách miễn giảm học phí và trợ cấp ăn trưa.
                          </span>
                        </div>

                        <div className="liquid-glass rounded-xl p-3 border border-white/10 flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                            3
                          </span>
                          <span className="text-xs sm:text-sm text-white/90 font-light">
                            <strong>Cá nhân hóa hỗ trợ</strong> học sinh yếu thế, khuyết tật và trang bị công cụ trợ năng hòa nhập xã hội.
                          </span>
                        </div>

                        <div className="liquid-glass rounded-xl p-3 border border-white/10 flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                            4
                          </span>
                          <span className="text-xs sm:text-sm text-white/90 font-light">
                            <strong>Nâng chuẩn & thu hút giáo viên</strong> giỏi thông qua chính sách đãi ngộ thỏa đáng và đào tạo số hóa liên tục.
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-6 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (4 Giải pháp)
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      );

    /* =========================================================================
       SLIDE 20: Tính liên kết SDG 4 (Sơ đồ Mạng lưới Tương hỗ SDGs)
       ========================================================================= */
    case 20:
      return (
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-mono text-rose-300 uppercase tracking-wider flex items-center gap-2">
              <NetworkIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 20 • Tính Liên Kết Hệ Thống SDG 4</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(20)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 20 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-white tracking-[-2px] mb-2">
            Tính Liên Kết SDG 4: Sơ Đồ Mạng Lưới Tương Hỗ
          </h2>

          <div className="flex flex-wrap items-center gap-4 mb-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_8px_#f43f5e]" />
              <span className="text-rose-200 font-medium">Vòng trong: 8 Mối quan hệ tích cực MẠNH (SDG 1, 2, 3, 7, 8, 9, 11, 16)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
              <span className="text-amber-200 font-medium">Vòng ngoài: 4 Mối quan hệ tương hỗ TÍCH CỰC (SDG 5, 6, 10, 12)</span>
            </div>
          </div>

          <SDGLinkageNetworkChart currentStep={step} showAll={showAll} />
        </div>
      );

    /* =========================================================================
       SLIDE 21: Vai trò doanh nghiệp — Nestlé (4 Trụ cột hành động)
       ========================================================================= */
    case 21:
      return (
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-mono text-rose-300 uppercase tracking-wider flex items-center gap-2">
              <BuildingIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 21 • Vai Trò Doanh Nghiệp (Case Study Nestlé)</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(21)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 21 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-[-2px] mb-4">
            Vai Trò Doanh Nghiệp: Nestlé & 4 Trụ Cột Hành Động
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Pillar 1 */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-5 h-full border-t-2 border-rose-400 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs text-rose-300 font-mono mb-1">Trụ cột 01</div>
                      <div className="text-lg font-heading italic text-white mb-2">
                        Đào Tạo & Học Suốt Đời
                      </div>
                      <div className="text-2xl font-bold font-mono text-rose-300 mb-2">
                        <AnimatedNumber text="21000" />+ Hộ
                      </div>
                      <p className="text-xs text-white/80 font-light leading-relaxed">
                        Huấn luyện kỹ thuật canh tác nông nghiệp bền vững cho hơn 21.000 hộ nông dân; nâng cao tri thức sản xuất và phục hồi đất đai.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Trụ cột 1)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Pillar 2 */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-5 h-full border-t-2 border-amber-400 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs text-amber-300 font-mono mb-1">Trụ cột 02</div>
                      <div className="text-lg font-heading italic text-white mb-2">
                        Lương Đủ Sống & Xóa Lao Động Trẻ Em
                      </div>
                      <div className="text-2xl font-bold font-mono text-amber-300 mb-2">
                        CLMRS & <AnimatedNumber text="50" />+ Trường
                      </div>
                      <p className="text-xs text-white/80 font-light leading-relaxed">
                        Hệ thống CLMRS giám sát & khắc phục triệt để lao động trẻ em; hỗ trợ học phí và xây dựng hơn 50 trường học cho hàng chục nghìn trẻ em.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Trụ cột 2)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Pillar 3 */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(3) ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-5 h-full border-t-2 border-teal-400 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs text-teal-300 font-mono mb-1">Trụ cột 03</div>
                      <div className="text-lg font-heading italic text-white mb-2">
                        Hỗ Trợ Nhóm Yếu Thế
                      </div>
                      <div className="text-2xl font-bold font-mono text-teal-300 mb-2">
                        Học Bổng & Thư Viện Số
                      </div>
                      <p className="text-xs text-white/80 font-light leading-relaxed">
                        Trao học bổng & xây thư viện số cho học sinh vùng nông thôn, vùng sâu vùng xa; cải thiện điều kiện phòng học kiên cố.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Trụ cột 3)
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Pillar 4 */}
            <div className="min-h-[220px]">
              <AnimatePresence>
                {isVisible(4) ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-5 h-full border-t-2 border-blue-400 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs text-blue-300 font-mono mb-1">Trụ cột 04</div>
                      <div className="text-lg font-heading italic text-white mb-2">
                        Kỹ Năng Thanh Niên
                      </div>
                      <div className="text-2xl font-bold font-mono text-blue-300 mb-2">
                        <AnimatedNumber text="10" />M & <AnimatedNumber text="14500" />+
                      </div>
                      <p className="text-xs text-white/80 font-light leading-relaxed">
                        Chương trình <strong>Nestlé needs YOUth</strong> tiếp cận 10+ triệu thanh niên toàn cầu; hợp tác 32 trường ĐH, đào tạo và thực tập cho hơn 14.500 sinh viên.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="liquid-glass rounded-2xl p-5 h-full border border-dashed border-white/10 flex items-center justify-center text-xs text-white/30">
                    Bấm "Tiếp ý →" (Trụ cột 4)
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      );

    /* =========================================================================
       SLIDE 22: Bìa kết & Lời tri ân
       UEH University • Nhóm: Candy • Lớp: 26C3ECO50122002 • Năm học: 2026
       ========================================================================= */
    case 22:
      return (
        <div className="text-center flex flex-col items-center justify-center my-auto py-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="liquid-glass-natural rounded-full px-5 py-2 text-xs text-emerald-300 font-medium mb-6 flex items-center gap-2 border border-emerald-500/30"
          >
            <LeafIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>UEH University • Chuyên Đề Phát Triển Bền Vững</span>
          </motion.div>

          <BlurText
            text="UEH University — Xin Chân Thành Cảm Ơn!"
            className="text-4xl sm:text-6xl lg:text-7xl font-heading italic text-white tracking-[-2px] mb-6"
          />

          <AnimatePresence>
            {isVisible(1) && (
              <motion.div
                initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                className="flex flex-col items-center max-w-2xl"
              >
                <div className="liquid-glass rounded-2xl p-6 mb-6 border border-white/15 w-full text-center">
                  <div className="text-xs text-white/50 uppercase tracking-widest font-mono mb-2">
                    Báo Cáo Nghiên Cứu Chuyên Sâu
                  </div>
                  <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed mb-4">
                    SDG 3 (Sức khỏe tốt & Cuộc sống hạnh phúc) & SDG 4 (Đảm bảo giáo dục có chất lượng).
                  </p>
                  <div className="text-xs text-emerald-300 font-mono">
                    Thực hiện bởi: <strong>Nhóm Candy</strong> • Lớp: <strong>26C3ECO50122002</strong> • Năm học: <strong>2026</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenModal(22)}
                    className="liquid-glass-strong rounded-full px-5 py-2.5 text-xs sm:text-sm text-white flex items-center gap-2 hover:brightness-125 transition-all cursor-pointer border border-emerald-400/30 hover:bg-emerald-500/20"
                  >
                    <EyeIcon className="w-4 h-4 text-emerald-300" />
                    <span>Xem Slide 22 gốc</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );

    default:
      return null;
  }
};
