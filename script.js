// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

function drawPicture() {
  const widthHouse = canvas.width / 4;
  const heightHouse = canvas.height / 4;
  const offsetHouse = canvas.width / 50;
  const heightRoof = (heightHouse * 3) / 2;
  const widthStem = canvas.width / 25;
  const heightStem = canvas.height / 4;
  const posXStem = midX - widthStem / 2;
  const posYStem = canvas.height - heightStem / 1.4;
  const posXTree = midX;
  const posYTree = posYStem - heightStem / 1.5;
  const widthTree = widthStem * 1.4;
  const heightTree = canvas.height / 4;

  c.lineWidth = 2;
  c.strokeStyle = "black";

  // Vänster hus
  c.rect(offsetHouse, canvas.height - heightHouse - 5, widthHouse, heightHouse);
  c.lineTo(widthHouse / 2 + offsetHouse, heightRoof);
  c.lineTo(widthHouse + offsetHouse, canvas.height - heightHouse);

  // Höger hus
  c.rect(
    canvas.width - widthHouse - offsetHouse,
    canvas.height - heightHouse - 5,
    widthHouse,
    heightHouse
  );

  c.lineTo(canvas.width - widthHouse / 2 - offsetHouse, heightRoof);
  c.lineTo(canvas.width - offsetHouse, canvas.height - heightHouse);

  c.stroke();

  // Stammen
  c.fillStyle = "brown";
  c.beginPath();
  c.rect(posXStem, posYStem, widthStem, heightStem);
  c.fill();
  c.closePath;
  c.stroke();

  c.fillStyle = "green";
  c.beginPath();

  c.ellipse(
    posXTree,
    posYTree,
    widthTree,
    heightTree,
    Math.PI,
    -Math.PI / 3,
    Math.PI + Math.PI / 3
  );
  c.fill();
  c.stroke();
}

drawPicture();
