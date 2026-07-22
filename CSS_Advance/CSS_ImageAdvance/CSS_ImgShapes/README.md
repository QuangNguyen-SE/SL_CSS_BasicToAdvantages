# CSS Image Shapes

- Image shape dùng property `clip-path` để cắt và tạo hình cho màu sắt của thẻ
- `clip-path` không chỉ dùng để cắt img, mà còn dùng để cắt background.
- Mặc định không gian chuẩn của mỗi thẻ sẽ là 1 HCN.
- Nhưng nếu ta muốn nó thành hình tròn đúng nghĩa (không dùng border-radius), hay bán hình tròn, hoặc hình tam giác, tứ giác,....
- Ta sẽ dùng đến thuộc tính css `clip-path` dùng để tạo hình không gian 2D cho 1 node.
- Ngoài ra `shape-outside` là 1 thuộc tính đi kèm với `clip-path` nằm tạo ra hiệu ứng thị giác.

# Cặp bài trùng

- `clip-path` + `shape-outside`

## Inside clip-path:

- Trong `clip-path` sẽ có 3 thuộc tính chính đó là:
  1. `circle()`:
     - Bên trong nó sẽ nhận 1 giá trị phần trăm góc.
     - VD:
     ```css
     clip-path: circle(50%);
     ```

     - Giá trị đó có thể đi kèm với keyword `at` position.
     ```css
     clip-path: circle(50% at right);
     ```
  2. `ellipse()`:
     - Bán hình tròn nhận 2 giá trị phần trăm góc tương ứng với `x-axis` và `y-axis`.
     - VD:
     ```css
         ellipse(x-axis y-axis);
     ```

     - Giá trị đó có thể đi kèm với keyword `at` position.
     ```css
         ellipse(x-axis y-axis at right);
     ```
  3. `polygon()`:
     - Đây là value mạnh nhất trong thuộc tính `clip-path` bởi vì nó có thể tạo ra bất kì 1 hình 2D nào.
     - `polygon()` nhận vào các cặp giá trị x-y tương ứng với 1 hình có mấy góc.
     - Cặp giá trị x-y giống như tọa độ của các điểm đó trong hình
     - Vidu: 1. Hình tam giác có 3 góc thì `polygon` nhận vào 3 cặp giá trị x-y.
       `css
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    ` 2. Hình chữ vuông có 4 góc thì `polygon` nhận vào là 4 cặp giá trị x-y.
       `css
    clip-path: polygon(0% 0%, 0% 100%, 100% 0%, 100% 100%);
    `
       ....
     - Còn rất nhiều giá trị khác và hình khác, chúng ta thậm chí có thể tạo ra cả hình thang
     - Quy tắc cơ bản là:
       1. Góc trên - trái: 0% 0% (X=0, Y=0)

       2. Góc trên - phải: 100% 0% (X=100%, Y=0)

       3. Góc dưới - phải: 100% 100% (X=100%, Y=100%)

       4. Góc dưới - trái: 0% 100% (X=0, Y=100%)
