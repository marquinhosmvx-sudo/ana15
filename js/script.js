window.onload = () => {
  criarBorboletasFundo();
};

function entrar() {
  explosaoBorboletas();

  setTimeout(() => {
    window.location.href = "menu.html";
  }, 2500);
}

/* Explosão suave ao clicar */
function explosaoBorboletas() {
  for (let i = 0; i < 30; i++) {
    let b = document.createElement("img");
    b.src = "img/borboleta.png";
    b.className = "butterfly";

    b.style.left = "50%";
    b.style.top = "50%";

    document.body.appendChild(b);

    setTimeout(() => {
      let x = (Math.random() - 0.5) * window.innerWidth;
      let y = (Math.random() - 0.5) * window.innerHeight;

      b.style.transform =
        `translate(${x}px, ${y}px) scale(${1.5 + Math.random()})`;

      b.style.opacity = "0";
    }, 50);

    setTimeout(() => b.remove(), 4000);
  }
}

/* Borboletas flutuando lentamente */
function criarBorboletasFundo() {
  setInterval(() => {
    let b = document.createElement("img");
    b.src = "img/borboleta.png";
    b.className = "butterfly";

    b.style.left = Math.random() * window.innerWidth + "px";
    b.style.top = window.innerHeight + "px";
    b.style.opacity = "0.6";

    document.body.appendChild(b);

    setTimeout(() => {
      b.style.transform =
        `translateY(-${window.innerHeight + 200}px) scale(1.8)`;
      b.style.opacity = "0";
    }, 50);

    setTimeout(() => b.remove(), 8000);
  }, 1500);
}
