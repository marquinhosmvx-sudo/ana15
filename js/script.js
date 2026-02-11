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
function borboletasConvite() {

  let quantidade = 24; // mais borboletas

  for (let i = 0; i < quantidade; i++) {

    let b = document.createElement("img");
    b.src = "img/borboleta.gif";
    b.className = "borboleta";

    /* origem: botão / centro */
    b.style.left = "50%";
    b.style.top = "55%";
    b.style.opacity = "1";

    document.body.appendChild(b);

    setTimeout(() => {

      let x = (Math.random() - 0.5) * window.innerWidth * 1.2;
      let y = (Math.random() - 0.5) * window.innerHeight * 1.2;

      let escala = 1.8 + Math.random() * 1.5;

      b.style.transform =
        `translate(${x}px, ${y}px) scale(${escala})`;

      b.style.opacity = "0";

    }, 50);

    setTimeout(() => b.remove(), 2600);
  }
}
