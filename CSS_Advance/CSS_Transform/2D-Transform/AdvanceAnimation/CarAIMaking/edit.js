// KẾT NỐI VỚI DOM
const carContainer = document.getElementById('car-container');
const road = document.getElementById('road');
const wheelFront = document.getElementById('wheel-front');
const wheelRear = document.getElementById('wheel-rear');
const speedDisplay = document.getElementById('speedDisplay');
const exhaust = document.getElementById('exhaust');

// BIẾN VẬT LÝ
let isAccelerating = false;
let speed = 0;
const maxSpeed = 180;
const accelerationRate = 2.5;
const friction = 1.2;
let roadPosition = 0;
let wheelAngle = 0;

// LẮNG NGHE SỰ KIỆN PHÍM
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') isAccelerating = true;
});
window.addEventListener('keyup', (e) => {
    if (e.code === 'Space') isAccelerating = false;
});

// HỆ THỐNG HẠT (PARTICLES) CHO ỐNG XẢ LỬA
function createExhaustParticle() {
    if (speed < 20) return; // Chỉ xả lửa khi có tốc độ
    
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random kích thước và vị trí lửa
    const size = Math.random() * 15 + 10;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Lấy tọa độ tuyệt đối của ống xả
    const rect = exhaust.getBoundingClientRect();
    particle.style.left = `${rect.left + Math.random() * 10 - 5}px`;
    particle.style.top = `${rect.top + Math.random() * 10}px`;
    
    // Đổi màu lửa ngẫu nhiên (Cam/Hồng/Xanh dựa trên tốc độ)
    if(speed > 140) {
        particle.style.background = '#00f3ff'; // Lửa xanh khi max speed
        particle.style.boxShadow = '0 0 10px #00f3ff';
    } else {
        particle.style.background = Math.random() > 0.5 ? '#ff0055' : '#ff7700';
        particle.style.boxShadow = '0 0 10px #ff0055';
    }

    document.body.appendChild(particle);

    // Dọn dẹp DOM sau khi animation kết thúc (0.5s)
    setTimeout(() => { particle.remove(); }, 500);
}

// VÒNG LẶP RENDER & VẬT LÝ CHÍNH
function gameLoop() {
    // 1. Cập nhật tốc độ (Gia tốc và Ma sát)
    if (isAccelerating) {
        speed += accelerationRate;
        if (speed > maxSpeed) speed = maxSpeed;
    } else {
        speed -= friction;
        if (speed < 0) speed = 0;
    }

    // 2. Cập nhật giao diện tốc độ
    speedDisplay.innerText = Math.floor(speed);

    // 3. Hiệu ứng Parallax cho mặt đường
    roadPosition -= (speed * 0.15); // Tốc độ chạy của vạch kẻ đường
    road.style.backgroundPositionX = `${roadPosition}px`;

    // 4. Cập nhật xoay bánh xe dựa trên tốc độ thực
    wheelAngle += (speed * 0.3);
    wheelFront.style.transform = `rotate(${wheelAngle}deg)`;
    wheelRear.style.transform = `rotate(${wheelAngle}deg)`;

    // 5. Tính toán phuộc xe (Suspension Simulation)
    let pitch = 0; // Độ chúc đầu xe
    let vibration = 0; // Độ rung
    
    if (isAccelerating && speed > 0 && speed < maxSpeed) {
        pitch = -3; // Ngửa đầu lên khi thốc ga
    } else if (!isAccelerating && speed > 0) {
        pitch = 2; // Chúi mũi xuống khi nhả ga (thắng engine)
    }

    if (speed > 50) {
        // Rung lắc nhẹ khi chạy tốc độ cao
        vibration = Math.sin(Date.now() / 20) * (speed / 100); 
    }

    carContainer.style.transform = `translateY(${vibration}px) rotate(${pitch}deg)`;

    // 6. Sinh ra khí thải
    // Sinh nhiều hạt hơn khi thốc ga mạnh
    let particleChance = isAccelerating ? 0.6 : 0.2;
    if (Math.random() < particleChance) {
        createExhaustParticle();
    }

    // Gọi lại frame tiếp theo một cách mượt mà nhất
    requestAnimationFrame(gameLoop);
}

// KHỞI ĐỘNG XE
gameLoop();