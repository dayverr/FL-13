
function wantPlay(){
    let result = confirm('Do you want to play a game?');
    if (!result){
        alert('You did not become a billionaire, but can.')
    }
    return result;
}

function wantPlayAgain(totalPrize){
    alert('Thank you for your participation. Your total prize is: '+ totalPrize+'$')
    let result = confirm('Do you want to play again?');
    return result;
}


function winingNumber(min,max){
    let random = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(random);
}

function isWin (playerNumber,winingNumber) {
    if(playerNumber===winingNumber){
        return true;
    } else {
        return false;
    }
}

function curentAttempt (min,max,left,total,possible){
    let firstLine='Chose a roulette pocket number from '+min+'to '+max;
    let secondLine= 'Attempts left: '+ left;
    let thirdLine='Total prize: ' + total + '$';
    let fourthLine='Possible prize on currenr attempt: ' + possible+'$';
    return Number(prompt(firstLine+'\r\n'+secondLine+'\r\n'+thirdLine+'\r\n'+fourthLine))
}



if(wantPlay()){
    let rangeIncrease=5;
    let minNumber=0;
    let maxNumber=5;
    let totalPrize=0;
    let possiblePrize=100;

    do{


    let winNumber=winingNumber(minNumber,maxNumber);

    for(let attemptLeft=3;attemptLeft>0;attemptLeft--){


        let playerNumber=curentAttempt(minNumber,maxNumber,attemptLeft,totalPrize,possiblePrize);
        if(isWin(playerNumber,winNumber)){
            if(confirm('Congratulation, you won! Your prize is: '+possiblePrize+'$. Do you want to continue?')){
                maxNumber=maxNumber+rangeIncrease;
                totalPrize+=possiblePrize;
                possiblePrize=possiblePrize*2;
            } else{
                possiblePrize=possiblePrize/2;
            }
        }
    }
    } while(wantPlayAgain(totalPrize))
}