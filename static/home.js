window.onload = load_data;

function input_data(input_val) {
    var todo_list = document.getElementById('todo_list');
    
    var temp = document.createElement('li');
    
    var temp_check = document.createElement('input');
    temp_check.setAttribute('type','checkbox');
    
    var p = document.createElement("p");
    p.innerHTML = input_val;
    
    var temp_del = document.createElement('input');
    temp_del.setAttribute('type','button');
    temp_del.setAttribute('onclick', 'minus_todo(this)');
    temp_del.setAttribute('value', 'del');
    
    temp.appendChild(temp_check);
    temp.appendChild(p);
    temp.appendChild(temp_del);
    
    todo_list.appendChild(temp);
}

function load_data() {
    var key_arr = new Array();
    for(var i = 0 ; i < localStorage.length ; i++){
        key_data = parseInt(localStorage.key(i));
        key_arr.push(key_data);
    }

    key_arr.sort(function(a, b)  {
        return a - b;
    });

    for(var i = 0 ; i < localStorage.length ; i++) {
        input_data(localStorage.getItem(key_arr[i]));
    }
}

function plus_todo() {
    var todo_input = document.getElementById('todo');
    input_data(todo_input.value);

    localStorage.setItem(localStorage.length, todo_input.value);

    todo_input.value = null;
}

function minus_todo(del_btn) {
    var target_li = del_btn.parentNode;
    var ul = target_li.parentNode;
    
    var li_arr = ul.children;
    
    for(i = 0;i < localStorage.length;i++) {
        if(li_arr[i] === target_li) {
            localStorage.removeItem(localStorage.key(i));
            target_li.remove();
            break;
        }
    }
}

function clear_todo() {
    var ul = document.getElementById('todo_list');
    var li = ul.children;
    while(ul.childElementCount>0) {
        li[0].remove();
    }
    window.localStorage.clear();
}