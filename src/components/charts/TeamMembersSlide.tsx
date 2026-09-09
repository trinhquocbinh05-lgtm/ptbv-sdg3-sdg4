import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCapIcon, SparklesIcon, EyeIcon } from '../Icons';

export interface TeamMember {
  stt: number;
  name: string;
  mssv: string;
  role: 'leader' | 'member';
  roleLabel: string;
  avatarColor: string;
  note?: string;
}

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    stt: 1,
    name: 'Dương Hà Tiên',
    mssv: '33254020150',
    role: 'leader',
    roleLabel: 'Nhóm trưởng / Điều phối',
    avatarColor: 'from-amber-400 to-orange-500',
    note: 'Trưởng nhóm',
  },
  {
    stt: 2,
    name: 'Nguyễn Thị Quỳnh Hương',
    mssv: '87254020088',
    role: 'member',
    roleLabel: 'Thành viên',
    avatarColor: 'from-pink-500 to-rose-500',
  },
  {
    stt: 3,
    name: 'Trịnh Quốc Bình',
    mssv: '89254020098',
    role: 'member',
    roleLabel: 'Thành viên',
    avatarColor: 'from-emerald-400 to-teal-500',
  },
  {
    stt: 4,
    name: 'Hoàng Anh',
    mssv: '33254020121',
    role: 'member',
    roleLabel: 'Thành viên',
    avatarColor: 'from-cyan-400 to-blue-500',
  },
  {
    stt: 5,
    name: 'Phan Văn Duy',
    mssv: '87254020236',
    role: 'member',
    roleLabel: 'Thành viên',
    avatarColor: 'from-purple-400 to-indigo-500',
  },
  {
    stt: 6,
    name: 'Huỳnh Thị Cẩm Giang',
    mssv: '35261020473',
    role: 'member',
    roleLabel: 'Thành viên',
    avatarColor: 'from-fuchsia-400 to-pink-500',
  },
  {
    stt: 7,
    name: 'Lưu Lâm Tiểu Kha',
    mssv: '35252020283',
    role: 'member',
    roleLabel: 'Thành viên',
    avatarColor: 'from-teal-400 to-emerald-600',
  },
  {
    stt: 8,
    name: 'Lâm Thanh Vân',
    mssv: '35252020368',
    role: 'member',
    roleLabel: 'Thành viên',
    avatarColor: 'from-violet-400 to-purple-600',
  },
  {
    stt: 9,
    name: 'Trần Lê Thanh Thảo',
    mssv: '35254020302',
    role: 'member',
    roleLabel: 'Thành viên',
    avatarColor: 'from-rose-400 to-red-500',
  },
  {
    stt: 10,
    name: 'Trần Thị Hồng Ngọc',
    mssv: '35254020078',
    role: 'member',
    roleLabel: 'Thành viên',
    avatarColor: 'from-amber-500 to-yellow-600',
  },
  {
    stt: 11,
    name: 'Đặng Phương Ngân',
    mssv: '33252020097',
    role: 'member',
    roleLabel: 'Thành viên',
    avatarColor: 'from-lime-400 to-emerald-500',
  },
  {
    stt: 12,
    name: 'Huỳnh Văn Nhân',
    mssv: '33252020180',
    role: 'member',
    roleLabel: 'Thành viên',
    avatarColor: 'from-sky-400 to-indigo-500',
  },
  {
    stt: 13,
    name: 'Đào Lê Gia Hân',
    mssv: '33252020078',
    role: 'member',
    roleLabel: 'Thành viên',
    avatarColor: 'from-orange-400 to-pink-500',
  },
];

const getInitials = (fullName: string): string => {
  const parts = fullName.trim().split(/\s+/);
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
  const leader = TEAM_MEMBERS_DATA[0];
  const otherMembers = TEAM_MEMBERS_DATA.slice(1);

  return (
    <div className="flex flex-col flex-1 my-auto justify-center max-w-7xl 2xl:max-w-[1550px] mx-auto w-full px-2 sm:px-4 py-2">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-4 pb-3 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="liquid-glass rounded-full px-3 py-1 text-xs font-mono text-emerald-300 font-semibold uppercase tracking-wider flex items-center gap-1.5 border border-emerald-400/30">
              <GraduationCapIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>UEH University • Lớp: 26C3ECO50122002</span>
            </span>
            <span className="liquid-glass rounded-full px-2.5 py-1 text-xs font-mono text-pink-300 font-bold border border-pink-400/30">
              NHÓM 4 — CANDY
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading italic text-white tracking-tight">
            Danh Sách Thành Viên Thực Hiện Đề Tài
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light mt-1">
            Phát triển bền vững: Phân tích chuyên sâu Mục tiêu SDG 3 (Sức khỏe) & SDG 4 (Giáo dục)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenModal(2)}
            className="liquid-glass hover:liquid-glass-strong rounded-xl px-3.5 py-1.5 text-xs text-white/80 hover:text-white transition-all flex items-center gap-2 border border-white/15 cursor-pointer hover:border-emerald-400/40"
            title="Xem danh sách gốc trích xuất từ bảng phân công"
          >
            <EyeIcon className="w-4 h-4 text-emerald-300" />
            <span className="font-medium">Xem bảng điểm gốc</span>
          </button>
          <div className="liquid-glass rounded-xl px-3.5 py-1.5 text-xs text-emerald-300 font-mono font-medium border border-emerald-400/30">
            13 Thành viên • 100%
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 mb-4">
        {/* LEADER CARD (Column Left 4/12 or Top on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-4 flex flex-col"
        >
          <div className="liquid-glass-strong rounded-2xl p-5 border-2 border-amber-400/40 shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-between bg-gradient-to-b from-amber-500/10 via-transparent to-black/30">
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="liquid-glass rounded-full px-3 py-1 text-xs font-mono font-bold text-amber-300 border border-amber-400/40 flex items-center gap-1.5 shadow-sm">
                  <span className="animate-pulse">👑</span>
                  <span>NHÓM TRƯỞNG / LEADER</span>
                </span>
                <span className="text-xs font-mono text-white/50">#01</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${leader.avatarColor} p-0.5 shadow-xl flex items-center justify-center flex-shrink-0`}>
                  <div className="w-full h-full bg-black/60 rounded-[14px] backdrop-blur-sm flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold font-mono text-white tracking-wider">
                      {getInitials(leader.name)}
                    </span>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl sm:text-2xl font-heading text-white font-bold tracking-tight truncate">
                    {leader.name}
                  </h3>
                  <div className="text-xs text-amber-300/90 font-medium mb-1 flex items-center gap-1.5">
                    <SparklesIcon className="w-3.5 h-3.5 text-amber-300" />
                    <span>Điều phối chung & Thuyết trình</span>
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-emerald-300 bg-emerald-500/15 rounded-md px-2 py-0.5 inline-block border border-emerald-400/30">
                    MSSV: {leader.mssv}
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-white/80 bg-white/5 rounded-xl p-3 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Vai trò:</span>
                  <span className="font-medium text-white">Tổng hợp & Hoàn thiện slide</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Tên nhóm:</span>
                  <span className="font-bold text-pink-300">CANDY (Nhóm 4)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Học phần:</span>
                  <span className="text-white/90">Phát triển bền vững</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-amber-400/20 flex items-center justify-between text-xs text-amber-200/80">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>Trạng thái: Sẵn sàng báo cáo</span>
              </span>
              <span className="font-mono">Đạt chuẩn 100%</span>
            </div>
          </div>
        </motion.div>

        {/* 12 MEMBERS GRID (Column Right 8/12) */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5 sm:gap-3">
            {otherMembers.map((member, idx) => {
              const memberStep = idx < 6 ? 1 : 2;
              const isMemberVisible = isVisible(memberStep);

              return (
                <motion.div
                  key={member.mssv}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: isMemberVisible ? 1 : 0.35,
                    filter: isMemberVisible ? 'blur(0px)' : 'blur(1px)',
                    y: 0,
                  }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  className={`liquid-glass rounded-xl p-3 border transition-all duration-200 flex items-center gap-3 ${
                    isMemberVisible
                      ? 'border-white/15 hover:border-emerald-400/40 hover:bg-white/10'
                      : 'border-white/5 opacity-50'
                  }`}
                >
                  {/* Initials Avatar */}
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${member.avatarColor} p-0.5 flex-shrink-0 shadow-md`}
                  >
                    <div className="w-full h-full bg-black/60 rounded-[10px] flex items-center justify-center">
                      <span className="text-xs sm:text-sm font-bold font-mono text-white">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <h4 className="text-xs sm:text-sm font-medium text-white truncate leading-snug">
                        {member.name}
                      </h4>
                      <span className="text-[10px] font-mono text-white/40 flex-shrink-0">
                        #{member.stt < 10 ? `0${member.stt}` : member.stt}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-emerald-300/90 font-medium">
                        {member.mssv}
                      </span>
                      <span className="text-[10px] text-white/50 font-sans">Thành viên</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom navigation helper */}
          <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
            <div className="text-xs text-white/60 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>Danh sách 13 thành viên lớp 26C3ECO50122002</span>
            </div>

            <div className="flex items-center gap-2">
              {onGoToSlide && (
                <button
                  type="button"
                  onClick={() => onGoToSlide(3)}
                  className="liquid-glass-strong rounded-xl px-4 py-1.5 text-xs sm:text-sm font-medium text-white flex items-center gap-2 hover:brightness-125 transition-all cursor-pointer border border-emerald-400/40 shadow-lg hover:scale-105"
                >
                  <span>Bắt đầu Phần I — SDG 3</span>
                  <span className="text-emerald-400 font-bold">→</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
