# NOTE:
### Hidden Technican?
- Hidden Technican là thủ thuật css dùng để **GIẤU** 1 phần tử và khi có even xảy ra nó mới được xuất hiện
- Hidden Technican bao gồm 3 thuộc tính chính:
```css
opacity: 0; 
/* Làm nó trong suốt, ko thấy phần tử */
visibility: hidden;
/* Giấu phần tử và chuột ko thể tương tác vào vùng ko gian của nó đc */
position: absolute;
/* Tách rời nó ra khỏi normal flow của DOM Tree ko để cho nó chiếm chỗ của các thẻ khác bị gãy GIAO DIỆN */
```
- Xem Menu_1 và Menu_2 để thấy sự khác biệt trong việc dùng 2 kĩ thuật

| Tiêu chí | display: none; | Hidden Technican  |
| --------- | --------- | --------- |
| **Không gian chiếm dụng** | Biến mất hoàn toàn | Vẫn chiếm không gian (Nhưng nếu kết hợp với position: absolute thì nó ko còn bị vướng các content) |
| **Hỗ trợ hiệu ứng (Transition)** | Không hỗ trợ, CPU phải tính toán nhiều hơn vì GPU ko tham gia | Hỗ trợ hoàn hảo, cả GPU sẽ làm thay CPU về hiệu ứng, tối ưu FPS |
| **Tương tác (event)** | Không thể tương tác | Không thể tương tác nhờ visibility |
| **DOM Tree & Render** | Phần tử vẫn nằm bên trong nhưng bị xóa khỏi cây render tree | Phần tử nằm bên trong cây DOM và Render |
------------------ 

# Kết luận ưu nhược của Hidden Technican
| Ưu điểm | Nhược điểm |
| --------- | --------- |
| Code rất phức tạp, dễ rối và lỗi nếu ko có kiến thức nền | Trang web load nhanh hơn, FPS ổn định vì có sự trợ giúp của GPU tạo hiệu ứng |
------------------ 