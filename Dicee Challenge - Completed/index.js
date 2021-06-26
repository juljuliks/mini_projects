let randomNumber1 = Math.floor(Math.random() * 6); 
let randomNumber2 = Math.floor(Math.random() * 6);
let h1 = document.querySelector("h1");
let dices = ['one', 'two', 'three', 'four', 'five', 'six'];

function setClass(randomNumber, iconId) {
  document.querySelectorAll('i')[iconId].setAttribute('class', `fas fa-dice-${dices[randomNumber]}`);
}

setClass(randomNumber1, 0);
setClass(randomNumber2, 1);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  h1.innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  h1.innerHTML = "Player 2 Wins! 🚩";
}
else {
  h1.innerHTML = "Draw!";
}

document.querySelector('button').addEventListener('click', function() {
  location.reload();
});