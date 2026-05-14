const box = document.getElementById('myBox');
const button = document.getElementById('fsButton');

button.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    box.requestFullscreen().catch(err => {
      alert(`Không thể bật Fullscreen: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
});

document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    button.textContent = "Tắt Fullscreen";
  } else {
    button.textContent = "Bật Fullscreen";
  }
});