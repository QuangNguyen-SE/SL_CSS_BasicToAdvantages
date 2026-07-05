const pages = document.querySelectorAll(".book > div");
const book = document.querySelector(".book");

// 1. Tự động set z-index ban đầu cho tất cả các trang
// Trình duyệt tự tính: Trang 1 (z: 5), Trang 2 (z: 4)... Trang 5 (z: 1)
pages.forEach(function(page, index) {
    page.style.zIndex = pages.length - index; 

    page.addEventListener("click", function() {
        const isFlipped = this.classList.contains("flip");
        
        if (!isFlipped) {
            // ----- HÀNH ĐỘNG MỞ TRANG (Lật sang trái) -----
            this.classList.add("flip");
            
            // Đợi đúng 0.4s (Trang sách đang đứng thẳng 90 độ)
            setTimeout(function() {
                // Đảo ngược z-index: Trang 1 đổi thành 1, Trang 2 thành 2...
                page.style.zIndex = index + 1; 
            }, 400); 
            
        } else {
            // ----- HÀNH ĐỘNG ĐÓNG TRANG (Lật về phải) -----
            this.classList.remove("flip");
            
            // Đợi đúng 0.4s (Trang sách đang đứng thẳng 90 độ)
            setTimeout(function() {
                // Trả z-index về vị trí cũ ban đầu
                page.style.zIndex = pages.length - index; 
            }, 400);
        }
        
        // Đoạn code dịch chuyển sách ra giữa màn hình
        setTimeout(() => {
            const isBookOpen = document.querySelectorAll(".flip").length > 0;
            if (isBookOpen) {
                book.classList.add("shift-right");
            } else {
                book.classList.remove("shift-right");
            }
        }, 0);
    });
});