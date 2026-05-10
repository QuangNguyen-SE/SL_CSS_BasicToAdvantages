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
        - Chọn thẻ theo định dạng thứ tự mong muốn
        - :nth-of-type(odd): những thẻ p chẵn mới đc áp dụng (ứng dụng thiết kế table).
        - :nth-of-type(even): những thẻ p lẻ đc áp dụng.
        - :nth-of-type(Xn+Y): 
            Lưu ý:  n bắt đầu từ 0
                    X: là số bước nhảy
                    Y: là độ lệch

