# This is a group of LOGICAL pseudo-class

## 1. Logic khẳng định / phủ định

- Trong pseudo class thuộc xử lí logic có 2 nhóm khá phổ biến là
    <ol type="i">
        <li>is</li>
        <li>not</li>
    </ol>

### :is()
- Chỉ chạy khi các thẻ nằm trong ngoặc, giúp code gọn hơn
- Các thẻ nằm trong ngoặc mới đc áp dụng css. **Không áp dụng cho chính thẻ cha!**
- Nó gom nhóm các thẻ con muốn áp dụng css lên, thay vì viết 1 cách rời rạc
  - Cách dùng:
  ```css
  .parent: is(.child-1, .child-2, .child-3);
  ```

  - Thay thế:
  ```css
  .parent .child-1
  .parent .child-2
  ```

### :not()

- Loại trừ tất cả các thẻ trong điều kiện, sẽ ko đc áp dụng css.
- Gom nhóm các thẻ ko muốn áp dụng css
  - Cách dùng:
  ```css
  .banned: not(.player-1, .player-2);
  ```

  - Ý nghĩa: Trong thẻ banned, tất cả các thẻ con khác đều có css nhưng trừ player-1 và player-2 (người chơi đã bị banned)
  ```css
  button :not(.disable) {
    display: none;
  }
  ```

  - Ý nghĩa: các thẻ button nếu nó ko phải là class disable thì sẽ hiển thị trên màn hình

### :where()

- Giống như **_:is()_** nhưng mức độ ưu tiên của nó là 0 (thấp nhất).

## 2. Logic quan hệ

- Đây là pseudo-class khá mới

### :has()

- Cách thức giống như 1 điều kiện if...else
- Nó sẽ áp dụng **stlye lên thẻ gọi tới nó** nếu thỏa điều kiện bên trong ngoặc
- Cách dùng:

```css
    div :has(img) img{
        ...
    }
```

>Ý nghĩa: Nếu thẻ div có thẻ img bên trong nó sẽ thực hiện css lên **thẻ div**
- Đây là điểm khác biệt với `:is`
