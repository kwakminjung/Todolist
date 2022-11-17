window.onload = loadData;

function input_data(input_val) {
    var input_val = document.getElementById('todo');
    var todo_list = document.getElementById('todo_list');
    
    var temp = document.createElement('li');
    
    var temp_check = document.createElement('input');
    temp_check.setAttribute('type','checkbox');
    
    var p = document.createElement("p");
    p.innerHTML = input_val.value;
    
    var temp_del = document.createElement('input');
    temp_del.setAttribute('type','button');
    temp_del.setAttribute('onclick', 'minus_todo(this)');
    temp_del.setAttribute('value', 'del');
    
    temp.appendChild(temp_check);
    temp.appendChild(p);
    temp.appendChild(temp_del);
    
    todo_list.appendChild(temp);
}

function loadData() {
    for(var i = 0 ; i < localStorage.length ; i++){
        input_data(data);
        var a = localStorage.key(i);
        var data = localStorage.getItem(a);
    }
}

function plus_todo() {
    var todo_input = document.getElementById('todo');
    input_data(todo_input);

    var li = document.getElementsByTagName('li');

    localStorage.setItem('key' + localStorage.length, li);

    todo_input.value = null;
}

function minus_todo(a) {
    var li = a.parentNode;
    var ul = li.parentNode;
    
    var li_arr = ul.children;
    
    for(i = 0;i < localStorage.length;i++) {
        if(li_arr[i] === li) {
            localStorage.removeItem(localStorage.key(i));
            li.remove();
            break;
        }
    }
}

function minus_all_todo() {
    var ul = document.getElementById('todo_list');
    var li = ul.children;
    console.log(li);
    while(ul.childElementCount>0) {
        li[0].remove();
    }
    window.localStorage.clear();
}