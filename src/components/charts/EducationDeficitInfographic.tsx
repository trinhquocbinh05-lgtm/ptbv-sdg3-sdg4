import React from 'react';
import { AlertTriangleIcon } from '../Icons';
import { AnimatedNumber, AnimatedProgressBar } from '../AnimatedCounter';

export const EducationDeficitInfographic: React.FC = () => {
  return (
    <div className="liquid-glass rounded-2xl p-5 border border-rose-500/20 shadow-xl">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <AlertTriangleIcon className="w-4 h-4 text-rose-400" />
          <span className="text-xs font-mono font-bold text-rose-300 uppercase tracking-wider">
            Đồ thị Thâm hụt Giáo dục Toàn cầu (Global Education Deficit)
          </span>
        </div>
        <span className="text-[11px] text-white/50">UNESCO & UNICEF 2024</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Metric 1: 84 Million Out of School */}
        <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded-full">
              Khủng hoảng Tiếp cận
            </span>
            <div className="font-heading italic text-3xl sm:text-4xl text-white my-2">
              <AnimatedNumber text="84 Triệu" duration={1300} />
            </div>
            <div className="text-xs font-semibold text-rose-200 mb-1">
              Trẻ em có nguy cơ thất học vào năm 2030
            </div>
            <p className="text-[11px] text-white/70 font-light leading-relaxed">
              Nếu xu hướng hiện tại không đổi, 84 triệu trẻ em và thanh thiếu niên sẽ hoàn toàn không được đến trường.
            </p>
          </div>

          {/* Visual Bar */}
          <div className="mt-3 pt-3 border-t border-rose-500/20 flex items-center justify-between text-[10px] text-rose-300/80">
            <span>Tiến độ thiếu hụt:</span>
            <span className="font-mono font-bold">Báo động Đỏ</span>
          </div>
        </div>

        {/* Metric 2: 1 in 4 Schools lacking clean water */}
        <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full">
              Hạ tầng Thiết yếu
            </span>
            <div className="font-heading italic text-3xl sm:text-4xl text-white my-2">
              <AnimatedNumber text="1 / 4 Trường" duration={1300} />
            </div>
            <div className="text-xs font-semibold text-amber-200 mb-1">
              Thiếu nước sạch & nhà vệ sinh cơ bản
            </div>
            <p className="text-[11px] text-white/70 font-light leading-relaxed">
              25% trường học trên toàn cầu không có nước uống hợp vệ sinh, là rào cản lớn nhất khiến trẻ em gái bỏ học.
            </p>
          </div>

          {/* 4 School Icons Visual */}
          <div className="mt-3 pt-3 border-t border-amber-500/20 flex items-center justify-around text-xs">
            <span className="text-white/40">🏫 Đạt</span>
            <span className="text-white/40">🏫 Đạt</span>
            <span className="text-white/40">🏫 Đạt</span>
            <span className="text-amber-400 font-bold bg-amber-500/20 px-1.5 py-0.5 rounded">🏫 Thiếu</span>
          </div>
        </div>

        {/* Metric 3: 300 Million lacking skills */}
        <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-full">
              Chất lượng Học tập
            </span>
            <div className="font-heading italic text-3xl sm:text-4xl text-white my-2">
              <AnimatedNumber text="300 Triệu" duration={1300} />
            </div>
            <div className="text-xs font-semibold text-purple-200 mb-1">
              Học sinh thiếu kỹ năng đọc & toán cơ bản
            </div>
            <p className="text-[11px] text-white/70 font-light leading-relaxed">
              Dù đã hoàn thành bậc tiểu học, hơn 300 triệu trẻ em vẫn không thể đọc hiểu một đoạn văn đơn giản.
            </p>
          </div>

          {/* Deficit Bar */}
          <div className="mt-3 pt-3 border-t border-purple-500/20">
            <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden">
              <AnimatedProgressBar
                width="60%"
                duration={1.2}
                className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
              />
            </div>
            <div className="flex justify-between text-[10px] text-purple-300 mt-1">
              <span>Tỷ lệ không đạt chuẩn:</span>
              <span className="font-mono font-bold">~<AnimatedNumber text="60%" duration={1200} /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
