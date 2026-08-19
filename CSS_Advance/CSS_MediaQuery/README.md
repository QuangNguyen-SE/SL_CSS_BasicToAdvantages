# Media Query trong css
- Media Query là thuộc tính thay đổi css tùy theo môi trường thiết bị.
- Vidu 1 trang web hiển thị trên mang hình máy tính khác với 1 trang web hiển thị trên màn hình điện thoại.

# Cách dùng Query Media trong css
1. **Cú pháp cơ bản**
    ```css
    @media (condition){
        /* Các class css đc áp dụng viết ở đây */
        .example{
            width: 40px;
        }
    }
    ```
2. **Tùy chỉnh dựa vào kích thước màn hình**
    ```css
    /* Màn hình nhỏ hơn hoặc bằng 768px */
    @media (max-width: 768px){
        /* Các class css đc áp dụng viết ở đây */
        .example{
            flex-direction: column; 
        }
    }

    /* Trong một khoảng cụ thể (min và max kết hợp) */
    @media (min-width: 768px) and (max-width: 1023px) {
        .sidebar {
            width: 200px;
        }
    }
    ```
3. **Cú pháp Range mới (CSS mới hơn, ngắn gọn hơn)**
    ```css
    @media (768px <= width <= 1023px) {
        .sidebar { width: 200px; }
    }

    @media (width < 768px) {
        .menu { display: none; }
    }
    ```
4. **Theo hướng thiết bị**
    ```css
    @media (orientation: landscape){
        .banner{
            height: 200px;
        }
    }
    @media (orientation: portrait){
        .banner{
            height: 400px;
        }
    }
    ```
5. **Theo loại thiết bị**
    ```css
    @media screen{
            .no-print{
                display: block;
            }
    }

    @media print{
        .no-print{
            display:none;
        }
    }
    ```
6. **Kết hợp nhiều điều kiện**
    ```css
        /* AND - cả hai điều kiện đều đúng */
    @media (min-width: 768px) and (orientation: landscape) {
    ...
    }

    /* OR - dùng dấu phẩy */
    @media (max-width: 600px), (orientation: portrait) {
    ...
    }

    /* NOT - phủ định */
    @media not screen and (max-width: 768px) {
    ...
    }
    ```
7. **Theo độ phân giải màn hình**
    ```css
    @media (min-resolution: 2dppx) {
        .logo {
            background-image: url("logo@2x.png");
        }
    }
    ```
8. **Theo chế độ màu (dark-mode)**
    ```css
    @media (prefers-color-scheme: dark) {
        body {
            background: #121212;
            color: #fff;
        }
    }

    @media (prefers-color-scheme: light) {
        body {
            background: #fff;
            color: #000;
        }
    }
    ```
9. **Theo tùy chọn chuyển động**
    ```css
    @media (prefers-reduced-motion: reduce) {
        * {
            animation: none !important;
            transition: none !important;
        }
    }
    ```
10. **Dùng trong html(link stylesheet)**
    ```html
    <link rel="stylesheet" href="mobile.css" media="(max-width: 768px)">
    <link rel="stylesheet" href="print.css" media="print">
    ```
#