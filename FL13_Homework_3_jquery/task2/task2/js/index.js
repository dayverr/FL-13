const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");


const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];

let todosCopy = [...todos];



function addItemToDom (textOfTodos, isDone){
  if(isDone==false){
    $list.append(`<li class="item"><span class="item-text">${textOfTodos}</span><button class="item-remove">Remove</button></li>`)
  } else {
  $list.append(`<li class="item"><span class="item-text done">${textOfTodos}</span><button class="item-remove">Remove</button></li>`)
  }
}

function reloadNewTodo(){
  $list.empty();
  todosCopy.forEach(element => {
    addItemToDom(element.text,element.done)
  });
}

function removeItem(withText){
  todosCopy.forEach(function(item, index, object) {
    console.log(item.text);
    if (item.text == withText) {
      object.splice(index, 1);
    }
  });
  reloadNewTodo();
}


$add.click(function(e){
  e.preventDefault();
  todosCopy.push({text: $input.val(), done: false});
  reloadNewTodo();
})


$(document).on('click', '.item-remove', function(e){
  removeItem($(e.target).prev().text());
});
