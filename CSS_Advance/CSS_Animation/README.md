# Animation 
- CSS animation là 1 property hỗ trợ việc thiết kế ra 1 animation cho trang web.
- `animation` chỉ nhận 4 giá trị lần lượt là:
    1. **animation's name** (đặt tên cho animation đó là gì).
    2. **animation's duration** (animation này diễn ra trong bao lâu).
    3. **animation's timing** (thời gian hoạt động của animation này).
        1. `animation-delay`: độ trễ trước khi animation này bắt đầu 
            - Nhận vào 1 gtri là int number *dương* và *âm* đều được.
            - Gtri *dương*: biểu thị độ trễ, sau 1 khoảng thời gian, animation bắt đầu chạy. 
            - Gtri *âm*: giống như time skip, animation sẽ bắt đầu tại 1 mốc thời gian, mà bỏ qua bước đầu
        2. `animation-iteration-count`: vòng lặp số đếm.
            - Lặp đi lặp lại như 1 vòng lặp `for`.
            - Chỉ số index nguyên dương hoặc dùng keyword `infinite`.
        3. `animation-timing-function`: 
            -  Y như của `transition-timing-function`.
    4. **animation-direction** (đây là thuộc tính đổi hướng sự kiện của animation).
        1. `normal` (default value): animation sẽ luôn di chuyển theo 1 hướng thẳng duy nhất 0%-100%.
        2. `reverse` : sẽ ngược lại với normal là nó sẽ đi ngược lại từ 100%-0%.
        3. `alternate`: sẽ lặp lại animation đó. 0% -> 100% -> 0% -> ....
        4. `alternate-reverse`: sẽ lặp lại animation nhưng theo hướng ngược lại 100% -> 0% -> 100% -> ....
    5. **animation-fill-mode** (Thuộc tính lắp đậy của animation).
        1. `none` (default value): gtrị mặc định css sẽ không fill bất kì cái gì.
        2. `forwards`: 
            - Trước khi chạy nó sẽ giữ lại style gốc của thuộc tính đó.
            - Sau khi chạy xong nó sẽ lấy style của cột mốc keyframe cuối cùng được khai báo.
        3. `backwards`: 
            - Trước khi chạy (trong thời gian chờ delay): Phần tử sẽ lập tức áp dụng trạng thái của mốc keyframe đầu tiên (thường là 0% hoặc from), ngay cả khi thời gian chờ (delay) chưa đếm ngược xong. 
            - Sau khi chạy xong: Phần tử lại búng về trạng thái style gốc.
        4. `both`:  
            - Đây là sự kết hợp của cả forwards và backwards.
            - Trước khi chạy: Áp dụng ngay lập tức style của mốc 0%.
            - Sau khi chạy xong: Giữ nguyên style của mốc 100%.
# Animation-shorthand:
- Animation shorthand!!
`animation: [name] [duration] [timing-function] [delay] [iteration-count] [direction] [fill-mode] [play-state];`
- Đây là animation shorthand

# @keyframe là gì?
- Trong css để 1 `animation` chạy được thì ta phải khai báo `keyframe` nó chính là chìa khóa quan trọng để giúp tạo ra 1 animation rõ nét.
- **identify** chính là **animation's name** đặt tên cho biến đó.
- Bên trong `keyframe` chính là xương sống cho animation nó được gọi là các **Cột mốc thời gian**.
- Định nghĩa sự thay đổi bên trong css.
 ```css 
 @keyframe identify{ 
    0%{
        ....
    }100%{
        ....
    }
}

@keyframe identify{ 
    from{
        ....
    }to{
        ....
    }

}
```

>Vì animation đã dùng rất nhiều cho mấy bài trước, nên vidu ở đây khá ít, cơ bản nói về các thuộc tính của nó, và để làm ra đc 1 animation chất lượng, chúng ta phải biết rõ là nó đang làm gì !!!!