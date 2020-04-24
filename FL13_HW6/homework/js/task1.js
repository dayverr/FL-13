let check = prompt('Input your check');
if (isNaN(check)===false && check>0) {
    check=Number(check);
    let tip = prompt('Input percentage of tip');
    if (isNaN(tip)===false && tip>0 && tip<=100) {
        tip=Number(tip);
        let tipAm = check*tip/100;
        let total = check+tipAm;
        alert('Check number: '+check+'\nTip: '+tip+'%'+'\nTip amount: '+tipAm+'\nTotal sum to pay: '+total);
    } else {
        alert('Wrong tip input');
    }
} else {
    alert('Wrong  check input');
}
