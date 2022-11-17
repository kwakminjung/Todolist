# todolist
<a href="https://kwakminjung.github.io/Todolist/">TODOLIST 바로가기</a>

![image](https://user-images.githubusercontent.com/100507512/201539097-6607c8a0-fa58-4f1e-92a1-315ce3c7f2aa.png)

<h3>업데이트 계획</h3>
<ul>
  <li>체크하면 밑줄 긋기</li>
  <li>수정 버튼 구현</li>
  <li>localStorage 사용</li>
</ul>


<h3>오류</h3>
<ul>
  <li>⬜loadData() : 새로고침하면 data에 들어갈 글자가 사라짐</li>
  <li>✅minus_todo() : localStorage.removeItem 에서 인덱스 5까지 입력했을 때<br> 5를 remove하면 인덱스 0값의 li까지 remove됨<br>
  : minus_todo 에서 localStorage에서 remove할 때 localStorage.length보다 짧을 경우로 해서<br> 만약 5개의 li가 있을때 3을 지우게 되면 5는 지우지 못하는 문제였음<br>
  해결방법 : localStorage.key()라는 함수를 이용하여 ul 태그의 자식태그와 <br>li에 현재 들어가 있는 값을 비교하여 같은 경우에 li의 key값을 반환하도록 수정함</li>
  <li>✅minus_all_todo() : localStorage에서는 지워지지만, 화면에서는 지워지지 않음<br>
  해결방법 : 기존에 썼던 li_cnt(li의 개수를 세던 변수)를 그대로 while반복문에 돌려서 안 되던 거였음 <br>-> 콘솔창에 아무 문자열이나 찍어보고 무한으로 돌아가고 있다는 것을 알았음
  <br>ul.childElementCount로 li의 개수를 세되, li_cnt에 값을 주던 것을 무한반복문의 조건에 넣어 코드를 줄일 수 있었음</li>
</ul>

<h3>알게된 내용</h3>
<ul>
  <li>innerHTML은 태그 안에 들어가는 값을 뜻함</li>
  <li>document.getElementsByClassName은 배열을 반환함</li>
  <li>localStorage 확인 방법 : 개발자도구 > Application > Storage > Local Storage</li>
  <li>localStorage.key()는 로컬의 키값을 가져오는 함수임</li>
</ul>
