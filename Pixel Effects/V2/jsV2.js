const canvas = document.getElementById("main_canvas");
const ctx = canvas.getContext("2d");
canvas.height = 450;
canvas.width = 800;
let img = new Image();
img.src =
  "./images/Anonymous-hacker-group-launches-Anon-Inu-cryptocurrency-token.png";
let mappedImage = [];
let partials = [];

class Partials {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = 0;
    this.speed = 0;
    this.velocity = Math.random() * 0.5;
    this.size = Math.random() * 1.5 + 1;
    this.position1 = Math.floor(this.y);
    this.position2 = Math.floor(this.x);
  }
  update() {
    this.position1 = Math.floor(this.y);
    this.position2 = Math.floor(this.x);
    this.speed = mappedImage[this.position1][this.position2][0];
    let movement = 2.5 - this.speed + this.velocity;
    this.y += movement;
    if (this.y >= canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = "#149414";
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
  // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  ctx.globalAlpha = 0.05;
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = 0.2;

  for (let i = 0; i < partials.length; i++) {
    partials[i].update();
    ctx.globalAlpha = partials[i].speed * 0.5;
    partials[i].draw();
  }

  requestAnimationFrame(animate);
}

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  let pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let y = 0; y < canvas.height; y++) {
    let row = [];
    for (let x = 0; x < canvas.width; x++) {
      const red = pixels.data[y * 4 * pixels.width + x * 4];
      const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
      const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
      const brightness = calculateRelativeBrightness(red, green, blue);
      const cell = [(cellBrightness = brightness)];
      row.push(cell);
    }
    mappedImage.push(row);
  }

  init();
  animate();
});

function calculateRelativeBrightness(red, green, blue) {
  return (
    Math.sqrt(red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114) /
    100
  );
}