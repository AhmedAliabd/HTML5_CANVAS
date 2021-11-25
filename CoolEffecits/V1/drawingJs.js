const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");
const mouse = { x: undefined, y: undefined };
const listOfPracticals = [];
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 50 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.setBg = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw() {
    ctx.fillStyle = this.setBg;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}
window.addEventListener("load", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  init();
  animate();
});
window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

// window.addEventListener("click", (e) => {
//   mouse.x = e.x;
//   mouse.y = e.y;
//   listOfPracticals.push(new Particle());
// });

// window.addEventListener("mousemove", (e) => {
//   mouse.x = e.x;
//   mouse.y = e.y;
// });

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handlePracticals();
  requestAnimationFrame(animate);
}
function init() {
  for (let i = 0; i < 100; i++) {
    listOfPracticals.push(new Particle());
  }
}
function handlePracticals() {
  for (let i = 0; i < listOfPracticals.length; i++) {
    listOfPracticals[i].update();
    listOfPracticals[i].draw();
  }
}
