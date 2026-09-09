import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCapIcon, HeartPulseIcon, SparklesIcon, EyeIcon } from '../Icons';

export interface MemberItem {
  stt: number;
  name: string;
  mssv: string;
  roleBadge: string;
  roleType: 'leader' | 'area-lead' | 'member';
  taskDetail: string;
  avatarGradient: string;
}

interface AreaGroup {
  id: string;
  title: string;
  subTitle: string;
  badge: string;
  headerColor: string;
  borderGlow: string;
  badgeBg: string;
  members: MemberItem[];
  tasksSummary?: string[];
}

const TEAM_AREAS: AreaGroup[] = [
  {
    id: 'synthesis',
    title: 'TỔNG HỢP & HOÀN THIỆN',
    subTitle: 'Slide • Thuyết trình • Quiz & Phản biện',
    badge: '3 Thành viên • Điều phối',
    headerColor: 'from-amber-400 to-violet-400',
    borderGlow: 'border-amber-400/40 shadow-amber-500/10',
    badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-400/30',
    tasksSummary: [
      'Tổng hợp & hoàn thiện nội dung final',
      'Thiết kế Slide Liquid Glass tương tác',
      'Chuẩn bị thuyết trình & phản biện',
      'Soạn ngân hàng câu hỏi + Quiz',
    ],
    members: [
      {
        stt: 1,
        name: 'Dương Hà Tiên (Vincen)',
        mssv: '33254020150',
        roleBadge: '👑 Nhóm trưởng',
        roleType: 'leader',
        taskDetail: 'Điều phối chung & Tổng hợp final',
        avatarGradient: 'from-amber-400 to-orange-500',
      },
      {
        stt: 3,
        name: 'Trịnh Quốc Bình',
        mssv: '89254020098',
        roleBadge: '💻 Tổng hợp, Slide & Kỹ thuật',
        roleType: 'member',
        taskDetail: 'Tổng hợp thông tin, thiết kế Slide & Trực quan số liệu',
        avatarGradient: 'from-emerald-400 to-teal-500',
      },
      {
        stt: 4,
        name: 'Hoàng Anh',
        mssv: '33254020121',
        roleBadge: '🎙️ Tổng hợp, Thuyết trình & Quiz',
        roleType: 'member',
        taskDetail: 'Tổng hợp thông tin, chuẩn bị thuyết trình & Bộ câu hỏi Q&A',
        avatarGradient: 'from-cyan-400 to-blue-500',
      },
    ],
  },
  {
    id: 'sdg3',
    title: 'NỘI DUNG CHUYÊN ĐỀ SDG 3',
    subTitle: 'Sức khỏe tốt & Cuộc sống hạnh phúc',
    badge: '5 Thành viên • SDG 3',
    headerColor: 'from-emerald-400 to-teal-400',
    borderGlow: 'border-emerald-400/40 shadow-emerald-500/10',
    badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
    tasksSummary: [
      'Nghiên cứu định nghĩa 3Es, DALYs, LE & HDI Sức khỏe',
      'Phân tích chi tiết 9 mục tiêu chính & 4 phương tiện thực hiện',
      'Đánh giá bức tranh toàn cầu & thực trạng tại Việt Nam',
      'Xây dựng ma trận mạng lưới liên kết & Case Study Vinamilk',
    ],
    members: [
      {
        stt: 12,
        name: 'Huỳnh Văn Nhân',
        mssv: '33252020180',
        roleBadge: '⭐ Lead chính SDG 3',
        roleType: 'area-lead',
        taskDetail: 'Phụ trách chuyên môn & Tổng hợp SDG 3',
        avatarGradient: 'from-emerald-400 to-green-600',
      },
      {
        stt: 5,
        name: 'Phan Văn Duy',
        mssv: '87254020236',
        roleBadge: 'Thành viên SDG 3',
        roleType: 'member',
        taskDetail: 'Dữ liệu DALYs & Target 3.1 — 3.9',
        avatarGradient: 'from-teal-400 to-emerald-500',
      },
      {
        stt: 10,
        name: 'Trần Thị Hồng Ngọc',
        mssv: '35254020078',
        roleBadge: 'Thành viên SDG 3',
        roleType: 'member',
        taskDetail: 'Bức tranh toàn cầu & Thực trạng VN',
        avatarGradient: 'from-green-400 to-teal-600',
      },
      {
        stt: 9,
        name: 'Trần Lê Thanh Thảo',
        mssv: '35254020302',
        roleBadge: 'Thành viên SDG 3',
        roleType: 'member',
        taskDetail: 'Target 3.a — 3.d & Case Vinamilk',
        avatarGradient: 'from-emerald-500 to-cyan-500',
      },
      {
        stt: 8,
        name: 'Lâm Thanh Vân',
        mssv: '35252020368',
        roleBadge: 'Thành viên SDG 3',
        roleType: 'member',
        taskDetail: 'Mạng lưới liên kết 17 Mục tiêu SDGs',
        avatarGradient: 'from-teal-500 to-indigo-500',
      },
    ],
  },
  {
    id: 'sdg4',
    title: 'NỘI DUNG CHUYÊN ĐỀ SDG 4',
    subTitle: 'Đảm bảo giáo dục có chất lượng',
    badge: '5 Thành viên • SDG 4',
    headerColor: 'from-rose-400 to-pink-500',
    borderGlow: 'border-rose-400/40 shadow-rose-500/10',
    badgeBg: 'bg-rose-500/15 text-rose-300 border-rose-400/30',
    tasksSummary: [
      'Khung 3Es, mô hình Bánh cưới & hệ thống chỉ số GER/NER',
      'Phân tích chi tiết 7 mục tiêu chính & 3 phương tiện thực hiện',
      'Đánh giá khủng hoảng 84M trẻ, rào cản số hóa & hạ tầng',
      'Thực trạng & 4 giải pháp tại VN & Case Study Nestlé CSV',
    ],
    members: [
      {
        stt: 2,
        name: 'Nguyễn Thị Quỳnh Hương',
        mssv: '87254020088',
        roleBadge: '⭐ Lead chính SDG 4',
        roleType: 'area-lead',
        taskDetail: 'Phụ trách chuyên môn & Tổng hợp SDG 4',
        avatarGradient: 'from-rose-400 to-red-600',
      },
      {
        stt: 6,
        name: 'Huỳnh Thị Cẩm Giang',
        mssv: '35261020473',
        roleBadge: 'Thành viên SDG 4',
        roleType: 'member',
        taskDetail: 'Thước đo GER/NER & Target 4.1 — 4.7',
        avatarGradient: 'from-pink-400 to-rose-500',
      },
      {
        stt: 13,
        name: 'Đào Lê Gia Hân',
        mssv: '33252020078',
        roleBadge: 'Thành viên SDG 4',
        roleType: 'member',
        taskDetail: 'Khủng hoảng 84M trẻ & Rào cản số hóa',
        avatarGradient: 'from-orange-400 to-rose-500',
      },
      {
        stt: 11,
        name: 'Đặng Phương Ngân',
        mssv: '33252020097',
        roleBadge: 'Thành viên SDG 4',
        roleType: 'member',
        taskDetail: 'Thực trạng & 4 Giải pháp tại Việt Nam',
        avatarGradient: 'from-fuchsia-400 to-pink-500',
      },
      {
        stt: 7,
        name: 'Lưu Lâm Tiểu Kha',
        mssv: '35252020283',
        roleBadge: 'Thành viên SDG 4',
        roleType: 'member',
        taskDetail: 'Mạng lưới liên kết & Case Study Nestlé',
        avatarGradient: 'from-purple-400 to-pink-600',
      },
    ],
  },
];

const getInitials = (fullName: string): string => {
  const parts = fullName.replace(/\s*\([^)]*\)/g, '').trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  const first = parts[0][0];
  const last = parts[parts.length - 1][0];
  return (first + last).toUpperCase();
};

interface TeamMembersSlideProps {
  step: number;
  showAll: boolean;
  onOpenModal: (n: number) => void;
  onGoToSlide?: (slideNum: number) => void;
}

export const TeamMembersSlide: React.FC<TeamMembersSlideProps> = ({
  step,
  showAll,
  onOpenModal,
  onGoToSlide,
}) => {
  const isVisible = (targetStep: number) => showAll || step >= targetStep;

  return (
    <div className="flex flex-col flex-1 my-auto justify-center max-w-7xl 2xl:max-w-[1600px] mx-auto w-full px-2 sm:px-3 py-1">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-1.5 pb-1.5 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="liquid-glass rounded-full px-3 py-0.5 text-xs font-mono text-emerald-300 font-semibold uppercase tracking-wider flex items-center gap-1.5 border border-emerald-400/30">
              <GraduationCapIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>UEH • Lớp: 26C3ECO50122002</span>
            </span>
            <span className="liquid-glass rounded-full px-2.5 py-0.5 text-xs font-mono text-pink-300 font-bold border border-pink-400/30">
              NHÓM 4 — CANDY
            </span>
          </div>
          <h2 className="text-xl sm:text-3xl font-heading italic text-white tracking-tight">
            Phân Công & Danh Sách Thành Viên Thực Hiện
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light mt-0.5">
            Cơ cấu 3 Phân ban: Tổng hợp Final • Chuyên đề SDG 3 (Sức khỏe) • Chuyên đề SDG 4 (Giáo dục)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenModal(2)}
            className="liquid-glass hover:liquid-glass-strong rounded-xl px-3.5 py-1.5 text-xs text-white/80 hover:text-white transition-all flex items-center gap-2 border border-white/15 cursor-pointer hover:border-emerald-400/40"
            title="Xem danh sách & bảng phân công gốc"
          >
            <EyeIcon className="w-4 h-4 text-emerald-300" />
            <span className="font-medium">Xem phân công gốc</span>
          </button>
          <div className="liquid-glass rounded-xl px-3.5 py-1.5 text-xs text-emerald-300 font-mono font-medium border border-emerald-400/30">
            13 Thành viên • 3 Phân ban
          </div>
        </div>
      </div>

      {/* 3 DISTINCT AREAS (Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5 sm:gap-3 my-auto">
        {TEAM_AREAS.map((area, areaIdx) => {
          const isAreaVisible = isVisible(areaIdx);

          return (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: isAreaVisible ? 1 : 0.35,
                filter: isAreaVisible ? 'blur(0px)' : 'blur(1px)',
                y: 0,
              }}
              transition={{ duration: 0.35, delay: areaIdx * 0.05 }}
              className={`liquid-glass-strong rounded-xl p-2.5 sm:p-3 border flex flex-col justify-between transition-all duration-300 shadow-xl ${
                isAreaVisible
                  ? area.borderGlow
                  : 'border-white/10 opacity-50'
              }`}
            >
              {/* Column Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    {area.id === 'synthesis' && <SparklesIcon className="w-4 h-4 text-amber-300" />}
                    {area.id === 'sdg3' && <HeartPulseIcon className="w-4 h-4 text-emerald-300" />}
                    {area.id === 'sdg4' && <GraduationCapIcon className="w-4 h-4 text-rose-300" />}
                    <span className="font-heading font-bold text-sm sm:text-base text-white tracking-wide">
                      {area.title}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${area.badgeBg}`}>
                    {area.members.length} TV
                  </span>
                </div>

                <p className="text-[11px] sm:text-xs text-white/60 mb-1.5 text-[10px] italic">
                  {area.subTitle}
                </p>

                {/* Member Cards in this area */}
                <div className="space-y-1">
                  {area.members.map((member) => {
                    const isLeader = member.roleType === 'leader';
                    const isAreaLead = member.roleType === 'area-lead';

                    return (
                      <div
                        key={member.mssv}
                        className={`liquid-glass rounded-lg p-1.5 sm:p-2 border transition-all flex items-center gap-2 ${
                          isLeader
                            ? 'border-amber-400/50 bg-amber-500/10'
                            : isAreaLead
                            ? 'border-emerald-400/40 bg-emerald-500/10'
                            : 'border-white/10 hover:border-white/25 hover:bg-white/5'
                        }`}
                      >
                        {/* Initials Avatar */}
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-gradient-to-br ${member.avatarGradient} p-0.5 flex-shrink-0 shadow`}
                        >
                          <div className="w-full h-full bg-black/65 rounded-[6px] flex items-center justify-center">
                            <span className="text-xs font-bold font-mono text-white">
                              {getInitials(member.name)}
                            </span>
                          </div>
                        </div>

                        {/* Text info */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1 mb-0.5">
                            <h4 className="text-xs sm:text-sm font-semibold text-white truncate">
                              {member.name}
                            </h4>
                            <span className="text-[10px] font-mono text-white/40 flex-shrink-0">
                              #{member.stt < 10 ? `0${member.stt}` : member.stt}
                            </span>
                          </div>

                          <div className="flex items-center justify-between gap-1.5">
                            <span className="font-mono text-[11px] text-emerald-300 font-medium">
                              {member.mssv}
                            </span>

                            <span
                              className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-medium flex-shrink-0 ${
                                isLeader
                                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                                  : isAreaLead
                                  ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/40'
                                  : 'text-white/60 bg-white/5'
                              }`}
                            >
                              {member.roleBadge}
                            </span>
                          </div>

                          {/* Phân công công việc cụ thể */}
                          <div className="mt-1 pt-1 border-t border-white/10 flex items-center gap-1.5 text-[10px] text-white/85">
                            <span className="text-emerald-400 text-[10px] flex-shrink-0 font-bold">↳</span>
                            <span className="truncate font-body">{member.taskDetail}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Optional Task Checklist box */}
                {area.tasksSummary && (
                  <div className="mt-2.5 p-2 rounded-xl bg-white/5 border border-white/10 text-[11px] text-white/75 space-y-1">
                    <div className="font-mono text-[10px] uppercase text-amber-300 font-semibold mb-1 flex items-center gap-1">
                      <span>📌</span>
                      <span>Nhiệm vụ phân công cụ thể:</span>
                    </div>
                    {area.tasksSummary.map((task, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                        <span className="truncate">{task}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Column Footer */}
              <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50 font-mono">
                <span>{area.badge}</span>
                <span className="text-emerald-300">Hoàn tất 100%</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom navigation helper */}
      <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
        <div className="text-xs text-white/60 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
          <span>Phân công minh bạch theo phân ban: Tổng hợp • SDG 3 • SDG 4</span>
        </div>

        <div className="flex items-center gap-2">
          {onGoToSlide && (
            <>
              <button
                type="button"
                onClick={() => onGoToSlide(2)}
                className="liquid-glass rounded-xl px-3 py-1.5 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                <span>← Trang bìa (Slide 2)</span>
              </button>
              <button
                type="button"
                onClick={() => onGoToSlide(4)}
              className="liquid-glass-strong rounded-xl px-4 py-1.5 text-xs sm:text-sm font-medium text-white flex items-center gap-2 hover:brightness-125 transition-all cursor-pointer border border-emerald-400/40 shadow-lg hover:scale-105"
            >
              <span>Bắt đầu Phần I — SDG 3</span>
              <span className="text-emerald-400 font-bold">→</span>
            </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
