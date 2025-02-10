'use strict';




//defining the secret number of the game
let secretNumber = Math.trunc(Math.random()*20) + 1;
// document.querySelector('.number').textContent = secretNumber; //displaying random number


//showing score varaible
let score = 20;

//for highscore
let highscore = 0;


document.querySelector('.check').addEventListener('click',function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);  //this will return the guessed number

    if(!guess) {
        document.querySelector('.message').textContent = 'No Number!❌';
        
    //when we dont guess the number in the game
    } else if(guess === secretNumber) {  //when we gussed right
        document.querySelector('.message').textContent = 'Correct Number🎉';
        //changing background when u are right 
        document.querySelector('body').style.backgroundColor = '#88B04B';

        document.querySelector('.number').style.width ='30rem';



        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

         
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high😒';
            score--;
            document.querySelector('.score').textContent = score;

        }else {
            document.querySelector('.message').textContent = 'You lost the game💩';
            document.querySelector('.score').textContent = 0;
        }
       



    }else if(guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low 🤷‍♂️';
            score--;
            document.querySelector('.score').textContent = score;

        }else {
            document.querySelector('.message').textContent = 'You lost the game💩';
            document.querySelector('.score').textContent = 0;
        }
       
    }

});

//again button functinality 
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;



     //restoring initial conditions
    document.querySelector('.message').textContent = 'Start guessing...🤔';

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';

        document.querySelector('.number').style.width ='15rem';








});