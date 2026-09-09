import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesIcon } from '../Icons';

export interface QuizQuestion {
  id: string;
  number: number;
  theme: string;
  themeCategory: 'sdg3' | 'sdg4' | 'framework' | 'business';
  question: string;
  options: { key: 'A' | 'B' | 'C' | 'D'; text: string }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  correctAnswerText: string;
  explanation: string;
}

const QUIZ_DATA: QuizQuestion[] = [
  {
    id: 'q-1',
    number: 1,
    theme: 'Khung Lý Thuyết',
    themeCategory: 'framework',
    question:
      'Trong Mô hình \"Bánh Cưới\" (Wedding Cake Model) của Viện Phục hồi Stockholm (SRC), SDG 3 (Sức khỏe) và SDG 4 (Giáo dục) được xếp ở tầng nào?',
    options: [
      { key: 'A', text: 'Tầng Sinh quyển (Biosphere tier)' },
      { key: 'B', text: 'Tầng Xã hội (Society tier)' },
      { key: 'C', text: 'Tầng Kinh tế (Economy tier)' },
      { key: 'D', text: 'Tầng Thể chế và Đối tác (Partnership tier)' },
    ],
    correctKey: 'B',
    correctAnswerText: 'B. Tầng Xã hội (Society tier)',
    explanation:
      'Cả SDG 3 và 4 đều thuộc tầng Xã hội – đóng vai trò nuôi dưỡng \"vốn con người\" (human capital) làm nền tảng bắt buộc để tầng Kinh tế có thể vận hành ổn định mà không phá vỡ giới hạn an toàn của Sinh quyển.',
  },
  {
    id: 'q-2',
    number: 2,
    theme: 'Thước Đo Học Thuật',
    themeCategory: 'sdg3',
    question:
      'Thước đo DALYs (Disability-Adjusted Life Years) trong đánh giá gánh nặng bệnh tật của WHO được tính bằng công thức nào?',
    options: [
      { key: 'A', text: 'DALYs = GDP bình quân / Tuổi thọ trung bình' },
      { key: 'B', text: 'DALYs = YLL (Số năm mất do chết sớm) + YLD (Số năm sống chung với tàn tật)' },
      { key: 'C', text: 'DALYs = Tỷ lệ tử vong thô - Tỷ lệ sinh thô' },
      { key: 'D', text: 'DALYs = Chỉ số Sức khỏe × Chỉ số Giáo dục' },
    ],
    correctKey: 'B',
    correctAnswerText: 'B. DALYs = YLL (Năm chết sớm) + YLD (Năm sống cùng tàn tật)',
    explanation:
      '1 DALY tương đương với việc mất đi 1 năm sống hoàn toàn khỏe mạnh. Thước đo này toàn diện vì phản ánh cả sự tử vong sớm (YLL) và tình trạng suy giảm năng suất do tàn tật/bệnh mạn tính (YLD).',
  },
  {
    id: 'q-3',
    number: 3,
    theme: 'Chỉ Tiêu SDG 3',
    themeCategory: 'sdg3',
    question:
      'Theo chuẩn Nghị quyết của Liên Hợp Quốc, chỉ tiêu giảm tỷ lệ tử vong bà mẹ toàn cầu (Target 3.1) đặt mục tiêu đến năm 2030 là bao nhiêu?',
    options: [
      { key: 'A', text: 'Dưới 25 trên 100.000 ca sinh sống' },
      { key: 'B', text: 'Dưới 50 trên 100.000 ca sinh sống' },
      { key: 'C', text: 'Dưới 70 trên 100.000 ca sinh sống' },
      { key: 'D', text: 'Dưới 100 trên 100.000 ca sinh sống' },
    ],
    correctKey: 'C',
    correctAnswerText: 'C. Dưới 70 trên 100.000 ca sinh sống',
    explanation:
      'Mục tiêu 3.1 là giảm tỷ số tử vong mẹ xuống dưới 70/100.000 ca sinh. Tuy nhiên, theo Báo cáo UN Stats mới nhất, thực trạng toàn cầu năm 2020 vẫn ở mức 223/100.000 (gấp hơn 3 lần mục tiêu).',
  },
  {
    id: 'q-4',
    number: 4,
    theme: 'Thực Trạng UN Stats',
    themeCategory: 'sdg3',
    question:
      'Theo Báo cáo The Sustainable Development Goals Report 2023, cuộc khủng hoảng nào sau đại dịch COVID-19 được đánh giá là \"mức giảm lớn nhất trong gần 30 năm qua\" của SDG 3?',
    options: [
      { key: 'A', text: 'Tỷ lệ hoàn thành tiểu học ở trẻ em gái' },
      { key: 'B', text: 'Tỷ lệ tiêm chủng vắc-xin 3 liều DTP3 ở trẻ em (giảm 5% xuống còn 81%)' },
      { key: 'C', text: 'Tỷ lệ bác sĩ phẫu thuật tại các bệnh viện công' },
      { key: 'D', text: 'Tỷ lệ tiếp cận nước sạch ở nông thôn' },
    ],
    correctKey: 'B',
    correctAnswerText: 'B. Tỷ lệ tiêm chủng vắc-xin 3 liều DTP3 ở trẻ em',
    explanation:
      'Tỷ lệ bao phủ vắc-xin DTP3 sụt giảm xuống 81% khiến 25 triệu trẻ em bỏ lỡ tiêm chủng vào năm 2021, đánh dấu đợt suy thoái tiêm chủng diện rộng nghiêm trọng nhất trong 3 thập kỷ.',
  },
  {
    id: 'q-5',
    number: 5,
    theme: 'Chỉ Tiêu Chuẩn UN',
    themeCategory: 'sdg3',
    question:
      'Trong khung chuẩn 13 chỉ tiêu của Liên Hợp Quốc, chỉ tiêu \"Bảo hiểm y tế toàn dân (Universal Health Coverage - UHC)\" thực chất là chỉ tiêu số mấy?',
    options: [
      { key: 'A', text: 'Target 3.1' },
      { key: 'B', text: 'Target 3.5' },
      { key: 'C', text: 'Target 3.8' },
      { key: 'D', text: 'Target 3.9' },
    ],
    correctKey: 'C',
    correctAnswerText: 'C. Target 3.8',
    explanation:
      'Chuẩn UN quy định UHC là Target 3.8. Trong slide tóm tắt của UN Global Compact Blueprint, do chọn lọc 6 mục tiêu doanh nghiệp nên UHC bị đánh số lại thành 3.5. Nhóm cần nắm vững điều này để không bị nhầm lẫn khi phản biện.',
  },
  {
    id: 'q-6',
    number: 6,
    theme: 'Tính Liên Kết Nexus',
    themeCategory: 'sdg3',
    question:
      'Trên biểu đồ bánh xe liên kết (Nexus Wheel) của SDG 3, vì sao SDG 15 (Hệ sinh thái trên cạn) lại có mối quan hệ \"Tương hỗ MẠNH\" (Strong Positive) với Sức khỏe?',
    options: [
      { key: 'A', text: 'Vì gỗ rừng được dùng để xây dựng các trạm xá y tế' },
      { key: 'B', text: 'Vì rừng là \"vùng đệm sinh học\" ngăn chặn bệnh truyền nhiễm lây từ động vật sang người và cung cấp dược liệu tự nhiên' },
      { key: 'C', text: 'Vì thú rừng là nguồn cung cấp protein duy nhất cho bệnh nhân' },
      { key: 'D', text: 'Vì đất nông nghiệp trên cạn giúp các công ty dược bán phân bón' },
    ],
    correctKey: 'B',
    correctAnswerText: 'B. Rừng là vùng đệm sinh học ngăn chặn bệnh truyền nhiễm và cung cấp dược liệu tự nhiên',
    explanation:
      'Hơn 75% dịch bệnh mới nổi (COVID-19, Ebola, SARS) bắt nguồn từ động vật. Phá rừng làm vỡ lá chắn sinh thái, khiến mầm bệnh lây sang người. Đồng thời, 70% hoạt chất làm thuốc ung thư bắt nguồn từ hệ thực vật tự nhiên.',
  },
  {
    id: 'q-7',
    number: 7,
    theme: 'Tính Liên Kết Nexus',
    themeCategory: 'sdg3',
    question:
      'Tại sao trên biểu đồ Nexus Wheel của SDG 3, mục tiêu SDG 10 (Giảm bất bình đẳng) và SDG 17 (Quan hệ đối tác) lại KHÔNG có đường nối trực tiếp?',
    options: [
      { key: 'A', text: 'Vì sức khỏe hoàn toàn không liên quan đến bất bình đẳng và đối tác quốc tế' },
      { key: 'B', text: 'Vì Liên Hợp Quốc vẽ thiếu đường nối trên bản in' },
      { key: 'C', text: 'Vì SDG 10 là vấn đề cấu trúc xuyên suốt tác động gián tiếp, còn SDG 17 là phương thức thực thi bao trùm toàn bộ 16 mục tiêu' },
      { key: 'D', text: 'Vì hai mục tiêu này đã hoàn thành trước năm 2020' },
    ],
    correctKey: 'C',
    correctAnswerText: 'C. SDG 10 là vấn đề cấu trúc xuyên suốt, còn SDG 17 là phương thức thực thi bao trùm',
    explanation:
      'SDG 10 tác động đến sức khỏe qua các khâu trung gian (thu nhập, học vấn, việc làm), nếu nối trực tiếp sẽ gây trùng lặp đa cộng tuyến. SDG 17 là phương thức phổ quát nền tảng cho mọi mục tiêu nên không vẽ đường đơn lẻ.',
  },
  {
    id: 'q-8',
    number: 8,
    theme: 'Thực Trạng SDG 4',
    themeCategory: 'sdg4',
    question:
      'Theo Báo cáo UN Stats 2023, nghịch lý lớn nhất của \"Khủng hoảng học tập\" (Learning Crisis) toàn cầu hiện nay là gì?',
    options: [
      { key: 'A', text: 'Học sinh có quá nhiều sách vở nhưng không có cặp đi học' },
      { key: 'B', text: 'Tỷ lệ hoàn thành tiểu học đạt 87%, nhưng dự báo năm 2030 vẫn có 84 triệu trẻ thất học và 300 triệu học sinh thiếu kỹ năng đọc hiểu/toán cơ bản' },
      { key: 'C', text: 'Học phí đại học giảm nhưng không ai muốn đăng ký học' },
      { key: 'D', text: 'Mọi trường học đều có máy tính bảng nhưng giáo viên không có phấn viết' },
    ],
    correctKey: 'B',
    correctAnswerText: 'B. Hoàn thành tiểu học 87% nhưng 84M trẻ thất học & 300M thiếu kỹ năng cơ bản vào 2030',
    explanation:
      'Nghịch lý của SDG 4 là \"đến trường không đồng nghĩa với học được kiến thức\". Đại dịch gây sụt giảm học tập ở 4/5 quốc gia, khiến hàng trăm triệu trẻ tốt nghiệp nhưng không có kỹ năng tính toán và đọc hiểu cơ bản.',
  },
  {
    id: 'q-9',
    number: 9,
    theme: 'Rào Cản Bất Bình Đẳng',
    themeCategory: 'sdg4',
    question:
      'Theo Bài giảng 3A và Báo cáo UN Stats, sự bất bình đẳng hệ thống trong giáo dục giữa nhóm 20% giàu nhất và 20% nghèo nhất diễn ra như thế nào khi học sinh lên cấp học cao hơn?',
    options: [
      { key: 'A', text: 'Khoảng cách thu hẹp dần và đạt bình đẳng ở bậc Đại học' },
      { key: 'B', text: 'Tỷ số bình đẳng giảm mạnh từ 0,91 ở bậc Tiểu học xuống chỉ còn 0,34 ở bậc Trung học phổ thông (THPT)' },
      { key: 'C', text: 'Giữ nguyên không thay đổi ở mức 0,5 qua mọi cấp học' },
      { key: 'D', text: 'Nhóm học sinh nghèo có tỷ lệ tốt nghiệp cao hơn nhóm học sinh giàu' },
    ],
    correctKey: 'B',
    correctAnswerText: 'B. Tỷ số bình đẳng giảm mạnh từ 0,91 ở Tiểu học xuống 0,34 ở THPT',
    explanation:
      'Càng lên cấp học cao, gánh nặng chi phí cơ hội và kinh tế càng đẩy học sinh nghèo ra khỏi nhà trường. Trẻ em nông thôn hoàn thành THPT cũng chỉ bằng 76% so với trẻ em thành thị.',
  },
  {
    id: 'q-10',
    number: 10,
    theme: 'Phương Tiện Thực Hiện',
    themeCategory: 'sdg4',
    question:
      'Nhóm chỉ tiêu \"Phương tiện thực hiện\" (Means of Implementation) của SDG 4 bao gồm các mã chỉ tiêu nào?',
    options: [
      { key: 'A', text: 'Target 4.1, 4.2, 4.3' },
      { key: 'B', text: 'Target 4.4, 4.5, 4.6, 4.7' },
      { key: 'C', text: 'Target 4.a (Hạ tầng trường học), 4.b (Học bổng quốc tế), 4.c (Đào tạo giáo viên)' },
      { key: 'D', text: 'Target 4.x, 4.y, 4.z' },
    ],
    correctKey: 'C',
    correctAnswerText: 'C. Target 4.a (Hạ tầng), 4.b (Học bổng), 4.c (Giáo viên)',
    explanation:
      'SDG 4 có 10 chỉ tiêu: 7 chỉ tiêu kết quả (4.1–4.7) và 3 chỉ tiêu công cụ thực thi (4.a, 4.b, 4.c). Trong đó 4.a tập trung vào xóa bỏ tình trạng 1/4 trường học thiếu điện nước; 4.c nâng chuẩn 14% giáo viên chưa đạt yêu cầu.',
  },
  {
    id: 'q-11',
    number: 11,
    theme: 'Case Study Doanh Nghiệp',
    themeCategory: 'business',
    question:
      'Trong Case study về SDG 3, Vinamilk đã giải quyết bài toán Đánh đổi (Trade-off) giữa phát triển công nghiệp sữa và ô nhiễm môi trường (Target 3.9) bằng chiến lược nào?',
    options: [
      { key: 'A', text: 'Cắt giảm 50% sản lượng sữa bán ra thị trường' },
      { key: 'B', text: 'Chuyển toàn bộ nhà máy sang nước ngoài sản xuất' },
      { key: 'C', text: 'Cam kết lộ trình Net Zero 2050 theo chuẩn quốc tế SBTi, giảm 55% phát thải khí nhà kính vào 2035' },
      { key: 'D', text: 'Chỉ sử dụng bao bì nilong thông thường để tiết kiệm chi phí' },
    ],
    correctKey: 'C',
    correctAnswerText: 'C. Cam kết lộ trình Net Zero 2050 theo chuẩn SBTi, giảm 55% phát thải vào 2035',
    explanation:
      'Vinamilk tiên phong giải quyết mối đánh đổi môi trường bằng việc trung hòa carbon (đạt chứng nhận PAS 2060 tại 3 cơ sở), bảo vệ chất lượng không khí cho cộng đồng xung quanh.',
  },
  {
    id: 'q-12',
    number: 12,
    theme: 'Case Study Doanh Nghiệp',
    themeCategory: 'business',
    question:
      'Hệ thống CLMRS (Child Labour Monitoring and Remediation System) được Nestlé triển khai trong chuỗi cung ứng ca cao tại Tây Phi đóng góp trực tiếp vào chỉ tiêu nào của SDG 4?',
    options: [
      { key: 'A', text: 'Target 4.3 (Học đại học trực tuyến)' },
      { key: 'B', text: 'Target 4.1 (Đảm bảo hoàn thành giáo dục tiểu học và phổ thông, xóa bỏ lao động trẻ em)' },
      { key: 'C', text: 'Target 4.b (Trao học bổng du học Thụy Sĩ)' },
      { key: 'D', text: 'Target 4.6 (Dạy tin học văn phòng)' },
    ],
    correctKey: 'B',
    correctAnswerText: 'B. Target 4.1 (Hoàn thành giáo dục phổ thông, xóa bỏ lao động trẻ em)',
    explanation:
      'CLMRS giám sát chặt chẽ chuỗi cung ứng, ngăn chặn việc sử dụng lao động trẻ em và trực tiếp hỗ trợ kinh phí sách vở, xây trường học giúp các em quay trở lại lớp học.',
  },
];

interface QuizQuestionsSlideProps {
  onGoToSlide?: (slideNum: number) => void;
}

export const QuizQuestionsSlide: React.FC<QuizQuestionsSlideProps> = ({ onGoToSlide }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [revealedQuestions, setRevealedQuestions] = useState<Record<number, boolean>>({});
  const [filterCategory, setFilterCategory] = useState<'all' | 'framework' | 'sdg3' | 'sdg4' | 'business'>('all');

  const filteredQuestions = QUIZ_DATA.filter(
    (q) => filterCategory === 'all' || q.themeCategory === filterCategory
  );

  const activeQuestion = filteredQuestions[currentQIndex] || filteredQuestions[0] || QUIZ_DATA[0];
  const activeNumber = activeQuestion.number;

  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    setUserAnswers((prev) => ({ ...prev, [activeNumber]: key }));
    setRevealedQuestions((prev) => ({ ...prev, [activeNumber]: true }));
  };

  const handleToggleReveal = () => {
    setRevealedQuestions((prev) => ({ ...prev, [activeNumber]: !prev[activeNumber] }));
  };

  const currentSelectedKey = userAnswers[activeNumber];
  const isRevealed = revealedQuestions[activeNumber];

  return (
    <div className="flex flex-col flex-1 my-auto justify-center max-w-7xl 2xl:max-w-[1600px] mx-auto w-full px-2 sm:px-4 py-2">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-3 pb-2.5 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="liquid-glass rounded-full px-3 py-0.5 text-xs font-mono text-emerald-300 font-semibold uppercase tracking-wider flex items-center gap-1.5 border border-emerald-400/30">
              <SparklesIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>Slide 26 • Bộ Câu Hỏi Trắc Nghiệm & Minigame Kiến Thức</span>
            </span>
            <span className="liquid-glass rounded-full px-2.5 py-0.5 text-xs font-mono text-pink-300 font-bold border border-pink-400/30">
              12 CÂU HỎI HỌC THUẬT
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading italic text-white tracking-tight">
            Minigame Đánh Giá Kiến Thức (SDG 3 & SDG 4)
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light mt-0.5">
            Tương tác bấm chọn đáp án A, B, C, D trực tiếp — Hiển thị ngay kết quả và giải thích chuyên sâu
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { key: 'all', label: 'Tất cả (12)' },
            { key: 'framework', label: 'Khung lý thuyết' },
            { key: 'sdg3', label: 'Chuyên đề SDG 3' },
            { key: 'sdg4', label: 'Chuyên đề SDG 4' },
            { key: 'business', label: 'Doanh nghiệp' },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setFilterCategory(tab.key as any);
                setCurrentQIndex(0);
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer border ${
                filterCategory === tab.key
                  ? 'bg-emerald-400/20 text-emerald-300 border-emerald-400/50 shadow'
                  : 'text-white/60 border-white/10 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Questions Carousel Bar (#1 to #12) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 custom-scrollbar">
        {filteredQuestions.map((q, idx) => {
          const isCurrent = idx === currentQIndex;
          const isAnswered = userAnswers[q.number] !== undefined;
          const isCorrect = userAnswers[q.number] === q.correctKey;

          return (
            <button
              key={q.id}
              type="button"
              onClick={() => setCurrentQIndex(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-1.5 cursor-pointer flex-shrink-0 border ${
                isCurrent
                  ? 'bg-white/25 text-white border-emerald-400 shadow-md scale-105'
                  : isAnswered
                  ? isCorrect
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                  : 'liquid-glass text-white/70 hover:text-white border-white/10'
              }`}
            >
              <span>Câu {q.number}</span>
              {isAnswered && (
                <span className="text-[10px]">
                  {isCorrect ? '✓' : '✗'}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Question & Interactive Options Card */}
      <div className="liquid-glass-strong rounded-3xl p-4 sm:p-6 border border-white/15 shadow-2xl my-auto flex flex-col justify-between">
        <div>
          {/* Question Meta Badge */}
          <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="liquid-glass rounded-full px-3 py-0.5 text-xs font-mono font-bold text-amber-300 border border-amber-400/40">
                CÂU HỎI {activeQuestion.number} / 12
              </span>
              <span className="text-xs font-mono text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-400/30">
                {activeQuestion.theme}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleToggleReveal}
                className="liquid-glass px-3 py-1 rounded-xl text-xs text-white/80 hover:text-white border border-white/15 cursor-pointer hover:border-emerald-400/40"
              >
                {isRevealed ? 'Ẩn đáp án' : 'Hiện đáp án & giải thích'}
              </button>
            </div>
          </div>

          {/* Question Text */}
          <h3 className="text-base sm:text-xl font-heading font-semibold text-white tracking-tight leading-relaxed mb-4">
            {activeQuestion.question}
          </h3>

          {/* 4 Interactive Option Buttons (A, B, C, D) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 mb-4">
            {activeQuestion.options.map((opt) => {
              const isSelected = currentSelectedKey === opt.key;
              const isCorrectOption = activeQuestion.correctKey === opt.key;

              let btnStyle = 'liquid-glass border-white/15 hover:border-emerald-400/40 hover:bg-white/10 text-white/90';
              if (isRevealed) {
                if (isCorrectOption) {
                  btnStyle = 'bg-emerald-500/25 border-2 border-emerald-400 text-white shadow-[0_0_20px_rgba(52,211,153,0.3)] scale-[1.01]';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-500/20 border-2 border-rose-400/60 text-white/80';
                } else {
                  btnStyle = 'liquid-glass border-white/5 opacity-50 text-white/50';
                }
              } else if (isSelected) {
                btnStyle = 'bg-white/20 border-2 border-amber-400 text-white shadow-lg';
              }

              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => handleSelectOption(opt.key)}
                  className={`rounded-2xl p-3 sm:p-3.5 text-left transition-all duration-200 flex items-start gap-3 cursor-pointer ${btnStyle}`}
                >
                  <span
                    className={`w-7 h-7 rounded-xl font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 border ${
                      isRevealed && isCorrectOption
                        ? 'bg-emerald-400 text-black border-emerald-300 font-bold'
                        : isSelected
                        ? 'bg-amber-400 text-black border-amber-300 font-bold'
                        : 'bg-white/10 text-white/80 border-white/20'
                    }`}
                  >
                    {opt.key}
                  </span>
                  <span className="text-xs sm:text-sm font-medium leading-relaxed flex-1">
                    {opt.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Explanation Box (when revealed or answered) */}
          <AnimatePresence>
            {isRevealed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="liquid-glass rounded-2xl p-3.5 border border-emerald-400/40 bg-gradient-to-r from-emerald-500/15 via-transparent to-transparent text-xs sm:text-sm"
              >
                <div className="flex items-center gap-2 font-bold text-emerald-300 mb-1">
                  <span>✓ ĐÁP ÁN ĐÚNG:</span>
                  <span className="text-white underline">{activeQuestion.correctAnswerText}</span>
                </div>
                <p className="text-white/85 font-light leading-relaxed pl-1">
                  <span className="font-semibold text-emerald-300">Giải thích chuyên sâu: </span>
                  {activeQuestion.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Carousel Footer Navigation */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setCurrentQIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentQIndex === 0}
            className="liquid-glass rounded-xl px-4 py-1.5 text-xs font-medium text-white/80 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer"
          >
            <span>← Câu trước</span>
          </button>

          <div className="text-xs font-mono text-white/60 hidden sm:block">
            Bấm chọn A, B, C, D hoặc dùng nút chuyển câu
          </div>

          <button
            type="button"
            onClick={() => setCurrentQIndex((prev) => Math.min(filteredQuestions.length - 1, prev + 1))}
            disabled={currentQIndex >= filteredQuestions.length - 1}
            className="liquid-glass-strong rounded-xl px-4 py-1.5 text-xs font-medium text-white hover:brightness-125 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer border border-emerald-400/30"
          >
            <span>Câu tiếp theo →</span>
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
        <div className="text-xs text-white/60 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Trắc nghiệm 12 câu: SDG 3 (Sức khỏe) & SDG 4 (Giáo dục)</span>
        </div>

        <div className="flex items-center gap-2">
          {onGoToSlide && (
            <>
              <button
                type="button"
                onClick={() => onGoToSlide(25)}
                className="liquid-glass rounded-xl px-3 py-1.5 text-xs text-white/70 hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                <span>← Cẩm nang Thuật ngữ (Slide 25)</span>
              </button>
              <button
                type="button"
                onClick={() => onGoToSlide(23)}
                className="liquid-glass rounded-xl px-3 py-1.5 text-xs text-emerald-300 hover:text-white flex items-center gap-1.5 cursor-pointer border border-emerald-400/30"
              >
                <span>Về Bìa kết (Slide 23)</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
