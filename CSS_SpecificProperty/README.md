# CSS specificity
- Là thuật toán ưu tiên để quyết định về mức độ ưu tiên của các style cùng property trong 1 thẻ cái nào sẽ được áp dụng
    #### Vidu:
`p.class{color: red;}` hay `p#id{color:blue;}` cái nào sẽ được css ưu tiên áp dụng hơn?
- Như vậy trong css sẽ có 1 khái niệm gọi là specificity nghĩa là cụ thể hóa style nào được ưu tiên thông qua quy tắc tính điểm thông qua **Specificity Hierarchy**

## Specificity Hierarchy
- Cách tính điểm ưu tiên như sau:
    - X - Đại diện cho ID selector 
        - Đây là mức độ ưu tiên cao nhất bởi vì 1 thẻ chỉ đc phép có duy nhất 1 id
    - Y - Đại diện cho **class**, **attribute**, **pseudo-class**.
        - 3 thằng này ngang hàng nhau vì vậy khi khai báo css mặc định ưu tiên thằng nằm cuối cùng.
    - Z - Đại diện cho **element**, **pseudo-element**.
    > **LƯU Ý**: Css sẽ so điểm X trc nếu X bằng nhau sẽ qua so điểm Y, nếu Y bằng thì tới Z.

    #### Vidu-1:
    ```html
        <html>
        <head>
            <style>
                #demo {color: blue;} /* weight: 1-0-0 */
                p#demo {color: orange;} /* weight: 1-0-1 WINS! */
                .test {color: green;} /* weight: 0-1-0 */
                p.test {color: green;} /* weight: 0-1-1 */
                p {color: red;} /* weight: 0-0-1 */
            </style>
        </head>
        <body>
            <p id="demo" class="test">Hello World!</p>
        </body>
        </html>
    ```
    #### Vidu-2: nếu thẻ có full điểm X-Y-Z thì thẻ đó win
    ```html
        <html>
        <head>
            <style>
                #demo {color: blue;} /* weight: 1-0-0 */
                p#demo {color: orange;} /* weight: 1-0-1 */
                p#demo.test {color: white;} /* weight: 1-1-1 WINS! */
                .test {color: green;} /* weight: 0-1-0 */
                p.test {color: green;} /* weight: 0-1-1 */
                p {color: red;} /* weight: 0-0-1 */
            </style>
        </head>
        <body>
            <p id="demo" class="test">Hello World!</p>
        </body>
        </html>
    ```

