const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');

function updateFromServer (){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', baseUrl + '/users');
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function(){
    appContainer.innerHTML = '';
    for(let i=0; i<xhr.response.length; i++){
    appContainer.insertAdjacentHTML('beforeend',
    `<div><span>${xhr.response[i].id}---${xhr.response[i].name}---${xhr.response[i].username}</span>
    <button class="update">Update</button>
    <button class="delete">Delete</button></div>`);
    }
}
}

function postServer (data){
    const xhr = new XMLHttpRequest();
    xhr.open('POST', baseUrl + '/users');
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(JSON.stringify(data));
}

updateFromServer();
let form = document.forms.namedItem('adduser');
form.addEventListener('submit', function(ev) {
    ev.preventDefault();
    let data = {
        name: form.userName.value,
        username: form.userFullName.value
    }
    postServer(data);
    updateFromServer();
}, false);