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
}

interface SDGLinkageNetworkChartProps {
  currentStep?: number;
  showAll?: boolean;
}

export const SDGLinkageNetworkChart: React.FC<SDGLinkageNetworkChartProps> = ({
  currentStep,
  showAll = false,
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('SDG 1');
  const [filterRing, setFilterRing] = useState<'all' | 'inner' | 'outer'>('all');
  const [isAutoTour, setIsAutoTour] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const nodes: LinkedNode[] = [
    // =========================================================================
    // VÒNG TRONG: 8 MỐI QUAN HỆ TÍCH CỰC MẠNH (Rose Theme, R = 98px)
    // =========================================================================
    {
      id: 'SDG 1',
      title: 'Xóa nghèo bền vững',
      ring: 'inner',
      orbitRadius: 98,
      angle: 280, // Top-Right 1
      color: '#F43F5E',
      badgeBg: 'bg-rose-500/20',
      badgeBorder: 'border-rose-400/60',
      textColor: 'text-rose-300',
      impact: 'Mỗi năm học bổ sung giúp tăng 10% thu nhập cá nhân suốt đời, phá vỡ bẫy nghèo đói liên thế hệ.',
      mechanism: 'Giáo dục trang bị kỹ năng chuyên môn, tăng năng lực đàm phán việc làm và thu nhập thực tế.',
      sdgIconName: 'No Poverty',
    },
    {
      id: 'SDG 2',
      title: 'An ninh Lương thực & Xóa đói',
      ring: 'inner',
      orbitRadius: 98,
      angle: 308, // Top-Right 2
      color: '#F43F5E',
      badgeBg: 'bg-rose-500/20',
      badgeBorder: 'border-rose-400/60',
      textColor: 'text-rose-300',
      impact: 'Nông dân có học vấn nâng cao năng suất mùa vụ, giảm thất thoát sau thu hoạch và tiếp cận dinh dưỡng hợp lý.',
      mechanism: 'Chuyển giao tiến bộ kỹ thuật nông nghiệp thông minh, bảo đảm an ninh lương thực và giảm suy dinh dưỡng.',
      sdgIconName: 'Zero Hunger',
    },
    {
      id: 'SDG 3',
      title: 'Sức khỏe & Hạnh phúc',
      ring: 'inner',
      orbitRadius: 98,
      angle: 335, // Top-Right 3
      color: '#F43F5E',
      badgeBg: 'bg-rose-500/20',
      badgeBorder: 'border-rose-400/60',
      textColor: 'text-rose-300',
      impact: 'Hiểu biết y tế giúp người dân chủ động dinh dưỡng, tiêm chủng và kéo giảm tỷ lệ tử vong sớm.',
      mechanism: 'Mẹ biết chữ tăng 50% cơ hội sống sót của trẻ dưới 5 tuổi; tăng khả năng tiếp cận dịch vụ y tế dự phòng.',
      sdgIconName: 'Good Health',
    },
    {
      id: 'SDG 7',
      title: 'Năng lượng Sạch & Bền vững',
      ring: 'inner',
      orbitRadius: 98,
      angle: 42, // Bottom-Right 1
      color: '#F43F5E',
      badgeBg: 'bg-rose-500/20',
      badgeBorder: 'border-rose-400/60',
      textColor: 'text-rose-300',
      impact: 'Đào tạo kỹ sư và chuyên gia công nghệ xanh, thúc đẩy chuyển dịch năng lượng tái tạo (điện gió, mặt trời).',
      mechanism: 'Giáo dục nâng cao nhận thức cộng đồng về sử dụng năng lượng tiết kiệm, làm chủ công nghệ Net Zero.',
      sdgIconName: 'Affordable Energy',
    },
    {
      id: 'SDG 8',
      title: 'Tăng trưởng & Việc làm bền vững',
      ring: 'inner',
      orbitRadius: 98,
      angle: 68, // Bottom-Right 2
      color: '#F43F5E',
      badgeBg: 'bg-rose-500/20',
      badgeBorder: 'border-rose-400/60',
      textColor: 'text-rose-300',
      impact: 'Cung cấp lực lượng lao động tay nghề cao đáp ứng nền kinh tế tri thức và công nghiệp số 4.0.',
      mechanism: 'Giáo dục nghề nghiệp (TVET) thu hẹp khoảng cách thiếu hụt kỹ năng giữa nhà trường và doanh nghiệp.',
      sdgIconName: 'Decent Work',
    },
    {
      id: 'SDG 9',
      title: 'Công nghiệp, Sáng tạo & Hạ tầng',
      ring: 'inner',
      orbitRadius: 98,
      angle: 98, // Bottom
      color: '#F43F5E',
      badgeBg: 'bg-rose-500/20',
      badgeBorder: 'border-rose-400/60',
      textColor: 'text-rose-300',
      impact: 'Thúc đẩy nghiên cứu phát triển (R&D), sáng chế công nghệ mới và chuyển giao giải pháp hạ tầng thông minh.',
      mechanism: 'Trường đại học và viện nghiên cứu là hạt nhân ươm tạo kỳ lân khởi nghiệp công nghệ và bằng sáng chế.',
      sdgIconName: 'Industry & Innovation',
    },
    {
      id: 'SDG 11',
      title: 'Đô thị & Cộng đồng bền vững',
      ring: 'inner',
      orbitRadius: 98,
      angle: 130, // Bottom-Left
      color: '#F43F5E',
      badgeBg: 'bg-rose-500/20',
      badgeBorder: 'border-rose-400/60',
      textColor: 'text-rose-300',
      impact: 'Hình thành cộng đồng thị dân văn minh, chủ động bảo vệ di sản văn hóa và ứng phó rủi ro thiên tai đô thị.',
      mechanism: 'Giáo dục ý thức cư dân trong quy hoạch không gian xanh, phân loại rác và sử dụng giao thông công cộng.',
      sdgIconName: 'Sustainable Cities',
    },
    {
      id: 'SDG 16',
      title: 'Hòa bình, Công lý & Thể chế Vững mạnh',
      ring: 'inner',
      orbitRadius: 98,
      angle: 235, // Top-Left
      color: '#F43F5E',
      badgeBg: 'bg-rose-500/20',
      badgeBorder: 'border-rose-400/60',
      textColor: 'text-rose-300',
      impact: 'Nâng cao dân trí, củng cố tính minh bạch thể chế, thượng tôn pháp luật và đẩy lùi vấn nạn tham nhũng.',
      mechanism: 'Giáo dục công dân thúc đẩy văn hóa hòa bình, giải quyết mâu thuẫn bằng đối thoại và bảo vệ quyền trẻ em.',
      sdgIconName: 'Peace & Justice',
    },

    // =========================================================================
    // VÒNG NGOÀI: 4 MỐI QUAN HỆ TƯƠNG HỖ TÍCH CỰC (Amber Theme, R = 158px)
    // =========================================================================
    {
      id: 'SDG 5',
      title: 'Bình đẳng giới',
      ring: 'outer',
      orbitRadius: 158,
      angle: 10, // East-North-East
      color: '#F59E0B',
      badgeBg: 'bg-amber-500/20',
      badgeBorder: 'border-amber-400/60',
      textColor: 'text-amber-300',
      impact: 'Phổ cập giáo dục cho trẻ em gái xóa bỏ nạn tảo hôn, trao quyền kinh tế và tiếng nói xã hội bình đẳng.',
      mechanism: 'Giáo dục mở lối cho phụ nữ tham gia thị trường lao động kỹ thuật cao và bộ máy ra quyết định chính sách.',
      sdgIconName: 'Gender Equality',
    },
    {
      id: 'SDG 6',
      title: 'Nước sạch & Vệ sinh môi trường',
      ring: 'outer',
      orbitRadius: 158,
      angle: 32, // East-South-East
      color: '#F59E0B',
      badgeBg: 'bg-amber-500/20',
      badgeBorder: 'border-amber-400/60',
      textColor: 'text-amber-300',
      impact: 'Giáo dục thực hành vệ sinh (WASH) giúp giảm thiểu các bệnh truyền nhiễm liên quan đến nguồn nước ô nhiễm.',
      mechanism: 'Trường học chuẩn hóa công trình vệ sinh nước sạch giúp giữ chân học sinh, đặc biệt là nữ sinh vị thành niên.',
      sdgIconName: 'Clean Water',
    },
    {
      id: 'SDG 10',
      title: 'Giảm Bất bình đẳng Xã hội',
      ring: 'outer',
      orbitRadius: 158,
      angle: 114, // South-South-West
      color: '#F59E0B',
      badgeBg: 'bg-amber-500/20',
      badgeBorder: 'border-amber-400/60',
      textColor: 'text-amber-300',
      impact: 'Giáo dục hòa nhập là công cụ san bằng xuất phát điểm cho người nghèo, vùng sâu vùng xa và người khuyết tật.',
      mechanism: 'Chính sách học bổng và trường học số xóa nhòa ranh giới bất bình đẳng địa lý và điều kiện kinh tế hộ gia đình.',
      sdgIconName: 'Reduced Inequalities',
    },
    {
      id: 'SDG 12',
      title: 'Tiêu dùng & Sản xuất có Trách nhiệm',
      ring: 'outer',
      orbitRadius: 158,
      angle: 152, // West-South-West
      color: '#F59E0B',
      badgeBg: 'bg-amber-500/20',
      badgeBorder: 'border-amber-400/60',
      textColor: 'text-amber-300',
      impact: 'Hình thành lối sống tiêu dùng xanh, tiết kiệm tài nguyên, phân loại rác và giảm thiểu rác thải nhựa.',
      mechanism: 'Chương trình giáo dục phát triển bền vững (ESD) định hình đạo đức tiêu dùng và thúc đẩy kinh tế tuần hoàn.',
      sdgIconName: 'Responsible Consumption',
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
      className="liquid-glass-natural rounded-2xl p-5 border border-rose-500/20 shadow-2xl relative overflow-hidden"
    >
      {/* Top Header & Interactive Orbit Legend */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <NetworkIcon className="w-4 h-4 text-rose-400" />
          <span className="text-xs font-mono font-bold text-rose-300 uppercase tracking-wider">
            Sơ đồ Mạng Lưới Đồng Tâm: SDG 4 & Hệ Sinh Thái 12 SDGs
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
                ? 'bg-rose-500/20 text-rose-300 border-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.35)]'
                : 'liquid-glass text-white/60 hover:text-white border-white/15'
            }`}
            title={isAutoTour ? 'Bấm để dừng tự động chạy' : 'Bấm để bật tự động chạy tuần tự (4s)'}
          >
            {isAutoTour ? (
              <>
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
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
            Tất cả (12 SDGs)
          </button>

          <button
            type="button"
            onClick={() => setFilterRing('inner')}
            className={`px-2.5 py-1 rounded-full text-[11px] font-mono flex items-center gap-1.5 transition-all cursor-pointer border ${
              filterRing === 'inner'
                ? 'bg-rose-500 text-white font-bold border-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.5)]'
                : 'liquid-glass text-rose-300 hover:text-rose-200 border-rose-500/30'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            <span>Vòng trong: Mạnh (8)</span>
          </button>

          <button
            type="button"
            onClick={() => setFilterRing('outer')}
            className={`px-2.5 py-1 rounded-full text-[11px] font-mono flex items-center gap-1.5 transition-all cursor-pointer border ${
              filterRing === 'outer'
                ? 'bg-amber-400 text-black font-bold border-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.5)]'
                : 'liquid-glass text-amber-300 hover:text-amber-200 border-amber-500/30'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Vòng ngoài: Tích cực (4)</span>
          </button>
        </div>
      </div>

      {/* Auto-Tour Indicator Bar */}
      {isAutoTour && (
        <div className="mb-3 px-3 py-1 rounded-xl bg-black/40 border border-rose-500/20 flex items-center justify-between text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isHovered ? 'bg-amber-400' : 'bg-rose-400 animate-pulse'}`} />
            <span className={isHovered ? 'text-amber-300' : 'text-rose-300'}>
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
                className="h-full bg-rose-400 rounded-full"
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
              <filter id="glow-rose-sdg4" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-amber-sdg4" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <radialGradient id="rose-sun-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#BE123C" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#881337" stopOpacity="0.05" />
              </radialGradient>
            </defs>

            {/* Central Halo Aura */}
            <circle
              cx={cx}
              cy={cy}
              r="48"
              fill="url(#rose-sun-gradient)"
              className="animate-pulse"
            />

            {/* VÒNG NGOÀI (OUTER ORBIT - AMBER, DASHED) */}
            <circle
              cx={cx}
              cy={cy}
              r={rOuter}
              fill="none"
              stroke="#F59E0B"
              strokeWidth={filterRing === 'inner' ? '1' : '2'}
              strokeDasharray="6 6"
              opacity={filterRing === 'inner' ? 0.2 : 0.65}
              filter="url(#glow-amber-sdg4)"
              className="transition-all duration-300"
            />

            {/* VÒNG TRONG (INNER ORBIT - ROSE, SOLID) */}
            <circle
              cx={cx}
              cy={cy}
              r={rInner}
              fill="none"
              stroke="#F43F5E"
              strokeWidth={filterRing === 'outer' ? '1' : '2.5'}
              opacity={filterRing === 'outer' ? 0.25 : 0.9}
              filter="url(#glow-rose-sdg4)"
              className="transition-all duration-300"
            />

            {/* Legend Orbit Canvas Labels */}
            {filterRing !== 'outer' && (
              <text
                x={cx}
                y={18}
                textAnchor="middle"
                fill="#FDA4AF"
                className="text-[9px] font-mono tracking-wider uppercase font-bold select-none opacity-80"
              >
                ● VÒNG TRONG: 8 MỐI QUAN HỆ TÍCH CỰC MẠNH (ROSE)
              </text>
            )}

            {filterRing !== 'inner' && (
              <text
                x={cx}
                y={372}
                textAnchor="middle"
                fill="#FCD34D"
                className="text-[9px] font-mono tracking-wider uppercase select-none opacity-75"
              >
                ○ VÒNG NGOÀI: 4 MỐI QUAN HỆ TƯƠNG HỖ TÍCH CỰC (AMBER)
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
                    stroke={node.ring === 'inner' ? '#F43F5E' : '#F59E0B'}
                    strokeWidth={isSelected ? '2.5' : '1.2'}
                    strokeDasharray={node.ring === 'outer' ? '4 4' : 'none'}
                    opacity={isSelected ? 1 : 0.35}
                    filter={isSelected ? (node.ring === 'inner' ? 'url(#glow-rose-sdg4)' : 'url(#glow-amber-sdg4)') : undefined}
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
                      stroke={node.ring === 'inner' ? '#F43F5E' : '#F59E0B'}
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
                    stroke={node.ring === 'inner' ? '#F43F5E' : '#F59E0B'}
                    strokeWidth={isSelected ? '2.5' : '1.5'}
                    filter={node.ring === 'inner' ? 'url(#glow-rose-sdg4)' : 'url(#glow-amber-sdg4)'}
                  />

                  <circle
                    cx={nx}
                    cy={ny}
                    r={isSelected ? '12' : '9'}
                    fill={node.ring === 'inner' ? '#F43F5E' : '#F59E0B'}
                    fillOpacity={isSelected ? 0.9 : 0.35}
                  />

                  <text
                    x={nx}
                    y={ny + 3.5}
                    textAnchor="middle"
                    fill="#FFFFFF"
                    className="text-[9px] font-mono font-bold select-none pointer-events-none"
                  >
                    {node.id.replace('SDG ', '')}
                  </text>

                  <text
                    x={nx}
                    y={ny > cy ? ny + 22 : ny - 15}
                    textAnchor="middle"
                    fill={isSelected ? (node.ring === 'inner' ? '#FDA4AF' : '#FCD34D') : '#FFFFFF'}
                    className={`text-[9px] font-sans font-medium select-none pointer-events-none transition-all ${
                      isSelected ? 'font-bold opacity-100' : 'opacity-65'
                    }`}
                  >
                    {node.id}
                  </text>
                </g>
              );
            })}

            {/* Central Sun Hub: SDG 4 */}
            <g className="cursor-pointer">
              <circle
                cx={cx}
                cy={cy}
                r="30"
                fill="#0A0F0D"
                stroke="#F43F5E"
                strokeWidth="2.5"
                filter="url(#glow-rose-sdg4)"
              />
              <circle
                cx={cx}
                cy={cy}
                r="24"
                fill="#F43F5E"
                fillOpacity="0.25"
              />

              {/* Central Graduation Cap Icon (Native SVG paths to prevent scaling bugs) */}
              <g transform={`translate(${cx - 10}, ${cy - 12})`}>
                <path
                  d="M2 10l10-5 10 5-10 5z"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="scale(0.85)"
                />
                <path
                  d="M22 10v6"
                  fill="none"
                  stroke="#FB7185"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="scale(0.85)"
                />
                <path
                  d="M6 12v5c3 3 9 3 12 0v-5"
                  fill="none"
                  stroke="#FB7185"
                  strokeWidth="1.8"
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
                SDG 4
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
                style={{ backgroundColor: activeNode.ring === 'inner' ? '#F43F5E' : '#F59E0B' }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${
                        activeNode.ring === 'inner'
                          ? 'bg-rose-500/20 text-rose-300 border-rose-400/60'
                          : 'bg-amber-500/20 text-amber-300 border-amber-400/60'
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
                        ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                        : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    }`}
                  >
                    {activeNode.ring === 'inner' ? '● Tương hỗ Mạnh (8 SDGs)' : '○ Tích cực Mở rộng (4 SDGs)'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mt-2">
                  {activeNode.title}
                </h3>

                <div className="space-y-3 text-xs text-white/90 font-light leading-relaxed mt-3">
                  <div>
                    <span className="text-white font-medium flex items-center gap-1.5 mb-1">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-rose-400" />
                      <span>Tác động trực tiếp từ SDG 4:</span>
                    </span>
                    <p className="bg-black/30 p-2.5 rounded-xl border border-white/5">
                      {activeNode.impact}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <span className="text-white font-medium flex items-center gap-1.5 mb-1">
                      <SparklesIcon className="w-3.5 h-3.5 text-amber-400" />
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
                    className="liquid-glass px-2.5 py-1 rounded-lg text-xs text-rose-300 hover:text-white hover:bg-rose-500/20 border border-rose-500/30 flex items-center gap-1 cursor-pointer font-medium transition-all active:scale-95"
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
                              ? 'bg-rose-500 text-white font-bold scale-110 shadow-md ring-2 ring-rose-300'
                              : 'bg-amber-400 text-black font-bold scale-110 shadow-md ring-2 ring-amber-300')
                          : (n.ring === 'inner'
                              ? 'bg-rose-500/10 text-rose-200 hover:bg-rose-500/25 border border-rose-500/20'
                              : 'bg-amber-500/10 text-amber-200 hover:bg-amber-500/25 border border-amber-500/20')
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
