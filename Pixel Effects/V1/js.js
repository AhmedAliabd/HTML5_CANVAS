const canvas = document.getElementById("main_canvas");
const ctx = canvas.getContext("2d");
canvas.height = 450;
canvas.width = 800;
let img = new Image();
img.src = "./images/annas-gf53aa06f4_640.jpg";

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const scannedData = scannedImage.data; // store the the pixel array in spare file

  // good code snippet to focus on
  for (let i = 0; i < scannedData.length; i += 4) {
    const sumColor = scannedData[i] + scannedData[i + 1] + scannedData[i + 2];
    const avrColor = sumColor / 3;
    scannedData[i] = avrColor;
    scannedData[i + 1] = avrColor;
    scannedData[i + 2] = avrColor;
  }
  // //scannedImage.data = scannedData; // not important i think it reference the values

  ctx.putImageData(scannedImage, 0, 0);
});
