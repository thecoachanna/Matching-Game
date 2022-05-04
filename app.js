const cards = document.querySelectorAll('.memory-card');

// cards.sort( () => 0.5 - Math.random() );

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
        checkForAMatch()
    }
}

let questionMark = document.querySelectorAll('.question-mark');
let exercise = document.querySelectorAll('.exercise');

let maxTwoTurns = 0;


function checkForAMatch() {
    if (chosenCards[0].dataset.exercise === chosenCards[1].dataset.exercise) {
        alert('You found a match!')
        foundCards++;


    } else {
        alert('This is not a match!')
        console.log(chosenCards)
        chosenCards[0].setAttribute('src', 'images/Question_Mark.png')
        chosenCards[1].setAttribute('src', 'images/Question_Mark.png')      
        
    }
    chosenCards = [];
}

const cardsInGame = 16;
let foundCards = 0;

function gameWon() {
    if (foundCards == cardsInGame){
        alert('Congrats! You found all of the matches!')
    }
    gameWon();
}








// setTimeout(function (chosenCards) {
        //     console.log(chosenCards)
        //     chosenCards[0].src = 'images/Question_Mark.png'
        //     chosenCards[1].src = 'images/Question_Mark.png'
        //     // chosenCards[0].setAttribute('src', 'images/Question_Mark.png')
        //     // chosenCards[1].setAttribute('src', 'images/Question_Mark.png')
        // }, 2000)


// document.body.addEventListener('click', function (e) {

//     if (maxTwoTurns = 2 || chosenCards.length < 2) {

//         if (e.target.tagName === 'IMG') {
//             chosenCards.push(e.target)
//             maxTwoTurns = maxTwoTurns + 1;
//             // if (maxTwoTurns === 1) {
//             // match comparison with ID's e.target.dataset.exercise
//         }
//     } else {
//         checkForAMatch(chosenCards);
//         maxTwoTurns = 0;
//         chosenCards = [0];
//     }

// })


