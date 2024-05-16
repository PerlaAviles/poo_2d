const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");
const canvasRandomM = document.getElementById("canvasRandomM");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");
const ctxRandomM = canvasRandomM.getContext("2d");

canvasOOP.height = 200;
canvasOOP.width = 300;

canvasRandom.height = 200;
canvasRandom.width = 300;

canvasMultiple.height = 200;
canvasMultiple.width = 300;

canvasRandomM.height = 200;
canvasRandomM.width = 300;

canvasOOP.style.background = "#ff8";
canvasRandom.style.background = "rgb(134, 184, 187)";
canvasMultiple.style.background = "rgb(172, 216, 154)";
canvasRandomM.style.background = "rgb(188, 126, 215)"; // New background color for canvasRandomM

class Circle {
  constructor(x, y, radius, color, text, backcolor, textColor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
    this.textColor = textColor;
  }

  draw(context) {
    context.beginPath();
    context.strokeStyle = this.color;
    context.fillStyle = this.backcolor;
    context.lineWidth = 2;
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    context.fill();
    context.stroke();
    context.closePath();

    context.fillStyle = this.textColor;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "20px Arial";
    context.fillText(this.text, this.posX, this.posY);
  }
}

// Function to generate random coordinates ensuring the circle stays within the canvas
function getRandomCoordinates(canvasWidth, canvasHeight, radius) {
  let x = Math.random() * (canvasWidth - 2 * radius) + radius;
  let y = Math.random() * (canvasHeight - 2 * radius) + radius;
  return { x, y };
}

// Function to generate random coordinates allowing the circle to go out of the canvas
function getRandomCoordinatesFree(canvasWidth, canvasHeight, radius) {
  let x = Math.random() * canvasWidth;
  let y = Math.random() * canvasHeight;
  return { x, y };
}

// Static circle for canvasOOP
let staticRadius = 50; // Fixed radius
let centerX = canvasOOP.width / 2; // Center X
let centerY = canvasOOP.height / 2; // Center Y

let miCirculo = new Circle(centerX, centerY, staticRadius, 'black', 'Tec', 'pink', 'rgb(255, 0, 0)');
miCirculo.draw(ctx);

// Random circles for canvasRandom
let randomRadius2 = Math.floor(Math.random() * 100 + 30); // Number between 30-130
let { x: randomX2, y: randomY2 } = getRandomCoordinates(canvasRandom.width, canvasRandom.height, randomRadius2);

let miCirculoRandom = new Circle(randomX2, randomY2, randomRadius2, 'black', 'Tec', 'purple', 'rgb(255, 0, 0)');
miCirculoRandom.draw(ctxRandom);

// Random circles for canvasMultiple
let arrayCircle = [];

for (let i = 0; i < 10; i++) {
  let randomRadius = Math.floor(Math.random() * 20 + 30); // Number between 30-50
  let { x: randomX, y: randomY } = getRandomCoordinates(canvasMultiple.width, canvasMultiple.height, randomRadius);

  let miCirculoMultiple = new Circle(randomX, randomY, randomRadius, 'rgb(216, 154, 176)', i + 1, 'rgb(218, 31, 96)', 'rgb(0, 0, 0)');
  arrayCircle.push(miCirculoMultiple);
  arrayCircle[i].draw(ctxMultiple);
}

// Random circles for canvasRandomM with freedom to go out of the canvas
let arrayCircleRandomM = [];

for (let i = 0; i < 10; i++) {
  let randomRadius = Math.floor(Math.random() * 20 + 30); // Number between 30-50
  let { x: randomX, y: randomY } = getRandomCoordinatesFree(canvasRandomM.width, canvasRandomM.height, randomRadius);

  let miCirculoRandomM = new Circle(randomX, randomY, randomRadius, 'rgb(255, 195, 0)', i + 1, 'rgb(218, 247, 166)', 'rgb(0, 0, 0)'); // New colors for circles
  arrayCircleRandomM.push(miCirculoRandomM);
  arrayCircleRandomM[i].draw(ctxRandomM);
}
