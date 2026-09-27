let userScore = 0;
let computerScore = 0;

const choices = document.getElementsByClassName("choice");
const msg = document.getElementById("play");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function () {
    const userchoices = this.id;
    playgame(userchoices);
  });
}

function playgame(userchoices) {
  //computer choices
  const compchoices = getchoicescomp();

  if (userchoices === compchoices) {
    console.log("match Draw");
    msg.innerHTML = "Match Draw ! Paly Again";
    msg.style.backgroundColor = "#081b31";
  } else {
    if (
      (userchoices === "rock" && compchoices === "scissors") ||
      (userchoices === "paper" && compchoices === "rock") ||
      (userchoices === "scissors" && compchoices === "paper")
    ) {
      userScore++;
      userScore_span.innerText = userScore;
      msg.innerHTML = "You win!";
      msg.style.backgroundColor = "green";
    } else {
      computerScore++;
      computerScore_span.innerText = computerScore;
      msg.innerHTML = "You lose";
      msg.style.backgroundColor = "red";
    }
  }
}
function getchoicescomp() {
  const choices = ["rock", "paper", "scissors"];
  const randomnumber = Math.floor(Math.random() * 3);
  return choices[randomnumber];
}
