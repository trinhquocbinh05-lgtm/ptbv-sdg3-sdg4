import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon } from '../Icons';

export interface GlossaryTerm {
  id: string;
  number: number;
  termEn: string;
  termVi: string;
  category: 'washing' | 'business' | 'sdg';
  categoryLabel: string;
  tagColor: string;
  definition: string;
  example?: string;
  keyHighlight: string;
}

export interface DefenseQA {
  id: string;
  questionNumber: number;
  question: string;
  context: string;
  shortAnswer: string;
  bulletPoints: { title: string; content: string }[];
  summaryNote: string;
}

const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'term-1',
    number: 1,
    termEn: 'Greenwashing',
    termVi: 'Tẩy xanh',
    category: 'washing',
    categoryLabel: 'Tẩy xanh & Làm màu',
    tagColor: 'from-amber-400 to-orange-500',
    definition:
      'Hành vi doanh nghiệp đưa ra thông tin sai lệch hoặc phóng đại về mức độ thân thiện với môi trường của sản phẩm, dịch vụ hoặc chính sách nhằm đánh lừa người tiêu dùng và nhà đầu tư. Doanh nghiệp chi nhiều tiền cho PR \"xanh\" hơn là thực sự bảo vệ môi trường.',
    example:
      'Một hãng thời trang dán nhãn \"Eco-friendly\" cho một bộ sưu tập nhỏ, nhưng 95% sản phẩm còn lại vẫn sản xuất bằng công nghệ xả hóa chất độc hại ra sông ngòi.',
    keyHighlight: 'Chi tiền PR \"xanh\" nhiều hơn hành động thực chất',
  },
  {
    id: 'term-2',
    number: 2,
    termEn: 'SDG-washing',
    termVi: 'Làm màu mục tiêu PTBV',
    category: 'washing',
    categoryLabel: 'Tẩy xanh & Làm màu',
    tagColor: 'from-rose-400 to-pink-500',
    definition:
      'Hành vi gắn mác 17 mục tiêu SDG vào các hoạt động từ thiện (CSR) truyền thống hoặc hoạt động kinh doanh có sẵn chỉ để đánh bóng tên tuổi. Thường mắc lỗi \"Cherry-picking\" (hái anh đào): chỉ báo cáo SDG dễ đạt mà phớt lờ các tác động tiêu cực.',
    example:
      'Doanh nghiệp tặng quà xây trường để nhận chứng nhận SDG 4, nhưng nhà máy của họ vẫn xả thải gây bệnh cho người dân (vi phạm nghiêm trọng SDG 3 & 6).',
    keyHighlight: 'Lỗi \"Cherry-picking\" — chọn báo cáo cái tốt, giấu cái xấu',
  },
  {
    id: 'term-3',
    number: 3,
    termEn: 'Bluewashing',
    termVi: 'Tẩy xanh dương',
    category: 'washing',
    categoryLabel: 'Tẩy xanh & Làm màu',
    tagColor: 'from-blue-400 to-cyan-500',
    definition:
      'Thuật ngữ chỉ việc doanh nghiệp ký kết tham gia Mạng lưới Hiệp ước Toàn cầu của LHQ (UN Global Compact) để gắn logo UN lên website và tài liệu, nhưng thực tế không tuân thủ 10 nguyên tắc cốt lõi về nhân quyền, lao động và chống tham nhũng.',
    example:
      'Doanh nghiệp treo logo UN Global Compact để tạo vỏ bọc uy tín với nhà đầu tư ngoại trong khi vẫn chèn ép lương của công nhân chuỗi cung ứng.',
    keyHighlight: 'Mượn danh nghĩa logo Liên Hợp Quốc nhưng không tuân thủ nguyên tắc',
  },
  {
    id: 'term-4',
    number: 4,
    termEn: 'CSR vs. CSV',
    termVi: 'Trách nhiệm Xã hội vs. Tạo Giá trị Chung',
    category: 'business',
    categoryLabel: 'Chiến lược Doanh nghiệp',
    tagColor: 'from-emerald-400 to-teal-500',
    definition:
      'CSR (Corporate Social Responsibility): Mang tính từ thiện, trích lợi nhuận đi làm thiện nguyện, nằm ngoài hoạt động kinh doanh cốt lõi.\nCSV (Creating Shared Value): Lồng ghép giải quyết vấn đề xã hội vào chính mô hình kinh doanh cốt lõi; giá trị cho cộng đồng cũng là lợi thế cạnh tranh mang lại lợi nhuận.',
    example:
      'Nestlé đào tạo kỹ thuật cho nông dân Tây Nguyên trồng cà phê bền vững -> Nông dân có thu nhập cao (SDG 1, 4) -> Nestlé có nguồn nguyên liệu chất lượng cao xuất khẩu (SDG 8, 12).',
    keyHighlight: 'CSR = Cho con cá; CSV = Cho cần câu và cùng tạo chuỗi giá trị',
  },
  {
    id: 'term-5',
    number: 5,
    termEn: 'ESG',
    termVi: 'Môi trường, Xã hội, Quản trị (Environmental, Social, Governance)',
    category: 'business',
    categoryLabel: 'Chiến lược Doanh nghiệp',
    tagColor: 'from-violet-400 to-purple-500',
    definition:
      'Bộ 3 tiêu chuẩn đo lường tính bền vững và tác động đạo đức của doanh nghiệp, thường được các quỹ đầu tư tài chính sử dụng để định giá rủi ro phi tài chính. Trong đó, SDG 3 và SDG 4 thuộc trụ cột S (Social).',
    example:
      'Doanh nghiệp có điểm ESG cao sẽ tiếp cận được các nguồn vốn xanh (Green Bonds) với lãi suất ưu đãi từ các ngân hàng quốc tế.',
    keyHighlight: 'SDG 3 & SDG 4 nằm tại trọng tâm trụ cột S (Xã hội)',
  },
  {
    id: 'term-6',
    number: 6,
    termEn: 'Net Zero',
    termVi: 'Phát thải ròng bằng 0 (Cam kết SBTi)',
    category: 'business',
    categoryLabel: 'Chiến lược Doanh nghiệp',
    tagColor: 'from-teal-400 to-green-500',
    definition:
      'Trạng thái mà lượng khí nhà kính doanh nghiệp thải ra được cân bằng hoàn toàn bởi lượng khí thải được hấp thụ hoặc loại bỏ khỏi khí quyển (thường mốc 2050 theo Hiệp định Paris). Vinamilk là case study áp dụng Net Zero để giải quyết Trade-off công nghiệp sữa và sức khỏe.',
    example:
      'Vinamilk đạt chứng nhận Trung hòa Carbon PAS 2060 cho 3 đơn vị và cam kết SBTi cắt giảm 55% phát thải khí nhà kính vào năm 2035.',
    keyHighlight: 'Cân bằng tuyệt đối phát thải — giải quyết Trade-off Target 3.9',
  },
  {
    id: 'term-7',
    number: 7,
    termEn: 'DALYs',
    termVi: 'Năm sống điều chỉnh theo tàn tật (Disability-Adjusted Life Years)',
    category: 'sdg',
    categoryLabel: 'Chuyên môn SDG 3 & 4',
    tagColor: 'from-emerald-400 to-teal-400',
    definition:
      'Thước đo tổng hợp gánh nặng bệnh tật của WHO: DALYs = YLL (Số năm mất do chết sớm) + YLD (Số năm sống chung với bệnh tật/tàn phế). 1 DALY = 1 năm sống hoàn toàn khỏe mạnh bị mất đi.',
    example:
      'Bệnh không lây nhiễm (NCDs) chiếm hơn 70% tổng gánh nặng DALYs tại Việt Nam, gây thiệt hại nghiêm trọng cho năng suất lao động.',
    keyHighlight: 'Công thức học thuật chuẩn: DALYs = YLL + YLD',
  },
  {
    id: 'term-8',
    number: 8,
    termEn: 'NCDs',
    termVi: 'Bệnh không lây nhiễm (Non-Communicable Diseases)',
    category: 'sdg',
    categoryLabel: 'Chuyên môn SDG 3 & 4',
    tagColor: 'from-rose-400 to-red-500',
    definition:
      'Các bệnh mãn tính không lây từ người sang người (tim mạch, ung thư, đái tháo đường, bệnh phổi tắc nghẽn mãn tính). Là nguyên nhân tử vong số 1 tại Việt Nam (chiếm ~80% ca tử vong) và là thách thức sống còn của Target 3.4.',
    example:
      'Mỗi năm Việt Nam có hơn 380.000 ca tử vong do NCDs, phần lớn bắt nguồn từ thói quen ăn uống, lối sống và ô nhiễm không khí.',
    keyHighlight: 'Nguyên nhân tử vong số 1 tại VN (~80%) — Trọng tâm Target 3.4',
  },
  {
    id: 'term-9',
    number: 9,
    termEn: 'Khủng hoảng học tập',
    termVi: 'Learning Crisis — Đến trường nhưng không học được',
    category: 'sdg',
    categoryLabel: 'Chuyên môn SDG 3 & 4',
    tagColor: 'from-amber-400 to-yellow-500',
    definition:
      'Nghịch lý của SDG 4: Tỷ lệ nhập học và hoàn thành tiểu học rất cao (>87%), nhưng học sinh lại không đạt được kỹ năng đọc hiểu và tính toán tối thiểu. Hơn 300 triệu học sinh tốt nghiệp nhưng mù chữ chức năng.',
    example:
      'Đại dịch COVID-19 làm trầm trọng thêm khủng hoảng này, khiến 4/5 quốc gia bị tụt hậu kỹ năng đọc và tính toán cơ bản.',
    keyHighlight: 'Điểm danh đến trường ≠ Tiếp thu được kiến thức thực chất',
  },
  {
    id: 'term-10',
    number: 10,
    termEn: 'Khoảng cách số hóa',
    termVi: 'Digital Divide & Cognitive Divide',
    category: 'sdg',
    categoryLabel: 'Chuyên môn SDG 3 & 4',
    tagColor: 'from-cyan-400 to-blue-500',
    definition:
      'Sự bất bình đẳng sâu sắc trong việc tiếp cận công nghệ thông tin (thiết bị máy tính, mạng Internet tốc độ cao). Trong giáo dục, khoảng cách số kéo theo khoảng cách nhận thức, khiến học sinh vùng sâu vùng xa bị loại khỏi nền kinh tế tri thức.',
    example:
      'Tại các quốc gia thu nhập thấp, chỉ 1/4 trường tiểu học có điện và internet, khiến học sinh nông thôn hoàn thành THPT chỉ bằng 76% thành thị.',
    keyHighlight: 'Bất bình đẳng hạ tầng số tạo nên hố sâu bất bình đẳng nhận thức',
  },
  {
    id: 'term-11',
    number: 11,
    termEn: 'Mô hình Bánh Cưới',
    termVi: 'Wedding Cake Model (Stockholm Resilience Centre)',
    category: 'sdg',
    categoryLabel: 'Chuyên môn SDG 3 & 4',
    tagColor: 'from-fuchsia-400 to-purple-500',
    definition:
      'Mô hình sắp xếp 17 mục tiêu SDG thành 3 tầng phân cấp có điều kiện: Tầng đáy (Sinh quyển/Biosphere) -> Tầng giữa (Xã hội/Society - chứa SDG 3 & 4) -> Tầng đỉnh (Kinh tế/Economy). Tầng trên phải phục vụ và nằm trong giới hạn an toàn của tầng dưới.',
    example:
      'SDG 3 và SDG 4 thuộc tầng Xã hội: nuôi dưỡng Nguồn vốn con người (Human Capital) để vận hành nền kinh tế bền vững.',
    keyHighlight: 'Kinh tế phục vụ Xã hội, Xã hội vận hành trong giới hạn Sinh quyển',
  },
];

const DEFENSE_QA_DATA: DefenseQA[] = [
  {
    id: 'qa-1',
    questionNumber: 1,
    question:
      '\"Các em nói Vinamilk/Nestlé làm SDG 3 và SDG 4 rất tốt. Làm sao chứng minh họ không phải đang làm SDG-washing / Greenwashing để PR bán hàng?\"',
    context: 'Câu hỏi bẫy kinh điển của Giảng viên về tính thực chất của CSR Doanh nghiệp',
    shortAnswer:
      'Chứng minh bằng 3 tiêu chí đo lường thực chất: Tính cốt lõi (CSV), Kiểm toán bên thứ 3 (SBTi/FSSC) và Dám đầu tư đối mặt Trade-off.',
    bulletPoints: [
      {
        title: '1. Tính cốt lõi (Mô hình CSV thay vì CSR từ thiện):',
        content:
          'Nestlé không trích tiền đi phát gạo từ thiện để PR. Họ lồng ghép đào tạo thanh niên và nông dân (SDG 4) trực tiếp vào chuỗi cung ứng tuyển dụng và thu mua. Đào tạo để nâng chuẩn hạt cà phê xuất khẩu — đó là Tạo giá trị chung (CSV) gắn liền với lợi nhuận dài hạn.',
      },
      {
        title: '2. Sự kiểm chứng độc lập của bên thứ ba:',
        content:
          'Vinamilk không tự dán nhãn xanh. Lộ trình Net Zero 2050 của họ được tổ chức quốc tế SBTi (Science Based Targets initiative) kiểm toán khoa học; các nhà máy đạt chứng nhận trung hòa carbon quốc tế PAS 2060 và chuẩn an toàn thực phẩm FSSC 22000.',
      },
      {
        title: '3. Dám đối mặt với bài toán Đánh đổi (Trade-off):',
        content:
          'Doanh nghiệp làm màu thường che giấu ô nhiễm. Vinamilk công khai đối mặt với tác động môi trường của chăn nuôi bò sữa bằng việc rót hàng nghìn tỷ đồng đầu tư hệ thống Biogas tuần hoàn khép kín và điện mặt trời mái nhà để giải quyết Target 3.9.',
      },
    ],
    summaryNote:
      'Kết luận: Khi bền vững gắn liền với mô hình kinh doanh cốt lõi (CSV) và có chứng nhận độc lập, đó là chiến lược phát triển bền vững thực chất, không phải làm màu.',
  },
  {
    id: 'qa-2',
    questionNumber: 2,
    question:
      '\"Tại sao lại ghép SDG 3 (Sức khỏe) và SDG 4 (Giáo dục) vào chung một bài thuyết trình? Hai mục tiêu này liên quan gì đến Quản trị kinh doanh?\"',
    context: 'Câu hỏi bẫy về mối liên hệ hệ thống (Nexus) và tính ứng dụng quản trị',
    shortAnswer:
      'SDG 3 & 4 là hai trụ cột tạo nên Nguồn vốn con người (Human Capital) — tài sản vô giá cấu thành 2/3 chỉ số HDI và quyết định năng suất doanh nghiệp.',
    bulletPoints: [
      {
        title: '1. Tính liên kết vòng lặp tương hỗ (The Nexus Loop):',
        content:
          'Giáo dục (SDG 4) cung cấp tri thức để phòng bệnh và giữ gìn vệ sinh (SDG 3). Ngược lại, sức khỏe và dinh dưỡng tốt là điều kiện tiên quyết để trẻ em có thể đến trường và tiếp thu kiến thức. Không thể có nền giáo dục chất lượng trên một thể trạng ốm yếu.',
      },
      {
        title: '2. Cấu thành 2/3 Chỉ số Phát triển Con người (HDI):',
        content:
          'Chỉ số HDI quốc gia gồm 3 trụ cột: Sức khỏe (Tuổi thọ) + Giáo dục (EYS & MYS) + Thu nhập (GNI). SDG 3 và 4 chiếm tới 2/3 chỉ số này, khẳng định con người là mục tiêu tối thượng của sự phát triển chứ không phải tăng trưởng GDP đơn thuần.',
      },
      {
        title: '3. Góc độ Quản trị Kinh doanh & Chuỗi cung ứng:',
        content:
          'Nguồn lao động có học vấn và thể lực tốt là tài sản sống còn của doanh nghiệp. Đầu tư vào sức khỏe và giáo dục công nhân chính là bảo vệ năng suất, giảm tỷ lệ nghỉ việc và mở rộng tầng lớp tiêu dùng văn minh cho sản phẩm của doanh nghiệp.',
      },
    ],
    summaryNote:
      'Kết luận: Doanh nghiệp không thể phát triển thịnh vượng trong một xã hội bệnh tật và thất học. Đầu tư vào SDG 3 và 4 là khoản đầu tư chiến lược bảo vệ chuỗi cung ứng con người.',
  },
];

interface GlossaryAndQASlideProps {
  onGoToSlide?: (slideNum: number) => void;
}

export const GlossaryAndQASlide: React.FC<GlossaryAndQASlideProps> = ({ onGoToSlide }) => {
  const [activeTab, setActiveTab] = useState<'glossary' | 'qa'>('glossary');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'washing' | 'business' | 'sdg'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredTerms = GLOSSARY_TERMS.filter((term) => {
    const matchesCat = selectedCategory === 'all' || term.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      term.termEn.toLowerCase().includes(q) ||
      term.termVi.toLowerCase().includes(q) ||
      term.definition.toLowerCase().includes(q) ||
      (term.example && term.example.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex flex-col flex-1 my-auto justify-center max-w-7xl 2xl:max-w-[1600px] mx-auto w-full px-2 sm:px-4 py-2">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-3 pb-2.5 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="liquid-glass rounded-full px-3 py-0.5 text-xs font-mono text-amber-300 font-semibold uppercase tracking-wider flex items-center gap-1.5 border border-amber-400/30">
              <SparklesIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>Slide 26 • Phụ Lục Chuyên Môn & Kịch Bản Bảo Vệ</span>
            </span>
            <span className="liquid-glass rounded-full px-2.5 py-0.5 text-xs font-mono text-emerald-300 font-bold border border-emerald-400/30">
              UEH • PTBV
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading italic text-white tracking-tight">
            Từ Điển Thuật Ngữ & Kịch Bản Phản Biện Q&A
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light mt-0.5">
            Cẩm nang 11 thuật ngữ cốt lõi & 2 kịch bản hóa giải các \"câu hỏi bẫy\" thường gặp của Hội đồng giảng viên
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2">
          <div className="liquid-glass p-1 rounded-xl flex items-center gap-1 border border-white/10">
            <button
              type="button"
              onClick={() => setActiveTab('glossary')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'glossary'
                  ? 'bg-amber-400/25 text-amber-300 border border-amber-400/40 shadow'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              📖 11 Thuật Ngữ Cốt Lõi
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('qa')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'qa'
                  ? 'bg-emerald-400/25 text-emerald-300 border border-emerald-400/40 shadow'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              🎯 Kịch Bản Q&A Phản Biện
            </button>
          </div>
        </div>
      </div>

      {/* Content based on Active Tab */}
      {activeTab === 'glossary' ? (
        <div>
          {/* Filter and Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 mb-3">
            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
              {[
                { key: 'all', label: 'Tất cả (11)' },
                { key: 'washing', label: 'Tẩy xanh & Làm màu' },
                { key: 'business', label: 'Chiến lược CSV/ESG' },
                { key: 'sdg', label: 'Chuyên môn SDG 3 & 4' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setSelectedCategory(tab.key as any)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer border ${
                    selectedCategory === tab.key
                      ? 'bg-white/15 text-white border-emerald-400/50 shadow'
                      : 'text-white/60 border-white/5 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="w-full sm:w-64 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm thuật ngữ, DALYs, Net Zero..."
                className="w-full liquid-glass rounded-xl px-3 py-1.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-amber-400/60 border border-white/10"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1.5 text-white/50 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Grid of Terms: Compact, readable on F11 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[58vh] overflow-y-auto pr-1 custom-scrollbar">
            {filteredTerms.map((term) => (
              <motion.div
                key={term.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="liquid-glass rounded-2xl p-3.5 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-2">
                    <span className="font-mono text-[10px] text-white/40">#{term.number < 10 ? `0${term.number}` : term.number}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70">
                      {term.categoryLabel}
                    </span>
                  </div>

                  <div className="mb-2">
                    <h3 className="text-base sm:text-lg font-heading font-bold text-white tracking-tight">
                      {term.termEn}
                    </h3>
                    <div className="text-xs font-medium text-amber-300/90">{term.termVi}</div>
                  </div>

                  <p className="text-xs text-white/80 leading-relaxed font-light mb-2.5">
                    {term.definition}
                  </p>

                  {term.example && (
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[11px] text-white/70 mb-2">
                      <span className="text-emerald-300 font-semibold font-mono">Ví dụ: </span>
                      <span>{term.example}</span>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2 text-[10px]">
                  <span className="font-mono text-amber-300/80 truncate">
                    💡 {term.keyHighlight}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(term.id, `${term.termEn} (${term.termVi}): ${term.definition}`)}
                    className="liquid-glass px-2 py-0.5 rounded text-white/60 hover:text-white cursor-pointer hover:border-emerald-400/40 flex-shrink-0"
                    title="Sao chép định nghĩa"
                  >
                    {copiedId === term.id ? '✓ Đã chép' : 'Chép'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        /* TAB 2: DEFENSE Q&A SCENARIOS */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-h-[62vh] overflow-y-auto pr-1 custom-scrollbar my-auto">
          {DEFENSE_QA_DATA.map((qa) => (
            <motion.div
              key={qa.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="liquid-glass-strong rounded-2xl p-4 sm:p-5 border border-emerald-500/30 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Question Badge */}
                <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-white/10">
                  <span className="liquid-glass rounded-full px-3 py-1 text-xs font-mono font-bold text-amber-300 border border-amber-400/40 flex items-center gap-1.5">
                    <span>❓</span>
                    <span>CÂU HỎI BẪY SỐ 0{qa.questionNumber}</span>
                  </span>
                  <span className="text-[11px] font-mono text-emerald-300">{qa.context}</span>
                </div>

                {/* Question Text */}
                <h3 className="text-base sm:text-lg font-heading italic text-white font-semibold mb-3 leading-snug text-amber-200/90">
                  {qa.question}
                </h3>

                {/* Short core answer */}
                <div className="liquid-glass rounded-xl p-3 border border-emerald-400/30 bg-emerald-500/10 mb-3 text-xs sm:text-sm text-emerald-200">
                  <span className="font-bold text-emerald-300">💡 Chiến thuật cốt lõi: </span>
                  <span>{qa.shortAnswer}</span>
                </div>

                {/* Detailed 3 Bullet Points */}
                <div className="space-y-2 mb-3">
                  {qa.bulletPoints.map((bp, bpIdx) => (
                    <div key={bpIdx} className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/85">
                      <div className="font-semibold text-white mb-0.5 flex items-center gap-1.5 text-amber-300">
                        <span>{bp.title}</span>
                      </div>
                      <p className="font-light leading-relaxed pl-1">{bp.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary Conclusion Box */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 text-xs">
                <span className="text-white/60 font-light italic truncate">
                  {qa.summaryNote}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(qa.id, `${qa.question}\n${qa.bulletPoints.map((b) => b.title + ' ' + b.content).join('\n')}`)}
                  className="liquid-glass px-3 py-1 rounded-full text-emerald-300 hover:text-white cursor-pointer border border-emerald-400/30 text-xs flex-shrink-0"
                >
                  {copiedId === qa.id ? '✓ Đã chép kịch bản' : 'Sao chép kịch bản'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Bottom bar */}
      <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
        <div className="text-xs text-white/60 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Tài liệu phục vụ phản biện: 11 Thuật ngữ • 2 Kịch bản bảo vệ A+</span>
        </div>

        <div className="flex items-center gap-2">
          {onGoToSlide && (
            <>
              <button
                type="button"
                onClick={() => onGoToSlide(25)}
                className="liquid-glass rounded-xl px-3 py-1.5 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                <span>← Trích nguồn (Slide 25)</span>
              </button>
              <button
                type="button"
                onClick={() => onGoToSlide(27)}
                className="liquid-glass-strong rounded-xl px-4 py-1.5 text-xs sm:text-sm font-medium text-white flex items-center gap-2 hover:brightness-125 transition-all cursor-pointer border border-emerald-400/40 shadow-lg hover:scale-105"
              >
                <span>Đến Minigame Trắc Nghiệm (Slide 27)</span>
                <span className="text-emerald-400 font-bold">→</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
