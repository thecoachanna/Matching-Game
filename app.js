const gameBoard = document.getElementById('gameBoard')
const exerciseCards = gameBoard.children

let fragment = document.createDocumentFragment() 
while (exerciseCards.length > 0) {
    let randomCard = Math.floor(Math.random() * exerciseCards.length)
    console.log(randomCard)
    fragment.appendChild(exerciseCards[randomCard])
    }

gameBoard.appendChild(fragment)

const cards = document.querySelectorAll('.memory-card');



cards.forEach(card => card.addEventListener('click', (e) => {
    return pickCard(e);

}));

let chosenCards = [];

function pickCard(event) {

    event.target.style.display = 'none';

    let exerciseImg = event.target.parentElement.querySelector('.exercise');
    exerciseImg.style.display = 'inline';
    chosenCards.push(exerciseImg)
    console.log(chosenCards)
    if (chosenCards.length === 2) {
        setTimeout(() => {
            checkForAMatch()
        }, 1000)
        
        
    }
}

let questionMark = document.querySelectorAll('.question-mark');
let exercise = document.querySelectorAll('.exercise');

let maxTwoTurns = 0;


function checkForAMatch() {
    if (chosenCards[0].dataset.exercise === chosenCards[1].dataset.exercise) {
        alert('You found a match!')
        foundCards+=2;
        gameWon()


    } else {
        alert('This is not a match!')
        // console.log(chosenCards)
        // chosenCards[0].setAttribute('src', 'images/Question_Mark.png')
        // chosenCards[1].setAttribute('src', 'images/Question_Mark.png') 
        console.log(chosenCards[0])
        chosenCards[0].parentElement.querySelector('.question-mark').style.display = 'inline' 
        chosenCards[1].parentElement.querySelector('.question-mark').style.display = 'inline'    
        chosenCards[0].style.display = 'none' 
        chosenCards[1].style.display = 'none' 
        
    }
    chosenCards = [];
}

const cardsInGame = 16;
let foundCards = 0;

function gameWon() {
    if (foundCards == cardsInGame){
        alert('Congrats! You found all of the matches!')
    }
    
}

// Need a way to win the game.
// Need a time delay between flipping cards and finding matches.
// Need a way to shuffle cards (randomize or sort).







// setTimeout(function (chosenCards) => {
//             console.log(chosenCards)
//             chosenCards[0].src = 'images/Question_Mark.png'
//             chosenCards[1].src = 'images/Question_Mark.png'
//         }, 2000)





