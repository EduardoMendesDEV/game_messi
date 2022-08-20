function setup() {
  createCanvas(600, 400);
  hino.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostrarMessi();
  mostrarCarro1();
  movimentarCarro1();
  movimentaMessi();
  voltaCarro();
  verificaColisao();
  exibirPontos();
  marcaPontos();
  volta();
  mostraTaça();
}
