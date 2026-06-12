# Linear-Gradient 
- Linear-gradient là quang phổ tuyến tính.
- Dải màu thay đổi theo 1 đường thẳng (tuyến tính).
- Chúng ta có thể tùy chỉnh góc độ thay đổi của nó nhưng nó vẫn sẽ thay đổi đi theo 1 đg thẳng.

# Inside linear-gradient
- Bên trong value này có các value nhỏ khác bao gồm:
```css
linear-gradient(side-or-corner, angle, color-stop1, color-stop2, ...);
```
- Mô tả:
    - `side-or-corner` (Optional)
        - Giá trị này khai báo vị trí bắt đầu của dải quang phổ: *top or bottom*, *left or right*.
        - Giá trị mặc định default value của nó là: *bottom*.
        - Khai báo nó với keyword `to`
        - Vidu:
            - `linear-gradient(to top left);`
    - `angle`: (Không bắt buộc) 
        - Giá trị này khai báo góc độ của quang phổ
        - Quang phổ có thể bắt đầu từ 1 góc 45 độ đổ xuống, hoặc 180 độ. 
        - Default value của nó là `0deg` và maxium value của nó `360deg`.
        - Vidu:
            - `linear-gradient(to top left, 270deg);`
    - `color-stop1`, `color-stop2`: (bắt buộc) 
        - Giá trị này khai báo màu sắc trong quang phổ.
        - Phải có ít nhất 1 màu.
        - Khai báo bao nhiêu màu cũng đc nhưng coi chừng lag website
        - Mặc định tất cả các màu đều đc chia đều không gian, nhưng ta có thể tùy chỉnh độ rộng của từng dải màu riêng biệt trong quang phổ
        - Vidu:
            - `linear-gradient(to top left, 270deg, red, blue, green);`
        - Mặc định tất cả các màu đều đc chia đều không gian, nhưng ta có thể tùy chỉnh độ rộng của từng dải màu riêng biệt trong quang phổ.
        - Vidu:
            - `linear-gradient(to top left, 270deg, red 30%, blue 40%, green 30%);`

# repeating-linear-gradient();
- Cách dùng cũng giống như hàm bình thường nhưng điểm khác duy nhất ở đây đó chính là: Nó sẽ lặp lại dải màu quang phổ nếu dải màu chưa phủ kín hết độ rộng của thẻ.
- Vidu:
    - `repeating-linear-gradient(to top left, 270deg, red 10%, blue 10%, green 5%);`
- Ở đây nó sẽ đc lặp lại 4 lần vì nó chỉ chiếm có 25% không gian con