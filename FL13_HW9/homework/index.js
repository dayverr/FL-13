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