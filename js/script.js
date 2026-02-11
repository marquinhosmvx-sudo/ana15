function navegar(pagina) {

  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = pagina;
  }, 400);
}

/* ========================= */
/* CONTADOR */
/* ========================= */
function atualizarContador() {

  let dataEvento = new Date("2026-05-16T19:00:00");
  let agora = new Date();

  let diferenca = dataEvento - agora;

  let contador = document.getElementById("contador");
  if (!contador) return;

  if (diferenca <= 0) {
    contador.innerText = "Hoje é o dia da Ana Maria!";
    return;
  }

  let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  let horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  let minutos = Math.floor((diferenca / 1000 / 60) % 60);

  contador.innerText =
    `Faltam ${dias} dias, ${horas}h e ${minutos}min`;
}

setInterval(atualizarContador, 60000);
atualizarContador();

/* ========================= */
/* LIMITE CONFIRMAÇÃO */
/* ========================= */
function verificarLimiteConfirmacao() {

  let limite = new Date("2026-04-15T23:59:00");
  let agora = new Date();

  let iframe = document.getElementById("form-confirmacao");
  let msg = document.getElementById("limite-msg");

  if (!iframe || !msg) return;

  if (agora > limite) {
    iframe.style.display = "none";
    msg.innerHTML =
      "<p style='color:white;'>O prazo para confirmação foi encerrado.</p>";
  }
}

verificarLimiteConfirmacao();

/* ========================= */
/* BORBOLETAS OTIMIZADAS */
/* ========================= */
function explodirBorboletas(botao) {

  botao.classList.add("brilho-ativo");

  
  const totalBorboletas = 500;
  const porLote = 25; // criadas em ondas
  const duracaoTotal = 8000;

  let rect = botao.getBoundingClientRect();
  let origemX = rect.left + rect.width / 2;
  let origemY = rect.top + rect.height / 2;

  let criadas = 0;

  let intervalo = setInterval(() => {

    for (let i = 0; i < porLote; i++) {

      if (criadas >= totalBorboletas) {
        clearInterval(intervalo);
        break;
      }

      criarBorboleta(origemX, origemY);
      criadas++;
    }

  }, 120);

  vooContinuoBorboletas();

  setTimeout(() => navegar("menu.html"), 3000);

}

/* ========================= */
/* CRIA BORBOLETA */
/* ========================= */
function criarBorboleta(origemX, origemY) {

  let b = document.createElement("img");
  b.src = "img/borboleta.gif";
  b.className = "borboleta borboleta-fundo";

  let camada = Math.random();

  if (camada < 0.4) {
    b.classList.add("borboleta-fundo");
  } else if (camada < 0.75) {
    b.classList.add("borboleta-meio");
  } else {
    b.classList.add("borboleta-frente");
  }

  let offsetX = (Math.random() - 0.5) * 80;
  let offsetY = (Math.random() - 0.5) * 80;

  b.style.left = (origemX + offsetX) + "px";
  b.style.top = (origemY + offsetY) + "px";

  document.body.appendChild(b);
  setTimeout(() => {
  b.classList.remove("borboleta-fundo");
  b.classList.add("borboleta-frente");
}, 300);

  setTimeout(() => {

    let anguloRad = Math.random() * Math.PI * 2;
    let distancia = window.innerHeight * (0.8 + Math.random());

    let x = Math.cos(anguloRad) * distancia;
    let y = Math.sin(anguloRad) * distancia;

    if (Math.random() > 0.6)
      y += window.innerHeight * 0.5;

    let escala = 1.4 + Math.random() * 2;

    if (b.classList.contains("borboleta-frente"))
      escala *= 1.9;

    if (b.classList.contains("borboleta-fundo"))
      escala *= 0.6;

    let rotacaoExtra = (Math.random() - 0.5) * 180;
    let angulo = Math.atan2(y, x) * (180 / Math.PI);

    b.style.transform =
      `translate(${x}px, ${y}px)
       rotate(${angulo + rotacaoExtra}deg)
       scale(${escala})`;

    b.style.animationDuration =
      (0.5 + Math.random() * 0.7) + "s";

    b.style.opacity = "0";

  }, 50);

  setTimeout(() => b.remove(), 6500);
}

/* ========================= */
/* VOO CONTÍNUO */
/* ========================= */
function vooContinuoBorboletas() {

  let duracao = 3000;

  let intervalo = setInterval(() => {

    let b = document.createElement("img");
    b.src = "img/borboleta.gif";
    b.className = "borboleta borboleta-frente";

    b.style.left = "-40px";
    b.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(b);

    setTimeout(() => {

      let escala = 1.5 + Math.random() * 1.8;

      b.style.transform =
        `translate(${window.innerWidth + 200}px,
                   ${Math.random()*200 - 100}px)
         scale(${escala})`;

      b.style.opacity = "0";

    }, 50);

    setTimeout(() => b.remove(), 9000);

  }, 200);

  setTimeout(() => clearInterval(intervalo), duracao);
}
window.addEventListener("pageshow", () => {
  document.body.classList.remove("fade-out");
});

