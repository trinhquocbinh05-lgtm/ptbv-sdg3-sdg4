#!/usr/bin/env python3
"""
Script to capture all 27 slides from the local presentation app
and compile them into a submission-ready, high-resolution 16:9 widescreen PDF.
"""

import os
import sys
import shutil
import subprocess
import pymupdf

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
BASE_URL = "http://localhost:5173"
TEMP_DIR = r"D:\Project\liquid-glass-agency\.temp_slides"

# Optimal academic presentation sequence:
# Starts with Cover (Slide 2), Team (Slide 3), Content (4-24), References (25), Glossary & QA (26), Quiz (27),
# and closes with Technical Appendix: User & Presentation Guide (Slide 1).
SLIDE_ORDER = [
    2,  # Trang bìa chính thức đề tài (SDG 3 & SDG 4, Nhóm Candy, Lớp 26C3ECO50122002, kèm QR)
    3,  # Phân công & Danh sách 13 thành viên Nhóm 4 CANDY (3 Phân ban)
    4,  # Phần I: SDG 3 Tổng quan & Định hướng
    5,  # Định nghĩa SDG 3 & Khung khái niệm 3Es (Lisa Benton-Short)
    6,  # Thước đo đo lường: DALYs = YLL + YLD, Tuổi thọ LE, HDI Sức khỏe
    7,  # Nhóm mục tiêu chính: Target 3.1 — 3.9
    8,  # Nhóm phương tiện thực hiện: Target 3.a — 3.d
    9,  # Bức tranh toàn cầu I: Tử vong mẹ/bé, Tiêm chủng, Dịch bệnh
    10, # Bức tranh toàn cầu II: Tai nạn giao thông, UHC, NCDs, Nhân lực y tế
    11, # Thực trạng Việt Nam: HDI 0.766, VNeID 34M+, NCDs 80%
    12, # Tính liên kết SDG 3: Hệ sinh thái 17 Mục tiêu SDGs (14 liên kết)
    13, # Vai trò Doanh nghiệp: Vinamilk (3 Hành động & Net Zero)
    14, # Phần II: SDG 4 Tổng quan & Giáo dục chất lượng
    15, # Định nghĩa SDG 4, Trụ cột Equity (3Es) & Mô hình Bánh cưới SDGs
    16, # Thước đo giáo dục: GER vs NER, EYS, MYS, HDI Giáo dục
    17, # Nhóm mục tiêu chính: Target 4.1 — 4.7
    18, # Nhóm phương tiện thực hiện: Target 4.a — 4.c
    19, # Khủng hoảng học tập toàn cầu: 84M trẻ, Hạ tầng 1/4, Giáo viên >14%
    20, # Rào cản cốt lõi: Giới, Số hóa, Bất bình đẳng hệ thống
    21, # Thực trạng & Giải pháp tại Việt Nam (SDG 4)
    22, # Tính liên kết SDG 4: Sơ đồ mạng lưới tương hỗ SDGs (12 liên kết)
    23, # Vai trò Doanh nghiệp: Nestlé (4 Trụ cột giáo dục & tạo giá trị)
    24, # Bìa kết & Lời tri ân (UEH University)
    25, # Danh mục trích nguồn chuẩn APA & Cơ sở dữ liệu (14 trích dẫn)
    26, # Phụ lục Từ điển Thuật ngữ & Kịch bản Phản biện Q&A (11 thuật ngữ & 2 kịch bản)
    27, # Phụ lục Bộ câu hỏi Trắc nghiệm & Minigame 12 câu
    1,  # Phụ lục Kỹ thuật: Cẩm nang Hướng dẫn Trải nghiệm Trình chiếu Tương tác Web (kèm link & QR)
]

DEST_ONEDRIVE = r"D:\OneDrive\UEH nắc tới chết\Phát triển bền vững\Final\Bao_Cao_Thuyet_Trinh_SDG3_SDG4_Nhom4_CANDY.pdf"
DEST_PUBLIC = r"D:\Project\liquid-glass-agency\public\Bao_Cao_Thuyet_Trinh_SDG3_SDG4_Nhom4_CANDY.pdf"
DEST_DIST = r"D:\Project\liquid-glass-agency\dist\Bao_Cao_Thuyet_Trinh_SDG3_SDG4_Nhom4_CANDY.pdf"


def main():
    print("=" * 70)
    print("🚀 BẮT ĐẦU XUẤT BẢN TRÌNH CHIẾU PDF CHUẨN NỘP BÀI UEH (16:9 HD)")
    print("=" * 70)

    if not os.path.exists(CHROME_PATH):
        print(f"❌ Không tìm thấy Chrome tại: {CHROME_PATH}")
        sys.exit(1)

    os.makedirs(TEMP_DIR, exist_ok=True)

    captured_files = []
    total = len(SLIDE_ORDER)

    print(f"\n📸 Đang chụp ảnh {total} slides với độ phân giải 1920x1080...")

    for idx, slide_num in enumerate(SLIDE_ORDER):
        output_png = os.path.join(TEMP_DIR, f"slide_{idx+1:02d}_s{slide_num}.png")
        url = f"{BASE_URL}/#slide={slide_num}&clean=1"

        cmd = [
            CHROME_PATH,
            "--headless=new",
            "--window-size=1920,1080",
            "--virtual-time-budget=2500",
            f"--screenshot={output_png}",
            url,
        ]

        print(f"  [{idx+1:02d}/{total:02d}] Chụp Slide {slide_num:02d} (Trang {idx+1:02d})...", end="", flush=True)
        res = subprocess.run(cmd, capture_output=True, text=True)

        if os.path.exists(output_png) and os.path.getsize(output_png) > 10000:
            size_kb = os.path.getsize(output_png) // 1024
            print(f" -> Thành công ({size_kb} KB)")
            captured_files.append((idx + 1, slide_num, output_png))
        else:
            print(f" -> ⚠️ Lỗi khi chụp! Thử lại...")
            # Retry once with longer budget
            cmd[3] = "--virtual-time-budget=3500"
            subprocess.run(cmd, capture_output=True, text=True)
            if os.path.exists(output_png):
                captured_files.append((idx + 1, slide_num, output_png))
                print(f"  -> Thành công sau khi thử lại")
            else:
                print(f"  -> ❌ Thất bại Slide {slide_num}")

    if len(captured_files) != total:
        print(f"⚠️ Cảnh báo: Chỉ chụp được {len(captured_files)}/{total} slides.")

    print(f"\n📄 Đang biên tập và lắp ghép {len(captured_files)} trang thành file PDF 16:9...")

    doc = pymupdf.open()

    for page_num, slide_num, img_path in captured_files:
        # 16:9 widescreen canvas: 1920 x 1080
        page = doc.new_page(width=1920, height=1080)
        rect = pymupdf.Rect(0, 0, 1920, 1080)
        page.insert_image(rect, filename=img_path)

    doc.set_metadata({
        "title": "Báo Cáo Thuyết Trình Chuyên Đề SDG 3 & SDG 4 - Nhóm 4 CANDY - Lớp 26C3ECO50122002",
        "author": "Nhóm 4 - CANDY (UEH University)",
        "subject": "Phát triển bền vững SDG 3 (Sức khỏe) và SDG 4 (Giáo dục chất lượng)",
        "keywords": "SDG 3, SDG 4, UEH, Phát triển bền vững, DALYs, HDI, 3Es, Bánh cưới SDGs, Vinamilk, Nestlé, Nhóm Candy",
        "creator": "UEH Sustainable Development Presentation System",
    })

    # Save to OneDrive Final
    os.makedirs(os.path.dirname(DEST_ONEDRIVE), exist_ok=True)
    doc.save(DEST_ONEDRIVE, deflate=True, garbage=3)
    onedrive_mb = os.path.getsize(DEST_ONEDRIVE) / (1024 * 1024)
    print(f"✅ Đã lưu bản nộp bài vào OneDrive:\n   📂 {DEST_ONEDRIVE} ({onedrive_mb:.2f} MB)")

    # Save to public/
    os.makedirs(os.path.dirname(DEST_PUBLIC), exist_ok=True)
    doc.save(DEST_PUBLIC, deflate=True, garbage=3)
    public_mb = os.path.getsize(DEST_PUBLIC) / (1024 * 1024)
    print(f"✅ Đã lưu bản tải trực tiếp trên web (public/):\n   📂 {DEST_PUBLIC} ({public_mb:.2f} MB)")

    # Save to dist/ if dist exists
    if os.path.exists(os.path.dirname(DEST_DIST)):
        doc.save(DEST_DIST, deflate=True, garbage=3)
        print(f"✅ Đã đồng bộ vào thư mục build (dist/):\n   📂 {DEST_DIST}")

    doc.close()

    # Clean up temporary screenshot files
    print("\n🧹 Đang dọn dẹp các tệp ảnh tạm...")
    shutil.rmtree(TEMP_DIR, ignore_errors=True)

    # Clean up individual test files
    for test_f in [
        r"D:\Project\liquid-glass-agency\screenshot_test.png",
        r"D:\Project\liquid-glass-agency\screenshot_test_sharp.png",
        r"D:\Project\liquid-glass-agency\screenshot_test_clean_s1.png",
        r"D:\Project\liquid-glass-agency\screenshot_test_clean_s2.png",
        r"D:\Project\liquid-glass-agency\screenshot_test_clean_s3.png",
        r"D:\Project\liquid-glass-agency\screenshot_test_clean_s6.png",
        r"D:\Project\liquid-glass-agency\screenshot_test_clean_s12.png",
        r"D:\Project\liquid-glass-agency\screenshot_test_clean_s25.png",
        r"D:\Project\liquid-glass-agency\screenshot_test_clean_s26.png",
        r"D:\Project\liquid-glass-agency\screenshot_test_clean_s27.png",
    ]:
        if os.path.exists(test_f):
            try:
                os.remove(test_f)
            except Exception:
                pass

    print("\n🎉 HOÀN TẤT XUẤT BẢN FILE PDF NỘP BÀI THÀNH CÔNG RỰC RỠ!")
    print(f"👉 Tổng số trang: {len(captured_files)} trang 16:9 Widescreen")
    print(f"👉 Vị trí OneDrive: {DEST_ONEDRIVE}")
    print("=" * 70)


if __name__ == "__main__":
    main()
