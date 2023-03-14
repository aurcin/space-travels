const FRAME_COUNT = 87;

const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const images = [];
let currentFrame = 0;

for (let i = 1; i <= FRAME_COUNT; i += 1) {
  const img = new Image();
  img.src = getFrameUri(i);
  images.push(img);
}

function getFrameUri(index) {
  const num = index.toString().padStart(4, '0');
  return `img/render/${num}.png`;
}

images[currentFrame].onload = update;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[currentFrame], 0, 0);
}

function update() {
  render();
  currentFrame += 1;
  if (currentFrame >= FRAME_COUNT) {
    currentFrame = 0;
  }
}

setInterval(update, 1000 / 30);
