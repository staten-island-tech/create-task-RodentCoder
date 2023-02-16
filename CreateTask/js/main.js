import { DOMs } from "./dom";

const hello = ["rock", "paper", "scissor"];

let wins = 0;
let ties = 0;
let lost = 0;

console.log(DOMs.Result);

function rock() {
  DOMs.Rock.addEventListener("click", () => {
    DOMs.Result.innerHTML = "";
    let random = Math.floor(Math.random() * hello.length);
    if (hello[random] == "scissor") {
      DOMs.Result.insertAdjacentHTML("afterbegin", "<h2>win</h2>");
      wins++;
      console.log(hello[random], wins);
    } else if (hello[random] == "paper") {
      DOMs.Result.insertAdjacentHTML("afterbegin", "<h2>big L</h2>");
      lost++;
      console.log(hello[random], lost);
    } else if (hello[random] == "rock") {
      DOMs.Result.insertAdjacentHTML("afterbegin", "<h2>tie</h2>");
      ties++;
      console.log(hello[random], ties);
    }
  });
}

function flavortext(x) {
  if (x > 0) {
    console.log("works");
  } else {
    console.log("error");
  }
}

flavortext(wins);
rock();
