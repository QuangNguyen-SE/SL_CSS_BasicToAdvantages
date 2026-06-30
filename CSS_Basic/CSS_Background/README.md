## 1. background-color
- Xác định màu sắc cho nền của phần tử. Nó sẽ hiển thị dưới cùng, đằng sau hình ảnh nền (nếu có).
    - **Tên màu**: `red`, `black`, `blue`,...
    - **Mã Hex**: `#ffffff`, `#111`, ...
    - **RGB, RGBA**: `rgb(255, 0, 0)`, `rgba(255, 255, 255, 0.5)` (có độ trong suốt).
    - **HSL / HSLA**: `hsl(120, 100%, 50%)`, `hsla(120, 100%, 50%, 0.3)`.
    - **Từ khóa**: `none` (không có ảnh nền - giá trị mặc định).

## 2. background-image
- Xác định một hoặc nhiều hình ảnh làm nền.
    - **URL ảnh**: `url(hinhanh.jpg)`
    - **Gradient tuyến tính**: `linear-gradient(to right, red, blue)`.
    - **Gradient tỏa tròn**: `radial-gradient(circle, red, blue)`.
    - **Từ khóa**: `none`(không có ảnh nền - giá trị mặc định).

## 3. background-position
- Xác định vị trí bắt đầu hiển thị của ảnh nền (tọa độ x và y). Nhưng nó phụ thuộc hoàn toàn vào `background-origin`.
    - **Từ khóa**: `left`, `right`, `top`, `bottom`, `center`.
    - **Phần trăm(%)**: `0%` `0%` (góc trên bên trái), `50%` `50%` (giữa), `100%` `100%` (góc dưới bên phải).
    - **Đơn vị đo**: `10px 20px`, `2rem 5rem`.

## 4. background-size
- Xác định kích thước chiều rộng và chiều cao của ảnh nền.
    - `auto`: Kích thước gốc của ảnh (mặc định).
    - `cover`: Phóng to/thu nhỏ ảnh để phủ kín toàn bộ phần tử (ảnh bị cắt bớt 1 phần nhưng sẽ không bị móp ảnh).
    - `contain`: Phóng to/thu nhỏ ảnh để toàn bộ ảnh nằm trọn vẹn trong phân tử (có thể hở khoảng trống nếu tỷ lệ không khớp)
    - **Đơn vị cụ thể**: `100px 50px`. 
        - Nếu `background-size` nhỏ hơn kích thước của thẻ, nó sẽ tự động xử dụng thuộc tính `repeat`
        > `background-size` có ảnh hưởng tới `background-image` và `background-repeat`.

## 5. background-repeat
- Quy định xem ảnh nền có được lặp lại nếu kích thước ảnh nhỏ hơn kích thước phần tử hay không.
    - `repeat`: lặp lại theo cả chiều ngang và chiều dọc (mặc định).
    - `repeat-x \ repeat-y`: Lặp lại theo 1 chiều (ngang-dọc).
    - `no-repeat`: Không lặp lại, ảnh chỉ hiển thị một lần.
    - `space`: Lặp lại ảnh sao cho không bị cắt xén, các khoảng trống được chia đều giữa các ảnh.
    - `round`: Lặp lại ảnh và co giãn ảnh một chút để vừa khí vùng nền mà không bị cắt xén.

## 6. background-attacchment (Hành vi khi cuộn trang)
- Xác định ảnh nền sẽ di chuyển theo nội dung hay đứng im khi người dùng cuộn trang (scroll).
    - `scroll`: Ảnh nền cuộn theo toàn bộ trang web (mặc định).
    - `fixed`: Ảnh nền đứng im (cố định) so với khung nhìn (viewport), dù nội dung có cuộn đi. Rất hay dùng làm hiệu ứng parallax.
    - `local`: Ảnh nền cuộn theo nội dung bên trong chính phần tử chứa nó.

## 7. background-clip (Khu vực cắt nền)
- Quy định màu nền hoặc ảnh nền sẽ được vẽ trong phạm vi nào của phần tử.
    - `border-box`: Trải dài ra tận viền ngoài cùng của phần tử (mặc định).
    - `padding-box`: Chỉ trải dài tới hết viền trong (padding), không bao gồm viền (border).
    - `content-box`: Chỉ hiển thị nền ở vùng chứa nội dung cốt lõi, không tràn ra padding hay border.
    - `text`: Cắt nền theo hình dáng của chữ (thường dùng kết hợp với -webkit-text-fill-color: transparent để làm chữ có màu gradient).

## 8. background-origin (Điểm gốc của ảnh nền)
- Xác định tọa độ 0, 0 của background-position sẽ bắt đầu từ đâu.
- Nếu như background-attachment: fixed thì background-origin sẽ không hoạt động.
    - `padding-box`: Bắt đầu từ góc của vùng padding (mặc định).
    - `border-box`: Bắt đầu từ góc của vùng border.
    - `content-box`: Bắt đầu từ góc của vùng nội dung.