let kulk = 0;
function bum() {
  kulk += 1;
  document.getElementById("kulk").innerHTML = kulk;
};

let kulkXD = 0;
function rand() {
  kulkXD = (Math.floor(Math.random() * 100 + 20));
  document.getElementById("kulkXD").innerHTML = kulkXD;
  document.getElementsByTagName('a')[0].firstChild.data = kulkXD;
}
rand();
let czas = Math.floor((Math.random() * 30) + 5);
const czasXD = document.querySelector("h1");
obrczas
  (czas);
const liczenie = setInterval(() => {
  czas--;
  obrczas
    (czas);
  if (czas == 0 || czas < 1) {
    koniecliczenia();
    clearInterval(liczenie);
  }
}, 1000);
function obrczas
  (sekundy
  ) {
  const min = Math.floor(sekundy
    / 60);
  const sec = Math.floor(sekundy
    % 60);
  czasXD.innerHTML = `  
${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}  
`;
}
function koniecliczenia() {
  czasXD.innerHTML = "Przegrales :(";
}
const win = document.querySelector("h6");
function gra() {
  if (kulk >= kulkXD) {
    win.innerHTML = "Wygrales!";
  }
}
gra();