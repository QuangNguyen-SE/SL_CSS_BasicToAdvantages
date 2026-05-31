# Hiệu ứng Glassmorphin
- Hiệu ứng glassmorphin là hiệu ứng decor nền thành 1 tấm kín.
- Để làm đc điều này cần có 3 yếu tố cốt lõi:
    1. **Làm mờ hậu cảnh**
        `backdrop-filter: blur(12px);`
        `-webkit-backdrop-filter: blur(12px)`
    2. **Màu nền có dộ trong suốt**
        - Màu kính trong suốt: `rgba(255,255,255,0.1);`
        - Màu kính râm: `rgba(0,0,0,0.2)`
    3. **Viền màu kính trong**
        `border: 1px solid rgba(255, 255, 255, 0.1);`
    4. **Đổ bóng** (Quan trọng nhất để đc hiệu glassmorphin)
        `box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);` 