import React from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, BuildingIcon, HeartPulseIcon, CheckCircleIcon } from '../Icons';
import { VietnamHDIAndNCDChart } from '../charts/VietnamHDIAndNCDChart';
import { VinamilkEcoCycleChart } from '../charts/VinamilkEcoCycleChart';

interface VietnamVinamilkSectionProps {
  onOpenSlide: (slideNum: number) => void;
}

export const VietnamVinamilkSection: React.FC<VietnamVinamilkSectionProps> = ({ onOpenSlide }) => {
  const vnStats = [
    {
      kpi: '0.766',
      label: 'Chỉ số HDI Việt Nam',
      badge: 'Phát triển con người cao',
      detail: 'Việt Nam vững vàng trong nhóm phát triển con người cao (High HDI), tuổi thọ trung bình đạt 73.6 tuổi và tỷ lệ bao phủ BHYT vượt 93%.',
    },
    {
      kpi: '34M+',
      label: 'Hồ sơ y tế trên VNeID',
      badge: 'Chuyển đổi số y tế',
      detail: 'Hơn 34 triệu sổ sức khỏe điện tử tích hợp thành công trên nền tảng VNeID, liên thông dữ liệu khám chữa bệnh và bệnh án điện tử.',
    },
    {
      kpi: '70%',
      label: 'Ca tử vong do NCDs',
      badge: 'Thách thức sức khỏe lớn nhất',
      detail: 'Bệnh không lây nhiễm (tim mạch, ung thư, tiểu đường) chiếm tới 70% gánh nặng tử vong, đòi hỏi thay đổi lối sống và dinh dưỡng phòng ngừa.',
    },
  ];

  const vinamilkActions = [
    {
      step: '01',
      title: 'Đảm bảo sức khỏe nhân viên & cộng đồng',
      desc: 'Quỹ sữa Vươn cao Việt Nam đã trao hơn 42 triệu ly sữa cho hơn 500.000 trẻ em có hoàn cảnh khó khăn; chế độ chăm sóc y tế toàn diện cho hàng ngàn người lao động.',
      badge: 'Trách nhiệm xã hội (CSR)',
    },
    {
      step: '02',
      title: 'Nghiên cứu & giải pháp dinh dưỡng tiên tiến',
      desc: 'Phát triển dòng sản phẩm men sống Probi hỗ trợ tiêu hóa, sữa chua thực vật, công thức giảm đường và bổ sung vi chất thiết yếu theo thể trạng người Việt.',
      badge: 'Đột phá R&D Dinh dưỡng',
    },
    {
      step: '03',
      title: 'Thúc đẩy lối sống lành mạnh & Nông nghiệp xanh',
      desc: 'Mô hình trang trại sinh thái Vinamilk Green Farm tiên phong đạt chứng nhận trung hòa Carbon (Net Zero); tài trợ các phong trào thể thao và dinh dưỡng học đường.',
      badge: 'Bền vững & Net Zero',
    },
  ];

  return (
    <section id="vietnam-vinamilk" className="relative py-28 px-6 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="liquid-glass rounded-full px-3 py-1 text-xs text-emerald-300 font-mono">
              THỰC TRẠNG & ĐIỂN HÌNH • TƯƠNG ĐƯƠNG SLIDE 9 & 11
            </span>
            <span className="text-white/40 text-xs">| National Context & Corporate Action</span>
          </div>
          <h2 className="font-heading italic text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-2px]">
            Thực trạng Việt Nam & Điển hình Doanh nghiệp Vinamilk
          </h2>
        </div>

        <div className="flex items-center gap-2">
          {[9, 11].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => onOpenSlide(num)}
              className="liquid-glass px-3.5 py-2 rounded-full text-xs text-white/80 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <EyeIcon className="w-3.5 h-3.5 text-emerald-300" />
              <span>Slide {num}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Split Layout 50/50 */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left: Việt Nam */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, x: -20 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' as const }}
          className="flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3">
              <HeartPulseIcon className="w-4 h-4" />
              <span>Bối cảnh Quốc gia Việt Nam</span>
            </div>
            <h3 className="font-heading italic text-3xl sm:text-4xl text-white mb-6">
              Thành tựu phát triển & Thách thức y tế mới
            </h3>
            <p className="text-sm text-white/80 font-light leading-relaxed mb-8">
              Việt Nam đã đạt được những bước tiến vượt bậc về chỉ số phát triển con người và tuổi thọ bình quân, đồng thời đi đầu trong việc số hóa dữ liệu y tế toàn dân. Dù vậy, tỷ lệ bệnh không lây nhiễm (NCDs) vẫn là bài toán cấp bách cần giải quyết.
            </p>
          </div>

          {/* Stats List */}
          <div className="space-y-4">
            {vnStats.map((item) => (
              <div
                key={item.label}
                className="liquid-glass rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-emerald-400/40 transition-all"
              >
                <div>
                  <span className="text-[11px] font-mono text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                  <div className="text-sm font-medium text-white/95 mt-2">{item.label}</div>
                  <p className="text-xs text-white/60 font-light mt-1 max-w-sm">{item.detail}</p>
                </div>
                <div className="font-heading italic text-4xl lg:text-5xl text-white text-right self-end sm:self-center">
                  {item.kpi}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Vietnam Cause of Death Donut Chart */}
          <div className="mt-6">
            <VietnamHDIAndNCDChart />
          </div>
        </motion.div>

        {/* Right: Vinamilk Case Study */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, x: 20 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' as const }}
          className="liquid-glass-strong rounded-[1.75rem] p-6 sm:p-8 flex flex-col justify-between border border-emerald-500/20 shadow-2xl"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                <BuildingIcon className="w-4 h-4" />
                <span>Điển hình Doanh nghiệp Tiêu biểu</span>
              </div>
              <span className="liquid-glass text-[11px] text-white/80 px-3 py-1 rounded-full font-mono">
                Case Study: Vinamilk
              </span>
            </div>
            <h3 className="font-heading italic text-3xl sm:text-4xl text-white mb-6">
              Cam kết hành động vì Sức khỏe & Dinh dưỡng bền vững
            </h3>
          </div>

          <div className="space-y-4 my-2">
            {vinamilkActions.map((act) => (
              <div
                key={act.step}
                className="liquid-glass rounded-2xl p-5 hover:bg-white/[0.03] transition-colors flex items-start gap-4"
              >
                <div className="liquid-glass h-10 w-10 rounded-xl flex items-center justify-center font-heading italic text-xl text-emerald-300 flex-shrink-0">
                  {act.step}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-semibold text-white">{act.title}</h4>
                  </div>
                  <span className="inline-block text-[10px] text-emerald-300/90 font-mono mb-2">
                    {act.badge}
                  </span>
                  <p className="text-xs text-white/70 font-light leading-relaxed">{act.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Circular Eco-Flow Cycle Infographic */}
          <div className="mt-6 mb-4">
            <VinamilkEcoCycleChart />
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
            <div className="flex items-center gap-1.5 text-emerald-300">
              <CheckCircleIcon className="w-4 h-4" />
              <span>Tiên phong lộ trình Net Zero 2050</span>
            </div>
            <span>Đóng góp trực tiếp SDG 3 & SDG 12</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
