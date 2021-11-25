let playerState = "ideal";
const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", (e) => {
  playerState = e.target.value;
});
const canvas = document.getElementById("main_screen");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);
const spriteWidth = 575;
const spriteHeight = 523;
//load sprite sheet image
const playerImage = new Image();
playerImage.src = "./Assest/shadow_dog.png";
//
//variables to change the frame in sprit sheet

//

//control the game frames
let gameFrame = 0;
let staggerFrames = 5;
//
let spriteAnimation = [];
let animationState = [
  { name: "ideal", frames: 7 },
  { name: "jump", frames: 7 },
  { name: "fall", frames: 7 },
  { name: "run", frames: 9 },
  { name: "dizzy", frames: 11 },
  { name: "sit", frames: 5 },
  { name: "roll", frames: 7 },
  { name: "bite", frames: 7 },
  { name: "ko", frames: 12 },
  { name: "getHit", frames: 4 },
];

window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    playerState = "ko";
  }
  if (e.key == "ArrowLeft") {
    playerState = "getHit";
  }
  console.log(e.key);
});
window.addEventListener("keyup", (e) => {
  playerState = "ideal";
});
animationState.forEach((state, index) => {
  let frame = { loc: [] };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frame.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimation[state.name] = frame;
});

function animation() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position =
    Math.floor(gameFrame / staggerFrames) %
    spriteAnimation[playerState].loc.length;
  console.log(position);
  let frameX = spriteAnimation[playerState].loc[position].x;
  let frameY = spriteAnimation[playerState].loc[position].y;
  //console.log(frameX);
  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  ); //THE LAST 4 ARGUMENTS IS TO DETERMINE WHERE ON OUR CANVAS TO DRAW THE IMAGE

  gameFrame++;
  requestAnimationFrame(animation);
}

animation();
