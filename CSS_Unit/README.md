# CSS-Unit: Đơn vị đo lường trong css
- Trong CSS được chia ra làm 2 loại đơn vị chính là 

## Absolute Unit
- Đây là kiểu đơn vị đo lường cố định dễ thấy nhất là **px (pixel)**.
- Dù màn hình có thu nhỏ phóng to thì các thẻ này vẫn cố định kích thước.
- Thường dùng để set min/max-heigh/width cho các thẻ vì nó cố định.

|Unit|Name|Desciption|
|----|----|----------|
| px | Pixels | The most used (1px= 1/96th of 1-in)
| cm | Centimeters | Most used in print stylesheet 
| mm | Milimeters | Primarly used in print stylesheet
| in | inches | Primarly used in print stylesheet
| pt | points | The most used (1pt= 1/72 of 1-in)
| pc | Picas | a print unit ( 1pc=12pt)
||

## Relative unit
- Đây là các kiểu đơn vị đo lường động dễ thấy nhất là **em, rem, %**.
- Nó sẽ phụ thuộc vào độ co giãn của thẻ cha, hoặc độ con giãn của màn hình
- Giúp trang web responsive layout thích nghi trên toàn bộ màn hình. 
- Không làm vỡ cấu trúc trang web. 

|Unit|Desciption|
|----|----------|
| em | Relative to the font-size of **the parent element**
| rem | Relative to the font-size of **the root HTML element** 
| vw | Relative to 1% of the width of the viewport*. 100vw = full width of the viewport
| vh | Relative to 1% of the height of the viewport*. 100vh = full height of the viewport
| vmin | Relative to 1% of viewport's* smaller dimension
| vmax | Relative to 1% of viewport's* larger dimension
| % | Relative to the size of the parent element 
| fr | A fractional unit. 1fr equals 1 part of the available space
| ch | Relative to width of the "0" (zero) character
||
