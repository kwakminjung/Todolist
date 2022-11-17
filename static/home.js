window.onload = loadData;


function input_data(input_val) {
    var input_val = document.getElementById('todo');
    var todolist = document.getElementsByClassName("check_box");
    
    var temp = document.createElement('li');
    temp.setAttribute('class','check');
    
    var temp_check = document.createElement('input');
    temp_check.setAttribute('type','checkbox');
    temp_check.setAttribute('class','complete');
    
    var p = document.createElement("p");
    p.innerHTML = input_val.value;
    
    var temp_del = document.createElement('input');
    temp_del.setAttribute('type','button');
    temp_del.setAttribute('class','minus');
    temp_del.setAttribute('onclick', 'minus_click(this)');
    temp_del.setAttribute('value', 'del');
    
    temp.appendChild(temp_check);
    temp.appendChild(p);
    temp.appendChild(temp_del);
    
    todolist[0].appendChild(temp);
}

function loadData() {
    for(var i = 0 ; i < localStorage.length ; i++){
        var a = localStorage.key(i);
        var data = localStorage.getItem(a);
        input_data(data);
    }
}

function plus_click() {
    var todo_input = document.getElementById('todo');
    input_data(todo_input);

    var li = document.getElementsByTagName('li');

    localStorage.setItem('key'+localStorage.length, li);

    todo_input.value=null;
}

function minus_click(a) {
    var li = a.parentNode;
    var ul = li.parentNode;
    
    var li_arr = ul.children;
    // console.log(li_arr[0]);
    
    for(i = 0;i < localStorage.length;i++) {
        // console.log(li_arr[i] + 'ㄸ');
        // console.log(li);
        if(li_arr[i] === li) {
            console.log('dd');
            localStorage.removeItem(localStorage.key(i));
            li.remove();
            break;
        }
    }
    // localStorage.removeItem(localStorage.length);
}

function all_minus() {
    var ul = document.getElementsByClassName('check_box');
    var li = ul[0].children;
    console.log(li);
    while(ul[0].childElementCount>0) {
        li[0].remove();
    }
    window.localStorage.clear();
}