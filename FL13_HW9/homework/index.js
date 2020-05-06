function convert () {
    let arr=[];
    for (let i=0; i<arguments.length; i++){
        typeof arguments[i]==='string' ? arr[i]=Number(arguments[i]) : arr[i]=String(arguments[i]);
    }
    return arr;
}


function executeforEach (arr,callback){
    for (let i=0;i<arr.length;i++){
        arr[i]=callback(arr[i]);
    }
}


function mapArray(arr,func) {

    executeforEach(arr,function(el){
 return +el;
})
    executeforEach(arr,func);
    return arr;
}

function filterArray(arr,func) {
    let arr2 =[];
    for (let i=0;i<arr.length;i++){
        arr2[i]=arr[i];
    }
    executeforEach(arr2,func);
    let arr3=[];
    for (let i=0;i<arr.length;i++){
        if (arr2[i]){
            arr3.push(arr[i])
        }
    }
    return arr3;
}

function containsValue (arr,value) {
    let arr2 =[];
    for (let i=0;i<arr.length;i++){
        arr2[i]=arr[i];
    }
    executeforEach(arr2,(el) => el===value);
    let result=false;
    for (let i=0;i<arr2.length;i++){
        if (arr2[i]){
            result=true;
        }
    }
    return result;
}

function flipOver(string) {
    let result='';
    for (let i=string.length-1;i>-1;i--){
        result=result+string[i];
    }
    return result;
}

function makeListFromRange(arr) {
    let arrLen = arr[1]-arr[0];
    let arr2=[arr[0]];
    for(let i=1; i<arrLen+1; i++) {
        arr2[i]=arr2[i-1]+1;
    }
    return arr2;
}

const fruits = [
    { name: 'apple', weight: 0.5 },
    { name: 'pineapple', weight: 2 }
    ];


function getArrayOfKeys(arr,key) {
    let arr2=[];
    for(let i = 0; i<arr.length; i++){
        arr2[i]=arr[i];
    }
    executeforEach(arr2,function(el){
 return el[key] 
})
    return arr2
}