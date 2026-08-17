# Property là gì?
- `@property` là 1 trong những cách khai báo biên trong css.
- Dùng để tạo ra 1 biến hoặc 1 thuộc tính custom theo ý mình.
# Tại sao lại cần nó?
- Vì custom property bình thường sẽ không có kiểu dữ liệu, khiến trình duyệt khá bối rối, và sẽ đc xem nó là 1 chuỗi kí tự.
- Khi thiết kế animation, transition, trình duyệt sẽ không biết cách nội suy '360deg' là góc thay vì là chuỗi.

# Property Rule and how to use it!
- <h2>Property Rule</h2>
    ```css
    @property --myColor {
        syntax: "<color>";
        inherits: true;
        initial-value: lightgray;
    }
    ```
    1. `--myColor`
        - Tên biến được khai báo.
        - Nếu có 2 chữ có thể dùng theo cú pháp cammel case, hoặc dùng gạch nối.
    2. `syntax`
        - Đây chính là từ khóa **khai báo kiểu dữ liệu** của biến trong css
        - Có rất nhiều kiểu khai báo syntax:
            - `'<length>'`: độ dài có đơn vị. Vidu: `10px`, `2em`, `1rem`
            - `'<number>'`: số thực, không đơn vị. Vidu: `1.5`, `-3`, `0`
            - `'<percentage>'`: phần trăm. Vidu: `50%`
            - `'<length-percentage>'`: length **hoặc** percentage. Vidu: `10px` hoặc `50%`
            - `'<color>'`: màu sắc. Vidu: `red`, `#fff`, `rgb(0 0 0)`
            - `'<image>'`: ảnh. Vidu: `url(a.png)`, `linear-gradient(...)`
            - `'<url>'`: đường dẫn. Vidu: `url(a.png)`
            - `'<integer>'`: số nguyên. Vidu: `1`, `-5`, `100`
            - `'<angle>'`: góc. Vidu: `90deg`, `0.5turn`, `1rad`
            - `'<time>'`: thời gian. Vidu: `2s`, `300ms`
            - `'<resolution>'`: độ phân giải. Vidu: `300dpi`
            - `'<transform-function>'`: 1 hàm biến đổi. Vidu: `rotate(90deg)`
            - `'<transform-list>'`: danh sách hàm biến đổi. Vidu: `rotate(90deg) scale(2)`
            - `'<custom-ident>'`: 1 từ định danh tuỳ ý. Vidu: `my-value`, `active`
        - Kiểu "vũ trụ" - không kiểm tra gì cả:
            - `syntax: '*';`
            - Chấp nhận mọi token hợp lệ, giống custom property thường (không type-check).
            - ⚠️ Nhược điểm: biến kiểu `*` **không animate/transition mượt được** vì browser không biết cách nội suy - mất luôn lý do chính để dùng `@property`.
        - Danh sách keyword tự định nghĩa (chỉ nhận đúng 1 trong các từ khoá liệt kê, dùng `|` để phân tách):
            - `syntax: 'small | medium | large';`
        - Kết hợp nhiều kiểu bằng `|` (OR):
            - `syntax: '<length> | <percentage>';`
        - Multiplier - cho phép nhiều giá trị:
            - `+`: danh sách cách nhau bởi khoảng trắng. Vidu: `syntax: '<length>+'` → `10px 20px 30px`
            - `#`: danh sách cách nhau bởi dấu phẩy. Vidu: `syntax: '<color>#'` → `red, blue, green`
    3. `inherits`
        - Khai báo biến này **có được kế thừa xuống phần tử con** hay không.
        - Chỉ nhận 2 giá trị: `true` hoặc `false`.
        - Bắt buộc phải khai báo, không có giá trị mặc định (không khai báo thì `@property` không hợp lệ, browser bỏ qua toàn bộ rule).
        - `true`: phần tử con không tự set lại biến thì sẽ tự lấy giá trị của phần tử cha (giống cách `color` hay `font-size` kế thừa bình thường).
        - `false`: biến chỉ tồn tại đúng ở phần tử khai báo, con không tự lấy được, phải set lại từ đầu.
        - Vidu:
            ```css
            @property --angle-x {
                syntax: '<angle>';
                inherits: false;
                initial-value: 0deg;
            }
            ```
            - Ở đây để `false` vì `--angle-x` chỉ dùng riêng cho `.cube`, không muốn các `.face` con bên trong bị dính/kế thừa giá trị này.
    4. `initial-value`
        - Giá trị khởi tạo mặc định của biến, dùng khi:
            - Biến chưa được set ở bất kỳ đâu trong CSS.
            - Giá trị được gán không hợp lệ với `syntax` đã khai báo (vd: gán `red` cho biến kiểu `<angle>`).
        - Phải là 1 giá trị **hợp lệ** với kiểu đã khai báo trong `syntax` (nếu `syntax: '<color>'` thì `initial-value` phải là 1 màu, không được để trống).
        - Ngoại lệ: nếu `syntax: '*'` thì `initial-value` có thể bỏ qua (không bắt buộc), vì kiểu `*` chấp nhận mọi giá trị.
        - Vidu:
            ```css
            @property --myColor {
                syntax: "<color>";
                inherits: true;
                initial-value: lightgray;
            }
            ```
            - Nếu chưa nơi nào set `--myColor` thì mặc định nó sẽ là `lightgray`.

# Vidu áp dụng thực tế
```css
@property --angle-x {
    syntax: '<angle>';
    inherits: false;
    initial-value: 0deg;
}

.cube {
    transform: rotateX(var(--angle-x));
    animation: cubeRotate 5s linear infinite;
}

@keyframes cubeRotate {
    from { --angle-x: 0deg; }
    to   { --angle-x: 360deg; }
}
```
- Nhờ có `@property` khai báo kiểu `<angle>`, trình duyệt biết cách nội suy giữa `0deg` và `360deg` → cube quay tròn mượt mà.
- Nếu đổi `syntax: '<angle>'` thành `syntax: '*'` thì animation sẽ hết mượt, vì lúc đó `--angle-x` lại bị coi là chuỗi text vô kiểu, mất khả năng nội suy giữa các keyframe.

# Lưu ý
- Mỗi `@property` chỉ khai báo được **1 biến duy nhất**, không gộp nhiều biến vào chung 1 block được (khác với khai báo biến thường trong `:root { --a: 1; --b: 2; }`).
- Cả 3 descriptor `syntax`, `inherits`, `initial-value` đều **bắt buộc** phải có đủ, thiếu 1 trong 3 thì cả `@property` rule sẽ bị coi là không hợp lệ (invalid) và bị trình duyệt bỏ qua hoàn toàn.