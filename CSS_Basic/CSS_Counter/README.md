# Counters là thuộc tính đếm trong CSS
- Mục đích của nó là tránh sử dụng thêm javascript để tạo số đếm cho danh sách
- CSS counter có thể tự động tạo ra các số đếm động tăng\giảm dần
- CSS counter kết hợp với 2 pseudo-class quan trọng chính là ::before và ::after
- CSS counter có 4 thuộc tính chính

## 1. counter-reset
- Khởi tạo giá trị counter trên thẻ cha của thẻ con được đếm
    `counter-reset: my-counter 6;`
- Reset lại counter của thẻ con nếu nó gặp lại lệnh này 1 lần nữa ở thẻ cha(hiểu rõ hơn ở khái niệm nested counters) 
## 2. counter-increment
- Khoảng cách giữa các số trong counter
    - Giảm dần: `counter-increment: my-counter -1;`
    - Tăng dần: `counter-increment: my-counter 1;`
## 3. content + counter
- Counter dùng để gọi biến đếm 
- content dùng để thêm nội dung(counter) vào trước văn bản của thẻ đó
```css
.item::before {
  /* Hiển thị giá trị của biến đếm ra màn hình */
  content: counter(my-counter) ". ";
  font-weight: bold;
  color: #d9534f; /* Màu đỏ cho số */
}
```
