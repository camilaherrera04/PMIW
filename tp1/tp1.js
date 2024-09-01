// Herrera Camila 121272/6

let obra; 
let bg, obj, cursorColor;
let t, y, x;

function preload() {
  // Carga la imagen
  obra = loadImage("data/obra.jpg"); 
}

function setup() {
  createCanvas(800, 400);
  bg = color(255);
  obj = color(0);
  cursorColor = color(48, 255, 3);
  y = 0;
  x = 0;
  noCursor();
  t = height / 14;
  noStroke();
}

function draw() {
  background(bg);

  // Dibuja la imagen en la mitad izquierda 
  if (obra) {
    // Ajusta la imagen para que ocupe toda la mitad izquierda del canvas
    image(obra, 0, 0, width / 2, height);
  }

  // Dibuja el contenido interactivo en la mitad derecha
  push();
  translate(width / 2, 0); // Trasladar dibujo para la mitad derecha
  drawCircles();
  fill(cursorColor);
  circle(mouseX - width / 2, mouseY, 10); // Cursor ajustado para la mitad derecha
  pop();
}

// Función que no retorna valor + for
function drawCircles() {
  for (x = 0; x < 14; x++) {
    for (y = 0; y < 14; y++) {
      fill(obj);
      circle(x * t + 18, y * t + 18, t);
    }
  }
  
  for (x = 0; x < 14; x++) {
    for (y = 0; y < 14; y++) {
      // Cálculos
      fill(bg);
      circle(x * t + 18, y * t + 18, calculateSize());
    }
  }
}

// Función que retorna valor, funciones matemáticas 
function calculateSize() {
  let d = dist(mouseX - width / 2, mouseY, x * t, y * t);
  let m = map(d, 0, 565, 4, 30); // Transformo la escala de distancia en escala de tamaño
  return m;
}

// Reiniciar variables + condicionales + evento con teclado
function keyPressed() {
  if (key === ' ') {
    setup(); // Reiniciar color
  } else if (key === 'a') {
    bg = color(255, 226, 0); // Amarillo
    obj = color(169, 0, 255); // Violeta
    cursorColor = color(255, 0, 0); // Rojo
  } else if (key === 'b') {
    bg = color(0, 23, 255); // Azul
    obj = color(0, 255, 0); // Verde
    cursorColor = color(255, 0, 255); // Rosa
  } else if (key === 'c') {
    bg = color(0); // Negro
    obj = color(0, 255, 219); // Verde agua
    cursorColor = color(255); // Blanco
  }
}
