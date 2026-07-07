const sphereContainer = document.getElementById('sphere');
const scene = document.querySelector('.scene');
const totalRings = 24;

// --- PHẦN 1: TẠO KHỐI CẦU ---
for (let i = 0; i < totalRings; i++) {
    const ring = document.createElement('div');
    ring.classList.add('ring');
    const angleY = (180 / totalRings) * i;
    ring.style.transform = `rotateY(${angleY}deg)`;
    sphereContainer.appendChild(ring);
}


// --- PHẦN 2: XỬ LÝ TƯƠNG TÁC CHUỘT ---
let isDragging = false;          // Cờ kiểm tra xem có đang giữ chuột không
let previousMousePosition = { x: 0, y: 0 }; // Lưu vị trí chuột trước đó
let currentRotation = { x: 0, y: 0 };       // Lưu góc xoay hiện tại của quả cầu

// 1. Khi người dùng bấm chuột xuống (Bắt đầu kéo)
scene.addEventListener('mousedown', (e) => {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
});

// 2. Khi người dùng di chuyển chuột
// Chú ý: Lắng nghe trên toàn bộ 'document' để tránh lỗi mất focus khi kéo chuột quá nhanh ra ngoài thẻ .scene
document.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // Nếu không giữ chuột thì không làm gì cả

    // Tính toán khoảng cách chuột đã di chuyển so với khung hình trước
    const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
    };

    // Cập nhật góc xoay (Nhân với 0.5 để giảm tốc độ xoay cho mượt)
    // Di chuyển chuột ngang (deltaMove.x) sẽ làm thay đổi góc rotateY
    // Di chuyển chuột dọc (deltaMove.y) sẽ làm thay đổi góc rotateX
    currentRotation.y += deltaMove.x * 0.5;
    currentRotation.x -= deltaMove.y * 0.5; // Dùng dấu trừ để hướng xoay thuận với hướng kéo chuột

    // Áp dụng góc xoay mới vào CSS transform
    sphereContainer.style.transform = `rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg)`;

    // Lưu lại vị trí chuột hiện tại để tính toán cho bước di chuyển tiếp theo
    previousMousePosition = { x: e.clientX, y: e.clientY };
});

// 3. Khi người dùng nhả chuột ra (Kết thúc kéo)
document.addEventListener('mouseup', () => {
    isDragging = false;
});