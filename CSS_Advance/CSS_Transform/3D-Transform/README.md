# 3D-Transforms.
- Hình thái không gian `3D` sẽ xoay quanh 3 trục chính là `X`, `Y`, `Z`.
- Nhờ thuộc tính `transform-style` nó sẽ cho chúng ta 2 value chính đó là:
    - `flat`: tất cả phần tử con bị làm phẳng, hình thái `2D`.
    - `preserve-3d`: tất cả phần tử con có chiều sâu tạo ra thêm trục `Z`. Hình thái `3D`.
- Trong không gian 3D này có rất nhiều thuộc tính quan trọng để bổ trợ thêm cho việc thiết kế gồm:
    1. `translateZ()`, `rotateZ()`, `scaleZ()`: Tuy nhiên không có `skewZ()` bởi vì đó là value giúp kéo nghiêng 1 thẻ theo trục X hoặc Y mà thôi.
    2. `perspective`: xa gần theo tầm mắt, độ sâu của thẻ.
    3. `perspective-origin`: điều chỉnh vị trí tâm của thẻ dựa và thuộc tính `perspective` ở trên.
    4. `backface-visibility`: điều chỉnh những thẻ nếu bị xoay ngược 180deg hoặc không ở chính diện màn hình sẽ bị ẩn đi (Đây là 1 tính năng rất xịn của CSS-3).

## perspective:
- `perspective` là thuộc tính cho phép thẻ xa ra hoặc gần vào trong tầm mắt.
- Thuộc tính này **chỉ có tác dụng với các THẺ CON** bên trong nó chứ nó không có tác dụng lên chính thẻ đó. 

## perspective-origin
- `perspective-origin` thay đổi vị trí tâm của thẻ dựa và thuộc tính `perspective`.
- Có thể chỉnh nó kéo xa tầm mắt về bên trái hay bên phải.

## backface-visibility
- `backface-visibility` khiến cho các thẻ ẩn đi nếu góc của nó thay đổi `180deg`.