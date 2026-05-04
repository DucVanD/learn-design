# Intro - Sông Sài Gòn | Cuộc thi Học sinh, Sinh viên giỏi nghề 2024

## Mô tả
Intro đẹp mắt cho dự án "Sông Sài Gòn, con sông thành phố tôi" theo yêu cầu cuộc thi với thiết kế chuyên nghiệp và hiệu ứng animation mượt mà.

## Yêu cầu cuộc thi đã đáp ứng

### 📐 Kích thước và Layout
- ✅ **Full màn hình tỷ lệ 16:9**: Container chính với aspect-ratio 16/9
- ✅ **Khung giữa màn hình**: Nền trắng, width 800px, border-radius 20px
- ✅ **Responsive**: Tương thích mọi thiết bị với breakpoints phù hợp

### 🎨 Background và Overlay
- ✅ **Background Image**: Sử dụng `map_songsaigon.jpg` làm nền
- ✅ **Filter Blur**: Áp dụng blur 5px cho background
- ✅ **Overlay**: rgba(1,55,71,0.85) theo yêu cầu

### 🎯 Tính năng chính
- **Logo Animation**: 3 logo (Thành Đoàn, UBND TP.HCM, FPT Polytechnic) với hiệu ứng slide
- **Title Glow**: Tiêu đề có hiệu ứng phát sáng
- **Water Flow**: Icon nước chuyển động
- **Loading Bar**: Thanh tiến trình ở dưới
- **Water Ripple**: Hiệu ứng gợn sóng khi click
- **Smooth Transitions**: Chuyển cảnh mượt mà

## Cấu trúc File

```
├── intro.html          # File HTML chính
├── css/
│   └── intro.css       # Styles theo yêu cầu cuộc thi
├── js/
│   └── intro.js        # JavaScript tương tác
├── intro/
│   ├── map_songsaigon.jpg # Background chính
│   ├── thanh doan tphcm.png
│   ├── UBND_TP_HCM.png
│   ├── FPT_Polytechnic.png
│   └── ten du an.png
└── README_INTRO.md     # File hướng dẫn này
```

## Thiết kế chi tiết

### 🎨 Màu sắc chủ đạo
- **Primary**: #1e3c72 (Xanh đậm)
- **Secondary**: #2a5298 (Xanh nhạt)
- **Background**: White (Khung giữa)
- **Text**: #495057 (Xám đậm)

### ✨ Hiệu ứng Animation
- **Fade In/Out**: Các phần tử xuất hiện theo thứ tự
- **Logo Slide**: Logo trượt vào từ trái với delay
- **Title Glow**: Tiêu đề phát sáng theo chu kỳ
- **Water Flow**: Icon nước chuyển động lên xuống
- **Loading Progress**: Thanh tiến trình từ 0-100%
- **Ripple Effect**: Gợn sóng khi click

### 📱 Responsive Breakpoints
- **Desktop**: > 900px (Width 800px)
- **Tablet**: 600px - 900px (Width 90%)
- **Mobile**: < 600px (Width 95%)

## Cách sử dụng

### 1. Mở intro
```bash
# Mở file intro.html trong trình duyệt
open intro.html
```

### 2. Tương tác
- **Click Button**: Nút "Khám phá ngay" để vào dự án
- **Keyboard**: Nhấn Enter để vào dự án
- **Touch**: Hỗ trợ thiết bị cảm ứng
- **Hover**: Hiệu ứng khi di chuột

### 3. Tùy chỉnh
- **Tiêu đề**: Thay đổi trong `intro.html` phần `.main-title` và `.sub-title`
- **Logo**: Thay thế file trong thư mục `intro/`
- **Màu sắc**: Chỉnh sửa trong `css/intro.css`
- **Trang đích**: Thay đổi URL trong `js/intro.js` hàm `enterProject()`

## Tương thích trình duyệt
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## Hiệu suất tối ưu
- **CSS Animations**: Sử dụng GPU acceleration
- **Image Preloading**: Background image được preload
- **Touch Optimized**: Tối ưu cho thiết bị cảm ứng
- **Smooth Transitions**: Chuyển cảnh mượt mà

## Điểm nổi bật

### 🏆 Tuân thủ yêu cầu cuộc thi
- Kích thước 16:9 full màn hình
- Background blur 5px
- Overlay rgba(1,55,71,0.85)
- Khung giữa nền trắng width 800px

### 🎨 Thiết kế chuyên nghiệp
- Glassmorphism effect
- Modern typography
- Consistent color scheme
- Smooth animations

### 💻 Code chất lượng
- Clean HTML structure
- Modular CSS
- Efficient JavaScript
- Responsive design

## Troubleshooting

### Background không hiển thị
- Kiểm tra đường dẫn `intro/map_songsaigon.jpg`
- Đảm bảo file tồn tại và có quyền đọc

### Animation không mượt
- Kiểm tra GPU acceleration
- Giảm độ phức tạp animation
- Tối ưu kích thước hình ảnh

### Không responsive
- Kiểm tra viewport meta tag
- Test trên nhiều thiết bị
- Điều chỉnh breakpoints

## Tác giả
Dự án "Sông Sài Gòn, con sông thành phố tôi"  
Cuộc thi Học sinh, Sinh viên giỏi nghề 2024

## Phiên bản
v2.0.0 - Tuân thủ yêu cầu cuộc thi hoàn chỉnh 