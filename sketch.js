//Variaveis Da Bolinha
let xBolinha = 300
let yBolinha =200
let Diametro =15
let Raio = Diametro / 2 ;

//Velocidade Da Bolinha
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;

//Variaveis Da Raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = true

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  verificaColisaoRaquete();
  mostraRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
}

function mostraBolinha() {
circle(xBolinha, yBolinha, Diametro)
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
    if (xBolinha + Diametro> width || xBolinha - Diametro < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + Diametro > height || yBolinha - Diametro < 0) {
        velocidadeYBolinha *= -1;
    }
}

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura )
}
  
function mostraRaqueteOponente() {
    rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}


function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - Raio < xRaquete + raqueteComprimento
         &&yBolinha - Raio < yRaquete + raqueteAltura
         &&yBolinha + Raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }
}

function colisaoMinhaRaqueteBiblioteca(){
  
}

function movimentaRaqueteOponente() {velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente

}