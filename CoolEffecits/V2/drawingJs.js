const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");
const mouse = { x: undefined, y: undefined };
const listOfPracticals = [];
let hue = 0;
class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 16 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    //this.setBg = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.color = `hsl(${hue},100%,50%)`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}
window.addEventListener("load", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  animate();
});
window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

window.addEventListener("click", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  for (let i = 0; i < 2; i++) {
    listOfPracticals.push(new Particle());
  }
});

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  for (let i = 0; i < 2; i++) {
    listOfPracticals.push(new Particle());
  }
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //ctx.fillStyle = "rgba(0,0,0,0.02)";
  //ctx.fillRect(0, 0, canvas.width, canvas.height);

  handlePracticals();
  hue++;
  requestAnimationFrame(animate);
}

function handlePracticals() {
  for (let i = 0; i < listOfPracticals.length; i++) {
    listOfPracticals[i].update();
    listOfPracticals[i].draw();
    if (listOfPracticals[i].size <= 0.3) {
      listOfPracticals.splice(i, 1);
      i--;
    }
  }
}
