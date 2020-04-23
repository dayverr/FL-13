let word = prompt('Input your word');
if (!word.replace(/\s/g, '').length||word==='') {
    alert('wrong input');
} else {
    let arr = Array.from(word);
    let i = arr.length;
    if (i===1) {
    alert(arr[0]);
    } else if (i%2===0){
    alert(arr[i/2-1] + arr[i/2]);
    } else if (i%2){
    alert(arr[(i-1)/2]);
    }
}
