function Vehicle(color,engine){
let _color = color;
let _engine = engine;
let _maxSpeed = 70;
let curentSpeed = 0;
let isBraking = false;
let isDriving = false;
let speedchange = 20;
let yourMaxSpeedWas = 0;

this.upgradeEngine = function (newEngine,maxSpeed){
    _engine=newEngine;
    _maxSpeed=maxSpeed;
}

this.getInfo = function(){
    return {color:_color, engine:_engine, maxSpeed:_maxSpeed}
}

this.drive = function(){
    if(!isDriving){
        isDriving=true;
        let delay = 2000;
        let start= setInterval(function(){
            if (isBraking){
            clearInterval(start);
            }
        console.log(curentSpeed);
        curentSpeed+=speedchange;
        }, delay)
    } else {
        console.log('your vehicle is olready drive')
    }
}

this.stop=function(){
    if (!isBraking){
        yourMaxSpeedWas=curentSpeed;
        isBraking=true;
        let delay = 1500;
        let stop= setInterval(function(){
        console.log(curentSpeed);
        curentSpeed-=speedchange;
        if ( curentSpeed<=0){
        console.log(curentSpeed);
        console.log(`Vehicle is stopped. Maximum speed during the drive was ${yourMaxSpeedWas}`)
        clearInterval(stop);
        }
        }, delay)
        } else {
            console.log('Already slows down')
        }
    }
}
