function Vehicle(color,engine){
this.color = color;
this.engine = engine;
let maxSpeed = 70;
let curentSpeed = 0;
let isBraking = false;
let isDriving = false;
let speedchange = 20;
let yourMaxSpeedWas = 0;

this.upgradeEngine = function (newEngine,maxSpeed){
    this.engine=newEngine;
    this.maxSpeed=maxSpeed;
}

this.getInfo = function(){
    return {color:color, engine:engine, maxSpeed:maxSpeed}
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
        if(curentSpeed>maxSpeed){
            console.log('speed is too high, SLOW DOWN!')
        }
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

function Car (model,color,engine){
    Vehicle.apply(this,arguments);
    this.model=model;
    this.color=color;
    this.engine=engine;
}


function Motrorcycle (model,color,engine){
    Car.apply(this,arguments);
    this.model=model;
    this.color=color;
    this.engine=engine;
}