const main = document.querySelector(".main");
const ball = document.querySelector(".ball");

let posX = 0;
let posY = 0;
let directionX = 1;
let directionY = 1;
const velocity = 4;

function moveBall() {
  const ballRect = ball.getBoundingClientRect();
  const mainRect = main.getBoundingClientRect();

  if (ballRect.right >= mainRect.right || ballRect.left <= mainRect.left) {
    directionX *= -1;
  }

  if (ballRect.bottom >= mainRect.bottom || ballRect.top <= mainRect.top) {
    directionY *= -1;
  }

  posX += velocity * directionX;
  posY += velocity * directionY;

  ball.style.left = posX + "px";
  ball.style.top = posY + "px";
}

setInterval(moveBall, 30);