# radial-gradient
- Quang phổ xuyên tâm làm cho các dải màu lan từ tâm ra ngoài cùng
- Ta có thể thay đổi vị trí tâm của nó.

# Inside radial-gradient
- Trong radial-gradient có 3 thuộc tính chính !!!
    1. Hình dáng của gradient và kích thước vị trí của nó
    2. start color
    3. end color
- Bắt buộc tối thiểu phải có 2 màu sắc giống linear-gradient
`radial-gradient(shape size at position, start color, ..., end color)`
- `shape`, `size`, `position` là 3 thuộc tính gắn liền với nhau không cần dùng dấu phẩy
- Mô tả:
    - `shape`(optional):
        - Shape có 2 kiểu chính trong radial
            1. ellipse (default).
            2. circle.
        - `radial-gradient(circle)`.
    - `size` (optional):
        - Size chính là độ lan của nó tính từ tâm, kích thước
        - Size có 4 giá trị:
            1. **farthest-corner** (default); lan tỏa đến góc xa nhất tính từ trung tâm.
            2. **closest-side**: bán kính của gradient sẽ vừa chạm đến cạnh gần nhất so với vị trí tâm của nó.
            3. **closest-corner**: gradient sẽ lan tỏa đến góc gần nhất của phần tử
            4. **farthest-side**: bán kính của gradient sẽ lan tỏa để chạm đến cạnh xa nhất của phần tử.
    - ` at position` (optional):
        - Xác định vị trí bắt đầu, điều chỉnh vị trí tâm
        - Có dùng key word `at` 
        - Có 3 cách điều chỉnh:
            - **Từ khóa vị trí**: `top`, `bottom`, `left`, `right`.
            - **Phần trăm**: số phần trăm đầu tiên là hướng từ dưới lên trên phần trăm thứ 2 là từ phải sang trái: `0% 100%` (góc dưới cùng bên trái).
            - **Giá trị tuyệt đối**
    - `color`(required):
        - Giống như linear-gradient thì radial bắt buộc phải có 2 màu trở lên.
