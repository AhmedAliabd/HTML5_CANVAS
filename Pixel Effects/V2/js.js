const canvas = document.getElementById("main_canvas");
const ctx = canvas.getContext("2d");
canvas.height = 450;
canvas.width = 800;
let img = new Image();
img.src = "./images/annas-gf53aa06f4_640.jpg";
let partials = [];
class Partials {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = 0;
    this.speed = 0;
    this.velocity = Math.random() * 3.5;
    this.size = Math.random() * 1.5 + 1;
  }
  update() {
    this.y += this.velocity;
    if (this.y >= canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < 5000; i++) {
    partials.push(new Partials());
  }
}

function animate() {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  ctx.globalAlpha = 0.05;
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < partials.length; i++) {
    partials[i].update();
    partials[i].draw();
  }

  requestAnimationFrame(animate);
}

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  let scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let scannedData = scannedImage.data; // store the the pixel array in spare file
  init();
  animate();
});
