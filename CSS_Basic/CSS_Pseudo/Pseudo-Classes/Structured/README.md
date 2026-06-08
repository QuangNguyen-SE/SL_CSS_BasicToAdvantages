# Structural pseudo-classes select elements based on <strong>their position in the document tree</strong>

## 1. Type-based (Nhóm dựa trên loại thẻ)
- Đây là nhóm chỉ đếm các phần tử có **cùng loại** thẻ, ~~khác thẻ thì ko đc~~.
- Ở dưới sẽ cho ví dụ của 1 thẻ p
    ### p:first-of-type
        - Chọn phần tử p đầu tiên xuất hiện trong
        thẻ cha.
    ### p:last-of-type
        - Chọn phần tử p cuối cùng xuất hiện trong thẻ cha
    ### p:only-of-type
        - Chỉ xảy ra khi thẻ cha bên trong chỉ chứa đúng 1 thẻ p (có các thẻ khác nhưng chỉ đc đúng 1 thẻ p duy nhất)
    ### p:nth-of-type(Xn+Y)
        - Chọn thẻ theo định dạng thứ tự mong muốn và bỏ qua những thẻ ko phải là thẻ p

        - :nth-of-type(odd): những thẻ p chẵn mới đc áp dụng (ứng dụng thiết kế table).

        - :nth-of-type(even): những thẻ p lẻ đc áp dụng.

        - :nth-of-type(Xn+Y): 
            Lưu ý:  n bắt đầu từ 0
                    X: là số bước nhảy
                    Y: là độ lệch
    ### p:nth-last-of-type(Xn+Y)
        - Giống như trên nhưng đếm ngược từ dưới lên
    ### p:only-of-type
        - Chỉ hoạt động khi có 1 mình duy nhất thẻ p trong thẻ cha
        - Trong cha có thể có nhiều thẻ khác p, nhưng chỉ đc duy nhất 1 thẻ p
## 2. Child-based (Nhóm dựa trên vị trí bất kỳ)
- Nhóm này đếm thứ tự dựa trên ***tất cả các thẻ con*** nằm trong thẻ cha, ***không phân biệt*** đó là thẻ div, p, hay span
    ### p:first-child
        - Chỉ hoạt động khi và chỉ khi nó là con đầu tiên của thẻ cha, phải nằm trên cùng tất cả các thẻ và nó phải là thẻ p
        - Khác với first-of-type là nó ko cần nằm trên cùng so với tất cả các thẻ, chỉ cần nó là thẻ p đầu tiên
    ### p:last-child
        - Cũng giống như first-child nhưng nghĩa thì ngược lại
        - Phải là thẻ p nằm ở cuối cùng trong thẻ cha
    ### p:nth-child(Xn+Y)
        - Chọn thẻ theo số thứ tự tuyệt dối
        - Cũng giống như nth-of-type 
        - Nhưng điểm khác biệt nó phải nằm đúng vị trí thứ tự (Xn+Y) trong thẻ cha
        -Nếu giả dụ nth-child(3):
            - Nhưng ở vị trí thứ 3 ko phải là thẻ p
            thì nó sẽ ko hoạt động
            - Phải là thẻ p nằm ở vị trí thứ 3 trong thẻ cha (Thứ tự tuyệt đối).
    ### p:nth-last-child(Xn+Y)
        - Công dụng y chang nth-child nhưng nó sẽ đếm từ dưới lên
    ### p:only-child
        - Chỉ khi trong thẻ cha chỉ có đúng 1 mình thẻ p thì nó sẽ áp dụng
        - LƯU Ý: Nó phải đứng đúng duy nhất 1 mình trong thẻ cha(Ko được phép tồn tại bất kì thẻ nào khác)
        - Ứng dụng cho các notification, các modal thông báo
## 3. Special Pseudo-Class
- Đây là nhóm thẻ đặc biệt cho 1 mục đích cụ thể
    ### :root
        - Đây là nhóm pseudo-class đặc biệt, công dụng dùng để khai báo biến trong css
        - VIDU:
            :root{
                --primary-bg-color: #ffffff
            }
    ### :empty
        - Class này chỉ hoạt động khi và chỉ khi thẻ đó là empty và ko chứa gì bên trong (Kể cả khoảng trắng)
    - [x] &lt;div&gt; &lt;/div&gt;
    - [o] &lt;div&gt;&lt;/div&gt; 
    