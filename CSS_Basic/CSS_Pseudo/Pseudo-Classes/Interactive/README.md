# Interactive pseudo-classes apply styles based on <strong>user interaction</strong>
## Basic Pseudo-class

### :hover
```
Active khi trỏ chuột tới nó
```
### :focus
```
Active khi thẻ đó đang đc tập trung 
vidu: 
    -ô input khi chúng ta nhấn vào ô sẽ đổi màu
```
### :valid
```
Active khi có gtri nào đó bên trong thẻ
vidu thẻ input khi gõ 1 kí tự nào đó nó sẽ đổi màu
```
### :active
```
Active khi chúng ta nhấn giữ ô đó
```
## Advance Pseudo-class
### :focus-visible
```
Thay vì thao tác bằng chuột (click), event này cho phép ta thao tác bằng bàn phím nó sẽ tự động hiện ra css
mà ko cần phải rê chuột vào
```
### :focus-within
```
Nó sẽ áp dụng css lên thẻ cha đang bao bọc thẻ con đó nếu thẻ con đang được focus
```
### :checked
```
Chỉ hoạt động với các thẻ nhấn, tích vào ô dữ liệu 
:valid dùng cho các ô nhập liệu 
thì nó dùng cho 3 thẻ đặc thù nhất
    1. Checkbox
    2. Ratio
    3. Select-Option
```
### :target
```
Chỉ hoạt động dựa vào đg "Link url và id của thẻ"
vidu:
    http://127.0.0.1:5500/CSS_Pseudo/Pseudo-Classes/AdvancePseudo/target.html#chuong2

    thì thẻ nào có id là #chuong2 sẽ đc css làm nổi bật
```
# Important 
Trong css có thứ tự ưu tiên về LVHA (LoVe-HAte)
Nghĩa là Link - Visited - Hover - Active (Phải đứng theo thứ tự thế này)
Link phải đứng đầu tiên và đứng cuối tất cả là Active thì css mới thực hiện đc nếu ko sẽ xảy ra lỗi

