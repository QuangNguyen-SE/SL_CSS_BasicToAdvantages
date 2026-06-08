# NOTE:
- Hidden Techican đc giải thích bên Menu_2.
- Xem Menu_1 và Menu_2 để thấy sự khác biệt trong việc dùng 2 kĩ thuật

| Tiêu chí | display: none; | Hidden Technican  |
| --------- | --------- | --------- |
| **Không gian chiếm dụng** | Biến mất hoàn toàn | Vẫn chiếm không gian (Nhưng nếu kết hợp với position: absolute thì nó ko còn bị vướng các content) |
| **Hỗ trợ hiệu ứng (Transition)** | Không hỗ trợ, CPU phải tính toán nhiều hơn vì GPU ko tham gia | Hỗ trợ hoàn hảo, cả GPU sẽ làm thay CPU về hiệu ứng, tối ưu FPS |
| **Tương tác (event)** | Không thể tương tác | Không thể tương tác nhờ visibility |
| **DOM Tree & Render** | Phần tử vẫn nằm bên trong nhưng bị xóa khỏi cây render tree | Phần tử nằm bên trong cây DOM và Render |
------------------ 

# Kết luận ưu nhược của display:none
| Ưu điểm | Nhược điểm |
| --------- | --------- |
| Code rất dễ, nhanh, ai cũng làm được | Trang web load lâu hơn, FPS rất cao nếu trang web nhiều data |
------------------ 