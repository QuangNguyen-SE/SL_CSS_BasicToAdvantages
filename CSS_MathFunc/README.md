# Math Function trong CSS
- Math Function bao gồm: 
    1. `calc()`
    2. `max()`
    3. `min()`
    4. `clamp()`
## calc():
- Đây là function thực hiện phép cộng trừ nhân chia value với value;
## max():
- Đây là function lấy 1 list các value cách nhau bằng dấu "," và chọn ra value có gtri lớn nhất
## min():
- Ngược lại với `max()`
## clamp():
- Đây là 1 function đặc biệt nó sẽ lấy giá trị trung bình giữa 3 giá trị theo sau:
    - **min**: small allowed value.
    - **preferred**: Required. The preferred value.
    - **max**: largest allowed value.
    >[NOTE] clamp(min, pre, max);
- Các giá trị dùng cho clamp nên là **RELATIVE UNIT**
```css
font-size: clamp(1rem, 2.5vw, 2rem);
/* Ở đây có nghĩa là hãy chỉnh font-size có kích thước bằng 2.5 nhưng không bao giờ được phép nhỏ hơn 1rem và lớn hơn 2rem */
```
