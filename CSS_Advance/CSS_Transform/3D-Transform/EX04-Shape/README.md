# Hình học 3D
- Trong Css khả năng tạo ra hình học không gian rất hạn chế, đặc biệt là các hình có đường cong.
- Css chỉ hỗ trợ ngắn gọn về các hình như Lập Phương, tam giác, hình nón, hình hộp chữ nhật.
- Nhưng riêng hình cầu, hình lăng trụ có độ khó rất phức tạp phải sử dụng nhiều kĩ thuật khó và nhiều thẻ div chồng lên nhau để tạo tọa độ.
- Chính vì thế ngta hay dùng đến web `WebGL`, `React Three Fiber`, `Three.js`. Để bỗ trợ cho mặt thiếu sót của CSS-3.

# Các kĩ thuật tạo ra các hình bằng html, css, js thuần.

## Hình khối Lập Phương, Khối chữ nhật
- Các làm tạo ra 6 mặt của hình.
- dùng position `relative-absolute` và `transform` để chúng lòng ghép vào nhau.
>Dễ
## Hình nón tứ giác đều.
- Tạo ra 5 năm mặt.
- Dùng `clip-path` cắt thành hình tam giác. 
- Ghép chúng lại với nhau.
>Trung bình
## Hình nón
- Tạo ra 1 mặt đáy hình tròn.
- Tạo ra N (N càng lớn hình càng mịn) mặt cắt hình tam giác vuông, lấy cạnh góc vuông dài nhất và xoay quanh lồng chúng lại theo 1 đg thẳng trục.
> Khó
## Hình cầu
- Tạo ra N mặt phẳng 2D *hình tròn* và ghép tâm của chúng lại với nhau tạo ra hiệu ứng hình cầu
> Khá khó
## Hình lăng trụ
- Tạo ra N mặt phẳng 2D *hình chữ nhật* và ghép tâm của chúng lại với nhau.
>Khá khó