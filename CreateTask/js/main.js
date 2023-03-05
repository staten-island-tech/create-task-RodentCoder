import { DOMs } from "./dom";

const hello = ["rock", "paper", "scissor"];
let gamesplayed =[];
let games = 0
let wins = 0;
let ties = 0;
let lost = 0;


console.log(DOMs.Result);

  DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties + "Lost" + lost;

  DOMs.Result.innerHTML = `<h2>Please press a button or add an input</h2>`;

  DOMs.Rock.addEventListener("click", () => {
    DOMs.Result.innerHTML = "";
    let random = Math.floor(Math.random() * hello.length);
    if (hello[random] == "scissor") {
      wins++
      games++
      DOMs.Result.insertAdjacentHTML(
        "afterbegin",
        `<h2>You Win, The Computer Chose Scissor</h2>
        <h3>You are on Game ${games}</h3>
        `
      );
      DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties + "Lost" + lost;
      gamesplayed.push(`game ${games}  You: Rock, COM: Scissor`)
     
    } else if (hello[random] == "paper") {
      lost++
      games++
      DOMs.Result.insertAdjacentHTML(
        "afterbegin",
        `<h2>You Lost, The Computer Chose Paper</h2>
        <h3>You are on Game ${games}</h3>`
      );
      DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties + "Lost" + lost;
      gamesplayed.push(`game ${games}  You: Rock, COM: Paper`)
    } else if (hello[random] == "rock") {
      ties++
      games++
      DOMs.Result.insertAdjacentHTML(
        "afterbegin",
        `<h2>You Tied, The Computer Chose Rock</h2>
        <h3>You are on Game ${games}</h3>`
      );
      DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties + "Lost" + lost;
      gamesplayed.push(`game ${games}  You: Rock, COM: Rock`)
    }
  });

  DOMs.Scissor.addEventListener("click", () => {
    DOMs.Result.innerHTML = "";
    let random = Math.floor(Math.random() * hello.length);
    if (hello[random] == "scissor") {
      ties++
      games++
      DOMs.Result.insertAdjacentHTML(
        "afterbegin",
        `<h2>You Tied, The Computer Chose Scissor</h2>
        <h3>You are on Game ${games}</h3>`
      );
      DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties + "Lost" + lost;
      gamesplayed.push(`game ${games}  You: Scissor, COM: Scissor`)
    
    } else if (hello[random] == "paper") {
      wins++
      games++
      DOMs.Result.insertAdjacentHTML(
        "afterbegin",
        `<h2>You Win, The Computer Chose Paper</h2>
        <h3>You are on Game ${games}</h3>`
      );
      DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties + "Lost" + lost;
      gamesplayed.push(`game ${games}  You: Scissor, COM: Paper`)
    } else if (hello[random] == "rock") {
      lost++
      games++
      DOMs.Result.insertAdjacentHTML(
        "afterbegin",
        `<h2>You Lost, The Computer Chose Rock</h2>
        <h3>You are on Game ${games}</h3>`
      );
      DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties + "Lost" + lost;
      gamesplayed.push(`game ${games}  You: Scissor, COM: Rock`)
    }
  });

  DOMs.Paper.addEventListener("click", () => {
    DOMs.Result.innerHTML = "";
    let random = Math.floor(Math.random() * hello.length);
    if (hello[random] == "scissor") {
      lost++
      games++
      DOMs.Result.insertAdjacentHTML(
        "afterbegin",
        `<h2>You Lost, The Computer Chose Scissor</h2>
        <h3>You are on Game ${games}</h3>`
      );
      DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties + "Lost" + lost;
      gamesplayed.push(`game ${games}  You: Paper, COM: Scissor`)
    } else if (hello[random] == "paper") {
      ties++
      games++
      DOMs.Result.insertAdjacentHTML(
        "afterbegin",
        `<h2>You Tied, The Computer Chose Paper</h2>
        <h3>You are on Game ${games}</h3>`
      );
      DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties + "Lost" + lost;
      gamesplayed.push(`game ${games}  You: Paper, COM: Paper`)
    } else if (hello[random] == "rock") {
      wins++
      games++
      DOMs.Result.insertAdjacentHTML(
        "afterbegin",
        `<h2>You Win, The Computer Chose Rock</h2>
        <h3>You are on Game ${games}</h3>`
      );
      DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties + "Lost" + lost;
      gamesplayed.push(`game ${games}  You: Paper, COM: Rock`)
    }
  });

  DOMs.Reset.addEventListener("click", () => {
    (wins = 0), (ties = 0), (lost = 0),(games = 0),(gamesplayed =[]);
    DOMs.Result.innerHTML = `<h2>Please press a button or add an input</h2>`;
    DOMs.Area.innerHTML = "Wins" + wins + "Ties" + ties + "Lost" + lost;
    DOMs.HistoryLog.innerHTML=""
  });


  function flavortext(nice) {
    for (let i = 0; i < nice.length; i++) {
      if ( i > 0  ) {
        DOMs.HistoryLog.insertAdjacentHTML("afterbegin", `<div class="check">${nice[i-1]}</div>`)
      } else {
        DOMs.HistoryLog.innerHTML=""
      }
    }
  }


  DOMs.History.addEventListener("click",() =>
   flavortext(gamesplayed)
  )

  console.log(DOMs.History)
  console.log(DOMs.Area)
