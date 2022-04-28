//  1. create class list - const cards = document.querySelectorAll(.memory-card)
//  2. add event Listener click and flipcards
//  3. declare flipcard function - this.classList.toggle('flip) (will need to go into css and flip y axis 180 degrees)

// 4. need to know which card is flipped first. Variables for First card, second card. If statement and boolean.

// 5. need a way to make sure cards are the same (IF first card === second card)and keep them flipped (remove EventListener) 

// 6.  ELSE unflip the cards (remove the flip class) - will need a set Timeout to give enough time to flip

// 7. can shorten by making one function (check for match)
// 8. need to be able to lock the board after cards are flipped so that they can't just keep turning cards over (lock board function)
// 9. need a way to reset board
// 10. shuffle cards - generate random number between 1-16 (this will be a function) math.random and math.floor then apply to order property in CSS - wrap this function in parenthesis to make it immediatley invoked

//  OR can do a card class list and link cards in an array, iterating through them with a for loop. Use setAttribute