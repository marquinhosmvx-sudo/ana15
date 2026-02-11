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
