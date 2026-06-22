# 2D-transform 
- Trong `transform` có các attribute dùng để điều chỉnh hoạt ảnh 2D của 1 thẻ bao gồm:
    1. `translate()`
    2. `rotate()`
    3. `scale()`
    4. `skew()`
    5. `matrix()`

## translate()
- `translate(x, y)` là 1 hàm giúp di dời thẻ so với **Vị TRÍ HIỆN TẠI** theo trục x và y
- Vidu: `translate(50px, 100px);` thì thẻ sẽ qua phải 50px theo trục x và qua xuống 100px theo trục y;
- Tuy nhiên chúng ta có thể sử dụng: `translateX()` hoặc `translateY()` riêng biệt
> `translate(x ,y)` giúp di dời thẻ theo mặt hiển thị, còn về mặt vật lí thì thẻ vẫn sẽ giữ nguyên vị trí. Vì vậy thẻ có thể đè lên các thẻ khác mà bố cục trang web vẫn không thay đổi.

## scale()
- `scale()` là 1 hàm giúp phóng to phần từ.
- Giá trị value của nó là 1 hệ số tỉ lệ.
    - `1`: chính là giá trị tuyệt đối 100%.
    - `1.5`: nghĩa là 150% phóng to 150%.
    - `-1`: nghĩa là phóng to và thẻ bị lật ngược lại.

## skew()
- `skew()` là 1 hàm giúp kéo nghiêng phần tử về 1 phía theo trục X (mặc định)
- `skew()` có thể kéo về cả 3 chục nếu khai báo `skew(x , y, z)`
- Nếu ta muốn kéo về 1 trục duy nhất thì:
    - Trục X: `skewX()`
    - Trục Y: `skewY()`
- Giá trị value của nó là 1 hệ số góc `deg`. 
- Ứng dụng:
    1. Tạo ra hiệu ứng chuyển động bằng skew
    2. Tạo ra hoạt ảnh isometic 3D nhờ bổ trợ thuộc tính translate và scale