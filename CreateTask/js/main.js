import { DOMs } from "./dom";

const hello = ["rock", "paper", "scissor"];
let history = [];

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
      history.push("wins:" + wins);
      console.log(history);
    } else if (hello[random] == "paper") {
      DOMs.Result.insertAdjacentHTML("afterbegin", "<h2>big L</h2>");
      lost++;
      history.push("lost:" + lost);
      console.log(history);
    } else if (hello[random] == "rock") {
      DOMs.Result.insertAdjacentHTML("afterbegin", "<h2>tie</h2>");
      ties++;
      history.push("ties:" + ties);
      console.log(history);
    }
  });
  DOMs.Area.insertAdjacentHTML("afterbegin", `${wins}`);
}

function flavortext(x) {
  if (x > 0) {
    console.log("works");
  } else {
    console.log("error");
  }
}
flavortext(history.wins);
rock();
