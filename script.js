 'use strict'
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent="new content"
// document.querySelector('.check').addEventListener('click',function(){
//     console.log(document.querySelector('.guess').value);
//     document.querySelector('.message').textContent="correct number g";

// })

let SecertNumber=Math.trunc(Math.random() * 20) + 1;

let score=20;
document.querySelector('.check').addEventListener('click',function(){
    const guess= Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent='No Number';
    }else if(guess=== SecertNumber){
        document.querySelector('.message').textContent='Correct Number';
        document.querySelector(".number").textContent=SecertNumber
        document.querySelector('body').style.backgroundColor='#FFC0CB';
    }else if(guess > SecertNumber){
        if(score > 1){
        document.querySelector('.message').textContent="To High!!!!";
        score--;
        document.querySelector('.score').textContent=score;

        }else{
            document.querySelector('.message').textContent="you lost the Game";
            document.querySelector('.score').textContent=0;
        }

    }else if(guess < SecertNumber){
        if(score > 1){
        document.querySelector('.message').textContent="To Low!!!!";
        score--;
        document.querySelector('.score').textContent=score;

        }else{
            document.querySelector('.message').textContent="you lost the Game";
            document.querySelector('.score').textContent=0;
        }

        
        
        

    }

});
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    SecertNumber = Math.trunc(Math.random() * 20) + 1; 

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
});