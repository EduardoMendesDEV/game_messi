let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 265, 315];
let velocidadeCarros = [2, 5, 3, 2.5, 1, 4];
let comprimentoCarros = 60;
let alturaCarros = 50;

function mostrarCarro1() {
  for (let i = 0; i < carros.length; i++) {
    image(carros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
  }
}

function movimentarCarro1() {
  for (let v = 0; v < carros.length; v++) {
    xCarros[v] -= velocidadeCarros[v];
  }
}

function voltaCarro() {
  for (let b = 0; b < carros.length; b++) {
    if (passouTodaATela(xCarros[b])) {
      xCarros[b] = 600;
    }
  }
}

function passouTodaATela(xCarros) {
  return xCarros < -50;
}

function mostraTaça() {
  image(taça, 200, 500, 80, 50);
}
