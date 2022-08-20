let imagemDaEstrada;
let imagemVaca;
let carro1;
let carro2;
let carro3;
let taça;
let hino;
let pontos;

function preload() {
  imagemDaEstrada = loadImage("imagens/campo.png");
  imagemMessi = loadImage("imagens/messi.png");
  carro1 = loadImage("imagens/virgil.png");
  carro2 = loadImage("imagens/marquinhos.png");
  carro3 = loadImage("imagens/mbappe.png");
  carros = [carro1, carro2, carro3, carro1, carro2];
  taça = loadImage("imagens/taça.png");
  hino = loadSound("sons/hino.m4a");
  pontos = loadSound("sons/pontos.wav");
}
