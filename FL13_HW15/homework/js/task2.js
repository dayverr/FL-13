function Vehicle(color,engine){
let _color = color;
let _engine = engine;
let _maxSpeed = 70;
let curentSpeed = 0;
let previousSpeed = 0;
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
 console.log(curentSpeed); if ( previousSpeed>curentSpeed){
    clearInterval(start);
} previousSpeed=curentSpeed; curentSpeed+=speedchange;
}, delay)
}



this.stop=function(){
    let delay = 1500;
    let stop= setInterval(function(){
 console.log(curentSpeed); curentSpeed-=speedchange; if ( curentSpeed<speedchange){
        clearInterval(stop);
}
}, delay)
}
}