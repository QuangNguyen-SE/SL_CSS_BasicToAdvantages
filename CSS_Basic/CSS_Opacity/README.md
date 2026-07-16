# NOTE:
### Hidden Technican?
- Hidden Technican là thủ thuật css dùng để **GIẤU** 1 phần tử và khi có even xảy ra nó mới được xuất hiện
- Hidden Technican bao gồm 3 thuộc tính chính:
    1. `opacity: 0;`
        - Làm phần tử **tàng hình**.
        - Nhưng nó **vẫn chiếm không gian** và **không thể chặn event** của người dùng.
    2. `visibility: hidden;`
        - **Ẩn** luôn phần tử, và **chặn các event** của người dùng.
        - **Vẫn chiếm không gian**
    3. `position: absolute;`
        - Nếu 2 thằng trên vẫn chiếm không gian vậy thì cách hiệu quả nhất đó chính là **dùng position**


# Bảng so sánh !!!
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

# Vấn đề đặt ra?
1. Tại sao `visibility` đã có thể ẩn phần tử thậm chí chặn luôn cả event của ng dùng nhưng trong 1 số trg hợp các senior front-end vẫn dùng `opacity`? 
    - Bởi vì muốn tạo ra sự chuyển động mượt mà, ta cần opacity, phần tử đó sẽ không đột ngột hiện hình mà sẽ có độ trễ đã hiện ra từ từ.