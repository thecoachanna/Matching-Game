// Randomly generating cards. Source:
// https://stackoverflow.com/questions/315177/any-way-to-shuffle-content-in-multiple-div-elements

const gameBoard = document.getElementById("gameBoard");
const exerciseCards = gameBoard.children;

let fragment = document.createDocumentFragment();
while (exerciseCards.length > 0) {
  let randomCard = Math.floor(Math.random() * exerciseCards.length);
  console.log(randomCard);
  fragment.appendChild(exerciseCards[randomCard]);
}

gameBoard.appendChild(fragment);

const cards = document.querySelectorAll(".memory-card");

cards.forEach((card) =>
  card.addEventListener("click", (e) => {
    return pickCard(e);
  })
);

let chosenCards = [];

// Allowing to choose no more than 2 cards at a time while checking for match.

function pickCard(event) {
  event.target.style.display = "none";

  let exerciseImg = event.target.parentElement.querySelector(".exercise");
  exerciseImg.style.display = "inline";
  chosenCards.push(exerciseImg);
  if (chosenCards.length === 2) {
    setTimeout(() => {
      checkForAMatch();
    }, 1000);
  }
}

let questionMark = document.querySelectorAll(".question-mark");
let exercise = document.querySelectorAll(".exercise");

let maxTwoTurns = 0;

//  Checking for a match and allowing cards to be flipped back over and chosen again if not a match.

function checkForAMatch() {
  if (chosenCards[0].dataset.exercise === chosenCards[1].dataset.exercise) {
    alert("You found a match!");
    foundCards += 2;
    gameWon();
  } else {
    alert("This is not a match!");
    chosenCards[0].parentElement.querySelector(".question-mark").style.display =
      "inline";
    chosenCards[1].parentElement.querySelector(".question-mark").style.display =
      "inline";
    chosenCards[0].style.display = "none";
    chosenCards[1].style.display = "none";
  }
  chosenCards = [];
}

const cardsInGame = 16;
let foundCards = 0;
const resultDisplay = document.querySelector('#result')

function gameWon() {
  if (foundCards == cardsInGame) {
    resultDisplay.textContent = "Congratulations! You found all 8 matches!"
    party.confetti(document.getElementsByTagName('body')[0],{
      count: 2000,
      gravity: 300
    });
  }
}
