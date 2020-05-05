function convert () {
    let arr=[];
    for (let i=0; i<arguments.length; i++){
        typeof arguments[i]==='string' ? arr[i]=Number(arguments[i]) : arr[i]=String(arguments[i]);
    }
    return arr;
}


function executeforEach (arr,func){
    for (let i=0;i<arr.length;i++){
        arr[i]=func(arr[i]);
    }
    return arr;
}


function mapArray(arr,func) {
    executeforEach(arr,function(element) {
 return Number(element)
});
    return executeforEach(arr,func);
}
