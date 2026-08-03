# Pagination
- Pagination là kĩ thuật **PHÂN TRANG**, đây là kĩ thuật lâu đời nhưng vẫn dùng cho tới hiện nay.
- Kĩ thuật chia nhỏ nội dung sang thành nhiều trang.
- Kĩ thuật này giúp tối ưu tốc độ truyền tải trang web, hạn chế delay khi gọi API lại nhiều lần mỗi khi muốn truy cứu các dữ liệu nằm sau bên trong 1 danh sách dữ liệu

# Cấu trúc pagination trong 1 trang web
- **HTML**
    - Pagination sẽ có cấu trúc cơ bản là 1 list các đg liên kết tới các trang.
    - Nhưng về mặt lí thuyết không nên tạo như thế vì nó rất tốn tài nguyên.
    - Thay vào đó tạo sẵn 1 template hiển thị data, và dùng query **Offset** trong database.
- **CSS**
    - Style `display: flex;` và các nút khác.
