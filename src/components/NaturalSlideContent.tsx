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
  GlobeIcon,
} from './Icons';
import { DALYsBreakdownChart } from './charts/DALYsBreakdownChart';
import { VietnamHDIAndNCDChart } from './charts/VietnamHDIAndNCDChart';
import { GlobalCrisisBarChart } from './charts/GlobalCrisisBarChart';
import { VinamilkEcoCycleChart } from './charts/VinamilkEcoCycleChart';
import { SDGLinkageNetworkChart } from './charts/SDGLinkageNetworkChart';
import { SDG3LinkageNetworkChart } from './charts/SDG3LinkageNetworkChart';
import { SDG3TargetsBreakdown } from './charts/SDG3TargetsBreakdown';
import { SDG3ExtendedTargets } from './charts/SDG3ExtendedTargets';
import { SDG4TargetsBreakdown } from './charts/SDG4TargetsBreakdown';
import { SlideReferencesTable } from './charts/SlideReferencesTable';
import { TeamMembersSlide } from './charts/TeamMembersSlide';
import { GlossaryAndQASlide } from './charts/GlossaryAndQASlide';
import { QuizQuestionsSlide } from './charts/QuizQuestionsSlide';
import { AnimatedNumber } from './AnimatedCounter';

export interface NaturalSlideContentProps {
  slideNum: number;
  step: number;
  showAll: boolean;
  onOpenModal: (n: number) => void;
  onNextStep?: () => void;
  onSetStep?: (step: number) => void;
  onGoToSlide?: (slideNum: number) => void;
}

export const NaturalSlideContent: React.FC<NaturalSlideContentProps> = ({
  slideNum,
  step,
  showAll,
  onOpenModal,
  onNextStep,
  onSetStep,
  onGoToSlide,
}) => {
  const isVisible = (targetStep: number) => showAll || step >= targetStep;

  switch (slideNum) {
    /* =========================================================================
       SLIDE 1: Trang bìa chính
       Nhóm: Candy • Lớp: 26C3ECO50122002 • Năm học: 2026 • UEH
       ========================================================================= */
    case 1:
      return (
        <div className="text-center flex flex-col items-center justify-center my-auto py-10">
          <BlurText
            text="Phát Triển Bền Vững"
            className="text-4xl sm:text-6xl lg:text-7xl font-heading italic text-white leading-tight tracking-[-2px] mb-3 max-w-4xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-mono text-emerald-400 font-semibold tracking-wide mb-3"
          >
            SDG 3 & SDG 4
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-lg sm:text-xl text-white/80 font-light italic tracking-wider mb-8"
          >
            Phân tích chuyên sâu
          </motion.p>

          <AnimatePresence>
            {isVisible(1) && (
              <motion.div
                initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="flex flex-col items-center"
              >
                <div className="liquid-glass rounded-2xl px-10 py-5 mb-6 border border-emerald-500/20 shadow-xl max-w-md w-full">
                  <div className="text-2xl font-heading italic text-white mb-2">
                    Nhóm: Candy
                  </div>
                  <div className="text-sm text-emerald-300 font-mono mb-1">
                    Lớp: 26C3ECO50122002
                  </div>
                  <div className="text-xs text-white/60 font-mono">
                    Năm học: 2026
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="liquid-glass-strong rounded-full px-5 py-2 text-xs sm:text-sm font-medium text-white flex items-center gap-2 hover:brightness-125 transition-all cursor-pointer border border-emerald-400/50 shadow-lg hover:scale-105"
                  >
                    <span>Bắt đầu bài thuyết trình</span>
                    <span className="text-emerald-400">→</span>
                  </button>
                  {onGoToSlide && (
                    <button
                      type="button"
                      onClick={() => onGoToSlide(2)}
                      className="liquid-glass rounded-full px-4 py-1.5 text-xs text-pink-300 hover:text-white transition-all flex items-center gap-1.5 border border-pink-400/30 hover:bg-pink-500/20 cursor-pointer"
                    >
                      <span>Nhóm 4 — CANDY (13 TV) →</span>
                    </button>
                  )}
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
    /* =========================================================================
       SLIDE 2: Danh sách thành viên thực hiện đề tài — Nhóm 4: CANDY
       ========================================================================= */
    case 2:
      return (
        <TeamMembersSlide
          step={step}
          showAll={showAll}
          onOpenModal={onOpenModal}
          onGoToSlide={onGoToSlide}
        />
      );

    case 3:
      return (
        <div className="text-center flex flex-col items-center justify-center my-auto py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-400/30 to-teal-600/20 flex items-center justify-center border border-emerald-400/40 shadow-2xl mb-6"
          >
            <HeartPulseIcon className="w-10 h-10 text-emerald-300 animate-pulse" />
          </motion.div>

          <BlurText
            text="Phần I - SDG3"
            className="font-heading italic text-5xl sm:text-7xl text-white tracking-[-2px] mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl text-emerald-300 font-medium tracking-wide max-w-3xl leading-relaxed uppercase"
          >
            ĐẢM BẢO SỨC KHỎE TỐT VÀ CUỘC SỐNG HẠNH PHÚC
          </motion.p>
        </div>
      );

    /* =========================================================================
       SLIDE 3: Định nghĩa & Khung khái niệm (Mô hình Bánh cưới & Nguyên tắc 3Es)
       ========================================================================= */
    case 4:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <LeafIcon className="w-4 h-4" />
              <span>Slide 04 • Khung Khái Niệm & Mô Hình Bánh Cưới SDGs</span>
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

          <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-[-2px] mb-3">
            Định nghĩa và khung khái niệm
          </h2>

          <div className="liquid-glass-strong rounded-2xl p-4 sm:p-5 mb-5 border-l-4 border-emerald-400">
            <p className="text-base sm:text-lg text-white font-light italic leading-relaxed">
              “Đảm bảo cuộc sống khỏe mạnh và nâng cao phúc lợi cho mọi người ở mọi lứa tuổi”
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Cột trái: Mô hình bánh cưới SDGs (Wedding Cake Model) */}
            <div className="lg:col-span-7">
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-5 border border-emerald-500/30 shadow-2xl"
                  >
                    <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
                      <div>
                        <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider">
                          Stockholm Resilience Centre (Rockström & Sukhdev)
                        </div>
                        <div className="text-xl font-heading italic text-white">
                          Mô hình Bánh cưới SDGs (Wedding Cake Model)
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Khung Lý Thuyết
                      </span>
                    </div>

                    {/* Hình ảnh mô hình bánh cưới trích xuất chuẩn 1-1 từ Slide 3 */}
                    <div className="bg-white/95 rounded-xl p-3 shadow-inner flex flex-col items-center justify-center my-3 relative overflow-hidden group">
                      <img
                        src="/slides/wedding_cake.png"
                        alt="Mô hình Bánh cưới SDGs - Stockholm Resilience Centre"
                        className="w-full max-h-[340px] sm:max-h-[380px] lg:max-h-[420px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    {/* Chú giải 3 tầng sinh quyển - xã hội - kinh tế */}
                    <div className="grid grid-cols-3 gap-2 mt-3 text-center text-xs">
                      <div className="liquid-glass rounded-lg p-2 border border-amber-400/30">
                        <div className="font-bold text-amber-300 font-mono text-xs sm:text-sm">ECONOMY</div>
                        <div className="text-xs text-white/70">SDG 8, 9, 10, 12</div>
                      </div>
                      <div className="liquid-glass rounded-lg p-2 border border-emerald-400/40 bg-emerald-500/10">
                        <div className="font-bold text-emerald-300 font-mono text-xs sm:text-sm flex items-center justify-center gap-1">
                          <span>SOCIETY</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        </div>
                        <div className="text-xs text-emerald-200 font-medium">SDG 3, 4, 1, 11, 16, 7, 5, 2</div>
                      </div>
                      <div className="liquid-glass rounded-lg p-2 border border-cyan-400/30">
                        <div className="font-bold text-cyan-300 font-mono text-xs sm:text-sm">BIOSPHERE</div>
                        <div className="text-xs text-white/70">SDG 6, 13, 14, 15</div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Mô hình Bánh cưới"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Mô hình Bánh cưới</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>

            {/* Cột phải: Nguyên tắc 3Es của Lisa Benton-Short */}
            <div className="lg:col-span-5 space-y-4">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', x: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                    className="space-y-4"
                  >
                    <div className="liquid-glass-natural rounded-2xl p-5 border-l-4 border-emerald-400 shadow-xl">
                      <div className="text-xs text-emerald-300 font-mono mb-2">
                        Nguyên tắc 3Es của Lisa Benton-Short:
                      </div>
                      <div className="text-lg font-heading italic text-white mb-2">
                        • 3Es: Environment – Equity – Economy
                      </div>
                      <p className="text-xs text-white/75 font-light leading-relaxed">
                        Môi trường (Environment), Công bằng xã hội (Equity), và Kinh tế bền vững (Economy).
                      </p>
                    </div>

                    <div className="liquid-glass-natural rounded-2xl p-5 border-l-4 border-teal-400 shadow-xl">
                      <div className="text-xs text-teal-300 font-mono mb-2">
                        Quan điểm cốt lõi
                      </div>
                      <div className="text-base font-heading italic text-white mb-2">
                        • SDG 3: Sức khỏe là quyền con người, không phải đặc quyền
                      </div>
                    </div>

                    <div className="liquid-glass-natural rounded-2xl p-5 border-l-4 border-amber-400 shadow-xl">
                      <div className="text-xs text-amber-300 font-mono mb-2">
                        Phương trình phát triển
                      </div>
                      <div className="text-base font-semibold text-amber-200">
                        • Phát triển bền vững = Công bằng y tế + Bảo vệ môi trường
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Nguyên tắc 3Es"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Nguyên tắc 3Es</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      );

    /* =========================================================================
       SLIDE 4: Các Công cụ Đo lường Sức khỏe Toàn diện (DALYs, LE, HDI)
       ========================================================================= */
    case 5:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <LeafIcon className="w-4 h-4" />
              <span>Slide 05 • Thước Đo Học Thuật Toàn Diện</span>
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

          <h2 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-white tracking-[-1.5px] mb-6">
            Các Công cụ Đo lường Sức khỏe Toàn diện
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-5">
            {/* Card 1: DALYs */}
            <div className="min-h-[260px]">
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-3xl p-6 sm:p-7 h-full flex flex-col justify-between border-t-2 border-emerald-400 shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs sm:text-sm text-emerald-300 font-mono font-semibold">Gánh nặng Bệnh tật</span>
                        <HeartPulseIcon className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="font-heading italic text-2xl sm:text-3xl text-white mb-1.5">
                        DALYs = YLL + YLD
                      </div>
                      <div className="text-xs sm:text-sm font-mono text-emerald-300/80 mb-3">
                        Disability-Adjusted Life Years
                      </div>
                      <div className="space-y-2 text-sm text-white/85 font-light leading-relaxed">
                        <p>• <strong>YLL (Years of Life Lost):</strong> Số năm sống mất đi do chết sớm.</p>
                        <p>• <strong>YLD (Years Lived with Disability):</strong> Số năm sống chung với bệnh tật.</p>
                        <p className="text-emerald-200/95 italic pt-1 border-t border-white/10">
                          (1 DALY tương đương mất đi 1 năm sống hoàn toàn khỏe mạnh).
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={() => (onSetStep ? onSetStep(1) : onNextStep?.())}
                    className="w-full liquid-glass rounded-3xl p-6 min-h-[160px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2.5 text-xs sm:text-sm text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: DALYs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>DALYs</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>

            {/* Card 2: LE (Life Expectancy) */}
            <div className="min-h-[260px]">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-3xl p-6 sm:p-7 h-full flex flex-col justify-between border-t-2 border-teal-400 shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs sm:text-sm text-teal-300 font-mono font-semibold">Tuổi thọ Kỳ vọng</span>
                        <LeafIcon className="w-4 h-4 text-teal-400" />
                      </div>
                      <div className="font-heading italic text-2xl sm:text-3xl text-white mb-1.5">
                        LE (Life Expectancy)
                      </div>
                      <div className="text-xs sm:text-sm font-mono text-teal-300/80 mb-3">
                        Tuổi thọ kỳ vọng khi sinh
                      </div>
                      <ul className="space-y-2 text-sm text-white/85 font-light leading-relaxed">
                        <li>• Là tuổi thọ bình quân kỳ vọng của một người khi mới sinh.</li>
                        <li>• Thước đo tổng hợp về dinh dưỡng, y tế, vệ sinh và an sinh xã hội.</li>
                        <li>• Phản ánh toàn diện điều kiện sống và sức khỏe của toàn bộ quốc gia.</li>
                      </ul>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={() => (onSetStep ? onSetStep(2) : onNextStep?.())}
                    className="w-full liquid-glass rounded-3xl p-6 min-h-[160px] border border-dashed border-teal-500/40 hover:border-teal-400 bg-teal-950/20 hover:bg-teal-500/10 flex flex-col items-center justify-center gap-2.5 text-xs sm:text-sm text-teal-300/80 hover:text-teal-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: LE"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-teal-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>LE (Tuổi thọ)</strong></span>
                      <span className="font-mono text-teal-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>

            {/* Card 3: HDI Sức khỏe */}
            <div className="min-h-[260px]">
              <AnimatePresence>
                {isVisible(3) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-3xl p-6 sm:p-7 h-full flex flex-col justify-between border-t-2 border-amber-400 shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs sm:text-sm text-amber-300 font-mono font-semibold">Trọng số HDI 1/3</span>
                        <SparklesIcon className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="font-heading italic text-2xl sm:text-3xl text-white mb-1.5">
                        HDI Sức Khỏe
                      </div>
                      <div className="text-xs sm:text-sm font-mono text-amber-200 font-semibold mb-3 p-2 rounded-lg bg-amber-500/15 border border-amber-400/30 text-center">
                        I_Health = (LE - 20) / (85 - 20)
                      </div>
                      <div className="space-y-2 text-sm text-white/85 font-light leading-relaxed">
                        <p>• Chỉ số thành phần Sức khỏe được chuẩn hóa theo tuổi thọ kỳ vọng.</p>
                        <p>• <strong>20 tuổi:</strong> Mức cận dưới tối thiểu sinh tồn.</p>
                        <p>• <strong>85 tuổi:</strong> Mức cận trên chuẩn tắc tối ưu của thế giới.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={() => (onSetStep ? onSetStep(3) : onNextStep?.())}
                    className="w-full liquid-glass rounded-3xl p-6 min-h-[160px] border border-dashed border-amber-500/40 hover:border-amber-400 bg-amber-950/20 hover:bg-amber-500/10 flex flex-col items-center justify-center gap-2.5 text-xs sm:text-sm text-amber-300/80 hover:text-amber-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: HDI Sức khỏe"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-amber-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>HDI Sức Khỏe</strong></span>
                      <span className="font-mono text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
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
    case 6:
      return (
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="text-xs sm:text-sm sm:text-xs font-mono text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
              <LeafIcon className="w-3.5 h-3.5" />
              <span>Slide 06 • A. Nhóm Mục Tiêu Chính (Target 3.1 — 3.9)</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(5)}
              className="liquid-glass rounded-full px-2.5 py-0.5 text-xs sm:text-sm text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3 h-3 text-emerald-300" />
              <span>Slide 5 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-2xl sm:text-3xl text-white tracking-[-1px] mb-1">
            A. Nhóm Mục Tiêu Chính (Target 3.1 — 3.9)
          </h2>

          <p className="text-xs sm:text-sm sm:text-sm sm:text-base text-white/85 font-light leading-relaxed mb-2">
            Nhấp chọn từng mục tiêu bên dưới để khám phá chỉ số đo lường trọng tâm, số liệu thực tế và biểu đồ trực quan hóa:
          </p>

          <SDG3TargetsBreakdown currentStep={step} showAll={showAll} />
        </div>
      );

    /* =========================================================================
       SLIDE 6: B. Nhóm Phương tiện thực hiện (Target 3.a — 3.d)
       ========================================================================= */
    case 7:
      return (
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <LeafIcon className="w-4 h-4" />
              <span>Slide 07 • B. Nhóm Phương Tiện Thực Hiện (Target 3.a — 3.d)</span>
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
    case 8:
      return (
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="text-xs sm:text-sm sm:text-xs font-mono text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangleIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 08 • Bức Tranh Toàn Cầu (Phần I)</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(7)}
              className="liquid-glass rounded-full px-2.5 py-0.5 text-xs sm:text-sm text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3 h-3 text-rose-400" />
              <span>Slide 7 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-2xl sm:text-3xl text-white tracking-[-1px] mb-1">
            Bức Tranh Toàn Cầu: Khủng Hoảng Y Tế Liên Tiếp
          </h2>

          <p className="text-xs sm:text-sm sm:text-xs text-rose-300/80 mb-2.5 font-light">
            Tiến trình thực hiện SDG 3 đang chịu ảnh hưởng nặng nề từ các cuộc khủng hoảng liên tiếp toàn cầu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            {/* Card 1: Tử vong mẹ và bé */}
            <div>
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(8px)', y: 15 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass rounded-xl p-3.5 h-full border border-rose-500/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs text-rose-400 font-mono mb-0.5">Báo động sinh nở</div>
                      <div className="text-base sm:text-lg font-heading italic text-white mb-1">
                        Tử Vong Mẹ & Bé
                      </div>
                      <div className="text-xl sm:text-2xl font-bold font-mono text-rose-300 mb-1">
                        <AnimatedNumber text="223" /> / 100.000
                      </div>
                      <p className="text-xs sm:text-sm text-white/80 font-light leading-snug">
                        Cứ <strong>2 phút có 1 phụ nữ tử vong</strong> do biến chứng thai sản. Có tới{' '}
                        <strong><AnimatedNumber text="5" /> triệu trẻ em dưới 5 tuổi</strong> tử vong trong năm 2021.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-xl p-3 min-h-[75px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-1.5 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-sm"
                    title="Bấm vào đây để mở: Tử vong mẹ/bé"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-xs font-medium text-white/90 group-hover:text-white flex items-center gap-1.5">
                      <span>Bấm vào đây để mở: <strong>Tử vong mẹ/bé</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-0.5 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>

            {/* Card 2: Khủng hoảng tiêm chủng */}
            <div>
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(8px)', y: 15 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass rounded-xl p-3.5 h-full border border-amber-500/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs text-amber-400 font-mono mb-0.5">Lỗ hổng phòng dịch</div>
                      <div className="text-base sm:text-lg font-heading italic text-white mb-1">
                        Khủng Hoảng Tiêm Chủng
                      </div>
                      <div className="text-xl sm:text-2xl font-bold font-mono text-amber-300 mb-1">
                        <AnimatedNumber text="81" />% Tỷ Lệ Bao Phủ
                      </div>
                      <p className="text-xs sm:text-sm text-white/80 font-light leading-snug">
                        Tỷ lệ tiêm chủng giảm xuống mức <strong>thấp nhất trong 30 năm</strong>. Có tới{' '}
                        <strong><AnimatedNumber text="25" /> triệu trẻ bỏ lỡ tiêm chủng</strong>; tỷ lệ vaccine sởi chỉ đạt{' '}
                        <strong><AnimatedNumber text="70" />%</strong>.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-xl p-3 min-h-[75px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-1.5 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-sm"
                    title="Bấm vào đây để mở: Tiêm chủng"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-xs font-medium text-white/90 group-hover:text-white flex items-center gap-1.5">
                      <span>Bấm vào đây để mở: <strong>Tiêm chủng</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-0.5 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>

            {/* Card 3: Sự trở lại bệnh truyền nhiễm */}
            <div>
              <AnimatePresence>
                {isVisible(3) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(8px)', y: 15 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass rounded-xl p-3.5 h-full border border-purple-500/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs text-purple-400 font-mono mb-0.5">Tái bùng phát dịch bệnh</div>
                      <div className="text-base sm:text-lg font-heading italic text-white mb-1">
                        Sự Trở Lại Dịch Bệnh
                      </div>
                      <div className="text-xl sm:text-2xl font-bold font-mono text-purple-300 mb-1">
                        <AnimatedNumber text="1.6" />M & <AnimatedNumber text="247" />M
                      </div>
                      <p className="text-xs sm:text-sm text-white/80 font-light leading-snug">
                        Tử vong do <strong>Lao (TB)</strong> tăng ngược trở lại lên{' '}
                        <strong><AnimatedNumber text="1.6" /> triệu ca</strong>. Số ca nhiễm{' '}
                        <strong>Sốt rét</strong> bùng phát đạt <strong><AnimatedNumber text="247" /> triệu ca</strong> toàn cầu.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-xl p-3 min-h-[75px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-1.5 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-sm"
                    title="Bấm vào đây để mở: Bệnh truyền nhiễm"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-xs font-medium text-white/90 group-hover:text-white flex items-center gap-1.5">
                      <span>Bấm vào đây để mở: <strong>Bệnh truyền nhiễm</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-0.5 transition-transform">→</span>
                    </div>
                  </button>
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
    case 9:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-rose-400 uppercase tracking-wider flex items-center gap-2">
              <AlertTriangleIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 09 • Bức Tranh Toàn Cầu (Phần II)</span>
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
                      <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed leading-relaxed">
                        1,19 triệu ca tử vong/năm trên thế giới. Là <strong>nguyên nhân tử vong hàng đầu</strong> ở nhóm thanh thiếu niên từ 5–29 tuổi.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Tai nạn"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Tai nạn</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
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
                      <div className="text-sm sm:text-base text-white/85 font-light space-y-1.5">
                        <p>• UHC đình trệ: Chỉ số SCI chỉ đạt <strong>68/100</strong>.</p>
                        <p>• 4,5 tỷ người thiếu dịch vụ y tế thiết yếu.</p>
                        <p>• <strong><AnimatedNumber text="381" /> triệu người</strong> bị đẩy vào nghèo cùng cực do chi phí y tế.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: UHC"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>UHC</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
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
                      <div className="text-sm sm:text-base text-white/85 font-light space-y-1.5">
                        <p>• NCDs chiếm &gt;70% tử vong toàn cầu.</p>
                        <p>• Rối loạn lo âu & trầm cảm tăng <strong>25%</strong> sau đại dịch.</p>
                        <p>• Các nước nghèo chi &lt;<strong>2%</strong> ngân sách cho sức khỏe tâm thần.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: NCDs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>NCDs</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
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
                      <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed leading-relaxed">
                        Dự báo thiếu hụt <strong>10 triệu y bác sĩ, điều dưỡng</strong> vào năm 2030. Nơi thiếu hụt gay gắt nhất là châu Phi và Nam Á.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Nhân lực"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Nhân lực</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      );

    /* =========================================================================
       SLIDE 9: Thực trạng tại Việt Nam (HDI 0.766, VNeID 34M+, NCDs ~80%)
       ========================================================================= */
    case 10:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <LeafIcon className="w-4 h-4" />
              <span>Slide 10 • Dữ Liệu & Thực Tiễn Quốc Gia</span>
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
                      <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed leading-relaxed">
                        Việt Nam chính thức bước vào <strong>nhóm quốc gia có mức độ phát triển con người cao</strong> (High Human Development) theo báo cáo UNDP.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: HDI Việt Nam"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>HDI Việt Nam</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
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
                      <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed leading-relaxed">
                        Hơn 34 triệu hồ sơ sức khỏe điện tử đã tích hợp thành công trên nền tảng định danh số <strong>VNeID</strong>, tối ưu hóa việc khám chữa bệnh và lưu trữ dữ liệu.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: VNeID Chuyển đổi số"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>VNeID Chuyển đổi số</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
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
                      <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed leading-relaxed">
                        Các bệnh tim mạch, ung thư, đái tháo đường chiếm khoảng <strong>80% số ca tử vong</strong>, gây áp lực tài chính rất lớn lên hệ thống y tế cơ sở và quỹ BHYT.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Gánh nặng NCDs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Gánh nặng NCDs</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
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
    case 11:
      return (
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <NetworkIcon className="w-4 h-4 text-emerald-400" />
              <span>Slide 11 • Tính Liên Kết Hệ Thống SDG 3</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(10)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-emerald-300" />
              <span>Slide 11 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-white tracking-[-2px] mb-2">
            Tính Liên Kết SDG 3: Hệ Sinh Thái 17 Mục Tiêu
          </h2>

          <div className="flex flex-wrap items-center gap-4 mb-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="text-emerald-200 font-medium">Vòng trong: 9 Mối quan hệ tích cực MẠNH (SDG 1, 2, 4, 7, 8, 10, 11, 12, 15)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span className="text-cyan-200 font-medium">Vòng ngoài: 5 Mối quan hệ tương hỗ TÍCH CỰC (SDG 5, 6, 13, 14, 16)</span>
            </div>
          </div>
          <SDG3LinkageNetworkChart currentStep={step} showAll={showAll} onStepChange={onSetStep} />
        </div>
      );

    /* =========================================================================
       SLIDE 11: Vai trò doanh nghiệp — Vinamilk (3 Hành động & Net Zero 2050)
       ========================================================================= */
    case 12:
      return (
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <BuildingIcon className="w-4 h-4 text-emerald-400" />
              <span>Slide 12 • Vai Trò Doanh Nghiệp (Case Study Vinamilk)</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(11)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-emerald-300" />
              <span>Slide 12 gốc</span>
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
                      <div className="space-y-1.5 text-sm sm:text-base text-white/85 font-light leading-relaxed">
                        <p>• Hệ thống QMS đạt chuẩn <strong>FSSC 22000, ISO 9001 & 5S</strong>.</p>
                        <p>• <strong>14 trang trại</strong> sinh thái ứng dụng công nghệ <strong>Cow Care 4.0</strong>.</p>
                        <p>• Kiểm soát nghiêm ngặt sức khỏe đàn bò & loại bỏ dư lượng kháng sinh.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Hành động 1"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Hành động 1</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
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
                      <div className="space-y-1.5 text-sm sm:text-base text-white/85 font-light leading-relaxed">
                        <p>• Cải tiến công thức: <strong>Giảm đường, bổ sung Canxi, Vitamin D, Kẽm</strong>.</p>
                        <p>• Quỹ sữa Vươn cao Việt Nam: Trao hơn <strong><AnimatedNumber text="43" /> triệu hộp sữa</strong> cho trẻ em có hoàn cảnh khó khăn trên toàn quốc.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Hành động 2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Hành động 2</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
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
                      <div className="space-y-1.5 text-sm sm:text-base text-white/85 font-light leading-relaxed">
                        <p>• Cam kết <strong>Net Zero 2050</strong>, giảm <strong><AnimatedNumber text="55" />%</strong> phát thải nhà kính vào năm 2035.</p>
                        <p>• Đã có <strong>3 cơ sở</strong> (nhà máy & trang trại) đạt chứng nhận trung hòa carbon theo chuẩn quốc tế <strong>PAS 2060</strong>.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Hành động 3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Hành động 3</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
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
    case 13:
      return (
        <div className="text-center flex flex-col items-center justify-center my-auto py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 rounded-3xl bg-gradient-to-br from-rose-500/30 to-amber-500/20 flex items-center justify-center border border-rose-400/40 shadow-2xl mb-6"
          >
            <GraduationCapIcon className="w-10 h-10 text-rose-300 animate-pulse" />
          </motion.div>

          <BlurText
            text="Phần II - SDG4"
            className="font-heading italic text-5xl sm:text-7xl text-white tracking-[-2px] mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl text-rose-300 font-medium tracking-wide max-w-3xl leading-relaxed uppercase"
          >
            ĐẢM BẢO GIÁO DỤC CÓ CHẤT LƯỢNG
          </motion.p>
        </div>
      );

    /* =========================================================================
       SLIDE 13: Định nghĩa & Khung khái niệm: 3Es - Trụ cột Equity (SDG 4)
       ========================================================================= */
    /* =========================================================================
       SLIDE 13: Định nghĩa & Khung khái niệm (Mô hình Bánh cưới & Nguyên tắc 3Es)
       ========================================================================= */
    case 14:
      return (
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-mono text-rose-300 uppercase tracking-wider flex items-center gap-2">
              <GraduationCapIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 14 • Khung Khái Niệm & Nền Tảng Lý Thuyết (SDG 4)</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(13)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 14 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-2xl sm:text-3xl lg:text-4xl text-white tracking-[-1.5px] mb-2">
            Định nghĩa & Khung khái niệm SDG 4
          </h2>

          <div className="liquid-glass-strong rounded-xl p-3 sm:p-4 mb-3 border-l-4 border-rose-500 shadow-lg">
            <div className="text-xs sm:text-sm text-rose-300 font-mono uppercase tracking-wider mb-0.5">
              Định nghĩa chính thức Liên Hợp Quốc
            </div>
            <p className="text-sm sm:text-base text-white font-light italic leading-snug">
              “Đảm bảo nền giáo dục có chất lượng, công bằng, toàn diện và thúc đẩy cơ hội học tập suốt đời cho tất cả mọi người”
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            {/* Cột trái: Mô hình bánh cưới SDGs (Wedding Cake Model) */}
            <div className="lg:col-span-7">
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-4 border border-rose-500/30 shadow-2xl"
                  >
                    <div className="flex items-center justify-between mb-2.5 border-b border-white/10 pb-2">
                      <div>
                        <div className="text-xs font-mono text-rose-300 uppercase tracking-wider">
                          Stockholm Resilience Centre (Rockström & Sukhdev)
                        </div>
                        <div className="text-lg sm:text-xl font-heading italic text-white">
                          Mô hình Bánh cưới SDGs (Wedding Cake Model)
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-mono px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 font-medium">
                        Tầng Society
                      </span>
                    </div>

                    {/* Hình ảnh mô hình bánh cưới trích xuất chuẩn 1-1 */}
                    <div className="bg-white/95 rounded-xl p-2.5 shadow-inner flex flex-col items-center justify-center my-2 relative overflow-hidden group">
                      <img
                        src="/slides/wedding_cake.png"
                        alt="Mô hình Bánh cưới SDGs - Stockholm Resilience Centre"
                        className="w-full max-h-[220px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    {/* Chú giải 3 tầng sinh quyển - xã hội - kinh tế */}
                    <div className="grid grid-cols-3 gap-2 mt-2.5 text-center text-xs">
                      <div className="liquid-glass rounded-lg p-2 border border-amber-400/30">
                        <div className="font-bold text-amber-300 font-mono text-xs sm:text-sm">ECONOMY</div>
                        <div className="text-xs text-white/70">SDG 8, 9, 10, 12</div>
                      </div>
                      <div className="liquid-glass rounded-lg p-2 border border-rose-400/50 bg-rose-500/15 shadow-sm">
                        <div className="font-bold text-rose-300 font-mono text-xs sm:text-sm flex items-center justify-center gap-1">
                          <span>SOCIETY</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
                        </div>
                        <div className="text-xs text-rose-200 font-semibold">SDG 4, 3, 1, 11, 16, 7, 5, 2</div>
                      </div>
                      <div className="liquid-glass rounded-lg p-2 border border-cyan-400/30">
                        <div className="font-bold text-cyan-300 font-mono text-xs sm:text-sm">BIOSPHERE</div>
                        <div className="text-xs text-white/70">SDG 6, 13, 14, 15</div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={() => (onSetStep ? onSetStep(1) : onNextStep?.())}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[140px] border border-dashed border-rose-500/40 hover:border-rose-400 bg-rose-950/20 hover:bg-rose-500/10 flex flex-col items-center justify-center gap-2 text-xs text-rose-300/80 hover:text-rose-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Mô hình Bánh cưới"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-rose-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Mô hình Bánh cưới (Wedding Cake)</strong></span>
                      <span className="font-mono text-rose-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>

            {/* Cột phải: Nguyên tắc 3Es của Lisa Benton-Short */}
            <div className="lg:col-span-5 space-y-3">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', x: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                    className="space-y-3"
                  >
                    <div className="text-xs font-mono text-rose-300/90 uppercase tracking-wider px-1">
                      Nguyên tắc 3 Es Benton-Short:
                    </div>

                    <div className="liquid-glass-natural rounded-2xl p-4 border-l-4 border-rose-500 shadow-xl">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="text-xs text-rose-300 font-mono font-semibold">Trụ cột cốt lõi</div>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                          Equity
                        </span>
                      </div>
                      <div className="text-lg font-heading italic text-white mb-1.5">
                        • 3Es – Equity
                      </div>
                      <p className="text-sm text-white/90 font-light leading-relaxed">
                        Giáo dục thuộc trụ cột Công bằng, là <strong className="text-rose-300 font-medium">“công cụ bình đẳng hóa”</strong> mạnh mẽ nhất của mọi xã hội.
                      </p>
                    </div>

                    <div className="liquid-glass-natural rounded-2xl p-4 border-l-4 border-amber-400 shadow-xl">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="text-xs text-amber-300 font-mono font-semibold">Vai trò xã hội</div>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                          Xóa bỏ rào cản
                        </span>
                      </div>
                      <div className="text-lg font-heading italic text-white mb-1.5">
                        • Thu Hẹp Bất Bình Đẳng
                      </div>
                      <p className="text-sm text-white/90 font-light leading-relaxed">
                        Cơ hội tiếp cận giáo dục chất lượng quyết định sự <strong className="text-amber-300 font-medium">phân hóa kinh tế & cấu trúc xã hội</strong>.
                      </p>
                    </div>

                    <div className="liquid-glass-natural rounded-xl p-3 border-l-4 border-teal-400/80 shadow-md">
                      <div className="text-xs sm:text-sm text-teal-300 font-mono mb-1">Phương trình phát triển</div>
                      <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed leading-relaxed">
                        Đầu tư vào SDG 4 tạo hiệu ứng đòn bẩy trực tiếp đến năng suất lao động (SDG 8) và giảm nghèo đa chiều (SDG 1).
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={() => (onSetStep ? onSetStep(2) : onNextStep?.())}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[140px] border border-dashed border-rose-500/40 hover:border-rose-400 bg-rose-950/20 hover:bg-rose-500/10 flex flex-col items-center justify-center gap-2 text-xs text-rose-300/80 hover:text-rose-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Nguyên tắc 3Es"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-rose-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Nguyên tắc 3Es & Bất bình đẳng</strong></span>
                      <span className="font-mono text-rose-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      );

    /* =========================================================================
       SLIDE 14: Thước đo Đo lường Giáo dục và Công thức Học thuật
       ========================================================================= */
    case 15:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs sm:text-sm font-mono text-rose-300 uppercase tracking-wider flex items-center gap-2">
              <GraduationCapIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 15 • Thước Đo Đo Lường Giáo Dục & Công Thức Học Thuật</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(14)}
              className="liquid-glass rounded-full px-3.5 py-1.5 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 15 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-white tracking-[-1.5px] mb-6">
            Thước đo Đo lường Giáo dục và Công thức Học thuật
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Box 1: Tỉ lệ ghi danh GER vs NER */}
            <div className="min-h-[280px]">
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between border-t-2 border-rose-400 shadow-xl"
                  >
                    <div>
                      <div className="text-xs sm:text-sm text-rose-300 font-mono mb-2 font-semibold">Thước đo Tiếp cận</div>
                      <div className="text-2xl sm:text-3xl font-heading italic text-white mb-3">
                        Tỉ Lệ Ghi Danh (Enrollment)
                      </div>
                      <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed mb-5">
                        Đo lường mức độ tiếp cận giáo dục qua các cấp học (tiểu học, trung học cơ sở, THPT và đại học).
                      </p>

                      <div className="space-y-4">
                        <div className="liquid-glass rounded-2xl p-4 sm:p-5 border border-white/10">
                          <div className="text-sm sm:text-base font-mono text-rose-300 font-bold mb-1.5">
                            GER (Gross Enrollment Ratio) — Tỉ lệ nhập học gộp:
                          </div>
                          <div className="text-sm sm:text-base text-white/85 font-light leading-relaxed">
                            Tổng số học sinh nhập học bất kể độ tuổi trên tổng dân số thuộc độ tuổi chuẩn.
                          </div>
                        </div>

                        <div className="liquid-glass rounded-2xl p-4 sm:p-5 border border-white/10">
                          <div className="text-sm sm:text-base font-mono text-amber-300 font-bold mb-1.5">
                            NER (Net Enrollment Ratio) — Tỉ lệ nhập học thuần:
                          </div>
                          <div className="text-sm sm:text-base text-white/85 font-light leading-relaxed">
                            Phản ánh chính xác tỷ lệ nhập học đúng tuổi, phát hiện hiện tượng lưu ban, đi học muộn & bỏ học.
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={() => (onSetStep ? onSetStep(1) : onNextStep?.())}
                    className="w-full liquid-glass rounded-3xl p-8 min-h-[160px] border border-dashed border-rose-500/40 hover:border-rose-400 bg-rose-950/20 hover:bg-rose-500/10 flex flex-col items-center justify-center gap-3 text-sm text-rose-300/80 hover:text-rose-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: GER vs NER"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-rose-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-base font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>GER vs NER (Tỉ lệ ghi danh)</strong></span>
                      <span className="font-mono text-rose-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>

            {/* Box 2: Chỉ số HDI Giáo dục (EYS & MYS) */}
            <div className="min-h-[280px]">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between border-t-2 border-amber-400 shadow-xl"
                  >
                    <div>
                      <div className="text-xs sm:text-sm text-amber-300 font-mono mb-2 font-semibold">Chỉ số Phát triển Con người (UNDP)</div>
                      <div className="text-2xl sm:text-3xl font-heading italic text-white mb-3">
                        HDI: Chỉ Số Thành Phần Giáo Dục
                      </div>

                      <div className="liquid-glass rounded-2xl p-4 sm:p-5 text-center border border-amber-400/40 mb-5 bg-amber-500/10">
                        <span className="font-mono text-sm sm:text-base lg:text-lg text-amber-200 font-bold tracking-wide">
                          I_Education = [ (EYS / 18) × (MYS / 15) ]^(1/2) / 0.971
                        </span>
                      </div>

                      <div className="space-y-4">
                        <div className="liquid-glass rounded-2xl p-4 sm:p-5 border border-white/10">
                          <div className="text-sm sm:text-base font-mono text-amber-300 font-bold mb-1.5">
                            EYS (Expected Years of Schooling):
                          </div>
                          <div className="text-sm sm:text-base text-white/85 font-light leading-relaxed">
                            Số năm đi học kỳ vọng của trẻ em khi bắt đầu đến trường. <strong>Chuẩn tối đa thế giới: 18 năm</strong>.
                          </div>
                        </div>

                        <div className="liquid-glass rounded-2xl p-4 sm:p-5 border border-white/10">
                          <div className="text-sm sm:text-base font-mono text-emerald-300 font-bold mb-1.5">
                            MYS (Mean Years of Schooling):
                          </div>
                          <div className="text-sm sm:text-base text-white/85 font-light leading-relaxed">
                            Số năm đi học trung bình của người trưởng thành từ 25 tuổi trở lên. <strong>Chuẩn tối đa thế giới: 15 năm</strong>.
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={() => (onSetStep ? onSetStep(2) : onNextStep?.())}
                    className="w-full liquid-glass rounded-3xl p-8 min-h-[160px] border border-dashed border-amber-400/40 hover:border-amber-400 bg-amber-950/20 hover:bg-amber-500/10 flex flex-col items-center justify-center gap-3 text-sm text-amber-300/80 hover:text-amber-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: HDI Giáo dục"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-amber-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-base font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>HDI Giáo Dục (EYS & MYS)</strong></span>
                      <span className="font-mono text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      );

    /* =========================================================================
       SLIDE 15: A. Nhóm mục tiêu chính (Target 4.1 — 4.7)
       ========================================================================= */
    case 16:
      return (
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-mono text-rose-300 uppercase tracking-wider flex items-center gap-2">
              <GraduationCapIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 16 • A. Nhóm Mục Tiêu Chính (Target 4.1 — 4.7)</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(15)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 16 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-2xl sm:text-3xl text-white tracking-[-1px] mb-1">
            A. Nhóm Mục Tiêu Chính: Target 4.1 — 4.7
          </h2>

          <p className="text-xs sm:text-sm sm:text-sm sm:text-base text-white/85 font-light leading-relaxed mb-2">
            Bấm chọn từng Target hoặc dùng phím nhịp thuyết trình để khám phá các chỉ số đo lường trọng tâm theo chuẩn UNESCO:
          </p>

          <SDG4TargetsBreakdown currentStep={step} showAll={showAll} />
        </div>
      );

    /* =========================================================================
       SLIDE 16: B. Nhóm Phương tiện thực hiện (Target 4.a — 4.c)
       ========================================================================= */
    case 17:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-rose-300 uppercase tracking-wider flex items-center gap-2">
              <GraduationCapIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 17 • B. Nhóm Phương Tiện Thực Hiện (Target 4.a — 4.c)</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(16)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 17 gốc</span>
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
            <div className="min-h-[240px]">
              <AnimatePresence>
                {isVisible(1) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-6 h-full flex flex-col justify-between border-t-2 border-rose-400 shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-rose-300 font-mono bg-rose-500/10 px-2.5 py-1 rounded-md font-bold">
                          Target 4.a
                        </span>
                        <BuildingIcon className="w-4 h-4 text-rose-400" />
                      </div>
                      <div className="liquid-glass rounded-xl p-3.5 border border-white/10 mb-3">
                        <div className="text-xs sm:text-sm font-mono text-white/50 uppercase mb-1">Nội dung mục tiêu:</div>
                        <div className="text-sm font-medium text-white">
                          Cơ sở giáo dục an toàn, hòa nhập & không bạo lực.
                        </div>
                      </div>
                      <div className="liquid-glass rounded-xl p-3 border border-rose-500/20">
                        <div className="text-xs sm:text-sm font-mono text-rose-300 uppercase mb-1">Chỉ số đo lường trọng tâm:</div>
                        <div className="text-sm sm:text-base text-rose-200/95 font-light leading-relaxed">
                          Hạ tầng trường học thiết yếu & hòa nhập.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Target 4.a"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Target 4.a</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>

            {/* Card 2: Target 4.b */}
            <div className="min-h-[240px]">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-6 h-full flex flex-col justify-between border-t-2 border-amber-400 shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-amber-300 font-mono bg-amber-500/10 px-2.5 py-1 rounded-md font-bold">
                          Target 4.b
                        </span>
                        <SparklesIcon className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="liquid-glass rounded-xl p-3.5 border border-white/10 mb-3">
                        <div className="text-xs sm:text-sm font-mono text-white/50 uppercase mb-1">Nội dung mục tiêu:</div>
                        <div className="text-sm font-medium text-white">
                          Mở rộng học bổng quốc tế cho các nước đang phát triển.
                        </div>
                      </div>
                      <div className="liquid-glass rounded-xl p-3 border border-amber-500/20">
                        <div className="text-xs sm:text-sm font-mono text-amber-300 uppercase mb-1">Chỉ số đo lường trọng tâm:</div>
                        <div className="text-sm sm:text-base text-amber-200/95 font-light leading-relaxed">
                          Tiếp cận đào tạo STEM tại đại học tiên tiến.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Target 4.b"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Target 4.b</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>

            {/* Card 3: Target 4.c */}
            <div className="min-h-[240px]">
              <AnimatePresence>
                {isVisible(3) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-6 h-full flex flex-col justify-between border-t-2 border-teal-400 shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-teal-300 font-mono bg-teal-500/10 px-2.5 py-1 rounded-md font-bold">
                          Target 4.c
                        </span>
                        <GraduationCapIcon className="w-4 h-4 text-teal-400" />
                      </div>
                      <div className="liquid-glass rounded-xl p-3.5 border border-white/10 mb-3">
                        <div className="text-xs sm:text-sm font-mono text-white/50 uppercase mb-1">Nội dung mục tiêu:</div>
                        <div className="text-sm font-medium text-white">
                          Tăng nguồn cung giáo viên có chuyên môn.
                        </div>
                      </div>
                      <div className="liquid-glass rounded-xl p-3 border border-teal-500/20">
                        <div className="text-xs sm:text-sm font-mono text-teal-300 uppercase mb-1">Chỉ số đo lường trọng tâm:</div>
                        <div className="text-sm sm:text-base text-teal-200/95 font-light leading-relaxed">
                          Giáo viên quyết định chất lượng giáo dục.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Target 4.c"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Target 4.c</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      );

    /* =========================================================================
       SLIDE 17: Khủng hoảng học tập toàn cầu (84M trẻ, 300M thiếu kỹ năng, 1/4 trường thiếu hạ tầng)
       ========================================================================= */
    case 18:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-rose-400 uppercase tracking-wider flex items-center gap-2">
              <AlertTriangleIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 18 • Khủng Hoảng Học Tập Toàn Cầu</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(17)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 18 gốc</span>
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
                      <div className="text-4xl sm:text-5xl font-bold font-mono text-rose-300 mb-2">
                        <AnimatedNumber text="84" />M & <AnimatedNumber text="300" />M
                      </div>
                      <div className="text-sm sm:text-base text-white/85 font-light space-y-1.5">
                        <p>• <strong>84 triệu trẻ em, thanh thiếu niên</strong> có nguy cơ thất học vào năm 2030.</p>
                        <p>• <strong>300 triệu học sinh</strong> thiếu kỹ năng toán & đọc hiểu cơ bản dù đang ngồi trên ghế nhà trường.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: 84M & 300M"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>84M & 300M</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
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
                      <div className="text-sm sm:text-base text-white/85 font-light space-y-1.5">
                        <p>• <strong>1/4 (25%) trường tiểu học</strong> thiếu các dịch vụ cơ bản: điện, nước sạch, công trình vệ sinh, chỗ rửa tay.</p>
                        <p>• Cơ sở vật chất hạn chế cản trở nghiêm trọng việc tiếp cận giáo dục bình đẳng.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: 1/4 trường học"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>1/4 trường học</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
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
                      <div className="text-sm sm:text-base text-white/85 font-light space-y-1.5">
                        <p>• <strong>Hơn 14% giáo viên</strong> chưa đạt chuẩn chuyên môn tối thiểu theo tiêu chuẩn quốc gia (2020).</p>
                        <p>• Khu vực châu Phi cận Sahara chịu ảnh hưởng nặng nề nhất.</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Giáo viên &gt;14%"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Giáo viên &gt;14%</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      );

    /* =========================================================================
       SLIDE 18: Các rào cản cốt lõi (Khoảng cách Giới, Số hóa, Bất bình đẳng Hệ thống)
       ========================================================================= */
    case 19:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-rose-300 uppercase tracking-wider flex items-center gap-2">
              <AlertTriangleIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 19 • Thách Thức Hệ Thống & Cấu Trúc</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(18)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 19 gốc</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-4">
            {/* Cột trái: Tiêu đề & Giới thiệu rào cản */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-mono font-semibold uppercase tracking-wider">
                Thách Thức Cấu Trúc Toàn Cầu
              </div>
              <h2 className="font-heading italic text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-2px] leading-tight">
                Các rào cản <br className="hidden sm:inline" />cốt lõi
              </h2>
              <p className="text-base sm:text-lg text-white/85 font-light leading-relaxed">
                Ba rào cản mang tính hệ thống đang khoét sâu bất bình đẳng cơ hội tiếp cận giáo dục chất lượng cho hàng trăm triệu người.
              </p>
            </div>

            {/* Cột phải: 3 Rào cản lớn */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Barrier 1: Khoảng cách về Giới */}
              <div>
                <AnimatePresence>
                  {isVisible(1) ? (
                    <motion.div
                      initial={{ opacity: 0, filter: 'blur(10px)', x: 20 }}
                      animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                      className="liquid-glass-natural rounded-3xl p-6 sm:p-7 border-l-4 border-rose-500 shadow-xl flex items-center justify-between hover:bg-white/[0.08] transition-all group"
                    >
                      <div className="flex items-center gap-5">
                        <span className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/30 text-rose-300 font-mono text-xl font-bold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          01
                        </span>
                        <div>
                          <div className="text-2xl sm:text-3xl font-heading italic text-white mb-1">
                            Khoảng cách về Giới
                          </div>
                          <p className="text-sm text-white/80 font-light">
                            Định kiến giới và bất bình đẳng cơ hội học tập, đặc biệt tại các nước đang phát triển.
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/25 shrink-0 hidden sm:inline-block">
                        Rào cản 01
                      </span>
                    </motion.div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => (onSetStep ? onSetStep(1) : onNextStep?.())}
                      className="w-full liquid-glass rounded-3xl p-6 min-h-[110px] border border-dashed border-rose-500/40 hover:border-rose-400 bg-rose-950/20 hover:bg-rose-500/10 flex flex-col items-center justify-center gap-2 text-xs sm:text-sm text-rose-300/80 hover:text-rose-200 cursor-pointer transition-all duration-200 group shadow-md"
                      title="Bấm vào đây để mở: Khoảng cách về Giới"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                        <span className="font-mono text-xs uppercase tracking-wider text-rose-300 font-semibold">
                          Nội dung tiếp theo
                        </span>
                      </div>
                      <div className="text-base font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                        <span>Bấm vào đây để mở: <strong>Khoảng cách về Giới</strong></span>
                        <span className="font-mono text-rose-400 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </button>
                  )}
                </AnimatePresence>
              </div>

              {/* Barrier 2: Khoảng cách Số hóa */}
              <div>
                <AnimatePresence>
                  {isVisible(2) ? (
                    <motion.div
                      initial={{ opacity: 0, filter: 'blur(10px)', x: 20 }}
                      animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                      className="liquid-glass-natural rounded-3xl p-6 sm:p-7 border-l-4 border-amber-400 shadow-xl flex items-center justify-between hover:bg-white/[0.08] transition-all group"
                    >
                      <div className="flex items-center gap-5">
                        <span className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-300 font-mono text-xl font-bold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          02
                        </span>
                        <div>
                          <div className="text-2xl sm:text-3xl font-heading italic text-white mb-1">
                            Khoảng cách Số hóa
                          </div>
                          <p className="text-sm text-white/80 font-light">
                            Thiếu hụt thiết bị học tập thông minh, điện lưới và kết nối Internet băng rộng.
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/25 shrink-0 hidden sm:inline-block">
                        Rào cản 02
                      </span>
                    </motion.div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => (onSetStep ? onSetStep(2) : onNextStep?.())}
                      className="w-full liquid-glass rounded-3xl p-6 min-h-[110px] border border-dashed border-amber-400/40 hover:border-amber-400 bg-amber-950/20 hover:bg-amber-500/10 flex flex-col items-center justify-center gap-2 text-xs sm:text-sm text-amber-300/80 hover:text-amber-200 cursor-pointer transition-all duration-200 group shadow-md"
                      title="Bấm vào đây để mở: Khoảng cách Số hóa"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                        <span className="font-mono text-xs uppercase tracking-wider text-amber-300 font-semibold">
                          Nội dung tiếp theo
                        </span>
                      </div>
                      <div className="text-base font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                        <span>Bấm vào đây để mở: <strong>Khoảng cách Số hóa</strong></span>
                        <span className="font-mono text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </button>
                  )}
                </AnimatePresence>
              </div>

              {/* Barrier 3: Bất bình đẳng Hệ thống */}
              <div>
                <AnimatePresence>
                  {isVisible(3) ? (
                    <motion.div
                      initial={{ opacity: 0, filter: 'blur(10px)', x: 20 }}
                      animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                      className="liquid-glass-natural rounded-3xl p-6 sm:p-7 border-l-4 border-teal-400 shadow-xl flex items-center justify-between hover:bg-white/[0.08] transition-all group"
                    >
                      <div className="flex items-center gap-5">
                        <span className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/30 text-teal-300 font-mono text-xl font-bold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          03
                        </span>
                        <div>
                          <div className="text-2xl sm:text-3xl font-heading italic text-white mb-1">
                            Bất bình đẳng Hệ thống
                          </div>
                          <p className="text-sm text-white/80 font-light">
                            Phân bổ ngân sách công không đồng đều giữa thành thị và vùng sâu vùng xa.
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-teal-400/15 text-teal-300 border border-teal-400/25 shrink-0 hidden sm:inline-block">
                        Rào cản 03
                      </span>
                    </motion.div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => (onSetStep ? onSetStep(3) : onNextStep?.())}
                      className="w-full liquid-glass rounded-3xl p-6 min-h-[110px] border border-dashed border-teal-400/40 hover:border-teal-400 bg-teal-950/20 hover:bg-teal-500/10 flex flex-col items-center justify-center gap-2 text-xs sm:text-sm text-teal-300/80 hover:text-teal-200 cursor-pointer transition-all duration-200 group shadow-md"
                      title="Bấm vào đây để mở: Bất bình đẳng Hệ thống"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                        <span className="font-mono text-xs uppercase tracking-wider text-teal-300 font-semibold">
                          Nội dung tiếp theo
                        </span>
                      </div>
                      <div className="text-base font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                        <span>Bấm vào đây để mở: <strong>Bất bình đẳng Hệ thống</strong></span>
                        <span className="font-mono text-teal-400 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      );

    /* =========================================================================
       SLIDE 19: Thực trạng & Giải pháp tại Việt Nam (SDG 4)
       ========================================================================= */
    case 20:
      return (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-rose-300 uppercase tracking-wider flex items-center gap-2">
              <GraduationCapIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 20 • Thực Trạng & Chiến Lược Việt Nam (SDG 4)</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(19)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 20 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-[-2px] mb-6">
            Thực trạng & Giải Pháp
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1: Thực trạng */}
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
                        Thực trạng:
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

                        <div className="liquid-glass rounded-xl p-3 border border-amber-500/20 text-xs sm:text-sm text-amber-200 font-light">
                          Chênh lệch chất lượng giáo dục giữa các vùng
                        </div>

                        <div className="liquid-glass rounded-xl p-3 border border-rose-500/20 text-xs sm:text-sm text-rose-200 font-light">
                          Thiếu kỹ năng thực hành & kỹ năng số trước yêu cầu của AI
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Thực trạng"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Thực trạng</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>

            {/* Column 2: Giải pháp */}
            <div className="min-h-[300px]">
              <AnimatePresence>
                {isVisible(2) ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    className="liquid-glass-natural rounded-2xl p-6 h-full flex flex-col justify-between border-t-4 border-amber-400 shadow-xl"
                  >
                    <div>
                      <div className="text-xs text-amber-300 font-mono mb-1">Định hướng chiến lược</div>
                      <div className="text-2xl font-heading italic text-white mb-4">
                        Giải pháp:
                      </div>

                      <div className="space-y-3">
                        <div className="liquid-glass rounded-xl p-3.5 border border-white/10 flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-300 font-mono text-xs flex items-center justify-center shrink-0 font-bold">
                            1
                          </span>
                          <span className="text-xs sm:text-sm text-white/95 font-light">
                            Nâng cấp & đầu tư công bằng cho trường khó khăn
                          </span>
                        </div>

                        <div className="liquid-glass rounded-xl p-3.5 border border-white/10 flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs flex items-center justify-center shrink-0 font-bold">
                            2
                          </span>
                          <span className="text-xs sm:text-sm text-white/95 font-light">
                            Thu hẹp khoảng cách giới, dân tộc & địa lý
                          </span>
                        </div>

                        <div className="liquid-glass rounded-xl p-3.5 border border-white/10 flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 font-mono text-xs flex items-center justify-center shrink-0 font-bold">
                            3
                          </span>
                          <span className="text-xs sm:text-sm text-white/95 font-light">
                            Cá nhân hóa hỗ trợ học sinh yếu thế & khuyết tật
                          </span>
                        </div>

                        <div className="liquid-glass rounded-xl p-3.5 border border-white/10 flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs flex items-center justify-center shrink-0 font-bold">
                            4
                          </span>
                          <span className="text-xs sm:text-sm text-white/95 font-light">
                            Nâng chuẩn & thu hút giáo viên
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Giải pháp"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Giải pháp</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      );

    /* =========================================================================
       SLIDE 20: Tính liên kết SDG 4 (Sơ đồ Mạng lưới Tương hỗ SDGs)
       ========================================================================= */
    case 21:
      return (
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-mono text-rose-300 uppercase tracking-wider flex items-center gap-2">
              <NetworkIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 21 • Tính Liên Kết Hệ Thống SDG 4</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(20)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 21 gốc</span>
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
          <SDGLinkageNetworkChart currentStep={step} showAll={showAll} onStepChange={onSetStep} />
        </div>
      );

    /* =========================================================================
       SLIDE 21: Vai trò doanh nghiệp — Nestlé (4 Trụ cột hành động)
       ========================================================================= */
    case 22:
      return (
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-mono text-rose-300 uppercase tracking-wider flex items-center gap-2">
              <BuildingIcon className="w-4 h-4 text-rose-400" />
              <span>Slide 22 • Vai Trò Doanh Nghiệp (Case Study Nestlé)</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal(21)}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-rose-400" />
              <span>Slide 22 gốc</span>
            </button>
          </div>

          <h2 className="font-heading italic text-3xl sm:text-5xl text-white tracking-[-2px] mb-4">
            Vai trò doanh nghiệp: Nestlé
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Pillar 1 */}
            <div className="min-h-[240px]">
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
                        Đào tạo & học tập suốt đời
                      </div>
                      <div className="text-2xl font-bold font-mono text-rose-300 mb-3">
                        <AnimatedNumber text="21000" />+ Hộ
                      </div>
                      <div className="space-y-1.5 text-sm sm:text-base text-white/90 font-light leading-relaxed">
                        <p>• Đào tạo canh tác bền vững cho 21.000+ hộ nông dân</p>
                        <p>• Nâng cao tri thức sản xuất & bảo vệ đất</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Trụ cột 1"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Trụ cột 1</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>

            {/* Pillar 2 */}
            <div className="min-h-[240px]">
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
                        Đảm bảo lương đủ sống & xóa bỏ lao động trẻ em
                      </div>
                      <div className="text-2xl font-bold font-mono text-amber-300 mb-3">
                        CLMRS & <AnimatedNumber text="50" />+ Trường
                      </div>
                      <div className="space-y-1.5 text-sm sm:text-base text-white/90 font-light leading-relaxed">
                        <p>• CLMRS: Giám sát & khắc phục lao động trẻ em trong chuỗi cung ứng ca cao</p>
                        <p>• 50+ trường học, hỗ trợ học tập cho hàng chục nghìn trẻ em</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Trụ cột 2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Trụ cột 2</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>

            {/* Pillar 3 */}
            <div className="min-h-[240px]">
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
                        Hỗ trợ tiếp cận giáo dục cho nhóm yếu thế
                      </div>
                      <div className="text-2xl font-bold font-mono text-teal-300 mb-3">
                        Học bổng & Thư viện số
                      </div>
                      <div className="space-y-1.5 text-sm sm:text-base text-white/90 font-light leading-relaxed">
                        <p>• Trao học bổng & xây thư viện số cho học sinh vùng nông thôn</p>
                        <p>• Cải thiện cơ sở vật chất trường học</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Trụ cột 3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Trụ cột 3</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>

            {/* Pillar 4 */}
            <div className="min-h-[240px]">
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
                        Phát triển kỹ năng thanh niên
                      </div>
                      <div className="text-2xl font-bold font-mono text-blue-300 mb-3">
                        <AnimatedNumber text="10" />M & <AnimatedNumber text="14500" />+
                      </div>
                      <div className="space-y-1.5 text-sm sm:text-base text-white/90 font-light leading-relaxed">
                        <p>• Nestlé needs YOUth: Tiếp cận 10+ triệu thanh niên toàn cầu</p>
                        <p>• 32 trường đại học: Đào tạo & thực tập cho 14.500+ sinh viên</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="w-full liquid-glass rounded-2xl p-6 min-h-[130px] border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-500/10 flex flex-col items-center justify-center gap-2 text-xs text-emerald-300/80 hover:text-emerald-200 cursor-pointer transition-all duration-200 group shadow-md"
                    title="Bấm vào đây để mở: Trụ cột 4"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Nội dung tiếp theo
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white/90 group-hover:text-white flex items-center gap-2">
                      <span>Bấm vào đây để mở: <strong>Trụ cột 4</strong></span>
                      <span className="font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      );

    /* =========================================================================
       SLIDE 22: Bìa kết — CẢM ƠN (UEH University)
       ========================================================================= */
    case 23:
      return (
        <div className="text-center flex flex-col items-center justify-center my-auto py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="liquid-glass-natural rounded-full px-6 py-2 text-xs font-mono tracking-widest text-emerald-300 mb-8 border border-emerald-500/30 flex items-center gap-2"
          >
            <LeafIcon className="w-4 h-4 text-emerald-400" />
            <span>UEH UNIVERSITY</span>
          </motion.div>

          <BlurText
            text="CẢM ƠN"
            className="text-6xl sm:text-8xl lg:text-9xl font-heading italic text-white tracking-tight mb-8"
          />

          <AnimatePresence>
            {isVisible(1) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <button
                  type="button"
                  onClick={() => onOpenModal(22)}
                  className="liquid-glass-strong rounded-full px-5 py-2.5 text-xs sm:text-sm text-emerald-300 hover:text-white flex items-center gap-2 hover:brightness-125 transition-all cursor-pointer border border-emerald-400/30 hover:bg-emerald-500/20"
                >
                  <EyeIcon className="w-4 h-4 text-emerald-300" />
                  <span>Xem Slide 22 gốc</span>
                </button>

                {onGoToSlide && (
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => onGoToSlide(24)}
                      className="liquid-glass-strong rounded-full px-4 py-2 text-xs sm:text-sm text-emerald-300 hover:text-white flex items-center gap-2 hover:brightness-125 transition-all cursor-pointer border border-emerald-400/40 hover:bg-emerald-500/20 shadow-[0_0_15px_rgba(52,211,153,0.2)]"
                    >
                      <GlobeIcon className="w-4 h-4 text-emerald-400" />
                      <span>Trích nguồn (Slide 24) →</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onGoToSlide(25)}
                      className="liquid-glass-strong rounded-full px-4 py-2 text-xs sm:text-sm text-amber-300 hover:text-white flex items-center gap-2 hover:brightness-125 transition-all cursor-pointer border border-amber-400/40 hover:bg-amber-500/20 shadow-[0_0_15px_rgba(251,191,36,0.2)]"
                    >
                      <span>📖 Thuật ngữ & Q&A (Slide 25) →</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onGoToSlide(26)}
                      className="liquid-glass-strong rounded-full px-4 py-2 text-xs sm:text-sm text-pink-300 hover:text-white flex items-center gap-2 hover:brightness-125 transition-all cursor-pointer border border-pink-400/40 hover:bg-pink-500/20 shadow-[0_0_15px_rgba(244,114,182,0.2)]"
                    >
                      <span>🎯 Minigame 12 Câu (Slide 26) →</span>
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );

    /* =========================================================================
       SLIDE 23: Danh mục Trích nguồn & Cơ sở Dữ liệu (References & Citations)
       ========================================================================= */
    case 24:
      return (
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <GlobeIcon className="w-4 h-4 text-emerald-400" />
              <span>Slide 24 • Danh Mục Trích Nguồn & Cơ Sở Dữ Liệu</span>
            </div>
            {onGoToSlide && (
              <button
                type="button"
                onClick={() => onGoToSlide(23)}
                className="liquid-glass rounded-full px-3 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer hover:border-emerald-400/50 transition-colors"
              >
                <span>← Bìa kết (Slide 23)</span>
              </button>
            )}
          </div>

          <h2 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-white tracking-[-2px] mb-2">
            Danh Mục Trích Nguồn & Cơ Sở Dữ Liệu
          </h2>

          <p className="text-xs sm:text-sm text-white/75 font-light mb-4 max-w-4xl leading-relaxed">
            Tổng hợp chi tiết các thước đo, báo cáo thống kê chính thức của Liên Hợp Quốc (WHO, UNESCO, UNDP, World Bank) và báo cáo phát triển bền vững doanh nghiệp được sử dụng trong bài thuyết trình theo tiêu chuẩn trích dẫn khoa học.
          </p>

          <SlideReferencesTable onGoToSlide={onGoToSlide} />
        </div>
      );

    /* =========================================================================
       SLIDE 25: Từ Điển Thuật Ngữ & Kịch Bản Phản Biện Q&A (UEH PTBV)
       ========================================================================= */
    case 25:
      return <GlossaryAndQASlide onGoToSlide={onGoToSlide} />;

    /* =========================================================================
       SLIDE 26: Bộ Câu Hỏi Trắc Nghiệm & Minigame Đánh Giá Kiến Thức (12 Câu)
       ========================================================================= */
    case 26:
      return <QuizQuestionsSlide onGoToSlide={onGoToSlide} />;

    default:
      return null;
  }
};
