# Attribute Selectors:
- Cho phép định dạng lại các thẻ có thuộc tính/class thỏa điều kiện trong ngoặc []

## 7 Loại bộ chọn trong Attribute Selector
1. Bộ chọn tồn tại:
    - Chọn tất cả các phần tử có thuộc tính được *chỉ định*. không quan tâm giá trị của nó là gì.
    ```css
    /* Chọn tất cả các thẻ a có thuộc tính target (thường là target="_blank") */
    a[target]{
        background-color: yellow;
    }
    ```

2. Bộ chọn khớp chính xác:
    - Chọn phần tử có thuộc tính mang chính xác giá trị được khai báo
    ```css
    /* Chỉ định dạng cho các ô nhập liệu là checkbox */
    input[type="checkbox"]{
        background-color: yellow;
    }
    ``` 

3. Bộ chọn chứa từ độc lập:
    - Chọn phần tử có thuộc tính chứa một *danh sách* các tử cách nhau bằng khoảng trắng, trong đó có một từ khớp chính xác với giá trị chỉ định
    ```css
    /* Khớp với <div data-info="vietnam hanoi"> nhưng KHÔNG khớp với <div data-info="vietnam-hanoi"> */
    [data-info~="hanoi"] {
        border: 1px solid red;
    }
    ``` 
4. Bộ chọn tiền tố phân tách bằng dấu gạch ngang:
    - Chọn phần tử có thuộc tính *chính xác* là value hoặc bắt đầu bằng value- 
    - Thường dùng để xác định ```lang```
    ```css
    /* Khớp với <p lang="en"> và <p lang="en-US"> */
    p[lang|="en"] {
        color: blue;
    }
    ``` 
5. Bộ chọn bắt đầu với chuỗi:
    - Chọn phần tử có thuộc tính có giá trị bắt đầu bằng chuỗi kí tự được chỉ định
    - Dấu ^ tượng trưng cho sự bắt đầu
    ```css
    /* Chọn tất cả các liên kết bảo mật (bắt đầu bằng https) */
    a[href^="https://"] {
        color: green;
    }
    ```
6. Bộ chọn kết thúc với chuỗi:
    - Chọn phần tử có giá trị kết thúc bằng chuỗi ký tự
    - $ tượng trưng cho sự kết thúc
    ```css
    /* Tự động thêm biểu tượng cho các liên kết tải file PDF */
    a[href$=".pdf"] {
        padding-right: 20px;
        background: url('pdf-icon.png') no-repeat right center;
    }
    ```
7. Bộ chọn chứa chuỗi con:
    ```css
    /* Chọn các ảnh mà tên file hoặc đường dẫn có chữ "avatar" */
    img[src*="avatar"] {
        border-radius: 50%;
    }
    ```

## Cách phân biệt hoa thường
- Mặc định CSS phân biệt chữ hoa thường đối với giá trị thuộc tính
- **i Insentivie**: Không phân biệt chữ hoa hay chữ thường 
- **s (Sensitive)**: Ép buộc phân biệt chữ hoa chữ thường một cách nghiêm ngặt.
```css
/* Khớp với .pdf, .PDF, .Pdf, .pDf... */
a[href$=".pdf" i] {
  color: red;
}

/* Chỉ khớp chính xác với "StrictValue" */
[data-type="StrictValue" s] {
  text-transform: uppercase;
}
```

## Các ứng dụng thực tế (Use Cases) hay nhất

### Ứng dụng 1: Định dạng form nâng cao không cần dùng tới class
- Thay vì đặt class cho từng loại input thì tận dụng thuộc tính ```type``` 
```css 
/* Định dạng ô nhập văn bản và email */
input[type="text"], input[type="email"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
}

/* Định dạng trạng thái bị vô hiệu hóa (disabled) */
input[disabled] {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

/* Định dạng các trường bắt buộc (required) */
input[required] {
  border-left: 4px solid red;
}
```
### Ứng dụng 2: Tùy biến giao diện dựa trên thuộc tính
- ```data-*``` attribute là nơi lưu trữ dữ liệu tùy biến cực tốt trong HTML5. Bạn có thể dùng CSS để đổi theme hoặc trạng thái 
```css
/* Thiết lập chế độ tối/sáng (Dark/Light mode) dựa trên data-theme ở thẻ body */
body[data-theme="dark"] {
  background-color: #121212;
  color: #ffffff;
}

body[data-theme="light"] {
  background-color: #ffffff;
  color: #000000;
}
```
### Ứng dụng 3: Cải thiện trải nghiệm người dùng (UX) và hỗ trợ tiếp cận (Accessibility)
```css
/* Cảnh báo lập trình viên nếu ảnh thiếu thuộc tính alt (tốt cho SEO & Trình đọc màn hình Screen Reader) */
img:not([alt]) {
  outline: 5px solid red;
}

/* Định dạng các phần tử đang ẩn đối với Screen Reader */
[aria-hidden="true"] {
  opacity: 0.5;
}
```

## Ưu và Nhược
| Ưu điểm | Nhược điểm |
|---------|------------|
|Giữa html sạch sẽ, giảm thiểu việc lạm dụng class quá nhiều| HIệu năng sẽ tốn tài nguyên với các dòng máy yếu|
|Tự động hóa cao|Rất phức tạp|
|Linh hoạt với Javascript|

# Bảng tóm tắt các cú pháp attribute selector
| Ký tự | Ý nghĩa | Ví dụ minh họa |
| :---: | :--- | :--- |
| `=` | Khớp chính xác hoàn toàn | `[type="text"]` |
| `~=` | Chứa một từ độc lập (cách bằng khoảng trắng) | `[class~="btn"]` |
| `\|=` | Khớp chính xác hoặc bắt đầu bằng từ đó + dấu `-` | `[lang\|="en"]` |
| `^=` | Bắt đầu bằng chuỗi | `[href^="http"]` |
| `$=` | Kết thúc bằng chuỗi | `[href$=".png"]` |
| `*=` | Chứa chuỗi con ở bất kỳ vị trí nào | `[src*="logo"]` |

- Ở dòng chứa ký tự |=, thêm dấu gạch chéo ngược (\) trước dấu gạch dọc (|) để tránh việc trình biên dịch Markdown hiểu nhầm đó là vách ngăn của cột (table column)