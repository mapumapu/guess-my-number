"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const displaySecretNumber = function (secretNumber) {
  document.querySelector(".number").textContent = secretNumber;
};

const changeBackgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

const changeWidth = function (size) {
  document.querySelector(".number").style.width = size;
};

// Check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When no number
  if (!guess) {
    displayMessage("No Number!");

    // When player wins
  } else if (guess === secretNumber) {
    displaySecretNumber(secretNumber);
    displayMessage("Correct Number!");
    changeBackgroundColor("#60b347");
    changeWidth("30rem");

    if (score > highscore) {
      highscore = score;

      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("You Lose!");
      changeBackgroundColor("red");
      displayScore(0);
    }
  }
});

// Again button
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".guess").value = "";
  displaySecretNumber("?");
  displayMessage('"Start guessing..."');
  displayScore(0);
  changeBackgroundColor("#222");
  changeWidth("15rem");
});
