import React, { useState } from 'react';

export interface SDGItem {
  number: number;
  id: string;
  fullName: string;
  shortName: string;
  color: string;
}

const SDG_17_DATA: SDGItem[] = [
  {
    number: 1,
    id: 'SDG 1',
    fullName: 'Chấm dứt mọi hình thức nghèo ở mọi nơi.',
    shortName: 'Xóa nghèo',
    color: '#E5243B',
  },
  {
    number: 2,
    id: 'SDG 2',
    fullName: 'Xóa đói, bảo đảm an ninh lương thực, cải thiện dinh dưỡng và thúc đẩy phát triển nông nghiệp bền vững.',
    shortName: 'Xóa đói',
    color: '#DDA63A',
  },
  {
    number: 3,
    id: 'SDG 3',
    fullName: 'Đảm bảo cuộc sống khỏe mạnh và tăng cường phúc lợi cho mọi người ở mọi lứa tuổi.',
    shortName: 'Sức khỏe & Phúc lợi',
    color: '#4C9F38',
  },
  {
    number: 4,
    id: 'SDG 4',
    fullName: 'Đảm bảo nền giáo dục có chất lượng, công bằng, toàn diện và thúc đẩy các cơ hội học tập suốt đời cho tất cả mọi người.',
    shortName: 'Giáo dục chất lượng',
    color: '#C5192D',
  },
  {
    number: 5,
    id: 'SDG 5',
    fullName: 'Đạt được bình đẳng giới, tăng quyền và tạo cơ hội cho tất cả phụ nữ và trẻ em gái.',
    shortName: 'Bình đẳng giới',
    color: '#FF3A21',
  },
  {
    number: 6,
    id: 'SDG 6',
    fullName: 'Đảm bảo tính sẵn có, quản lý bền vững nguồn nước và điều kiện vệ sinh cho tất cả mọi người.',
    shortName: 'Nước sạch & Vệ sinh',
    color: '#26BDE2',
  },
  {
    number: 7,
    id: 'SDG 7',
    fullName: 'Đảm bảo khả năng tiếp cận nguồn năng lượng bền vững, đáng tin cậy và có khả năng chi trả cho tất cả mọi người.',
    shortName: 'Năng lượng sạch',
    color: '#FCC30B',
  },
  {
    number: 8,
    id: 'SDG 8',
    fullName: 'Thúc đẩy tăng trưởng kinh tế bền vững, bao trùm, liên tục; tạo việc làm đầy đủ, năng suất và việc làm tốt cho tất cả mọi người.',
    shortName: 'Việc làm & Kinh tế',
    color: '#A21942',
  },
  {
    number: 9,
    id: 'SDG 9',
    fullName: 'Xây dựng cơ sở hạ tầng có khả năng chống chịu cao, thúc đẩy công nghiệp hóa bao trùm và bền vững, tăng cường đổi mới sáng tạo.',
    shortName: 'Hạ tầng & Đổi mới',
    color: '#FD6925',
  },
  {
    number: 10,
    id: 'SDG 10',
    fullName: 'Giảm bất bình đẳng trong mỗi quốc gia và giữa các quốc gia.',
    shortName: 'Giảm bất bình đẳng',
    color: '#DD1367',
  },
  {
    number: 11,
    id: 'SDG 11',
    fullName: 'Xây dựng các đô thị và khu dân cư bao trùm, an toàn, có khả năng chống chịu và bền vững.',
    shortName: 'Đô thị bền vững',
    color: '#FD9D24',
  },
  {
    number: 12,
    id: 'SDG 12',
    fullName: 'Đảm bảo các mô hình tiêu dùng và sản xuất bền vững.',
    shortName: 'Sản xuất & Tiêu dùng',
    color: '#BF8B2E',
  },
  {
    number: 13,
    id: 'SDG 13',
    fullName: 'Có biện pháp khẩn cấp để ứng phó với biến đổi khí hậu và các tác động của nó.',
    shortName: 'Hành động khí hậu',
    color: '#3F7E44',
  },
  {
    number: 14,
    id: 'SDG 14',
    fullName: 'Bảo tồn và sử dụng bền vững các đại dương, vùng biển và các nguồn tài nguyên biển vì sự phát triển bền vững.',
    shortName: 'Tài nguyên biển',
    color: '#0A97D9',
  },
  {
    number: 15,
    id: 'SDG 15',
    fullName: 'Bảo vệ, khôi phục và thúc đẩy sử dụng bền vững các hệ sinh thái trên cạn, quản lý rừng bền vững, chống sa mạc hóa, ngăn chặn - đảo ngược tình trạng suy thoái đất và mất đa dạng sinh học.',
    shortName: 'Sinh thái trên cạn',
    color: '#56C02B',
  },
  {
    number: 16,
    id: 'SDG 16',
    fullName: 'Thúc đẩy xã hội hòa bình và bao trùm vì sự phát triển bền vững, cung cấp quyền tiếp cận công lý cho tất cả mọi người, và xây dựng các thể chế hiệu quả, có trách nhiệm giải trình và bao trùm ở mọi cấp độ.',
    shortName: 'Hòa bình & Công lý',
    color: '#00689D',
  },
  {
    number: 17,
    id: 'SDG 17',
    fullName: 'Tăng cường các phương thức thực hiện và thúc đẩy quan hệ đối tác toàn cầu vì sự phát triển bền vững.',
    shortName: 'Đối tác toàn cầu',
    color: '#19486A',
  },
];

interface SDG17ReferenceListProps {
  currentPrimarySDG: 3 | 4;
}

export const SDG17ReferenceList: React.FC<SDG17ReferenceListProps> = ({ currentPrimarySDG }) => {
  const [filter, setFilter] = useState<'all' | 'linked' | 'core'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Define linkage mapping for SDG 3
  // Vòng trong (Mạnh): 1, 2, 4, 7, 8, 10, 11, 12, 15
  // Vòng ngoài (Tương hỗ): 5, 6, 13, 14, 16
  const sdg3Inner = [1, 2, 4, 7, 8, 10, 11, 12, 15];
  const sdg3Outer = [5, 6, 13, 14, 16];

  // Define linkage mapping for SDG 4
  // Vòng trong (Mạnh): 1, 2, 3, 7, 8, 9, 11, 16
  // Vòng ngoài (Tương hỗ): 5, 6, 10, 12
  const sdg4Inner = [1, 2, 3, 7, 8, 9, 11, 16];
  const sdg4Outer = [5, 6, 10, 12];

  const getLinkageStatus = (num: number) => {
    if (num === currentPrimarySDG) return 'core';
    if (currentPrimarySDG === 3) {
      if (sdg3Inner.includes(num)) return 'inner';
      if (sdg3Outer.includes(num)) return 'outer';
      return 'other';
    } else {
      if (sdg4Inner.includes(num)) return 'inner';
      if (sdg4Outer.includes(num)) return 'outer';
      return 'other';
    }
  };

  const filteredList = SDG_17_DATA.filter((sdg) => {
    const status = getLinkageStatus(sdg.number);
    if (filter === 'linked' && status === 'other') return false;
    if (filter === 'core' && status !== 'core' && status !== 'inner') return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        sdg.fullName.toLowerCase().includes(q) ||
        sdg.id.toLowerCase().includes(q) ||
        sdg.shortName.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const isSDG3 = currentPrimarySDG === 3;

  return (
    <div className="mt-5 liquid-glass-natural rounded-2xl p-4 sm:p-5 border border-white/10 shadow-2xl">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 mb-3 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`w-2 h-2 rounded-full ${
                isSDG3 ? 'bg-emerald-400' : 'bg-rose-400'
              } animate-pulse`}
            />
            <span
              className={`text-xs font-mono font-bold uppercase tracking-wider ${
                isSDG3 ? 'text-emerald-300' : 'text-rose-300'
              }`}
            >
              Danh Mục Đầy Đủ 17 Mục Tiêu Phát Triển Bền Vững (SDGs)
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-heading italic text-white">
            Tên đầy đủ của 17 Mục tiêu theo Liên Hiệp Quốc
          </h3>
          <p className="text-[11px] text-white/60 font-light mt-0.5">
            Đối chiếu tính liên kết tương hỗ với{' '}
            <strong className={isSDG3 ? 'text-emerald-300' : 'text-rose-300'}>
              SDG {currentPrimarySDG}: {SDG_17_DATA.find((s) => s.number === currentPrimarySDG)?.fullName}
            </strong>
          </p>
        </div>

        {/* Action / Search / Filter */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm mục tiêu..."
              className="liquid-glass px-3 py-1 rounded-full text-xs text-white placeholder-white/40 border border-white/15 focus:outline-none focus:border-white/40 w-32 sm:w-40"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex items-center bg-black/40 rounded-full p-0.5 border border-white/10 text-[11px]">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-white/20 text-white font-medium shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Tất cả 17
            </button>
            <button
              type="button"
              onClick={() => setFilter('linked')}
              className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                filter === 'linked'
                  ? isSDG3
                    ? 'bg-emerald-500/30 text-emerald-200 font-medium'
                    : 'bg-rose-500/30 text-rose-200 font-medium'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Có liên kết ({isSDG3 ? '14' : '12'})
            </button>
            <button
              type="button"
              onClick={() => setFilter('core')}
              className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                filter === 'core'
                  ? 'bg-amber-400/30 text-amber-200 font-medium'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Mạnh
            </button>
          </div>
        </div>
      </div>

      {/* Grid of 17 SDGs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[420px] overflow-y-auto pr-1 custom-scrollbar">
        {filteredList.map((sdg) => {
          const status = getLinkageStatus(sdg.number);
          const isCore = status === 'core';
          const isInner = status === 'inner';
          const isOuter = status === 'outer';

          return (
            <div
              key={sdg.number}
              className={`rounded-xl p-3 flex flex-col justify-between transition-all duration-200 ${
                isCore
                  ? isSDG3
                    ? 'liquid-glass-strong border-2 border-emerald-400 bg-emerald-950/40 shadow-lg shadow-emerald-950/50'
                    : 'liquid-glass-strong border-2 border-rose-400 bg-rose-950/40 shadow-lg shadow-rose-950/50'
                  : isInner
                  ? isSDG3
                    ? 'liquid-glass border border-emerald-500/30 hover:border-emerald-400/60 hover:bg-emerald-950/20'
                    : 'liquid-glass border border-rose-500/30 hover:border-rose-400/60 hover:bg-rose-950/20'
                  : isOuter
                  ? isSDG3
                    ? 'liquid-glass border border-cyan-500/30 hover:border-cyan-400/60 hover:bg-cyan-950/20'
                    : 'liquid-glass border border-amber-500/30 hover:border-amber-400/60 hover:bg-amber-950/20'
                  : 'liquid-glass border border-white/5 opacity-60 hover:opacity-100'
              }`}
            >
              <div>
                <div className="flex items-start gap-2.5">
                  <img
                    src={`/sdg_icons/sdg_${sdg.number}.svg`}
                    alt={sdg.id}
                    className="w-10 h-10 rounded-lg shadow-md border border-white/20 object-contain shrink-0 bg-black/40 mt-0.5"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-mono text-xs font-bold text-white tracking-wide">
                        Mục tiêu {sdg.number}
                      </span>

                      {/* Status Badge */}
                      {isCore && (
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                            isSDG3
                              ? 'bg-emerald-400 text-black shadow-md'
                              : 'bg-rose-400 text-black shadow-md'
                          }`}
                        >
                          Trọng tâm
                        </span>
                      )}
                      {isInner && (
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full font-medium ${
                            isSDG3
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                          }`}
                        >
                          ● Tương hỗ Mạnh
                        </span>
                      )}
                      {isOuter && (
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full font-medium ${
                            isSDG3
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          }`}
                        >
                          ○ Tương hỗ Tích cực
                        </span>
                      )}
                      {!isCore && !isInner && !isOuter && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full text-white/40 border border-white/5">
                          Liên kết gián tiếp
                        </span>
                      )}
                    </div>

                    {/* Full name text as requested by user */}
                    <p className="text-xs text-white/95 font-light leading-relaxed">
                      {sdg.fullName}
                    </p>
                  </div>
                </div>
              </div>

              {/* Short category tag */}
              <div className="pt-1.5 mt-1.5 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-white/40">
                <span>{sdg.id}</span>
                <span className="text-white/60">{sdg.shortName}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer summary hint */}
      <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-white/60">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span
              className={`w-2 h-2 rounded-full ${
                isSDG3 ? 'bg-emerald-400' : 'bg-rose-400'
              }`}
            />
            <span>Trọng tâm ({currentPrimarySDG === 3 ? 'SDG 3' : 'SDG 4'})</span>
          </span>
          <span className="flex items-center gap-1">
            <span
              className={`w-2 h-2 rounded-full ${
                isSDG3 ? 'bg-emerald-500' : 'bg-rose-500'
              }`}
            />
            <span>Tương hỗ mạnh</span>
          </span>
          <span className="flex items-center gap-1">
            <span
              className={`w-2 h-2 rounded-full ${
                isSDG3 ? 'bg-cyan-400' : 'bg-amber-400'
              }`}
            />
            <span>Tương hỗ tích cực</span>
          </span>
        </div>
        <span className="font-mono text-[10px] text-white/40">
          Chương trình Nghị sự 2030 Liên Hiệp Quốc
        </span>
      </div>
    </div>
  );
};
