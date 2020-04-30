function isBigger (firstNum,secondNum){
    return firstNum>secondNum;
}

function getDifference(firstNum,secondNum) {
    return isBigger(firstNum,secondNum) ? firstNum-secondNum : secondNum-firstNum;
}

getDifference();