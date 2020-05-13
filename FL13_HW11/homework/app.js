const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

function createTree(container, arr) {
  container.append(createTreeDom(arr));
}

function createTreeDom(arr) {
  if (!arr.length) {
 return;
}
  let ul = document.createElement('ul');
  let empty = '<ul><li><span class="empty">Folder is empty</span></li></ul>';
  for (let i=0; i<arr.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = `<i class="material-icons folder">folder_open</i><span> ${arr[i]['title']}</span> `;
    if(!arr[i]['folder']) {
      li.innerHTML = `<i class="material-icons file">insert_drive_file</i><span> ${arr[i]['title']}</span> `;
    }
    if(arr[i]['folder']&&arr[i]['children']===null){
      li.innerHTML =`<i class="material-icons folder">folder_open</i><span> ${arr[i]['title']}</span> ${empty}`;
    }
      if (arr[i]['children']){
      let childrenUl = createTreeDom(arr[i]['children']);
      if (childrenUl) {
        li.append(childrenUl);
      }
    }
    ul.append(li);
  }
  return ul;
}

let container = document.getElementById('root');
createTree(container, data);

container.onclick = function(event) {

  if (event.target.tagName !== 'SPAN') {
    return;
  }
  let childrenContainer = event.target.parentNode.querySelector('ul');
  if (!childrenContainer) {
 return;
}
  if (event.target.previousSibling.innerHTML === 'folder_open'){
    event.target.previousSibling.innerHTML = 'folder';
  } else if (event.target.previousSibling.innerHTML === 'folder'){
    event.target.previousSibling.innerHTML = 'folder_open';
  }
  childrenContainer.hidden = !childrenContainer.hidden;
}

let contMenu = '<menu><button id="rename">rename</button><button id="delete">delete</button></menu>';
container.insertAdjacentHTML('beforeend',contMenu);

let menu = document.querySelector('menu');
function showMenu(x, y){
menu.style.left = x + 'px';
menu.style.top = y + 'px';
menu.classList.add('show-menu');
}
function hideMenu(){
menu.classList.remove('show-menu');
}

function onContextMenu(e){
e.preventDefault();
showMenu(e.pageX, e.pageY);
let deleteEl = document.querySelector('#delete');
deleteEl.onclick = function(){
  let icon = e.target.previousSibling
  e.target.remove();
  icon.remove();
}
document.addEventListener('click', onMouseclick, false);
}

function onMouseclick(){
hideMenu();
document.removeEventListener('click', onMouseclick);
}

document.addEventListener('contextmenu', onContextMenu, false);
