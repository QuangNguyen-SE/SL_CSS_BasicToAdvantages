# Transition property
- Transition là 1 trong các thuộc tính tạo ra chuyển động mượt mà cho 1 hoặc nhiều thuộc tính nào đó trong thẻ.
- `transition` có 4 thuộc tính con là:
    - `transition-property`:
    - `transition-duration`:
    - `transition-timing-function`:
    - `transition-delay`: 

### transition-property
- Đây là thuộc tính dùng để khai báo cho `transition` biết rằng thuộc tính nào sẽ có sự thay đổi.
- Tên của 1 hoặc nhiều thuộc tính muốn tạo ra sự thay đổi chuyển động mượt mà.
- Vidu: 
```css
.tag01{
    width: 100px;
    height: 100px;
    transition: width 0.2s linear, height 0.3s ease-in;
}

.tag01:hover{
    width: 300px;
    height: 300px;
}
```
>Width, height là 2 thuộc tính thay đổi trong thẻ tag01, nhưng nhờ có transition mình có thể chỉnh sự thay đổi đó theo 1 cách mượt mà.

### transition-duration
- Là tốc độ diễn ra sự thay đổi đó
- Vidu ở trên.

### transition-timing-function
- Đây là hiệu ứng chuyển động thời gian.
- Gồm có 8 hiệu ứng chính.
    1. **ease**(Default value): Bắt đầu chậm, sau đó nhanh, và gần cuối chậm dần
    2. **linear**: Tốc độ không đổi từ lúc bắt đầu tới lúc kết thúc.
    3. **ease-in**: nhanh dần đều.
    4. **ease-out**: chậm dần đều.
    5. **ease-in-out**: bắt đầu và kết thúc chậm.
    6. **step(int, `start` | `end` | `none` | `both`)**:  chuyển động theo bước nhảy.
    8. **cubic-bezier(p1,p2,p3,p4)**: Đây chính là cốt lõi của các hàm timing function, thực chất các hàm linear, ease là cubic được viết sẵn.
    