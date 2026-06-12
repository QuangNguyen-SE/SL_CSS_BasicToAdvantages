# CSS-Color
- CSS color là property chỉnh màu cho trang web, có 4 cách setting màu sắc

## 1. Chữ tiếng anh
- Setting màu sắc bằng chữ cái alpha tuy nhiên cách này ít khi sử dụng trong design web chuyên nghiệp bởi vì:
    1. Không chỉnh đc độ đậm nhạc màu sắc cụ thể
    2. Không linh hoạt, dễ bị nhầm sang màu khác
- Vidu: `color: red`, `color: blue`

## 2. Mã HEX: #ffffff
- Đây là cách nhiều người hay dùng nhất, chính là mã HEX
- Mã HEX hơi phức tạp nhưng có thể điều chỉnh độ đậm nhạt của màu sắc.
- từ 0-99 được biểu thị bằng số và 100-255 được biểu thị bằng chữ cái.
- cứ mỗi 2 cụm ff là đại diện cho 1 trong 3 màu cơ bản. 
- VIDU: 
    - Màu đỏ: #ff0000;
    - Màu xanh lá: #00ff00;
    - Màu xanh dương: #0000ff;
- Đây là 3 màu cơ bản để tạo ra các màu khác bằng cách pha trộn tỉ lệ với nhau.

## 3. Mã HSL
- Đây là mã ít dùng nhất vì độ phức tạp của nó, xem thêm trên web w3schools.

## 4. Mã RGB và RGBA
- RGB và RGBA là 2 thằng dễ xài nhất thay vì dùng mã HEX.
- RGB đại diện cho 3 màu theo tên là: RED, GREEN, BlUE.
- Mã màu đc chia làm 3 đơn vị và maxium hệ số của nó là 255.
- VIDU:
    - RED: rgb(255, 0, 0);
    - BLUE: rgb(0,0,255);
    - GREEN: rgb(0,255,0);
- RGBA là mã cải tiến của RGB cho phép ta điều chỉnh độ đậm nhạt của màu ở đơn vị thứ 4;

# COLOR KEYWORD
- Có 3 keyword color chính!!
    1. `transparent` 
    2. `currentcolor`
    3. `inherit`