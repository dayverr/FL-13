function checkLogin(name){
    if (name===''){
        return alert('Canceled');
    } else if (Array.from(name).length<4) {
        return alert('I dont know any users having name length less than 4 symbols');
    } else if (name==='User'||name==='Admin'){
        return 'valid';
    } else {
        return alert('I don’t know you');
    }
}

function checkPass(pass,login){
    if (pass===''){
        return alert('Canceled');
    } else if (login==='User'&&pass==='UserPass') {
        return 'valid';
    } else if (login==='Admin'&&pass==='RootPass'){
        return 'valid';
    } else {
        return alert('Wrong password');
    }
}



function greet(login){
    let curentTime = new Date().getHours();
    if(curentTime<20&&curentTime>8) {
        alert('Good day, dear '+login);
    } else {
        alert('Good evening, dear '+login);
    }
}




let login = prompt('Input login :');

if (checkLogin(login)==='valid'){
    let password = prompt('input password :');
    if (checkPass(password,login)==='valid'){
        greet(login);
    }
}
