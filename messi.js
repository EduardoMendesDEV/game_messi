//vaquinha
let xMessi = 100;
let yMessi = 365;
let colisao = false;
let meusPontos = 0;

function mostrarMessi() {
  textAlign(CENTER);
  image(imagemMessi, xMessi, yMessi, 80, 40);
}

function movimentaMessi() {
  if (keyIsDown(UP_ARROW)) {
    yMessi -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yMessi += 3;
    }
  }
}
function colidiu() {
  yMessi = 365;
}
function verificaColisao() {
  for (let i = 0; i < carros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarros,
      alturaCarros,
      xMessi,
      yMessi,
      15
    );
    if (colisao) {
      voltaMessi();
      if (meusPontos > 0) meusPontos -= 1;
    }
  }
}

function voltaMessi() {
  yMessi = 365;
}

function exibirPontos() {
  fill(0, 0, 255);
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, 450, 40);
}

function marcaPontos() {
  if (yMessi < 15) {
    meusPontos += 1;
    pontos.play();
    voltaMessi();
  }
}
function volta() {
  if (yMessi < 15) {
    yMessi = 365;
  }
}

function podeSeMover() {
  return yMessi < 365;
}
