import React from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, AlertTriangleIcon, BuildingIcon, NetworkIcon, LeafIcon } from '../Icons';
import { EducationDeficitInfographic } from '../charts/EducationDeficitInfographic';
import { SDGLinkageNetworkChart } from '../charts/SDGLinkageNetworkChart';

interface CrisisNestleFooterSectionProps {
  onOpenSlide: (slideNum: number) => void;
}

export const CrisisNestleFooterSection: React.FC<CrisisNestleFooterSectionProps> = ({
  onOpenSlide,
}) => {
  const crisisPoints = [
    {
      title: 'Khủng hoảng Học tập',
      stat: '84M & 300M',
      desc: '84 triệu trẻ em đối mặt nguy cơ thất học trước 2030; hơn 300 triệu học sinh thiếu kỹ năng đọc hiểu và toán học cơ bản.',
      badge: 'Báo động học tập',
    },
    {
      title: 'Thiếu Cơ sở vật chất',
      stat: '1/4 Trường học',
      desc: '1/4 tổng số trường học tiểu học thiếu nước sạch, điện lưới, công trình vệ sinh và nơi rửa tay tối thiểu.',
      badge: 'Hạ tầng yếu kém',
    },
    {
      title: 'Chất lượng Giáo viên',
      stat: '> 14% Chưa chuẩn',
      desc: 'Hơn 14% giáo viên tiểu học trên toàn cầu không đáp ứng các tiêu chuẩn nghiệp vụ sư phạm quốc gia.',
      badge: 'Năng lực giảng dạy',
    },
  ];

  const barriers = [
    {
      title: 'Khoảng cách về Giới',
      desc: 'Định kiến văn hóa truyền thống ưu tiên nam giới, nạn tảo hôn và việc thiếu an toàn trên đường đi học tước đoạt cơ hội học tập của nữ sinh.',
      badge: 'Rào cản 01',
    },
    {
      title: 'Khoảng cách Số hóa (Digital Divide)',
      desc: 'Hàng trăm triệu học sinh vùng nông thôn thiếu thiết bị máy tính và internet tốc độ cao, nguy cơ tụt hậu trước làn sóng Trí tuệ Nhân tạo (AI).',
      badge: 'Rào cản 02',
    },
    {
      title: 'Bất bình đẳng Hệ thống',
      desc: 'Phân bổ ngân sách công không đồng đều giữa đô thị và miền núi/hải đảo; thiếu thốn công cụ trợ năng và chính sách hòa nhập cho học sinh khuyết tật.',
      badge: 'Rào cản 03',
    },
  ];

  const nestleActions = [
    {
      code: '01',
      title: 'Đào tạo & Học tập suốt đời',
      program: 'Canh tác Bền vững',
      desc: 'Đào tạo phương pháp canh tác bền vững cho hơn 21.000 hộ nông dân; nâng cao tri thức sản xuất và bảo vệ chất lượng đất đai.',
    },
    {
      code: '02',
      title: 'Lương đủ sống & Xóa lao động trẻ em',
      program: 'Hệ thống CLMRS',
      desc: 'Hệ thống CLMRS giám sát và khắc phục triệt để lao động trẻ em trong chuỗi cung ứng ca cao; xây dựng 50+ trường học cho trẻ em.',
    },
    {
      code: '03',
      title: 'Tiếp cận Giáo dục Nhóm Yếu thế',
      program: 'Học bổng & Thư viện số',
      desc: 'Trao học bổng & xây thư viện số cho học sinh vùng nông thôn xa xôi; cải thiện hạ tầng lớp học kiên cố.',
    },
    {
      code: '04',
      title: 'Phát triển Kỹ năng Thanh niên',
      program: 'Nestlé needs YOUth',
      desc: 'Sáng kiến tiếp cận 10+ triệu thanh niên toàn cầu; liên kết 32 trường đại học, đào tạo và tuyển dụng hơn 14.500 sinh viên.',
    },
  ];

  return (
    <section id="crisis-nestle" className="relative py-28 px-6 lg:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="liquid-glass rounded-full px-3 py-1 text-xs text-rose-300 font-mono">
              KHỦNG HOẢNG, LIÊN KẾT & DOANH NGHIỆP • SLIDE 17 — 22
            </span>
            <span className="text-white/40 text-xs">| Crises, Linkages & Corporate Action</span>
          </div>
          <h2 className="font-heading italic text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-2px]">
            Khủng hoảng, Tính liên kết & Điển hình Nestlé
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {[17, 18, 19, 20, 21, 22].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => onOpenSlide(num)}
              className="liquid-glass px-3 py-1.5 rounded-full text-xs text-white/80 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <EyeIcon className="w-3 h-3 text-rose-300" />
              <span>Slide {num}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Part 1: Khủng hoảng học tập toàn cầu (Slide 17) */}
      <div className="mt-14">
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs uppercase tracking-widest text-rose-400 font-semibold flex items-center gap-2">
            <AlertTriangleIcon className="w-4 h-4" />
            <span>Khủng Hoảng Học Tập Toàn Cầu • Slide 17</span>
          </div>
          <button
            type="button"
            onClick={() => onOpenSlide(17)}
            className="liquid-glass rounded-full px-3.5 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
          >
            <EyeIcon className="w-3 h-3 text-rose-300" />
            <span>Xem Slide 17</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {crisisPoints.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="liquid-glass rounded-[1.25rem] p-6 flex flex-col justify-between hover:border-rose-500/30 transition-all border border-white/5"
            >
              <div>
                <span className="text-[10px] text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded-full font-mono">
                  {item.badge}
                </span>
                <div className="font-heading italic text-2xl sm:text-3xl text-white mt-3 mb-1">
                  {item.stat}
                </div>
                <h3 className="text-sm font-semibold text-white/95 mb-2">{item.title}</h3>
              </div>
              <p className="text-xs text-white/70 font-light leading-relaxed pt-3 border-t border-white/5 mt-4">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6">
          <EducationDeficitInfographic />
        </div>
      </div>

      {/* Part 2: Các rào cản cốt lõi (Slide 18) */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-2">
            <AlertTriangleIcon className="w-4 h-4 text-amber-400" />
            <span>Các Rào Cản Cốt Lõi Kìm Hãm Tiến Trình • Slide 18</span>
          </div>
          <button
            type="button"
            onClick={() => onOpenSlide(18)}
            className="liquid-glass rounded-full px-3.5 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
          >
            <EyeIcon className="w-3 h-3 text-amber-300" />
            <span>Xem Slide 18</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {barriers.map((b, idx) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="liquid-glass-natural rounded-2xl p-6 border-t-2 border-amber-400/80 shadow-lg flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full">
                  {b.badge}
                </span>
                <h3 className="font-heading italic text-xl text-white mt-3 mb-2">{b.title}</h3>
                <p className="text-xs text-white/80 font-light leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Part 3: Thực trạng & Giải pháp tại Việt Nam (Slide 19) */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-2">
            <LeafIcon className="w-4 h-4 text-emerald-400" />
            <span>Thực Trạng & Giải Pháp Giáo Dục Tại Việt Nam • Slide 19</span>
          </div>
          <button
            type="button"
            onClick={() => onOpenSlide(19)}
            className="liquid-glass rounded-full px-3.5 py-1 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
          >
            <EyeIcon className="w-3 h-3 text-emerald-300" />
            <span>Xem Slide 19</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Thực trạng */}
          <div className="liquid-glass-natural rounded-[1.5rem] p-6 border-t-4 border-rose-400 shadow-xl">
            <div className="text-xs text-rose-300 font-mono mb-1">Dữ liệu thực tiễn</div>
            <h3 className="text-2xl font-heading italic text-white mb-4">Thực Trạng Việt Nam</h3>
            <div className="space-y-3">
              <div className="liquid-glass rounded-xl p-3 border border-white/10 flex items-center justify-between">
                <span className="text-xs sm:text-sm text-white/90">Hoàn thành tiểu học:</span>
                <span className="text-lg font-bold font-mono text-emerald-300">&gt; 99.1%</span>
              </div>
              <div className="liquid-glass rounded-xl p-3 border border-white/10 flex items-center justify-between">
                <span className="text-xs sm:text-sm text-white/90">Phổ cập mầm non 5 tuổi:</span>
                <span className="text-lg font-bold font-mono text-teal-300">&gt; 99.8%</span>
              </div>
              <div className="liquid-glass rounded-xl p-3 border border-amber-500/20 text-xs text-amber-200 font-light">
                <strong>Thách thức vùng miền:</strong> Chênh lệch chất lượng giáo dục đáng kể giữa các vùng đô thị và miền núi/hải đảo xa xôi.
              </div>
              <div className="liquid-glass rounded-xl p-3 border border-rose-500/20 text-xs text-rose-200 font-light">
                <strong>Kỷ nguyên số & AI:</strong> Thiếu kỹ năng thực hành và kỹ năng số của sinh viên trước yêu cầu bùng nổ của AI.
              </div>
            </div>
          </div>

          {/* 4 Giải pháp */}
          <div className="liquid-glass-natural rounded-[1.5rem] p-6 border-t-4 border-amber-400 shadow-xl">
            <div className="text-xs text-amber-300 font-mono mb-1">Chiến lược trọng điểm</div>
            <h3 className="text-2xl font-heading italic text-white mb-4">4 Giải Pháp Trọng Tâm</h3>
            <div className="space-y-2.5">
              {[
                { n: '1', text: 'Nâng cấp & đầu tư công bằng cho các trường vùng khó khăn, miền núi.' },
                { n: '2', text: 'Thu hẹp khoảng cách giới, dân tộc & địa lý qua chính sách hỗ trợ tài chính.' },
                { n: '3', text: 'Cá nhân hóa hỗ trợ học sinh yếu thế, khuyết tật & hòa nhập xã hội.' },
                { n: '4', text: 'Nâng chuẩn & thu hút giáo viên giỏi qua đãi ngộ và số hóa liên tục.' },
              ].map((s) => (
                <div key={s.n} className="liquid-glass rounded-xl p-3 border border-white/10 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {s.n}
                  </span>
                  <span className="text-xs sm:text-sm text-white/90 font-light">{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Part 4: Tính liên kết SDG 4 (Slide 20) */}
      <div className="mt-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="text-xs uppercase tracking-widest text-rose-400 font-semibold flex items-center gap-2">
            <NetworkIcon className="w-4 h-4" />
            <span>Tính Liên Kết SDG 4: Sơ Đồ Mạng Lưới Tương Hỗ • Slide 20</span>
          </div>

          <button
            type="button"
            onClick={() => onOpenSlide(20)}
            className="liquid-glass rounded-full px-3.5 py-1.5 text-xs text-white/80 hover:text-white flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <EyeIcon className="w-3.5 h-3.5 text-rose-300" />
            <span>Xem Slide 20</span>
          </button>
        </div>

        <p className="text-sm text-white/80 font-light leading-relaxed mb-6 max-w-3xl">
          Giáo dục chất lượng (SDG 4) liên kết trực tiếp với mục tiêu xóa nghèo (SDG 1), sức khỏe (SDG 3), bình đẳng giới (SDG 5) và việc làm tốt (SDG 8) ở vòng quan hệ mạnh; đồng thời tương hỗ tích cực với an ninh lương thực (SDG 2), giảm bất bình đẳng (SDG 10) và hành động khí hậu (SDG 13).
        </p>

        <SDGLinkageNetworkChart />
      </div>

      {/* Part 5: Doanh nghiệp Nestlé (Slide 21) */}
      <div className="mt-24">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-2">
            <BuildingIcon className="w-4 h-4" />
            <span>Điển hình Doanh nghiệp: Nestlé — 4 Trụ Cột Hành Động • Slide 21</span>
          </div>

          <button
            type="button"
            onClick={() => onOpenSlide(21)}
            className="liquid-glass rounded-full px-3.5 py-1.5 text-xs text-white/80 hover:text-white flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <EyeIcon className="w-3.5 h-3.5 text-amber-300" />
            <span>Xem Slide 21</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {nestleActions.map((action, idx) => (
            <motion.div
              key={action.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="liquid-glass-strong rounded-[1.5rem] p-6 flex flex-col justify-between border border-amber-500/20 hover:border-amber-400/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="liquid-glass h-10 w-10 rounded-xl flex items-center justify-center font-heading italic text-xl text-amber-300">
                    {action.code}
                  </div>
                  <span className="text-[10px] text-amber-300/80 font-mono liquid-glass px-2.5 py-0.5 rounded-full">
                    {action.program}
                  </span>
                </div>
                <h3 className="font-heading italic text-xl text-white mb-2 leading-snug">
                  {action.title}
                </h3>
              </div>

              <p className="text-xs text-white/70 font-light leading-relaxed pt-4 border-t border-white/10 mt-4">
                {action.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Part 6: Footer: UEH University - Xin Cảm Ơn (Slide 22) */}
      <footer className="mt-32 pt-16 border-t border-white/10 flex flex-col items-center text-center">
        <button
          type="button"
          onClick={() => onOpenSlide(22)}
          className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/70 hover:text-white flex items-center gap-1.5 mb-6 cursor-pointer"
        >
          <EyeIcon className="w-3.5 h-3.5 text-emerald-300" />
          <span>Tương đương Slide 22 (Bìa Kết)</span>
        </button>

        <h3 className="font-heading italic text-3xl sm:text-5xl lg:text-6xl text-white mb-4">
          UEH University — Xin Chân Thành Cảm Ơn!
        </h3>

        <p className="text-sm sm:text-base text-white/80 font-light max-w-xl leading-relaxed mb-8">
          Báo cáo phân tích chuyên sâu Phát triển Bền vững: SDG 3 (Sức khỏe tốt) & SDG 4 (Giáo dục chất lượng).
          Thực hiện bởi <span className="text-white font-medium">Nhóm Candy</span> • Lớp: <span className="text-white font-medium">26C3ECO50122002</span> • Năm học: 2026.
        </p>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenSlide(22)}
            className="liquid-glass-strong rounded-full px-6 py-3 text-sm text-white flex items-center gap-2 hover:brightness-125 transition-all shadow-xl cursor-pointer border border-emerald-400/30"
          >
            <EyeIcon className="w-4 h-4 text-emerald-300" />
            <span>Xem Toàn Bộ 22 Slide PDF Gốc</span>
          </button>
        </div>
      </footer>
    </section>
  );
};
