function countPoints (arr){
    let result=0;
    let elementArr=[];
    for (let i=0; i<arr.length; i++){
        elementArr=[...arr[i]];
        if(elementArr[0]>elementArr[2]){
            result+=3;
        } else if (elementArr[0]===elementArr[2]){
            result++;
        }
    }
    return result;
}

countPoints();