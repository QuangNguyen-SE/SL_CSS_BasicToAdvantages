# Variable
- Trong css có thể tạo biến như các ngôn ngữ khác, và biến đó mang theo những thuộc tính và giá trị tương tự như 1 ngôn ngữ lập trình thông thường.
>Biến chỉ chứa value, không chứa tên của property đó.
# Declare a VARIABLE
- Cách để khai báo 1 biến trong css đó chính là dùng 2 dấu gạch nối.
- Vidu: 
    ```css
    .class{
        --primary-color: black;
    }
    ```
- **Tuy nhiên biến không được phép nằm ngoài 1 class**
- Phải khai báo nó nằm 1 trong class, 1 id, 1 hàm gì đó bất kì, chứ nó không được nằm trỏng không.
>Biến chỉ chứa value, không chứa tên của property đó.



## var() function
- Hàm `var()` rất phổ biến trong css, nó dùng để gọi các biến đã được khai báo sẵn.
- Hàm `var(--name, value)` đòi 2 giá trị `--name`(required) và `value`(optional).
    1. `--name` là giá trị bắt buộc khi sử dụng hàm, nó là tên của biến bạn đặt.
    2. `value` là giá trị không bắt buộc, nó **chỉ hoạt động khi hàm `var()` không thể gọi tới biến `--name` trong 1 số trường hợp**. Là 1 giá trị thay thế tạm thời cho biến `--name`.




## Scope of variable.
- Phạm vi của biến trong css có 4 dạng hình thức
    1. **Global scope — khai báo trên :root**.
        - **Trong mục css-basic phần nội dung pseudo-class `:root` đã nói qua.**
        - Muốn khai báo 1 biến global thì phải khai báo thông qua phần `:root`.
        ```css
        :root {
            --primary-color: blue;
        }
        ```
    
    2. **Local scope — khai báo trong 1 class/id cụ thể**
        - Biến chỉ có tác dụng bên trong chính nó, và các con của nó (do tính chất kế thừa của con trong cây DOM)
        ```css
            .card {
                --card-bg: white;
                background-color: var(--card-bg);
            }

            .button {
                background-color: var(--card-bg); /* KHÔNG dùng được, ngoài scope của .card */
            }
        ```
    
    3. **Kế thừa xuống phần tử con (inheritance)**
        - Các thẻ con bên trong nó đều được kế thừa và gọi để dùng 1 cách trực tiếp.
        ```html
            <div class="card">
                <p class="text">Hello</p>
            </div>
        ```
        ```css
            .card {
                --card-bg: lightgray;
            }
            .text {
            background-color: var(--card-bg); /* dùng được, vì .text nằm trong .card, biến kế thừa xuống con */
            }

        ```
    4. **Ghi đè biến theo scope gần nhất (override)**
        - Biến cùng tên khai báo ở **scope nhỏ hơn** (gần phần tử hơn) sẽ *ghi đè giá trị* ở **scope lớn hơn** (giống nguyên tắc CSS specificity theo cascade).
        - Biến có thể thay đổi override scope.
        ```css 
        :root {
            --primary-color: blue;
        }

        .card {
            --primary-color: green; /* ghi đè lại chỉ trong phạm vi .card */
        }

        .title {
            color: var(--primary-color); /* blue, vì .title nằm ngoài .card */
        }

        .card .title {
            color: var(--primary-color); /* green, vì nằm trong .card */
        }
        ```
