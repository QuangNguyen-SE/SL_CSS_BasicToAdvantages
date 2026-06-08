// Lấy các phần tử từ HTML
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const sideMenu = document.getElementById('side-menu');

// Bắt sự kiện khi click vào nút 3 gạch (Mở menu)
openBtn.addEventListener('click', function() {
  sideMenu.classList.add('open');
});

// Bắt sự kiện khi click vào nút dấu X (Đóng menu)
closeBtn.addEventListener('click', function() {
  sideMenu.classList.remove('open');
});