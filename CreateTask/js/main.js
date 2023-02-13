import { DOMs } from "./dom";

const hello = ["rock", "papper", "scissor"];

function rock() {
  DOMs.Rock.addEventListener("click", () => {
    let random = Math.floor(Math.random() * hello.length);
    if (hello[random] == "scissor") {
      console.log(hello[random] + " wom");
    } else if (hello[random] == "paper") {
      console.log(hello[random] + " L");
    } else if (hello[random] == "rock") {
      console.log(hello[random] + " Tie");
    }
  });
}

rock();
