function letterCount (string,letter){
    let arr = [...string];
    let result =0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]===letter) {
            result++;
        }
    }
    return result;
}

letterCount('','g');