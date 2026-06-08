# Stacking Order (Thứ tự xếp lớp)
- Stacking order là khái niệm liên quan về nguyên tắc **thứ tự ưu tiên xếp lớp** của 1 cấu trúc thẻ html** 
- Nếu không có gì thay đổi (unset z-index) thì thứ tự *ưu tiên* của các lớp đó lần lượt là:

    1. **Lớp đáy cùng (background):** 
        - Màu nền và viền.
    2.  **Lớp z-index âm:**
        - Các thẻ con được gán z-index nhỏ hơn 0
    3. **Lớp khổi bình thường:** 
        - Các thẻ con ko có thuộc tính position (normal flow)
        - Các thẻ con như position: fixed / absolute / sticky là ko được tính là khối block bình thường nữa(unnormal flow)
    4. **Lớp chữ và nội dung (inline):**
        - Các nội dung về văn bản hoặc thẻ inline (span)
    5. **Lớp z-index dương**:
        - Những thẻ con được chỉnh thành z-index lớn hơn 0 đều nằm ở lớp này.

    
    
