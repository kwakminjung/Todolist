function plus_click() {
    var todoinput = document.getElementById('todo');
    var todolist = document.getElementsByClassName("check_box");

    var temp = document.createElement('li');
    temp.setAttribute('class','check');
    
    var temp_check = document.createElement('input');
    temp_check.setAttribute('type','checkbox');
    temp_check.setAttribute('class','complete');

    var p = document.createElement("p");
    p.innerHTML = todoinput.value; //innerHTML : 태그사이에 넣겠다
    
    var temp_del = document.createElement('input');
    temp_del.setAttribute('type','button');
    temp_del.setAttribute('class','minus');
    temp_del.setAttribute('onclick', 'minus_click(this)');
    temp_del.setAttribute('value', 'del');
    
    temp.appendChild(temp_check);
    temp.appendChild(p);
    temp.appendChild(temp_del);

    todolist[0].appendChild(temp);

    todoinput.value=null;
}

function minus_click(a) {
    var li = a.parentNode.remove();
    // console.log(li.children());

}

function all_minus(){
    // var li = document.getElementsByTagName('li');
    var ul = document.getElementsByClassName('check_box');
    var li = ul[0].children;
    var li_cnt = ul.childElementCount;
    while(li_cnt>0) {
        li[0].remove();
    }
}