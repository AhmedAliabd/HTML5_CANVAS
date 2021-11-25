const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");
const CANVAS_HEIGHT = (canvas.height = 600);
const CANVAS_WIDTH = (canvas.width = 600);
const playerImage = new Image();
playerImage.src = "./assest/New Piskel222.png";
let x = 0;
let segframe = 0;
animation();

function animation() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_WIDTH);
  console.log(x);
  ctx.drawImage(
    playerImage,
    x * 512,
    0,
    450,
    450,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );
  if (segframe % 6 == 1) {
    if (x < 6) {
      x++;
    } else x = 0;
  }
  segframe++;

  requestAnimationFrame(animation);
}
