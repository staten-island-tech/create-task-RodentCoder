import { DOMs } from "./dom";

const hello = ["rock", "paper", "scissor"];
let history = [];

let wins = 0;
let ties = 0;
let lost = 0;

console.log(DOMs.Result);

function flavortext(x) {
  if (x > 0) {
    console.log("works");
  } else {
    console.log("error");
  }
}

function rock() {
  DOMs.Rock.addEventListener("click", () => {
    DOMs.Result.innerHTML = "";
    let random = Math.floor(Math.random() * hello.length);
    if (hello[random] == "scissor") {
      DOMs.Result.insertAdjacentHTML("afterbegin", "<h2>win</h2>");
      DOMs.Area.innerHTML = "Wins" + wins++;
      flavortext(wins)
     console.log(wins)
    } else if (hello[random] == "paper") {
      DOMs.Result.insertAdjacentHTML("afterbegin", "<h2>big L</h2>");
      DOMs.Area.innerHTML = "Lost" + lost++;
      flavortext(lost)
      console.log(lost);
    } else if (hello[random] == "rock") {
      DOMs.Result.insertAdjacentHTML("afterbegin", "<h2>tie</h2>");
      DOMs.Area.innerHTML = "Ties" + ties++;
      flavortext(ties)
      console.log(lost);
    }
  });
  DOMs.Area.insertAdjacentHTML("afterbegin", `${wins}`);
}


rock();
