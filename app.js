const score0 = document.querySelector('#score--0');
const current0 = document.querySelector('#current--0');
const score1 = document.querySelector('#score--1');
const current1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const closeModal = document.querySelector('.close-modal');
dice.style.display = 'none';
let currentScore = 0;
let activePlayer = 0;
let total = [0,0];
let gameOver = true;
btnRoll.addEventListener('click', ()=>{
      if(gameOver){
      dice.style.display = 'block';
      let random = Math.floor(Math.random() * 6 + 1);
      dice.src = `./images/dice-${random}.png`;
      if(random != 1){
            currentScore += random;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
      }else{
            changePlayer()
      }
      }
});
function changePlayer(){
      currentScore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer == 0 ? 1 : 0;
      document.querySelector('.player--0').classList.toggle('player--active');
      document.querySelector('.player--1').classList.toggle('player--active');
};
btnHold.addEventListener('click', ()=>{
      if(gameOver){
            total[activePlayer] += currentScore;
            document.querySelector(`#score--${activePlayer}`).textContent = total[activePlayer];
            if(total[activePlayer] >= 30){
                  gameOver = false;
                  document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
                  document.querySelector('.bg-modal').style.display = 'block';
            }else{
                  changePlayer()
            }
      }
      
});
closeModal.addEventListener('click', ()=>{
      document.querySelector('.bg-modal').style.display = 'none';
});
btnNew.addEventListener('click', ()=>{
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
      currentScore = 0;
      activePlayer = 0;
      total = [0,0];
      gameOver = true;
      document.querySelector('.player--0').classList.add('player--active');
      document.querySelector('.player--1').classList.remove('player--active');
      document.querySelector('#score--0').textContent = 0;
      document.querySelector('#current--0').textContent = 0;
      document.querySelector('#score--1').textContent = 0;
      document.querySelector('#current--1').textContent = 0;
      dice.style.display = 'none';
})

