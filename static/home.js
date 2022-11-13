const todoform = document.getElementById("#input_todo")
const todoinput = document.getElementById("#todo");
const todolist = document.getElementsByClassName(".check_box");
const todo = document.getElementById("#todo");
const com_todo = document.getElementById("#complete");
const plus_btn = document.getElementById('#plus');


function plus_click(event) {
    const temp = document.createElement('li');

    const temp_check = document.createElement('input');
    temp_check.setAttribute('type','checkbox');
    temp_check.setAttribute('class','complete');

    const temp_del = ducument.createElement('input');
    temp_del.setAttribute('type','button');
    temp_del.setAttribute('class','minus');

    temp.innerText = todoinput.value;

    temp.appendChild(temp_check);
    temp.appendChild(temp_del);
    todo.appendChild(temp);
}

// todoform.addEventListener('submit', plus_click);
plus_btn.addEventListener('click', plus_click);
