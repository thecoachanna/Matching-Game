

function pickCard(event) {

    event.target.style.display = 'none';
    let exerciseImg = event.target.parentElement.querySelector('.exercise');
    exerciseImg.style.display = 'inline';
}

const cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', (e) => {
    return pickCard(e);

}));

let questionMark = document.querySelectorAll('.question-mark');
let exercise = document.querySelectorAll('.exercise');

let maxTwoTurns = 0;
let chosenCards = [];

document.body.addEventListener('click', function (e) {

    if (maxTwoTurns < 2) {

        if (e.target.tagName === 'IMG') {
            chosenCards.push(e.target)
            if (maxTwoTurns === 1) {
                // match comparison with ID's e.target.dataset.exercise

            }

            maxTwoTurns = maxTwoTurns + 1;
        }
    } else {

    }
})

function checkForAMatch(chosenCards) {
    if (chosenCards[0].dataset.exercise === chosenCards[1].dataset.exercise) {
        alert('You found a match!')

    } else (ifNotAMatch) => {

    }
}





// click counter variable to only allow for two clicks that resets to 0 and removes eventlistener
// outside of function "clickon" variable
