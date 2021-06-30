let skorKen = 0;
let skorPlayer = 0;
let timeOut = "";

let ken = document.getElementById("ninja-ken");

let splashScreen = document.getElementsByClassName("splash")[0];
let startGame = document.getElementsByName("start")[0];
let displaySkorKen = document.getElementsByClassName("skor-ken")[0];
let displaySkorPlayer = document.getElementsByClassName("skor-player")[0];

let reset = document.getElementById("reset");
let batu = document.getElementById("batu");
let gunting = document.getElementById("gunting");
let kertas = document.getElementById("kertas");

startGame.addEventListener("click", () => {
    splashScreen.style.top = "-120vh";
    splashScreen.style.transition = ".75s";
});
