import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesIcon, CheckCircleIcon, NetworkIcon } from '../Icons';

interface LinkedNode {
  id: string;
  title: string;
  ring: 'inner' | 'outer';
  orbitRadius: number;
  angle: number; // in degrees
  color: string;
  badgeBg: string;
  badgeBorder: string;
  textColor: string;
  impact: string;
  mechanism: string;
  sdgIconName: string;
  keyMetric: string;
}

interface SDG3LinkageNetworkChartProps {
  currentStep?: number;
  showAll?: boolean;
}

export const SDG3LinkageNetworkChart: React.FC<SDG3LinkageNetworkChartProps> = ({
  currentStep,
  showAll = false,
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('SDG 1');
  const [filterRing, setFilterRing] = useState<'all' | 'inner' | 'outer'>('all');
  const [isAutoTour, setIsAutoTour] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const nodes: LinkedNode[] = [
    // =========================================================================
    // VÒNG TRONG: 9 MỐI QUAN HỆ TÍCH CỰC MẠNH (Emerald Theme, R = 98px)
    // =========================================================================
    {
      id: 'SDG 1',
      title: 'Xóa nghèo bền vững',
      ring: 'inner',
      orbitRadius: 98,
      angle: 280, // Top-Right 1
      color: '#10B981',
      badgeBg: 'bg-emerald-500/20',
      badgeBorder: 'border-emerald-400/60',
      textColor: 'text-emerald-300',
      impact: 'Chi phí y tế tiền túi đẩy hơn 100 triệu người rơi vào nghèo cùng cực mỗi năm. Sức khỏe tốt là điều kiện tiên quyết để lao động và tích lũy của cải.',
      mechanism: 'Bảo hiểm y tế toàn dân (UHC) bảo vệ tài chính hộ gia đình trước rủi ro bệnh trọng, ngăn chặn rơi vào bẫy nghèo liên thế hệ.',
      sdgIconName: 'No Poverty',
      keyMetric: '100M+ người tránh bẫy nghèo/năm',
    },
    {
      id: 'SDG 2',
      title: 'An ninh Lương thực & Dinh dưỡng',
      ring: 'inner',
      orbitRadius: 98,
      angle: 305, // Top-Right 2
      color: '#10B981',
      badgeBg: 'bg-emerald-500/20',
      badgeBorder: 'border-emerald-400/60',
      textColor: 'text-emerald-300',
      impact: 'Dinh dưỡng là nền tảng của hệ miễn dịch; suy dinh dưỡng chiếm 45% nguyên nhân tử vong ở trẻ em dưới 5 tuổi trên toàn cầu.',
      mechanism: 'Bảo đảm an ninh lương thực và thực phẩm sạch ngăn ngừa tình trạng thấp còi, thiếu vi chất và kiểm soát bệnh không lây nhiễm sớm.',
      sdgIconName: 'Zero Hunger',
      keyMetric: '45% tử vong trẻ em liên quan dinh dưỡng',
    },
    {
      id: 'SDG 4',
      title: 'Giáo dục có Chất lượng',
      ring: 'inner',
      orbitRadius: 98,
      angle: 335, // Top-Right 3
      color: '#10B981',
      badgeBg: 'bg-emerald-500/20',
      badgeBorder: 'border-emerald-400/60',
      textColor: 'text-emerald-300',
      impact: 'Trẻ em khỏe mạnh mới chuyên cần đến trường; người mẹ có học vấn giúp tăng 50% cơ hội sống sót của trẻ sơ sinh.',
      mechanism: 'Y tế học đường kết hợp giáo dục chăm sóc sức khỏe sinh sản tạo vòng lặp tương hỗ tích cực, nâng cao chất lượng nguồn nhân lực.',
      sdgIconName: 'Quality Education',
      keyMetric: 'Mẹ biết chữ: +50% trẻ sống sót',
    },
    {
      id: 'SDG 7',
      title: 'Năng lượng Sạch & Bền vững',
      ring: 'inner',
      orbitRadius: 98,
      angle: 35, // Bottom-Right 1
      color: '#10B981',
      badgeBg: 'bg-emerald-500/20',
      badgeBorder: 'border-emerald-400/60',
      textColor: 'text-emerald-300',
      impact: 'Ô nhiễm không khí trong nhà do đun nấu than củi/dầu hỏa gây ra hơn 3.2 triệu ca tử vong sớm mỗi năm.',
      mechanism: 'Chuyển dịch sang điện sạch và bếp sạch bảo vệ phổi phụ nữ, trẻ em và đảm bảo cấp điện liên tục cho các cơ sở y tế.',
      sdgIconName: 'Affordable Energy',
      keyMetric: '3.2 Triệu ca tử vong do khói bếp',
    },
    {
      id: 'SDG 8',
      title: 'Tăng trưởng & Việc làm Bền vững',
      ring: 'inner',
      orbitRadius: 98,
      angle: 65, // Bottom-Right 2
      color: '#10B981',
      badgeBg: 'bg-emerald-500/20',
      badgeBorder: 'border-emerald-400/60',
      textColor: 'text-emerald-300',
      impact: 'Người lao động khỏe mạnh nâng cao năng suất; mỗi 1 USD đầu tư cho y tế sinh lợi tức 9 USD tăng trưởng kinh tế xã hội.',
      mechanism: 'An toàn vệ sinh lao động và bảo hiểm sức khỏe doanh nghiệp giảm thiểu tai nạn nghề nghiệp và số ngày công nghỉ ốm.',
      sdgIconName: 'Decent Work',
      keyMetric: '1 USD đầu tư = 9 USD lợi tức',
    },
    {
      id: 'SDG 10',
      title: 'Giảm Bất bình đẳng Xã hội',
      ring: 'inner',
      orbitRadius: 98,
      angle: 105, // Bottom
      color: '#10B981',
      badgeBg: 'bg-emerald-500/20',
      badgeBorder: 'border-emerald-400/60',
      textColor: 'text-emerald-300',
      impact: 'Khoảng cách tuổi thọ giữa người giàu và nghèo có thể lên tới 15–20 năm; người nghèo chịu gánh nặng bệnh tật cao gấp nhiều lần.',
      mechanism: 'Tiếp cận y tế bình đẳng không phân biệt giàu nghèo hay địa lý là cốt lõi san bằng xuất phát điểm và công bằng xã hội.',
      sdgIconName: 'Reduced Inequalities',
      keyMetric: 'Chênh lệch tuổi thọ 15-20 năm',
    },
    {
      id: 'SDG 11',
      title: 'Đô thị & Cộng đồng Bền vững',
      ring: 'inner',
      orbitRadius: 98,
      angle: 135, // Bottom-Left 1
      color: '#10B981',
      badgeBg: 'bg-emerald-500/20',
      badgeBorder: 'border-emerald-400/60',
      textColor: 'text-emerald-300',
      impact: 'Bụi mịn PM2.5 và tai nạn giao thông tại các đô thị gây ra 6.7 triệu ca tử vong/năm; quy hoạch giao thông giúp giảm thương vong.',
      mechanism: 'Không gian công cộng xanh và hệ sinh thái giao thông sạch cải thiện sức khỏe tim mạch và sức khỏe tâm thần cư dân.',
      sdgIconName: 'Sustainable Cities',
      keyMetric: '6.7 Triệu ca do ô nhiễm đô thị',
    },
    {
      id: 'SDG 12',
      title: 'Tiêu dùng & Sản xuất có Trách nhiệm',
      ring: 'inner',
      orbitRadius: 98,
      angle: 165, // Bottom-Left 2
      color: '#10B981',
      badgeBg: 'bg-emerald-500/20',
      badgeBorder: 'border-emerald-400/60',
      textColor: 'text-emerald-300',
      impact: 'Phơi nhiễm hóa chất nông nghiệp độc hại, rác thải y tế và thực phẩm bẩn làm bùng phát ung thư và rối loạn nội tiết.',
      mechanism: 'Kiểm soát hóa chất độc hại, giảm rác thải nhựa và tiêu dùng thực phẩm hữu cơ bảo vệ hệ sinh thái và chuỗi thức ăn con người.',
      sdgIconName: 'Responsible Consumption',
      keyMetric: '2 Triệu ca do phơi nhiễm độc chất',
    },
    {
      id: 'SDG 16',
      title: 'Hòa bình, Công lý & Thể chế Vững mạnh',
      ring: 'inner',
      orbitRadius: 98,
      angle: 240, // Top-Left
      color: '#10B981',
      badgeBg: 'bg-emerald-500/20',
      badgeBorder: 'border-emerald-400/60',
      textColor: 'text-emerald-300',
      impact: 'Chiến tranh xung đột tàn phá bệnh viện, cô lập viện trợ và làm sụp đổ các chương trình tiêm chủng mở rộng.',
      mechanism: 'Thể chế công minh bạch bảo đảm phân bổ ngân sách công cho y tế, đẩy lùi thuốc giả và duy trì an ninh y tế toàn cầu.',
      sdgIconName: 'Peace & Justice',
      keyMetric: 'Bảo vệ cơ sở y tế thời bình & chiến',
    },

    // =========================================================================
    // VÒNG NGOÀI: 5 MỐI QUAN HỆ TƯƠNG HỖ TÍCH CỰC (Cyan Theme, R = 158px)
    // =========================================================================
    {
      id: 'SDG 5',
      title: 'Bình đẳng giới & Sức khỏe sinh sản',
      ring: 'outer',
      orbitRadius: 158,
      angle: 12, // East-North-East
      color: '#06B6D4',
      badgeBg: 'bg-cyan-500/20',
      badgeBorder: 'border-cyan-400/60',
      textColor: 'text-cyan-300',
      impact: 'Bất bình đẳng giới tước đi quyền tự quyết sức khỏe sinh sản; bạo lực gia đình gây tổn hại nặng nề thể chất và tâm lý phụ nữ.',
      mechanism: 'Trao quyền tự chủ sức khỏe cho nữ giới và xóa bỏ tảo hôn giúp giảm mạnh tỷ lệ tử vong sản khoa và bảo vệ trẻ sơ sinh.',
      sdgIconName: 'Gender Equality',
      keyMetric: 'Giảm 70% tử vong sản khoa',
    },
    {
      id: 'SDG 6',
      title: 'Nước sạch & Vệ sinh môi trường',
      ring: 'outer',
      orbitRadius: 158,
      angle: 45, // East-South-East
      color: '#06B6D4',
      badgeBg: 'bg-cyan-500/20',
      badgeBorder: 'border-cyan-400/60',
      textColor: 'text-cyan-300',
      impact: 'Nguồn nước ô nhiễm và thiếu hạ tầng vệ sinh gây ra hơn 1.4 triệu ca tử vong mỗi năm do tiêu chảy, dịch tả và thương hàn.',
      mechanism: 'Cung cấp nước sạch và thói quen rửa tay bằng xà phòng là hàng rào phòng thủ dịch tễ ban đầu tiết kiệm chi phí nhất.',
      sdgIconName: 'Clean Water',
      keyMetric: '1.4 Triệu sinh mạng / năm',
    },
    {
      id: 'SDG 13',
      title: 'Hành động vì Khí hậu',
      ring: 'outer',
      orbitRadius: 158,
      angle: 180, // West
      color: '#06B6D4',
      badgeBg: 'bg-cyan-500/20',
      badgeBorder: 'border-cyan-400/60',
      textColor: 'text-cyan-300',
      impact: 'Biến đổi khí hậu làm lan rộng dịch bệnh truyền nhiễm (sốt xuất huyết, sốt rét) và các đợt nắng nóng cực đoan gây đột quỵ.',
      mechanism: 'Cắt giảm phát thải CO2 làm sạch không khí, giảm bệnh hô hấp mạn tính (COPD, hen suyễn) và nâng cao khả năng chống chịu khí hậu.',
      sdgIconName: 'Climate Action',
      keyMetric: '+250,000 ca tử vong/năm do BĐKH',
    },
    {
      id: 'SDG 14',
      title: 'Tài nguyên & Môi trường Biển',
      ring: 'outer',
      orbitRadius: 158,
      angle: 205, // West-South-West
      color: '#06B6D4',
      badgeBg: 'bg-cyan-500/20',
      badgeBorder: 'border-cyan-400/60',
      textColor: 'text-cyan-300',
      impact: 'Vi nhựa và kim loại nặng ô nhiễm biển tích tụ qua chuỗi thức ăn thủy hải sản, gây độc thần kinh và suy giảm miễn dịch người tiêu dùng.',
      mechanism: 'Giữ đại dương sạch đảm bảo nguồn thực phẩm biển an toàn và bảo tồn các hợp chất sinh học biển phục vụ bào chế dược phẩm.',
      sdgIconName: 'Life Below Water',
      keyMetric: 'Ngăn độc tố vi nhựa trong thủy sản',
    },
    {
      id: 'SDG 15',
      title: 'Bảo tồn Hệ sinh thái trên Cạn',
      ring: 'outer',
      orbitRadius: 158,
      angle: 228, // West-North-West
      color: '#06B6D4',
      badgeBg: 'bg-cyan-500/20',
      badgeBorder: 'border-cyan-400/60',
      textColor: 'text-cyan-300',
      impact: 'Phá rừng và buôn bán động vật hoang dã làm tăng 75% nguy cơ lây truyền mầm bệnh mới nổi từ động vật sang người (Zoonotic).',
      mechanism: 'Bảo vệ rừng tự nhiên và đa dạng sinh học tạo vùng đệm sinh thái ngăn chặn virus lạ lây lan thành đại dịch toàn cầu.',
      sdgIconName: 'Life On Land',
      keyMetric: '75% bệnh mới nổi có gốc zoonotic',
    },
  ];

  // Auto-Tour interval timer (4 seconds per node)
  useEffect(() => {
    if (!isAutoTour || isHovered) return;

    const timer = setInterval(() => {
      setSelectedNodeId((prevId) => {
        const idx = nodes.findIndex((n) => n.id === prevId);
        const nextIdx = (idx + 1) % nodes.length;
        return nodes[nextIdx].id;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoTour, isHovered, nodes]);

  // Sync with presenter step advancement (Space, Clicker, etc.)
  useEffect(() => {
    if (!showAll && typeof currentStep === 'number' && currentStep >= 0 && currentStep < nodes.length) {
      setSelectedNodeId(nodes[currentStep].id);
      setIsAutoTour(false); // Let presenter manual control take precedence
    }
  }, [currentStep, showAll, nodes]);

  const handlePrevNode = () => {
    const idx = nodes.findIndex((n) => n.id === selectedNodeId);
    const prevIdx = (idx - 1 + nodes.length) % nodes.length;
    setSelectedNodeId(nodes[prevIdx].id);
  };

  const handleNextNode = () => {
    const idx = nodes.findIndex((n) => n.id === selectedNodeId);
    const nextIdx = (idx + 1) % nodes.length;
    setSelectedNodeId(nodes[nextIdx].id);
  };

  const activeNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];

  // Center coordinates in SVG viewBox (0 0 460 380)
  const cx = 230;
  const cy = 190;
  const rInner = 98;
  const rOuter = 158;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="liquid-glass-natural rounded-2xl p-5 border border-emerald-500/20 shadow-2xl relative overflow-hidden"
    >
      {/* Top Header & Interactive Orbit Legend */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <NetworkIcon className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
            Sơ đồ Mạng Lưới Đồng Tâm: SDG 3 & Hệ Sinh Thái 14 SDGs
          </span>
        </div>

        {/* Action Controls: Auto-tour Toggle & Ring Filters */}
        <div className="flex items-center gap-2 flex-wrap text-xs">
          {/* Smart Auto-Tour Toggle */}
          <button
            type="button"
            onClick={() => setIsAutoTour((prev) => !prev)}
            className={`px-3 py-1 rounded-full text-[11px] font-mono flex items-center gap-1.5 transition-all cursor-pointer border ${
              isAutoTour
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.35)]'
                : 'liquid-glass text-white/60 hover:text-white border-white/15'
            }`}
            title={isAutoTour ? 'Bấm để dừng tự động chạy' : 'Bấm để bật tự động chạy tuần tự (4s)'}
          >
            {isAutoTour ? (
              <>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold">Tự động: BẬT (4s)</span>
              </>
            ) : (
              <>
                <span className="text-[10px]">▶</span>
                <span>Tự động xoay tua</span>
              </>
            )}
          </button>

          {/* Orbit Filter Controls */}
          <button
            type="button"
            onClick={() => setFilterRing('all')}
            className={`px-2.5 py-1 rounded-full text-[11px] font-mono transition-all cursor-pointer border ${
              filterRing === 'all'
                ? 'bg-white text-black font-bold border-white shadow-sm'
                : 'liquid-glass text-white/60 hover:text-white border-white/10'
            }`}
          >
            Tất cả (14 SDGs)
          </button>

          <button
            type="button"
            onClick={() => setFilterRing('inner')}
            className={`px-2.5 py-1 rounded-full text-[11px] font-mono flex items-center gap-1.5 transition-all cursor-pointer border ${
              filterRing === 'inner'
                ? 'bg-emerald-500 text-black font-bold border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                : 'liquid-glass text-emerald-300 hover:text-emerald-200 border-emerald-500/30'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Vòng trong: Mạnh (9)</span>
          </button>

          <button
            type="button"
            onClick={() => setFilterRing('outer')}
            className={`px-2.5 py-1 rounded-full text-[11px] font-mono flex items-center gap-1.5 transition-all cursor-pointer border ${
              filterRing === 'outer'
                ? 'bg-cyan-400 text-black font-bold border-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.5)]'
                : 'liquid-glass text-cyan-300 hover:text-cyan-200 border-cyan-500/30'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Vòng ngoài: Tích cực (5)</span>
          </button>
        </div>
      </div>

      {/* Auto-Tour Indicator Bar */}
      {isAutoTour && (
        <div className="mb-3 px-3 py-1 rounded-xl bg-black/40 border border-emerald-500/20 flex items-center justify-between text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isHovered ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`} />
            <span className={isHovered ? 'text-amber-300' : 'text-emerald-300'}>
              {isHovered ? 'Đang tạm dừng để thuyết minh (Rời chuột để chạy tiếp)' : `Chế độ tự động thông minh (4 giây/mục tiêu • Đang xem: ${activeNode.id})`}
            </span>
          </div>
          <div className="w-28 sm:w-36 h-1.5 bg-white/10 rounded-full overflow-hidden">
            {!isHovered && (
              <motion.div
                key={selectedNodeId}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 4, ease: 'linear' }}
                className="h-full bg-emerald-400 rounded-full"
              />
            )}
            {isHovered && <div className="h-full w-full bg-amber-400/60 rounded-full" />}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* Concentric Dual-Orbit SVG Interactive System (7 cols) */}
        <div className="lg:col-span-7 flex items-center justify-center relative min-h-[340px] select-none">
          <svg
            viewBox="0 0 460 380"
            className="w-full h-full max-h-[360px] overflow-visible"
          >
            <defs>
              <filter id="glow-emerald-sdg3" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-cyan-sdg3" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <radialGradient id="emerald-sun-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#059669" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#064E3B" stopOpacity="0.05" />
              </radialGradient>
            </defs>

            {/* Central Halo Aura */}
            <circle
              cx={cx}
              cy={cy}
              r="48"
              fill="url(#emerald-sun-gradient)"
              className="animate-pulse"
            />

            {/* VÒNG NGOÀI (OUTER ORBIT - CYAN, DASHED) */}
            <circle
              cx={cx}
              cy={cy}
              r={rOuter}
              fill="none"
              stroke="#06B6D4"
              strokeWidth={filterRing === 'inner' ? '1' : '2'}
              strokeDasharray="6 6"
              opacity={filterRing === 'inner' ? 0.2 : 0.65}
              filter="url(#glow-cyan-sdg3)"
              className="transition-all duration-300"
            />

            {/* VÒNG TRONG (INNER ORBIT - EMERALD, SOLID) */}
            <circle
              cx={cx}
              cy={cy}
              r={rInner}
              fill="none"
              stroke="#10B981"
              strokeWidth={filterRing === 'outer' ? '1' : '2.5'}
              opacity={filterRing === 'outer' ? 0.25 : 0.9}
              filter="url(#glow-emerald-sdg3)"
              className="transition-all duration-300"
            />

            {/* Legend Orbit Canvas Labels */}
            {filterRing !== 'outer' && (
              <text
                x={cx}
                y={18}
                textAnchor="middle"
                fill="#6EE7B7"
                className="text-[9px] font-mono tracking-wider uppercase font-bold select-none opacity-80"
              >
                ● VÒNG TRONG: 9 MỐI QUAN HỆ TÍCH CỰC MẠNH (EMERALD)
              </text>
            )}

            {filterRing !== 'inner' && (
              <text
                x={cx}
                y={372}
                textAnchor="middle"
                fill="#67E8F9"
                className="text-[9px] font-mono tracking-wider uppercase select-none opacity-75"
              >
                ○ VÒNG NGOÀI: 5 MỐI QUAN HỆ TƯƠNG HỖ TÍCH CỰC (CYAN)
              </text>
            )}

            {/* Laser Beams */}
            {nodes.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const nx = cx + node.orbitRadius * Math.cos(rad);
              const ny = cy + node.orbitRadius * Math.sin(rad);
              const isSelected = node.id === selectedNodeId;
              const isDimmed = filterRing !== 'all' && filterRing !== node.ring;

              if (isDimmed) return null;

              return (
                <g key={`beam-${node.id}`}>
                  <line
                    x1={cx}
                    y1={cy}
                    x2={nx}
                    y2={ny}
                    stroke={node.ring === 'inner' ? '#10B981' : '#06B6D4'}
                    strokeWidth={isSelected ? '2.5' : '1.2'}
                    strokeDasharray={node.ring === 'outer' ? '4 4' : 'none'}
                    opacity={isSelected ? 1 : 0.35}
                    filter={isSelected ? (node.ring === 'inner' ? 'url(#glow-emerald-sdg3)' : 'url(#glow-cyan-sdg3)') : undefined}
                    className="transition-all duration-300"
                  />

                  {isSelected && (
                    <circle
                      cx={(cx + nx) / 2}
                      cy={(cy + ny) / 2}
                      r="3.5"
                      fill="#FFFFFF"
                      className="animate-ping"
                    />
                  )}
                </g>
              );
            })}

            {/* Satellite Nodes */}
            {nodes.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const nx = cx + node.orbitRadius * Math.cos(rad);
              const ny = cy + node.orbitRadius * Math.sin(rad);
              const isSelected = node.id === selectedNodeId;
              const isDimmed = filterRing !== 'all' && filterRing !== node.ring;

              return (
                <g
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`cursor-pointer transition-all duration-300 ${
                    isDimmed ? 'opacity-20 pointer-events-none' : 'opacity-100 hover:scale-110'
                  }`}
                  style={{ transformOrigin: `${nx}px ${ny}px` }}
                >
                  {isSelected && (
                    <circle
                      cx={nx}
                      cy={ny}
                      r="22"
                      fill="none"
                      stroke={node.ring === 'inner' ? '#10B981' : '#06B6D4'}
                      strokeWidth="2"
                      strokeDasharray="3 3"
                      className="animate-spin"
                      style={{ animationDuration: '8s' }}
                    />
                  )}

                  <circle
                    cx={nx}
                    cy={ny}
                    r={isSelected ? '17' : '14'}
                    fill="#0A0F0D"
                    stroke={node.ring === 'inner' ? '#10B981' : '#06B6D4'}
                    strokeWidth={isSelected ? '2.5' : '1.5'}
                    filter={node.ring === 'inner' ? 'url(#glow-emerald-sdg3)' : 'url(#glow-cyan-sdg3)'}
                  />

                  <circle
                    cx={nx}
                    cy={ny}
                    r={isSelected ? '12' : '9'}
                    fill={node.ring === 'inner' ? '#10B981' : '#06B6D4'}
                    fillOpacity={isSelected ? 0.9 : 0.35}
                  />

                  <text
                    x={nx}
                    y={ny + 3.5}
                    textAnchor="middle"
                    fill={isSelected ? '#000000' : '#FFFFFF'}
                    className="text-[9px] font-mono font-bold select-none pointer-events-none"
                  >
                    {node.id.replace('SDG ', '')}
                  </text>

                  <text
                    x={nx}
                    y={ny > cy ? ny + 22 : ny - 15}
                    textAnchor="middle"
                    fill={isSelected ? (node.ring === 'inner' ? '#6EE7B7' : '#67E8F9') : '#FFFFFF'}
                    className={`text-[9px] font-sans font-medium select-none pointer-events-none transition-all ${
                      isSelected ? 'font-bold opacity-100' : 'opacity-65'
                    }`}
                  >
                    {node.id}
                  </text>
                </g>
              );
            })}

            {/* Central Sun Hub: SDG 3 */}
            <g className="cursor-pointer">
              <circle
                cx={cx}
                cy={cy}
                r="30"
                fill="#0A0F0D"
                stroke="#10B981"
                strokeWidth="2.5"
                filter="url(#glow-emerald-sdg3)"
              />
              <circle
                cx={cx}
                cy={cy}
                r="24"
                fill="#10B981"
                fillOpacity="0.25"
              />

              {/* HeartPulse SVG Icon centered */}
              <g transform={`translate(${cx - 10}, ${cy - 10})`}>
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="scale(0.85)"
                />
                <path
                  d="M3.22 12H9.5l1.5-3 2 6 1.5-3h4.28"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="scale(0.85)"
                />
              </g>

              <text
                x={cx}
                y={cy + 18}
                textAnchor="middle"
                fill="#FFFFFF"
                className="text-[9px] font-mono font-bold tracking-wider"
              >
                SDG 3
              </text>
            </g>
          </svg>
        </div>

        {/* Right Column: Detailed Card */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, x: 20, filter: 'blur(6px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -20, filter: 'blur(6px)' }}
              transition={{ duration: 0.3 }}
              className="liquid-glass-strong rounded-2xl p-5 border border-white/10 space-y-4 relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 blur-[80px] pointer-events-none opacity-25"
                style={{ backgroundColor: activeNode.ring === 'inner' ? '#10B981' : '#06B6D4' }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${
                        activeNode.ring === 'inner'
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/60'
                          : 'bg-cyan-500/20 text-cyan-300 border-cyan-400/60'
                      }`}
                    >
                      {activeNode.id}
                    </span>
                    <span className="text-xs text-white/50 font-mono">
                      {activeNode.sdgIconName}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      activeNode.ring === 'inner'
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                    }`}
                  >
                    {activeNode.ring === 'inner' ? '● Tương hỗ Mạnh (9 SDGs)' : '○ Tích cực Mở rộng (5 SDGs)'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mt-2">
                  {activeNode.title}
                </h3>

                {activeNode.keyMetric && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Chỉ số cốt lõi: <strong>{activeNode.keyMetric}</strong></span>
                  </div>
                )}

                <div className="space-y-3 text-xs text-white/90 font-light leading-relaxed mt-3">
                  <div>
                    <span className="text-white font-medium flex items-center gap-1.5 mb-1">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Tác động trực tiếp từ SDG 3:</span>
                    </span>
                    <p className="bg-black/30 p-2.5 rounded-xl border border-white/5">
                      {activeNode.impact}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <span className="text-white font-medium flex items-center gap-1.5 mb-1">
                      <SparklesIcon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Cơ chế tương hỗ hệ thống:</span>
                    </span>
                    <p className="text-white/75">
                      {activeNode.mechanism}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Target Switcher Chips + Prev/Next Controls */}
              <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrevNode}
                    className="liquid-glass px-2.5 py-1 rounded-lg text-xs text-white/80 hover:text-white hover:bg-white/10 border border-white/10 flex items-center gap-1 cursor-pointer transition-all active:scale-95"
                    title="Mục tiêu trước"
                  >
                    <span>◀ Trước</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextNode}
                    className="liquid-glass px-2.5 py-1 rounded-lg text-xs text-emerald-300 hover:text-white hover:bg-emerald-500/20 border border-emerald-500/30 flex items-center gap-1 cursor-pointer font-medium transition-all active:scale-95"
                    title="Mục tiêu tiếp theo"
                  >
                    <span>Tiếp ▶</span>
                  </button>
                </div>

                <div className="flex items-center gap-1 flex-wrap">
                  <span className="text-[10px] font-mono text-white/40 mr-1 hidden sm:inline">Xem:</span>
                  {nodes.map((n) => (
                    <button
                      key={n.id}
                      type="button"
                      onClick={() => setSelectedNodeId(n.id)}
                      className={`h-6 w-6 rounded-md text-[10px] font-mono transition-all flex items-center justify-center cursor-pointer ${
                        n.id === selectedNodeId
                          ? (n.ring === 'inner'
                              ? 'bg-emerald-400 text-black font-bold scale-110 shadow-md ring-2 ring-emerald-300'
                              : 'bg-cyan-400 text-black font-bold scale-110 shadow-md ring-2 ring-cyan-300')
                          : (n.ring === 'inner'
                              ? 'bg-emerald-500/10 text-emerald-200 hover:bg-emerald-500/25 border border-emerald-500/20'
                              : 'bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/25 border border-cyan-500/20')
                      }`}
                      title={`${n.id}: ${n.title}`}
                    >
                      {n.id.replace('SDG ', '')}
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
