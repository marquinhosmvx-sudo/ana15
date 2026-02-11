function navegar(pagina) {
  window.location.href = pagina;
}

/* Contador */
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

/* Limite confirmação */
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
function explodirBorboletas(botao) {

  let quantidade = 70; // MUITAS borboletas

  /* posição do botão */
  let rect = botao.getBoundingClientRect();
  let origemX = rect.left + rect.width / 2;
  let origemY = rect.top + rect.height / 2;

  for (let i = 0; i < quantidade; i++)
 {

    let b = document.createElement("img");
    b.src = "img/borboleta.gif";
    b.className = "borboleta";

/* define profundidade */
let camada = Math.random();

if (camada < 0.4) {
  b.classList.add("borboleta-fundo");
} else if (camada < 0.75) {
  b.classList.add("borboleta-meio");
} else {
  b.classList.add("borboleta-frente");
}

    b.style.left = origemX + "px";
    b.style.top = origemY + "px";

    document.body.appendChild(b);

    setTimeout(() => {

let x = (Math.random() - 0.5) * window.innerWidth * 1.8;
let y = (Math.random() - 0.5) * window.innerHeight * 1.8;

/* algumas descem mais */
if (Math.random() > 0.6) {
  y += window.innerHeight * 0.6;
}

let escala = 1.8 + Math.random() * 2.5;
let escalaBase = 1.5 + Math.random() * 2;

if (b.classList.contains("borboleta-frente")) {
  escalaBase *= 1.8;
}

if (b.classList.contains("borboleta-fundo")) {
  escalaBase *= 0.7;
}

let escala = escalaBase;

/* calcula direção para girar borboleta */
let angulo = Math.atan2(y, x) * (180 / Math.PI);

b.style.transform =
  `translate(${x}px, ${y}px)
   rotate(${angulo}deg)
   scale(${escala})`;

/* asas fora de sincronia */
b.style.animationDuration =
  (0.5 + Math.random() * 0.5) + "s";
      b.style.transform =
        `translate(${x}px, ${y}px) scale(${escala})`;

      b.style.opacity = "0";

    }, 50);

    setTimeout(() => b.remove(), 6200);
  }

  vooContinuoBorboletas();

  /* navega após animação */
  setTimeout(() => navegar("menu.html"), 3800);
}
function vooContinuoBorboletas() {

  let duracao = 3000; // tempo de continuação

  let intervalo = setInterval(() => {

    let b = document.createElement("img");
    b.src = "img/borboleta.gif";
    b.className = "borboleta borboleta-frente";

    /* nasce na lateral */
    b.style.left = "-40px";
    b.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(b);

    setTimeout(() => {

      let escala = 1.5 + Math.random() * 1.5;

      b.style.transform =
        `translate(${window.innerWidth + 200}px, -100px) scale(${escala})`;

      b.style.opacity = "0";

    }, 50);

    let tempo = 6000;

if (b.classList.contains("borboleta-frente")) {
  tempo = 7200;
}

if (b.classList.contains("borboleta-fundo")) {
  tempo = 5000;
}

setTimeout(() => b.remove(), tempo);

  }, 300);

  setTimeout(() => clearInterval(intervalo), duracao);
}
