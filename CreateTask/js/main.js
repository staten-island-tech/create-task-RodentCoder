import { DOMs } from "./dom";

const hello = ["rock", "papper", "scissor"];

let wins = 0;
let ties = 0;
let lost = 0;

function rock() {
  DOMs.Rock.addEventListener("click", () => {
    let random = Math.floor(Math.random() * hello.length);
    if (hello[random] == "scissor") {
      wins++;
      console.log(hello[random] + " wom" + wins);
    } else if (hello[random] == "paper") {
      console.log(hello[random] + " L");
    } else if (hello[random] == "rock") {
      console.log(hello[random] + " Tie");
    }
  });
}

rock();
