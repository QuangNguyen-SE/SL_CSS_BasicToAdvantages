const cube = document.getElementById('myCube');

// Trạng thái lưu trữ góc xoay hiện tại
let currentX = -20;
let currentY = -30;

let isDragging = false;
let startMouseX, startMouseY;

// Bắt đầu click chuột
document.addEventListener('mousedown', (e) => {
  isDragging = true;
  startMouseX = e.clientX;
  startMouseY = e.clientY;
});

// Khi thả chuột ra
document.addEventListener('mouseup', () => {
  isDragging = false;
});

// Khi di chuyển chuột
document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  // Tính toán khoảng cách chuột đã di chuyển
  const deltaX = e.clientX - startMouseX;
  const deltaY = e.clientY - startMouseY;

  // Cập nhật góc xoay (chia tỷ lệ để xoay không quá nhanh)
  // Kéo ngang (deltaX) sẽ làm xoay trục Y, kéo dọc (deltaY) làm xoay trục X
  currentY += deltaX * 0.5;
  currentX -= deltaY * 0.5;

  // Áp dụng góc xoay mới vào CSS
  cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;

  // Cập nhật lại điểm bắt đầu cho khung hình tiếp theo
  startMouseX = e.clientX;
  startMouseY = e.clientY;
});

// Hỗ trợ thêm cho màn hình cảm ứng (điện thoại/tablet)
document.addEventListener('touchstart', (e) => {
  isDragging = true;
  startMouseX = e.touches[0].clientX;
  startMouseY = e.touches[0].clientY;
});

document.addEventListener('touchend', () => {
  isDragging = false;
});

document.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const deltaX = e.touches[0].clientX - startMouseX;
  const deltaY = e.touches[0].clientY - startMouseY;
  currentY += deltaX * 0.5;
  currentX -= deltaY * 0.5;
  cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
  startMouseX = e.touches[0].clientX;
  startMouseY = e.touches[0].clientY;
});