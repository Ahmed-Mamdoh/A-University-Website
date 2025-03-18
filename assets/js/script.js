let time = 30 * 24 * 60 * 60;
let countDown = document.querySelectorAll(".countDown");

function updateCountdown() {
  time--;
  countDown[0].textContent = Math.floor(time / (24 * 60 * 60));
  countDown[1].textContent = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
  countDown[2].textContent = Math.floor((time % (60 * 60)) / 60);
  countDown[3].textContent = Math.floor(time % 60);
  if (time <= 0) {
    clearInterval(counter);
  }
}
updateCountdown();
let counter = setInterval(updateCountdown, 1000);
