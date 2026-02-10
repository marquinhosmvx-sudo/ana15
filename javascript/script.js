function entrar() {
  window.location.href = "menu.html";
}

function entrar() {
  criarBorboletas();

  setTimeout(() => {
    window.location.href = "menu.html";
  }, 1200);
}

function criarBorboletas() {
  for (let i = 0; i < 15; i++) {
    let b = document.createElement("img");
    b.src = "img/borboleta.png";
    b.className = "butterfly";

    b.style.left = "50%";
    b.style.top = "50%";

    let x = (Math.random() - 0.5) * 800 + "px";
    let y = (Math.random() - 0.5) * 800 + "px";

    b.style.setProperty("--x", x);
    b.style.setProperty("--y", y);

    document.body.appendChild(b);

    setTimeout(() => b.remove(), 1500);
  }
}

function borboletasFundo() {
  setInterval(() => {
    let b = document.createElement("img");
    b.src = "img/borboleta.png";
    b.className = "butterfly-bg";

    b.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(b);

    setTimeout(() => b.remove(), 20000);
  }, 3000);
}

borboletasFundo();
