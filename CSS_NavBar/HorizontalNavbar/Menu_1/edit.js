const menuBar = document.querySelector('.menu-bar');
        
        window.addEventListener('scroll', function() {
            // Khi cuộn qua 50px, thêm class 'scrolled' để CSS ẩn logo đi
            if (window.scrollY > 50) {
                menuBar.classList.add('scrolled');
            } else {
                menuBar.classList.remove('scrolled');
            }
        });