# Todolist
<a href="https://kwakminjung.github.io/Todolist/">TODOLIST 바로가기</a>

![image](https://user-images.githubusercontent.com/100507512/216514534-e80e1526-75c0-4b8e-99a4-cbb9827c1f8e.png)

<h3>업데이트 계획</h3>
<ul>
  <li>✅체크하면 밑줄 긋기 (23.1.1)<br></t>ㄴlocalStroage로 유지하기</li>
  <li>수정 버튼 구현</li>
  <li>✅localStorage 사용</li>
</ul>


<h3>오류</h3>
<ul>
  <li>✅loadData() : 새로고침하면 data에 들어갈 글자가 사라짐<br>
  해결방법 : input_data()의 input_val 변수 선언줄을 주석처리 했더니 해결됨</li><br>
  
  <li>✅minus_todo() : localStorage.removeItem 에서 인덱스 5까지 입력했을 때<br> 5를 remove하면 인덱스 0값의 li까지 remove됨<br><br>
  문제 이해 : minus_todo 에서 localStorage에서 remove할 때 localStorage.length보다 짧을 경우로 해서<br> 만약 5개의 li가 있을때 3을 지우게 되면 5는 지우지 못하는 문제였음<br><br>
  해결방법 : localStorage.key()라는 함수를 이용하여 ul 태그의 자식태그와 <br>li에 현재 들어가 있는 값을 비교하여 같은 경우에 li의 key값을 반환하도록 수정함</li><br>
  
  <li>✅minus_all_todo() : localStorage에서는 지워지지만, 화면에서는 지워지지 않음<br><br>
  해결방법 : 기존에 썼던 li_cnt(li의 개수를 세던 변수)를 그대로 while반복문에 돌려서 안 되던 거였음 <br>-> 콘솔창에 아무 문자열이나 찍어보고 무한으로 돌아가고 있다는 것을 알았음
  <br>ul.childElementCount로 li의 개수를 세되, li_cnt에 값을 주던 것을 무한반복문의 조건에 넣어 코드를 줄일 수 있었음</li><br>
  
  <li>✅loadData() - (2) : 새로고침하면서 순서가 뒤바뀌는 오류 발생<br><br>
  해결방법 : sort함수를 통해서 순서대로 나오게 했음<br>
  그 과정에서 key값을 다시 0부터 주기로 하고 코드를 짰더니 localStorage.key(i)가 <br>key_arr배열(후에 정렬할 배열)에 들어갈때 문자열로 저장되는 현상이 발생함<br><br>
  parseInt()함수를 이용해 key값을 정수로 바꾸어 key_arr에 push함<br><br>
  그래도 화면에 안 나오는 현상이 발생하여 코드 확인중에 <br>var key_arr = new Array()를 for문 안에 선언한 것을 발견 ->  for문 위에 쓰는 것으로 수정<br><br>
  정렬은 a-b가 정수가 나온다면 true값을 반환함을 이용함<br>
  </li><br>
</ul>

<h3>알게된 내용</h3>
<ul>  
  <li>innerHTML은 태그 안에 들어가는 값을 뜻함</li>
  <li>document.getElementsByClassName은 배열을 반환함</li>
  <li>localStorage 확인 방법 : 개발자도구 > Application > Storage > Local Storage</li>
  <li>localStorage.key()는 로컬의 키값을 가져오는 함수임</li>
  <li>arr.sort(function) 사용법(내림차순)</li>
  <li>localStorage에서 그냥 getItem하면 순서가 뒤바뀌는 현상이 생기므로 <br>요소를 화면에 넣기 전에(input_data() 이전에) 정렬할 필요가 있음</li>
</ul>

<h3>기간</h3>
<ul>
  <li>1차(localStorage 사용 이전) : 22.11.14 ~ 15</li>
  <li>2차(localStorage 사용 및 오류 수정) : 22.11.16 ~ 18</li>
</ul>

<h3>인원</h3>
<ul>
  <li>1명</li>
</ul>
