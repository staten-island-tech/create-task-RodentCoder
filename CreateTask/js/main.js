import { DOMs } from "./dom";

const hello = ["rock", "paper", "scissor"];

let wins = 0;
let ties = 0;
let lost = 0;

console.log(DOMs.Result);

function flavorwin(x) {
  if (x > 0) {
    console.log("works");
  } else {
    console.log("error");
  }
}


function yes() {
  DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties + "Lost" + lost;
  DOMs.Rock.addEventListener("click", () => {
    DOMs.Result.innerHTML = "";
    let random = Math.floor(Math.random() * hello.length);
    if (hello[random] == "scissor") {
      DOMs.Result.insertAdjacentHTML(
        "afterbegin",
        "<h2>Win Computer Chose Scissor</h2>"
      );
      DOMs.Area.innerHTML = "Wins" + wins++ + "Ties" + ties + "Lost" + lost;
    } else if (hello[random] == "paper") {
      DOMs.Result.insertAdjacentHTML(
        "afterbegin",
        "<h2>Lost Computer Chose Paper</h2>"
      );
      DOMs.Area.insertAdjacentHTML("afterbegin", "<h2>Wins</h2>" + wins++);
      DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties + "Lost" + lost++;
    } else if (hello[random] == "rock") {
      DOMs.Result.insertAdjacentHTML(
        "afterbegin",
        "<h2>Tied Computer Chose Rock</h2>"
      );
      DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties++ + "Lost" + lost;
    }
  });
  DOMs.Scissor.addEventListener("click", () => {
    DOMs.Result.innerHTML = "";
    let random = Math.floor(Math.random() * hello.length);
    if (hello[random] == "scissor") {
      DOMs.Result.insertAdjacentHTML(
        "afterbegin",
        "<h2>Tied Computer Chose Scissor</h2>"
      );
      DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties++ + "Lost" + lost;
    } else if (hello[random] == "paper") {
      DOMs.Result.insertAdjacentHTML(
        "afterbegin",
        "<h2>Win Computer Chose Paper</h2>"
      );
      DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties + "Lost" + lost++;
    } else if (hello[random] == "rock") {
      DOMs.Result.insertAdjacentHTML(
        "afterbegin",
        "<h2>Losted Computer Chose Rock</h2>"
      );
      DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties + "Lost" + lost++;
    }
  });
  DOMs.Paper.addEventListener("click", () => {
    DOMs.Result.innerHTML = "";
    let random = Math.floor(Math.random() * hello.length);
    if (hello[random] == "scissor") {
      DOMs.Result.insertAdjacentHTML(
        "afterbegin",
        "<h2>Lost Computer Chose Scissor</h2>"
      );
      DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties + "Lost" + lost++;
    } else if (hello[random] == "paper") {
      DOMs.Result.insertAdjacentHTML(
        "afterbegin",
        "<h2>Tied Computer Chose Paper</h2>"
      );
      DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties++ + "Lost" + lost;
    } else if (hello[random] == "rock") {
      DOMs.Result.insertAdjacentHTML(
        "afterbegin",
        "<h2>Win Computer Chose Rock</h2>"
      );
      DOMs.Area.innerHTML = "Wins" + wins++ + "Ties" + ties + "Lost" + lost;
    }
  });
  DOMs.Reset.addEventListener("click", () => {
    (wins = 0), (ties = 0), (lost = 0);
    DOMs.Result.innerHTML = `<h2>Please Press a Button</h2>`;
    DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties + "Lost" + lost;
  });
}

yes();
