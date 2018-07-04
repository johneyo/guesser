let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max);
    guesseesLeft = 3;
//UI ELEMENTS
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
// assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;
//play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})
//button
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  //validate
  if(isNaN(guess) || guess < min || guess > max){
setMessage(`Please enter a number between ${min} & ${max}`, 'red')
  }
// check if correct
else if (guess === winningNum){
  gameOver(true, `${winningNum} is correct...YOU WIN!!`)
}else{
  guesseesLeft-= 1;
  if(guesseesLeft === 0){
  gameOver(false, `YOU LOST!!..the correct number was ${winningNum} try again`)
  }else {
    //game continues .. answer wrong
guessInput.style.borderColor = 'red'
guessInput.value = '';
  setMessage(`you are WRONG.. you have ${guesseesLeft} trials remaining`, 'red');
  }
}
});
function setMessage(msg, color){
  message.style.color = color;
  message.textContent=msg;
}
// GAME OVER
function gameOver(won, msg,){
let color;
won === true ? color ='green' : color ='red';
won === true ? disp = 'Play Again': disp = 'Retry';
won === true ? ref = 'green' : color ='red';
  //disable input
  guessInput.disabled = true
  // change css
  guessInput.style.borderColor = color;
  // set message
  setMessage(msg); 
   message.style.color = color;
  guessBtn.value = disp;
  guessBtn.className += 'play-again';
  if (won === true){
    guessBtn.style.borderColor = 'green'
  }else{
    guessBtn.style.borderColor = 'red'
  };
}
//get winning number
  function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+(min));
  };