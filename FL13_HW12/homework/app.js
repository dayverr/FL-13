const root = document.getElementById('root');

let lockalBooks = JSON.parse(localStorage.getItem('books'));
let div = document.createElement('div');

div.classList.add('left-wrapper')
div.innerHTML='<h2>List of books</h2>';
root.append(div);

let div2 = document.createElement('div');
div2.classList.add('right-wrapper');
div2.innerHTML='<h2>Book information</h2>';
root.append(div2);

let list = document.querySelector('.left-wrapper');
let list2 = document.querySelector('.right-wrapper');

lockalBooks.forEach(element => {
    let temp = `<div><a href="#${element['id']}">${element['name']}</a><button сlass="edit">edit</button></div>`;
    list.insertAdjacentHTML('beforeend', temp);
});

let temp= `<p>Book : ${lockalBooks[0]['name']}</p><p>Author : ${lockalBooks[0]['author']}</p>`
list2.innerHTML = temp + `<img src="${lockalBooks[0]['img']}"><p>Plot : ${lockalBooks[0]['plot']}</p>`;

list.insertAdjacentHTML('beforeend','<button>add</button>');

function dinamickContent() {
    let contentId = location.hash.slice(1);
    lockalBooks.forEach(element => {
        if(element['id']===contentId){
            let temp = `<p>Book : ${element['name']}</p><p>Author : ${element['author']}</p>`;
            list2.innerHTML = temp + `<img src="${element['img']}"><p>Plot : ${element['plot']}</p>`;
        }
    })
}

window.addEventListener('hashchange', dinamickContent);