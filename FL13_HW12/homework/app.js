const root = document.getElementById('root');

let lockalBooks = JSON.parse(localStorage.getItem('books'));
let div = document.createElement('div');

div.classList.add('left-wrapper')
div.innerHTML='<h2>List of books</h2>';
root.append(div);

let div2 = document.createElement('div');
div2.classList.add('right-wrapper');
root.append(div2);

let list = document.querySelector('.left-wrapper');
let preview = document.querySelector('.right-wrapper');


function showList (){
let listOfBooc = '';
lockalBooks.forEach(element => {
    let temp = `<div><a href="#${element['id']}">${element['name']}</a><button class="edit-btn">edit</button></div>`;
    listOfBooc+=temp;
});
list.innerHTML= listOfBooc;
list.insertAdjacentHTML('beforeend','<button class="Add-btn">add</button>');
}

showList();


preview.innerHTML = '<h2>This is the way</h2><p>do some thing</p>';



function showPreview() {
    let contentId = location.hash.slice(1);
    lockalBooks.forEach(element => {
        if(element['id']===contentId){
            let temp = `<p>Book : ${element['name']}</p><p>Author : ${element['author']}</p>`;
            preview.innerHTML = temp + `<img src="${element['img']}"><p>Plot : ${element['plot']}</p>`;
        }
    })
}

window.addEventListener('hashchange', showPreview);

function editFormCreate () {
    let editForm = document.querySelector('.right-wrapper');
    let temphtml = `<form class="editForm">
    <input type="text" class="form-name" required placeholder="Book Name">
    <input type="text" class="form-author" required placeholder="Author Name">
    <input type="text" class="form-img" required placeholder="Img href">
    <input type="text" class="form-plote" required placeholder="Plote">
    <input type="submit" class="form-editBtn" value="EDIT">
</form>`;
editForm.innerHTML = temphtml;
}

function addFormCreate () {
    let addForm = document.querySelector('.right-wrapper');
    let temphtml = `<form class="addForm">
    <input type="text" class="form-id" required placeholder="Id">
    <input type="text" class="form-name" required placeholder="Book Name">
    <input type="text" class="form-author" required placeholder="Author Name">
    <input type="text" class="form-img" required placeholder="Img href">
    <input type="text" class="form-plote" required placeholder="Plote">
    <input type="submit" class="form-addBtn" value="Add">
</form>`;
addForm.innerHTML = temphtml;
}

function saveEditValue(e){
    let editebleId = e.target.previousSibling.getAttribute('href').slice(1);
    let form = document.querySelector('.editForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault()
        let formName = form.querySelector('.form-name').value;
        let formAuthor = form.querySelector('.form-author').value;
        let formImg = form.querySelector('.form-img').value;
        let formPlot = form.querySelector('.form-plote').value;
        saveEditValueToLockal(editebleId,formName,formAuthor,formImg,formPlot);
    });
}



function saveEditValueToLockal (id,name,author,img,plot) {
    lockalBooks.forEach(element => {
        if(element['id']===id){
            element['name']=name;
            element['author']=author;
            element['img']=img;
            element['plot']=plot;
        }
    })
    localStorage.setItem('books', JSON.stringify(lockalBooks));
    showPreview();
    showList();
}

function saveAddValueToLockal (id,name,author,img,plot) {
    let obj = {
            'id': id,
            'name': name,
            'author': author,
            'img': img,
            'plot': plot
    }
    localStorage.push(obj);
    localStorage.setItem('books', JSON.stringify(lockalBooks));
    showPreview();
    showList();
}

function saveAddValue(){
    let form = document.querySelector('.addForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        let formId = form.querySelector('.form-id').value;
        let formName = form.querySelector('.form-name').value;
        let formAuthor = form.querySelector('.form-author').value;
        let formImg = form.querySelector('.form-img').value;
        let formPlot = form.querySelector('.form-plote').value;
        saveAddValueToLockal(formId,formName,formAuthor,formImg,formPlot);
    });
}


list.addEventListener('click', function(e){
    if (e.target.className==='edit-btn'){
        editFormCreate();
        saveEditValue(e);
    }
});

list.addEventListener('click', function(e){
    if (e.target.className==='Add-btn'){
        addFormCreate();
        saveAddValue();
    }
});



// console.log(formName);
//         console.log(formAuthor);
//         console.log(formImg);
//         console.log(formPlote);
