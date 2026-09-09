import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobeIcon, ArrowUpRight, LeafIcon, HeartPulseIcon, GraduationCapIcon } from '../Icons';

export interface ReferenceItem {
  id: string;
  category: 'all' | 'sdg3' | 'sdg4' | 'framework' | 'business';
  categoryLabel: string;
  content: string;
  metricBadge: string;
  slide: string;
  slideNum: number;
  source: string;
  organization: string;
  link: string;
  linkDisplay: string;
}

export const REFERENCES_DATA: ReferenceItem[] = [
  {
    id: 'ref-1',
    category: 'framework',
    categoryLabel: 'Khung lý thuyết',
    content: 'Khung khái niệm 3Es: Công bằng (Equity) - Môi trường (Environment) - Kinh tế (Economy). Đặt bình đẳng xã hội và con người làm trung tâm.',
    metricBadge: 'Khung 3Es Benton-Short',
    slide: 'Slide 4, 14',
    slideNum: 4,
    source: 'Benton-Short, L. (2018). Sustainability and Cities: Concept and Assessment. Routledge Publishing.',
    organization: 'Routledge / George Washington Univ',
    link: 'https://www.routledge.com/Sustainability-and-Cities-Concept-and-Assessment/Benton-Short/p/book/9781138658660',
    linkDisplay: 'routledge.com/Sustainability-and-Cities',
  },
  {
    id: 'ref-2',
    category: 'framework',
    categoryLabel: 'Khung lý thuyết',
    content: 'Mô hình Bánh cưới SDGs: Cấu trúc 3 tầng phân cấp Sinh quyển (Biosphere) → Xã hội (Society: SDG 3, 4,...) → Kinh tế (Economy) → Đối tác (SDG 17).',
    metricBadge: 'Mô hình Bánh Cưới 3 Tầng',
    slide: 'Slide 14, 20',
    slideNum: 14,
    source: 'Rockström, J. & Sukhdev, P. (2016). How food connects all the SDGs. Stockholm Resilience Centre (SRC), Stockholm University.',
    organization: 'Stockholm Resilience Centre',
    link: 'https://www.stockholmresilience.org/research/research-news/2016-06-14-how-food-connects-all-the-sdgs.html',
    linkDisplay: 'stockholmresilience.org/how-food-connects-all-the-sdgs',
  },
  {
    id: 'ref-3',
    category: 'sdg3',
    categoryLabel: 'SDG 3 • Sức khỏe',
    content: 'Tuổi thọ kỳ vọng toàn cầu (71.4 tuổi) và Tỉ suất tử vong trẻ em dưới 5 tuổi (U5MR: 37 ca tử vong / 1.000 ca sinh sống).',
    metricBadge: '71.4 tuổi • 37/1.000 U5MR',
    slide: 'Slide 5',
    slideNum: 5,
    source: 'World Health Organization (WHO) - Global Health Observatory (GHO) 2023 & UN IGME Report.',
    organization: 'WHO & UN IGME',
    link: 'https://www.who.int/data/gho/data/themes/mortality-and-global-health-estimates',
    linkDisplay: 'who.int/data/gho/mortality-estimates',
  },
  {
    id: 'ref-4',
    category: 'sdg3',
    categoryLabel: 'SDG 3 • Sức khỏe',
    content: 'Chỉ số DALYs = YLL (Năm sống mất do chết sớm) + YLD (Năm sống chung với bệnh tật); Dữ liệu gánh nặng bệnh tật NCDs toàn cầu.',
    metricBadge: 'DALYs = YLL + YLD',
    slide: 'Slide 5, 6',
    slideNum: 6,
    source: 'Institute for Health Metrics and Evaluation (IHME) - Global Burden of Disease Study (GBD 2021) & WHO GHE.',
    organization: 'IHME & WHO',
    link: 'https://www.healthdata.org/research-analysis/gbd',
    linkDisplay: 'healthdata.org/research-analysis/gbd',
  },
  {
    id: 'ref-5',
    category: 'sdg3',
    categoryLabel: 'SDG 3 • Sức khỏe',
    content: 'Khủng hoảng y tế: Tử vong mẹ (223/100.000); Tai nạn giao thông (1.19M ca tử vong); 4.5 tỷ người thiếu dịch vụ y tế thiết yếu; Thiếu hụt 10 triệu nhân lực y tế.',
    metricBadge: '223/100k • 1.19M • 4.5 Tỷ',
    slide: 'Slide 7, 8, 9',
    slideNum: 7,
    source: 'United Nations (2023). The Sustainable Development Goals Report 2023; WHO Global Status Report on Road Safety.',
    organization: 'UN DESA & WHO',
    link: 'https://sdgs.un.org/goals/goal3',
    linkDisplay: 'sdgs.un.org/goals/goal3',
  },
  {
    id: 'ref-6',
    category: 'sdg3',
    categoryLabel: 'SDG 3 • Sức khỏe',
    content: 'Thực trạng Việt Nam: Tuổi thọ bình quân 73.7 - 74.5 tuổi (sống khỏe ~64 tuổi); HDI 0.766; >34 triệu người dùng kích hoạt VNeID y tế; NCDs chiếm 77-80% gánh nặng tử vong.',
    metricBadge: '74.5 tuổi • 0.766 HDI • 80% NCDs',
    slide: 'Slide 12',
    slideNum: 12,
    source: 'Tổng cục Thống kê (GSO 2023); Bộ Y tế Việt Nam - Niên giám Thống kê Y tế 2023; UNDP Vietnam HDR Data.',
    organization: 'Tổng cục Thống kê & Bộ Y tế & UNDP',
    link: 'https://hdr.undp.org/data-center/country-insights#/ranks',
    linkDisplay: 'hdr.undp.org/country-insights/vietnam',
  },
  {
    id: 'ref-7',
    category: 'sdg3',
    categoryLabel: 'SDG 3 • Sức khỏe',
    content: 'Tính liên kết mạng lưới 17 SDGs: Ma trận 7 cấp độ (-3 đến +3); 9 mối quan hệ tích cực mạnh (SDG 1, 2, 4, 7, 8, 10, 11, 12, 15) và 5 mối quan hệ tương hỗ.',
    metricBadge: '9 Mạnh + 5 Tương hỗ',
    slide: 'Slide 12',
    slideNum: 12,
    source: 'International Science Council (ISC / ICSU, 2017). A Guide to SDG Interactions: From Science to Implementation.',
    organization: 'International Science Council (ISC)',
    link: 'https://council.science/publications/a-guide-to-sdg-interactions-from-science-to-implementation/',
    linkDisplay: 'council.science/sdg-interactions',
  },
  {
    id: 'ref-8',
    category: 'business',
    categoryLabel: 'Doanh nghiệp',
    content: 'Vinamilk: QMS chuẩn FSSC 22000, ISO 9001 & 5S; 14 trang trại sinh thái Cow Care 4.0; Cam kết Net Zero 2050; Sữa học đường hỗ trợ 4 triệu trẻ em.',
    metricBadge: '14 Trang trại • Net Zero 2050',
    slide: 'Slide 12',
    slideNum: 12,
    source: 'Công ty Cổ phần Sữa Việt Nam. Báo cáo Phát triển Bền vững 2023 & Báo cáo Thường niên 2023.',
    organization: 'Vinamilk Sustainability',
    link: 'https://www.vinamilk.com.vn/phat-trien-ben-vung',
    linkDisplay: 'vinamilk.com.vn/phat-trien-ben-vung',
  },
  {
    id: 'ref-9',
    category: 'sdg4',
    categoryLabel: 'SDG 4 • Giáo dục',
    content: 'Thước đo giáo dục: GER (Tỉ lệ nhập học gộp) vs NER (Tỉ lệ nhập học thuần); Công thức HDI Giáo dục: EYS (kỳ vọng 18 năm), MYS (trung bình 15 năm).',
    metricBadge: 'GER/NER • EYS 18 • MYS 15',
    slide: 'Slide 15, 16',
    slideNum: 15,
    source: 'UNESCO Institute for Statistics (UIS Data Portal) & UNDP Human Development Report Technical Notes.',
    organization: 'UNESCO UIS & UNDP',
    link: 'https://uis.unesco.org/',
    linkDisplay: 'uis.unesco.org',
  },
  {
    id: 'ref-10',
    category: 'sdg4',
    categoryLabel: 'SDG 4 • Giáo dục',
    content: 'Phương tiện thực hiện Target 4.a — 4.c: Cơ sở vật chất an toàn hòa nhập (4.a), Học bổng phát triển (4.b), Nâng cao nguồn cung giáo viên chuẩn (4.c).',
    metricBadge: 'Target 4.a — 4.c',
    slide: 'Slide 18',
    slideNum: 18,
    source: 'UNESCO - Global Education Monitoring Report (GEM Report); UNESCO & Education 2030 Steering Committee.',
    organization: 'UNESCO GEM Report',
    link: 'https://www.unesco.org/gem-report/en',
    linkDisplay: 'unesco.org/gem-report',
  },
  {
    id: 'ref-11',
    category: 'sdg4',
    categoryLabel: 'SDG 4 • Giáo dục',
    content: 'Khủng hoảng học tập toàn cầu: 84 triệu trẻ em nguy cơ thất học vào 2030; 300 triệu thiếu kỹ năng đọc/toán cơ bản; 1/4 trường thiếu hạ tầng; >14% giáo viên thiếu chuẩn.',
    metricBadge: '84M Trẻ • 300M Thiếu Chuẩn',
    slide: 'Slide 18',
    slideNum: 18,
    source: 'World Bank & UNESCO (2022). The State of Global Learning Poverty: 2022 Update; UNESCO GEM Report 2023.',
    organization: 'World Bank & UNESCO',
    link: 'https://www.worldbank.org/en/topic/education/publication/state-of-global-learning-poverty',
    linkDisplay: 'worldbank.org/state-of-global-learning-poverty',
  },
  {
    id: 'ref-12',
    category: 'sdg4',
    categoryLabel: 'SDG 4 • Giáo dục',
    content: 'Thực trạng & Rào cản Việt Nam: Tỉ lệ hoàn thành tiểu học đạt 98.5%; rào cản đồng bào dân tộc thiểu số; tỉ lệ lao động qua đào tạo có bằng cấp (27.2%); 4 giải pháp chuyển đổi số.',
    metricBadge: '98.5% Hoàn thành • 27.2% Bằng cấp',
    slide: 'Slide 19, 20',
    slideNum: 19,
    source: 'Tổng cục Thống kê (GSO 2023); Bộ Giáo dục và Đào tạo (MOET); UNICEF Việt Nam - Báo cáo Phân tích Ngành Giáo dục 2023.',
    organization: 'Tổng cục Thống kê & MOET & UNICEF',
    link: 'https://www.unicef.org/vietnam/vi/bao-cao-phan-tich-nganh-giao-duc',
    linkDisplay: 'unicef.org/vietnam/bao-cao-phan-tich-nganh-giao-duc',
  },
  {
    id: 'ref-13',
    category: 'sdg4',
    categoryLabel: 'SDG 4 • Giáo dục',
    content: 'Tính liên kết mạng lưới SDG 4: 8 mối quan hệ tích cực mạnh vòng trong (SDG 1, 2, 3, 7, 8, 9, 11, 16) và 4 mối quan hệ tương hỗ vòng ngoài (SDG 5, 6, 10, 12).',
    metricBadge: '8 Mạnh + 4 Tương hỗ',
    slide: 'Slide 22',
    slideNum: 22,
    source: 'UNESCO - Education 2030 Incheon Declaration and Framework for Action; International Science Council (ISC).',
    organization: 'UNESCO & ISC',
    link: 'https://unesdoc.unesco.org/ark:/48223/pf0000245656',
    linkDisplay: 'unesdoc.unesco.org/incheon-declaration',
  },
  {
    id: 'ref-14',
    category: 'business',
    categoryLabel: 'Doanh nghiệp',
    content: 'Nestlé Việt Nam: Đào tạo nông dân cà phê bền vững (>330.000 lượt nông dân NESCAFÉ Plan); Lương đủ sống & hệ thống CLMRS; Hỗ trợ thanh niên Nestlé Needs YOUth (>13.000 người).',
    metricBadge: '330k Nông dân • CLMRS • 13k YOUth',
    slide: 'Slide 22',
    slideNum: 22,
    source: 'Nestlé Việt Nam (2023). Báo cáo Tạo Giá trị Chung (CSV Report) & Cam kết Phát triển Bền vững 2023.',
    organization: 'Nestlé Vietnam CSV',
    link: 'https://www.nestle.com.vn/csv',
    linkDisplay: 'nestle.com.vn/csv',
  },
];

interface SlideReferencesTableProps {
  onGoToSlide?: (slideNum: number) => void;
}

export const SlideReferencesTable: React.FC<SlideReferencesTableProps> = ({ onGoToSlide }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState<boolean>(false);

  const filteredItems = REFERENCES_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesCategory;

    const matchesQuery =
      item.content.toLowerCase().includes(query) ||
      item.metricBadge.toLowerCase().includes(query) ||
      item.slide.toLowerCase().includes(query) ||
      item.source.toLowerCase().includes(query) ||
      item.organization.toLowerCase().includes(query) ||
      item.link.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });

  const handleCopyLink = (link: string, id: string) => {
    navigator.clipboard?.writeText(link);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAllBibliography = () => {
    const text = REFERENCES_DATA.map(
      (item, idx) =>
        `${idx + 1}. [${item.slide}] ${item.metricBadge}\n   - Nội dung: ${item.content}\n   - Trích nguồn: ${item.source}\n   - Tổ chức: ${item.organization}\n   - Liên kết: ${item.link}\n`
    ).join('\n');

    navigator.clipboard?.writeText(text);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  return (
    <div className="w-full space-y-4">
      {/* Control Bar: Category Filters & Search */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 bg-black/40 border border-white/10 p-3 rounded-2xl backdrop-blur-md">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedCategory === 'all'
                ? 'bg-emerald-500 text-black font-semibold shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                : 'liquid-glass text-white/70 hover:text-white'
            }`}
          >
            <GlobeIcon className="w-3.5 h-3.5" />
            <span>Tất cả ({REFERENCES_DATA.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('sdg3')}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedCategory === 'sdg3'
                ? 'bg-emerald-400 text-black font-semibold shadow-[0_0_12px_rgba(52,211,153,0.4)]'
                : 'liquid-glass text-emerald-300/80 hover:text-emerald-200'
            }`}
          >
            <HeartPulseIcon className="w-3.5 h-3.5" />
            <span>SDG 3 • Sức khỏe (5)</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('sdg4')}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedCategory === 'sdg4'
                ? 'bg-rose-500 text-white font-semibold shadow-[0_0_12px_rgba(244,63,94,0.4)]'
                : 'liquid-glass text-rose-300/80 hover:text-rose-200'
            }`}
          >
            <GraduationCapIcon className="w-3.5 h-3.5" />
            <span>SDG 4 • Giáo dục (5)</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('business')}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedCategory === 'business'
                ? 'bg-cyan-400 text-black font-semibold shadow-[0_0_12px_rgba(34,211,238,0.4)]'
                : 'liquid-glass text-cyan-300/80 hover:text-cyan-200'
            }`}
          >
            <LeafIcon className="w-3.5 h-3.5" />
            <span>Doanh nghiệp (2)</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('framework')}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              selectedCategory === 'framework'
                ? 'bg-amber-400 text-black font-semibold shadow-[0_0_12px_rgba(251,191,36,0.4)]'
                : 'liquid-glass text-amber-300/80 hover:text-amber-200'
            }`}
          >
            <span>Khung lý thuyết (2)</span>
          </button>
        </div>

        {/* Right side: Search & Copy All button */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1 lg:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm số liệu, slide, nguồn..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={handleCopyAllBibliography}
            className="liquid-glass-strong rounded-xl px-3 py-1.5 text-xs font-medium text-emerald-300 hover:text-white flex items-center gap-1.5 hover:bg-emerald-500/20 transition-all cursor-pointer whitespace-nowrap border border-emerald-400/30"
            title="Sao chép toàn bộ danh mục trích dẫn dạng chuẩn để dán vào báo cáo bài tập"
          >
            <span>{copiedAll ? '✓ Đã sao chép' : '📋 Copy toàn bộ'}</span>
          </button>
        </div>
      </div>

      {/* Main Table Container (Responsive) */}
      <div className="liquid-glass-natural rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto custom-scrollbar max-h-[64vh]">
          <table className="w-full text-left border-collapse min-w-[780px]">
            <thead className="sticky top-0 z-20 bg-[#061412]/95 backdrop-blur-md border-b border-white/15 text-xs sm:text-sm font-mono uppercase tracking-wider text-emerald-300/90">
              <tr>
                <th className="py-3 px-4 w-12 text-center">STT</th>
                <th className="py-3 px-4 w-28 text-center">Slide</th>
                <th className="py-3 px-5 w-72">Nội dung & Số liệu</th>
                <th className="py-3 px-5">Trích nguồn / Tổ chức công bố</th>
                <th className="py-3 px-4 w-44 text-right">Liên kết tham khảo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs">
              <AnimatePresence>
                {filteredItems.map((item, idx) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: idx * 0.02 }}
                    className="hover:bg-white/[0.04] transition-colors group"
                  >
                    {/* Column 1: Index */}
                    <td className="py-4 px-5 text-center font-mono text-white/40 text-xs sm:text-sm">
                      {idx + 1}
                    </td>

                    {/* Column 2: Slide Badge with Jump Action */}
                    <td className="py-4 px-5 text-center">
                      {onGoToSlide ? (
                        <button
                          type="button"
                          onClick={() => onGoToSlide(item.slideNum)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs sm:text-sm font-mono font-semibold bg-emerald-500/15 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-400/30 hover:border-emerald-400 transition-all cursor-pointer shadow-sm group-hover:scale-105"
                          title={`Bấm để chuyển ngay đến Slide ${item.slideNum}`}
                        >
                          <span>{item.slide}</span>
                          <span className="text-emerald-400 text-xs">→</span>
                        </button>
                      ) : (
                        <span className="inline-block px-2.5 py-1 rounded-lg text-xs sm:text-sm font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">
                          {item.slide}
                        </span>
                      )}
                    </td>

                    {/* Column 3: Content & Metric */}
                    <td className="py-4 px-5">
                      <div className="inline-block mb-1 px-2 py-0.5 rounded text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-white border border-white/10">
                        {item.metricBadge}
                      </div>
                      <p className="text-white/85 font-light leading-relaxed text-xs">
                        {item.content}
                      </p>
                    </td>

                    {/* Column 4: Source & Organization */}
                    <td className="py-4 px-5">
                      <div className="text-xs sm:text-sm font-mono text-cyan-300 font-semibold mb-0.5">
                        {item.organization}
                      </div>
                      <div className="text-white/80 font-serif italic text-xs leading-relaxed">
                        {item.source}
                      </div>
                    </td>

                    {/* Column 5: Action Link & Copy */}
                    <td className="py-4 px-5 text-right">
                      <div className="flex flex-col items-end gap-1.5">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs sm:text-sm font-mono text-emerald-300 hover:text-white bg-emerald-500/10 hover:bg-emerald-500/25 border border-emerald-500/20 hover:border-emerald-400 transition-all group/link"
                          title={item.link}
                        >
                          <span className="truncate max-w-[120px]">{item.linkDisplay}</span>
                          <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>

                        <button
                          type="button"
                          onClick={() => handleCopyLink(item.link, item.id)}
                          className="text-xs font-mono text-white/40 hover:text-white/80 transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <span>{copiedId === item.id ? '✓ Đã chép' : 'Sao chép link'}</span>
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Footer Summary / Quick Stats */}
        <div className="p-3 bg-black/50 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
          <div className="flex items-center gap-4">
            <span>
              Tổng số nguồn: <strong className="text-white">{filteredItems.length}</strong> / {REFERENCES_DATA.length}
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">
              Cơ quan quốc tế: <strong className="text-emerald-300">WHO, UNESCO, UNDP, World Bank, UNICEF, UN DESA</strong>
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-white/50 font-mono">
            <span>Định dạng trích dẫn: APA 7th Edition / Chuẩn báo cáo khoa học</span>
          </div>
        </div>
      </div>
    </div>
  );
};
