let palavra;

function setup() {
  createCanvas(400, 400);
  
  palavra = CecilinhaAleatorias();
  
}

function CecilinhaAleatorias () {
  let palavras = ["Ourinho", "Princesa", "Neném", "Docinho"];
  return random(palavras);
}

function CecilinhaCores() {
  background("pink");
  fill("yellow");
  textSize(78);
   textAlign(CENTER, CENTER);
}
 
function palavraParcial (minimo, maximo) {
   let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  CecilinhaCores();
  
 let parcial = palavraParcial(0, width);
  text(parcial, 200, 200);
  
  
}