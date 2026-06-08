# CSS Image Sprites
- Là một kỹ thuật gộp nhiều ảnh nhỏ thành 1 file hình ảnh lớn duy nhất được gọi là SPRITE SHEET
- Mục đích chính của kỹ thuật này là **tối ưu hóa tốc độ tải trang**
- Có 2 cách tạo ra SPRITE SHEET:
    1. Dùng công cụ trực tuyến:
        <ol type="I">
            <li>Toptal CSS Sprite Generator</li>
            <li>CSS Sprite Tool</li>
        </ol>
    2. Trong các Framework (React, Vue), có thể tự động hóa webpack
        ```bash
        npm i webpack-spritesmith --save-dev
        ```
        - Cấu hình trong JavaScript
        ```JS
        const SpritesmithPlugin = require('webpack-spritesmith');
        const path = require('path');
        module.exports = {
        // ... cấu hình module, entry, output của bạn ...
        plugins: [
            new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'src/icons'), // Thư mục chứa các icon nhỏ lẻ
                glob: '*.png' // Lọc đuôi file cần gom
            },
            target: {
                image: path.resolve(__dirname, 'src/assets/sprite.png'), // File ảnh lớn đầu ra
                css: path.resolve(__dirname, 'src/assets/sprite.css') // File CSS đầu ra
            },
            apiOptions: {
                cssImageRef: "sprite.png" // Đường dẫn để file CSS trỏ tới file ảnh
            }
            })
        ]
        };
        ```
        - Sử dụng trong code HTML/CSS:Bây giờ, nếu bạn có file home.png và user.png trong thư mục src/icons, mỗi khi build, Webpack sẽ sinh ra file sprite.css chứa sẵn các class.Bạn chỉ cần import file sprite.css vào dự án và sử dụng như bình thường:HTML

- Học cho biết chứ ko nên áp dụng vào vì kĩ t;huật này đã lỗ thời.
- Thay vào đó sử dụng SVG Sprites hoặc Icon Fonts
- Lí do thay thế đó là SVG sẽ ko bị vỡ hạt khi phóng to trong khi JPG, PNG thì có