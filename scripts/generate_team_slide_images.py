#!/usr/bin/env python3
"""
Generate high-resolution team member graphics, transparent overlay,
composite slide on user's template, and QR code assets for PowerPoint.
"""

import os
import sys
import shutil
import subprocess
import qrcode
from PIL import Image

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
DEST_DIR = r"D:\OneDrive\UEH nắc tới chết\Phát triển bền vững\Final"
PUBLIC_DIR = r"D:\Project\liquid-glass-agency\public"
TEMPLATE_IMG = r"C:\Users\Admin\.gemini\antigravity\brain\b99c1be2-268c-421f-9608-c3344b8f9362\.user_uploaded\media_1788922092983.png"

SCRATCH_DIR = r"C:\Users\Admin\.gemini\antigravity\brain\b99c1be2-268c-421f-9608-c3344b8f9362\scratch"
os.makedirs(SCRATCH_DIR, exist_ok=True)
os.makedirs(DEST_DIR, exist_ok=True)
os.makedirs(PUBLIC_DIR, exist_ok=True)

# 1. Generate QR Code
TARGET_URL = "https://ptbv-sdg3-sdg4.vercel.app/#slide=3"
print(f"🔗 Target URL: {TARGET_URL}")

qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=12,
    border=1,
)
qr.add_data(TARGET_URL)
qr.make(fit=True)

qr_png_path = os.path.join(SCRATCH_DIR, "qr_code_temp.png")
qr_img = qr.make_image(fill_color="#064e3b", back_color="white")
qr_img.save(qr_png_path)

# Also save standalone QR codes to OneDrive and public
qr_dest_png = os.path.join(DEST_DIR, "QR_Code_Slide_Thanh_Vien.png")
qr_img.save(qr_dest_png)
shutil.copyfile(qr_dest_png, os.path.join(PUBLIC_DIR, "QR_Code_Slide_Thanh_Vien.png"))
print(f"✅ Đã tạo mã QR: {qr_dest_png}")

# Convert QR image to base64 for embedding in HTML
import base64
with open(qr_png_path, "rb") as f:
    qr_b64 = base64.b64encode(f.read()).decode("utf-8")

# Convert template image to base64
with open(TEMPLATE_IMG, "rb") as f:
    template_b64 = base64.b64encode(f.read()).decode("utf-8")

# 2. Create HTML for the full composite slide (matching user's uploaded template)
html_full_slide = f"""<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&family=Playfair+Display:ital,wght@1,600;1,700&display=swap');

  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }}

  body {{
    width: 1920px;
    height: 973px;
    background: transparent;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #ffffff;
    position: relative;
    overflow: hidden;
  }}

  /* Background template */
  .template-bg {{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }}

  /* Content area positioned precisely over the green container */
  .overlay-container {{
    position: absolute;
    top: 135px;
    left: 245px;
    width: 1475px;
    height: 645px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}

  /* Header inside the green container */
  .slide-header {{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }}

  .header-left {{
    display: flex;
    align-items: center;
    gap: 12px;
  }}

  .header-tag {{
    background: rgba(255, 255, 255, 0.18);
    border: 1px solid rgba(255, 255, 255, 0.35);
    padding: 4px 14px;
    border-radius: 9999px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: #fef08a;
  }}

  .header-title {{
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 26px;
    font-weight: 700;
    color: #ffffff;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5);
  }}

  .header-right {{
    display: flex;
    align-items: center;
    gap: 10px;
  }}

  .header-badge {{
    background: rgba(0, 0, 0, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.25);
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 13px;
    color: #a7f3d0;
    font-family: 'JetBrains Mono', monospace;
  }}

  /* 3 Columns Layout */
  .columns-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 18px;
    flex: 1;
    margin-top: 12px;
  }}

  .column-card {{
    background: rgba(10, 30, 15, 0.55);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 16px;
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  }}

  .column-header {{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    margin-bottom: 10px;
  }}

  .col-title-wrap {{
    display: flex;
    align-items: center;
    gap: 8px;
  }}

  .col-icon {{
    font-size: 18px;
  }}

  .col-title {{
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }}

  .col-badge {{
    font-size: 11px;
    padding: 2px 8px;
    border-radius: 6px;
    font-weight: 700;
  }}

  .col-synthesis .col-title {{ color: #fde047; }}
  .col-synthesis .col-badge {{ background: rgba(234, 179, 8, 0.25); color: #fef08a; border: 1px solid rgba(250, 204, 21, 0.4); }}

  .col-sdg3 .col-title {{ color: #6ee7b7; }}
  .col-sdg3 .col-badge {{ background: rgba(16, 185, 129, 0.25); color: #a7f3d0; border: 1px solid rgba(52, 211, 153, 0.4); }}

  .col-sdg4 .col-title {{ color: #f472b6; }}
  .col-sdg4 .col-badge {{ background: rgba(244, 114, 182, 0.25); color: #fbcfe8; border: 1px solid rgba(244, 114, 182, 0.4); }}

  /* Members List */
  .members-list {{
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }}

  .member-item {{
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 10px;
    padding: 7px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.2s ease;
  }}

  .member-left {{
    display: flex;
    align-items: center;
    gap: 10px;
  }}

  .member-avatar {{
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 800;
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    flex-shrink: 0;
  }}

  .avatar-leader {{ background: linear-gradient(135deg, #f59e0b, #ea580c); }}
  .avatar-tech {{ background: linear-gradient(135deg, #10b981, #0d9488); }}
  .avatar-speech {{ background: linear-gradient(135deg, #06b6d4, #2563eb); }}
  .avatar-sdg3 {{ background: linear-gradient(135deg, #059669, #14b8a6); }}
  .avatar-sdg4 {{ background: linear-gradient(135deg, #e11d48, #db2777); }}

  .member-info {{
    display: flex;
    flex-direction: column;
  }}

  .member-name {{
    font-size: 13.5px;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.2;
  }}

  .member-mssv {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #93c5fd;
    font-weight: 600;
  }}

  .member-role {{
    font-size: 11px;
    padding: 3px 8px;
    border-radius: 6px;
    font-weight: 700;
    white-space: nowrap;
  }}

  .role-leader {{
    background: rgba(245, 158, 11, 0.3);
    color: #fef08a;
    border: 1px solid rgba(245, 158, 11, 0.5);
  }}

  .role-lead {{
    background: rgba(16, 185, 129, 0.3);
    color: #a7f3d0;
    border: 1px solid rgba(52, 211, 153, 0.5);
  }}

  .role-member {{
    background: rgba(255, 255, 255, 0.12);
    color: #e2e8f0;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }}

  /* QR Box in Column 1 */
  .qr-box {{
    margin-top: 8px;
    background: rgba(0, 0, 0, 0.45);
    border: 1px dashed rgba(250, 204, 21, 0.5);
    border-radius: 12px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 12px;
  }}

  .qr-img {{
    width: 62px;
    height: 62px;
    border-radius: 6px;
    background: white;
    padding: 3px;
    flex-shrink: 0;
  }}

  .qr-text-wrap {{
    display: flex;
    flex-direction: column;
    gap: 2px;
  }}

  .qr-title {{
    font-size: 11.5px;
    font-weight: 700;
    color: #fef08a;
  }}

  .qr-desc {{
    font-size: 10px;
    color: #e2e8f0;
    line-height: 1.25;
  }}

  .qr-url {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 9.5px;
    color: #67e8f9;
    font-weight: 600;
    word-break: break-all;
  }}
</style>
</head>
<body>
  <!-- Base template from user -->
  <img src="data:image/png;base64,{template_b64}" class="template-bg" alt="Template" />

  <!-- Overlay Content -->
  <div class="overlay-container">
    <!-- Header -->
    <div class="slide-header">
      <div class="header-left">
        <span class="header-tag">NHÓM 4 — CANDY</span>
        <h1 class="header-title">Phân Công & Danh Sách Thành Viên</h1>
      </div>
      <div class="header-right">
        <span class="header-badge">👥 13 Thành viên</span>
        <span class="header-badge">🏛️ 3 Phân ban</span>
        <span class="header-badge">✓ Hoàn tất 100%</span>
      </div>
    </div>

    <!-- 3 Columns -->
    <div class="columns-grid">
      <!-- Cột 1: Tổng hợp & Kỹ thuật -->
      <div class="column-card col-synthesis">
        <div class="column-header">
          <div class="col-title-wrap">
            <span class="col-icon">👑</span>
            <span class="col-title">Tổng Hợp & Hoàn Thiện</span>
          </div>
          <span class="col-badge">3 TV • Điều phối</span>
        </div>

        <div class="members-list">
          <div class="member-item">
            <div class="member-left">
              <div class="member-avatar avatar-leader">DT</div>
              <div class="member-info">
                <span class="member-name">Dương Hà Tiên (Vincen)</span>
                <span class="member-mssv">MSSV: 33254020150</span>
                <span style="font-size: 10px; color: #fde047; margin-top: 1px;">↳ Điều phối chung & Tổng hợp final</span>
              </div>
            </div>
            <span class="member-role role-leader">👑 Nhóm trưởng</span>
          </div>

          <div class="member-item">
            <div class="member-left">
              <div class="member-avatar avatar-tech">TB</div>
              <div class="member-info">
                <span class="member-name">Trịnh Quốc Bình</span>
                <span class="member-mssv">MSSV: 89254020098</span>
                <span style="font-size: 10px; color: #a7f3d0; margin-top: 1px;">↳ Tổng hợp thông tin, thiết kế Slide & Kỹ thuật</span>
              </div>
            </div>
            <span class="member-role role-member">💻 Tổng hợp, Slide & Kỹ thuật</span>
          </div>

          <div class="member-item">
            <div class="member-left">
              <div class="member-avatar avatar-speech">HA</div>
              <div class="member-info">
                <span class="member-name">Hoàng Anh</span>
                <span class="member-mssv">MSSV: 33254020121</span>
                <span style="font-size: 10px; color: #67e8f9; margin-top: 1px;">↳ Tổng hợp thông tin, thuyết trình & Quiz</span>
              </div>
            </div>
            <span class="member-role role-member">🎙️ Tổng hợp, Thuyết trình & Quiz</span>
          </div>

          <!-- Tasks Summary Box for Column 1 -->
          <div style="background: rgba(0,0,0,0.32); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; padding: 6px 10px; font-size: 10.5px; color: rgba(255,255,255,0.85); line-height: 1.35; margin-top: 2px;">
            <div style="font-weight: 700; color: #fde047; font-size: 11px; margin-bottom: 2px; display: flex; align-items: center; gap: 4px;">
              <span>📌</span>
              <span>Nhiệm vụ Phân ban Tổng hợp:</span>
            </div>
            <div>• Điều phối & hoàn thiện nội dung toàn bài</div>
            <div>• Thiết kế đồ họa Slide & tương tác số liệu</div>
            <div>• Soạn ngân hàng câu hỏi Q&A & Minigame</div>
          </div>
        </div>

        <!-- Integrated QR Code Card -->
        <div class="qr-box">
          <img src="data:image/png;base64,{qr_b64}" class="qr-img" alt="QR Code" />
          <div class="qr-text-wrap">
            <span class="qr-title">📱 Quét QR xem Slide tương tác</span>
            <span class="qr-desc">Truy cập trực tiếp phiên bản Web Full HD</span>
            <span class="qr-url">ptbv-sdg3-sdg4.vercel.app/#slide=3</span>
          </div>
        </div>
      </div>

      <!-- Cột 2: Nội dung SDG 3 -->
      <div class="column-card col-sdg3">
        <div class="column-header">
          <div class="col-title-wrap">
            <span class="col-icon">💚</span>
            <span class="col-title">Chuyên Đề SDG 3 (Sức Khỏe)</span>
          </div>
          <span class="col-badge">5 TV • Sức khỏe</span>
        </div>

        <div class="members-list">
          <div class="member-item">
            <div class="member-left">
              <div class="member-avatar avatar-sdg3">HN</div>
              <div class="member-info">
                <span class="member-name">Huỳnh Văn Nhân</span>
                <span class="member-mssv">MSSV: 33252020180</span>
                <span style="font-size: 10px; color: #a7f3d0; margin-top: 1px;">↳ Phụ trách chuyên môn & Tổng hợp SDG 3</span>
              </div>
            </div>
            <span class="member-role role-lead">⭐ Lead chính SDG 3</span>
          </div>

          <div class="member-item">
            <div class="member-left">
              <div class="member-avatar avatar-sdg3">PD</div>
              <div class="member-info">
                <span class="member-name">Phan Văn Duy</span>
                <span class="member-mssv">MSSV: 87254020236</span>
                <span style="font-size: 10px; color: #a7f3d0; margin-top: 1px;">↳ Dữ liệu DALYs & Target 3.1—3.9</span>
              </div>
            </div>
            <span class="member-role role-member">DALYs & 3.1—3.9</span>
          </div>

          <div class="member-item">
            <div class="member-left">
              <div class="member-avatar avatar-sdg3">TN</div>
              <div class="member-info">
                <span class="member-name">Trần Thị Hồng Ngọc</span>
                <span class="member-mssv">MSSV: 35254020078</span>
                <span style="font-size: 10px; color: #a7f3d0; margin-top: 1px;">↳ Bức tranh toàn cầu & Thực trạng VN</span>
              </div>
            </div>
            <span class="member-role role-member">Toàn cầu & VN</span>
          </div>

          <div class="member-item">
            <div class="member-left">
              <div class="member-avatar avatar-sdg3">TT</div>
              <div class="member-info">
                <span class="member-name">Trần Lê Thanh Thảo</span>
                <span class="member-mssv">MSSV: 35254020302</span>
                <span style="font-size: 10px; color: #a7f3d0; margin-top: 1px;">↳ Target 3.a—3.d & Case Vinamilk</span>
              </div>
            </div>
            <span class="member-role role-member">3.a—3.d & Vinamilk</span>
          </div>

          <div class="member-item">
            <div class="member-left">
              <div class="member-avatar avatar-sdg3">LV</div>
              <div class="member-info">
                <span class="member-name">Lâm Thanh Vân</span>
                <span class="member-mssv">MSSV: 35252020368</span>
                <span style="font-size: 10px; color: #a7f3d0; margin-top: 1px;">↳ Mạng lưới liên kết 17 Mục tiêu SDGs</span>
              </div>
            </div>
            <span class="member-role role-member">Mạng lưới 17 SDGs</span>
          </div>
        </div>
      </div>

      <!-- Cột 3: Nội dung SDG 4 -->
      <div class="column-card col-sdg4">
        <div class="column-header">
          <div class="col-title-wrap">
            <span class="col-icon">📖</span>
            <span class="col-title">Chuyên Đề SDG 4 (Giáo Dục)</span>
          </div>
          <span class="col-badge">5 TV • Giáo dục</span>
        </div>

        <div class="members-list">
          <div class="member-item">
            <div class="member-left">
              <div class="member-avatar avatar-sdg4">QH</div>
              <div class="member-info">
                <span class="member-name">Nguyễn Thị Quỳnh Hương</span>
                <span class="member-mssv">MSSV: 87254020088</span>
                <span style="font-size: 10px; color: #fbcfe8; margin-top: 1px;">↳ Phụ trách chuyên môn & Tổng hợp SDG 4</span>
              </div>
            </div>
            <span class="member-role role-lead" style="background: rgba(244, 114, 182, 0.3); color: #fbcfe8; border-color: rgba(244, 114, 182, 0.5);">⭐ Lead chính SDG 4</span>
          </div>

          <div class="member-item">
            <div class="member-left">
              <div class="member-avatar avatar-sdg4">CG</div>
              <div class="member-info">
                <span class="member-name">Huỳnh Thị Cẩm Giang</span>
                <span class="member-mssv">MSSV: 35261020473</span>
                <span style="font-size: 10px; color: #fbcfe8; margin-top: 1px;">↳ GER/NER & Target 4.1—4.7</span>
              </div>
            </div>
            <span class="member-role role-member">GER/NER & 4.1—4.7</span>
          </div>

          <div class="member-item">
            <div class="member-left">
              <div class="member-avatar avatar-sdg4">GH</div>
              <div class="member-info">
                <span class="member-name">Đào Lê Gia Hân</span>
                <span class="member-mssv">MSSV: 33252020078</span>
                <span style="font-size: 10px; color: #fbcfe8; margin-top: 1px;">↳ Khủng hoảng 84M trẻ & Rào cản số</span>
              </div>
            </div>
            <span class="member-role role-member">84M trẻ & Số hóa</span>
          </div>

          <div class="member-item">
            <div class="member-left">
              <div class="member-avatar avatar-sdg4">PN</div>
              <div class="member-info">
                <span class="member-name">Đặng Phương Ngân</span>
                <span class="member-mssv">MSSV: 33252020097</span>
                <span style="font-size: 10px; color: #fbcfe8; margin-top: 1px;">↳ Thực trạng & 4 Giải pháp tại VN</span>
              </div>
            </div>
            <span class="member-role role-member">Thực trạng & 4 Giải pháp</span>
          </div>

          <div class="member-item">
            <div class="member-left">
              <div class="member-avatar avatar-sdg4">LK</div>
              <div class="member-info">
                <span class="member-name">Lưu Lâm Tiểu Kha</span>
                <span class="member-mssv">MSSV: 35252020283</span>
                <span style="font-size: 10px; color: #fbcfe8; margin-top: 1px;">↳ Mạng lưới liên kết SDGs & Nestlé</span>
              </div>
            </div>
            <span class="member-role role-member">Mạng lưới & Nestlé</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
"""

html_path = os.path.join(SCRATCH_DIR, "render_team_slide.html")
with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_full_slide)

print(f"📄 Đã tạo file HTML render: {html_path}")

# Render using Headless Chrome
composite_out_png = os.path.join(DEST_DIR, "Slide_Thanh_Vien_Nhom_Candy_Hoan_Chinh.png")
cmd = [
    CHROME_PATH,
    "--headless=new",
    "--window-size=1920,973",
    "--virtual-time-budget=2000",
    f"--screenshot={composite_out_png}",
    f"file:///{html_path.replace(os.sep, '/')}",
]

print("📸 Đang chụp ảnh Slide hoàn chỉnh 1920x973 bằng Chrome...")
subprocess.run(cmd, capture_output=True, text=True)

if os.path.exists(composite_out_png):
    print(f"✅ Đã xuất ảnh Slide hoàn chỉnh:\n   📂 {composite_out_png} ({os.path.getsize(composite_out_png) // 1024} KB)")
    shutil.copyfile(composite_out_png, os.path.join(PUBLIC_DIR, "Slide_Thanh_Vien_Nhom_Candy_Hoan_Chinh.png"))


# 3. Create Transparent Overlay Version (just the cards and members without background)
html_transparent = html_full_slide.replace(
    f'<img src="data:image/png;base64,{template_b64}" class="template-bg" alt="Template" />',
    '<!-- No Background -->'
).replace(
    "width: 1920px;\n    height: 973px;\n    background: transparent;",
    "width: 1475px;\n    height: 645px;\n    background: transparent;"
).replace(
    "position: absolute;\n    top: 135px;\n    left: 245px;\n    width: 1475px;\n    height: 645px;",
    "position: relative;\n    width: 100%;\n    height: 100%;"
)

html_trans_path = os.path.join(SCRATCH_DIR, "render_transparent_overlay.html")
with open(html_trans_path, "w", encoding="utf-8") as f:
    f.write(html_transparent)

trans_out_png = os.path.join(DEST_DIR, "Anh_Thanh_Vien_Nhom_Candy_Trong_Suot.png")
cmd_trans = [
    CHROME_PATH,
    "--headless=new",
    "--window-size=1475,645",
    "--default-background-color=00000000",
    "--virtual-time-budget=2000",
    f"--screenshot={trans_out_png}",
    f"file:///{html_trans_path.replace(os.sep, '/')}",
]

print("📸 Đang chụp ảnh Transparent Overlay (Nền trong suốt)...")
subprocess.run(cmd_trans, capture_output=True, text=True)

if os.path.exists(trans_out_png):
    print(f"✅ Đã xuất ảnh Transparent Overlay:\n   📂 {trans_out_png} ({os.path.getsize(trans_out_png) // 1024} KB)")
    shutil.copyfile(trans_out_png, os.path.join(PUBLIC_DIR, "Anh_Thanh_Vien_Nhom_Candy_Trong_Suot.png"))

print("\n🎉 HOÀN THÀNH TẤT CẢ CÁC TỆP ĐỒ HỌA THÀNH VIÊN VÀ MÃ QR!")
