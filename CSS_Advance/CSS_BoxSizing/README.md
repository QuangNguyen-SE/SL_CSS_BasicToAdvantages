# Box-sizing
- Kích thước trong 1 phần tử được tính như sau: `width` + `padding` + `border` = kích thước độ rộng của phần tử.
- Tương tự với `height`.
- Nếu 1 phần tử không setting padding, hoặc border nó sẽ không làm tăng `width` và `height` của thẻ.
- Tuy nhiên trong HTML có 1 só thẻ đã tự dộng có `padding` và `border` sẵn.
- Điều này làm chúng ta khó căn chỉnh kích thước thực tế của các thẻ. Vậy nên `box-sizing` ra đời.

# Box-sizing value
- `box-sizing` chỉ có 2 value chính đó là:
    1. `content-box` (default): nó sẽ bao gồm kích thước của padding, border, và width\height.
    2. `border-box`: nó sẽ gộp chung tất cả các yếu tổ thay đổi kích thước bằng đúng width\height mình đã setting
                    nghĩa là cho dù `width: 300px` và mình setting `padding: 10px`, nhưng nó vẫn chỉ rộng đúng 300px.