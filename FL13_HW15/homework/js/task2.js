function Vehicle(color,engine){
let _color = color;
let _engine = engine;
let _maxSpeed = 70;
let curentSpeed = 0;
let isBraking = false;
let speedchange = 20;

this.upgradeEngine = function (newEngine,maxSpeed){
    _engine=newEngine;
    _maxSpeed=maxSpeed;
}

this.getInfo = function(){
    return {color:_color, engine:_engine, maxSpeed:_maxSpeed}
}

this.drive = function(){
    let delay = 2000;


 let start= setInterval(function(){
  if (isBraking){
    clearInterval(start);
}
console.log(curentSpeed);
curentSpeed+=speedchange;
}, delay)
}

this.stop=function(){
    isBraking=true;
    let delay = 1500;
    let stop= setInterval(function(){
 console.log(curentSpeed); curentSpeed-=speedchange; if ( curentSpeed<=0){
        clearInterval(stop);
}
}, delay)
}
}