function computer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.68) return "orang";
  return "semut";
}

function hasilJadi(comp, p) {
  if (p == comp) return "SERI!!!";
  if (p == "gajah") return comp == "orang" ? "MENANG!!!" : "KALAH!!!";
  if (p == "orang") return comp == "gajah" ? "KALAH!!!" : "MENANG!!!";
  if (p == "semut") return comp == "orang" ? "KALAH!!!" : "MENANG!!!";
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilih = document.querySelectorAll("li img");
pilih.forEach((i) => {
  i.addEventListener("click", function () {
    const pilihanComp = computer();
    const pilihanPlayer = i.className;
    const hasil = hasilJadi(pilihanComp, pilihanPlayer);

    putar();

    setTimeout(() => {
      const imgKomputer = document.querySelector(".img-komputer");
      imgKomputer.setAttribute("src", "img/" + pilihanComp + ".png");

      const tampilHasil = document.querySelector(".info");
      tampilHasil.innerHTML = hasil;
    }, 1000);
  });
});

// const gajah = document.querySelector(".gajah");

// gajah.addEventListener("click", function () {
//   const pilihanComp = computer();
//   const pilihanPlayer = gajah.className;
//   const hasil = hasilJadi(pilihanComp, pilihanPlayer);

//   const imgKomputer = document.querySelector(".img-komputer");
//   imgKomputer.setAttribute("src", "img/" + pilihanComp + ".png");

//   const tampilHasil = document.querySelector(".info")
//   tampilHasil.innerHTML = hasil
// });
