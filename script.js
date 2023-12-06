let userMove='';
let computerMove='';

function generateComputerMove(){
    const random=Math.random();
    if(random<1/3)
    {
        computerMove='rock';
    }
    else if(random<2/3)
    {
        computerMove='paper';
    }
    else {
        computerMove='scissors'
    }
}
let result='';
function evaluateMoves(){
    if(userMove==computerMove){
        result='tie'
    }
    else if((userMove=='rock'&&computerMove=='scissors')||(userMove=='scissors'&&computerMove=='paper')||
    userMove=='scissors'&&computerMove=='paper')
    {
        result='win';
    }
    else {
        result='lose';
    }
}
