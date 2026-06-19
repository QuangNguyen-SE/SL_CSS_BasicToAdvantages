# Text effect
- CSS có những property chuyên xử lí các dòng chữ bị overflow, word wrapping, line breaking và writting mode.
## text-overflow:
- `text-overflow` chỉ hoạt động được khi thẻ đó đã đc setting bởi 2 property sau:
    1. `overflow: hidden;`
    2. `white-space: nowrap;`
- property này chỉ có 2 value là: 
    1. `clip` (default value);
    2. `ellicips` (value này sẽ biến đoạn chũ bị thừa khúc sau thành dấu `...`)
## word-wrap:
- `word-wrap` là property xử lí các đoạn chữ bị chàn ra khỏi kích thước của box
- Nó chỉ có 1 value duy nhất: `break-word` bẻ chữ và phần bị thừa sẽ phải xuống hàng.
## word-break:
- `word-break` giống như thằng ở trên, nhưng nó xịn xò hơn
- Nó có 3 value chính:
    1. `normal` (default) 
    2. `break-all` như break-word
    3. `keep-all` tránh cho chữ bị break, có thể đẩy các chữ khác xuống hàng để tối ưu 1 hàng duy nhất cho chữ đó nhưng nếu chữ đó quá dài thì vẫn bị overflow.
## writting-mode:
- `writing-mode` là property điểu chỉnh hướng của 1 hàng chữ hiển thị theo chiều ngang hay chiều dọc.
- Có 3 value chính:
    1. `horizontal-tb`;
    2. `vertical-lr`;
    3. `vertical-rl`;