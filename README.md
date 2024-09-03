# SPAM-Web-Basic

## 프론트 엔드
- html : 웹사이트의 뼈대를 만드는 역할 -> 기본 구조 역할
- css : 웹사이트를 꾸며주는 역할 -> 디자인 역할
- js(JavaScript) : 기능을 넣는 역할

#### 라이브러리 : 함수들의 모임(가져다 쓰면 코딩이 편해진다)
*사용하면 편하다보니 외부 라이브러리를 많이 사용한다.(특히 js라이브러리)

<그래서 나타난 애들>
npm : js라이브러리의 관리를 쉽게해주는 친구
webpack : js라이브러리 용량을 줄여주는 친구

*위의 친구들이 라이브러리를 많이 사용할 수 있도록 도와줌!

nodejs : js파일을 pc아무데서나 실행할 수 있도록 도와주는 친구

bundling tool : 많이 불러와 자칫 구조가 복잡해질 수 있는 js 파일들을 하나로 합쳐주는 친구!
-> 배포쉬워짐
-> 안쓰는 함수, 변수 다 제거(용량축소ok)
-> .ts.vue.jsx로 개발한 것을 .js로 변환 함
-> 최신 문법을 호환성 좋게 바꿈

build : 번들링툴을 이용해서 js파일을 하나로 합치는 것

spa라이브러리 -> Vue, Svelte, React, Angular -> 요 라이브러리들을 갖다 쓰면 html 생성 구조 변경이 매우 쉬워진다.

but, 이런 라이브러리의 단점이 있는데 바로 수많은 변수관리가 어렵다는 것이다.

*그래서 나오게 된 것
state management : spa에서 사용중인 변수들을 관리하는 친구이다.

또, spa라이브러이의 더 큰 단점
- 구글검색결과 노출이 어렵다는 것
- 첫페이지 로딩시간이 저하된다는 것

*또 해결하기 위해서 나온 것
server-side rendering : html을 서버에서 만들어서 보내주는 친구.

meta-framework : 자바스크립트 문법으로 풀스텍 개발이 가능하게 만들어 주는 라이브러리들

TypeScript : 타입기능 업그레이드된 js

serverless : 서버역할 대신 해주는 서비스





# Markdown 기본 문법
## h2
### h3
#### h4
##### h5
###### h6

p태그

- 1번
- 2번
- 3번

```javascript
console.log("Hello, World!");
```


# JavaScrit 공부
## Javascrit 실행/출력
c언어의 printf같은 존재가 여기에선 console.olg(출력"); 이다.
```javascript
console.log("Hello, World!");
```

### 웹사이트 콘솔에 출력
- 참고로 웹사이트 콘솔은 open with live sever로 열어서 f12누르고 거기에서 콘솔 들어가면 됨.
- body 사이에 넣으면 안됨

1.아래의 코드처럼 그냥 html에 쳐서 웹사이트 콘솔창에 출력하는 방법이 있다.
```html
 <script>
    console.log("Hello World!"); 
 </script>
```

2.아래의 코드 처럼 html에서 javascrit에 써져있는 애를 불러와서 웹사이트 콘솔창에 출력하는 방법이 있다.

```html
 <script src = "/js/app.js"></script>
```

## node.js 실행방법
1. 인터넷에 node를 검색해서 깔아준다.
2. vscode 터미널창에 cd js를 친다
3. vscode 터미널창에 node app.js를 친다.
4. 끝.

# js 기초 문법
## 변수

변수: 내가 아는 그 변수ㅎ

변수작성 규칙: 내가 아는 그 변수 규칙에 무언가 추가됨ㅁ

#### 호이스팅: 밑에서 선언한 번수를 위에서도 쓴다.

#### 변수선언 방식
var: 재선언 가능, 재할당 가능

let: 재선언 불가, 재할당 가능, 블록변위 변수, 호이스팅 불가

const : 재선언 불가능, 재할당 불가능, 상수
```javascript
let haha = "나는 기분이 좋아요!"
console.log(haha);
//요런식으로 쓴다ㅏ
//c언어와 같이 슬래시슬래시가 주석임
```
## 자료형
#### 원시형 데이터
- 숫자: 정수 및 부동 소수점
- 문자열: 텍스트
- 불리언: 참 and 거짓
- null: 값이 존재하지 않음
-  undefined: 변수가 초기화되지 않았거나 값이 할당되지 않았음
- 심벌: 고유하고 변경 불가능한 데이터 유형

#### 참조형데이터
- 객체: 복합 데이터 유형으로, 여러 속성과 메서드를 포함

요로코롬 사용
```javascript
let name = "장승원"
let age = 17
let height = 168
let gf = undefined
let bf = false
let baby = null

console.log(name)
console.log(age)
console.log(height)
console.log(gf)
console.log(bf)
console.log(baby)
```
# 연산자 
연산자는 c랑 똑같다.
다른 것이 있다면.
```javascript
console.log(3.14 == "3.14");//True
console.log(3.14 === "3.14");//False
```
이런건데... 애는 ==로 하면 여기에는 문자형이 없으니 걍 다 True라 인식하는 모양이다.
=== 이라는 새로운 친구가 있는데 애는 문자형을 구분해 주어 False가 나온다ㅏ.

# 조건문

## if
이 아이도 c와 같다.
음 걍 구조만 적어 놓겠다ㅏ.
```javascript
if(조건식){
    console.log("출력ㄱㄱ");
}
else if(조건식){
    console.log("출려ㄱ");
}
else{
    console.log("ㅊㄹ");
}
```

#3 switch case문
애도 c랑 같음 구조만 적겠음...
```javascript
switch (변수 값){
    case 1: //여기에는 조건 넣을 수 없는거^^
        console.log("출력문ㄴ");
        break;  //break 넣는거 까먹지 말기
    case 2:
        console.log("출력ㄱ");
        break;
    case 3:
        console.log("출려ㄱ");
        break;
    default:
        console.log("ㅊㄹ");
        break;
}
```
# 반복문

## while문
C랑 똑같음...고로 애도 구조만 적겠음
```javascript
while(조우거느){
    console.log("출ㄹ력ㄱ");
    //증감식 잊지 말기ㅣ!
}
```
솔까 애 무한반복 할 때 외엔 잘 안쓰니깐...ㅎㅎ

## do while문
while인데 한번은 무조건 도는 while문임
일단 c랑 똑같음... 구조 가겠습니다!
```javascript
do{
    console.log("출ㄹ력ㄱ");
    //증감식 잊지 말기ㅣ!
}while(조우건으)
```
예... 근데 잘 안써요...ㅋㅋ하핳ㅎ 걍 알고만 있자ㅏ

## for문
솔까 우리가 제일 많이 쓰는게 아닐까ㅏ(?)!!
애도 c와 같은 구조이므로! 일단 기본 구조만 적겠습니다ㅏ!
```javascript
for(변수 초기화ㅏ; 조건식; 증감식){
    console.log("출력ㄱ");
}
```
### 이중 for문
음...for문 안에 for문이 들어있는 형태...!
```javascript
for(변수 초기화ㅏ; 조건식; 증감식){
    for(변수 초기화ㅏ; 조건식; 증감식){
    console.log("출력ㄱ");
    }
}
```
## 조건문이랑 반복문 배웠으니 빠져나가는 거

### break;
앤 진짜 빠져나가서 밑으로 빠짐

### continue;
근디 애는 빠져나간 후 다시 위로 돌아감ㅁ

# 인공지능이란?
Aritificial Intelligence
인공 지능

## 인공지능 역사
1950년 - 튜링 테스트

1960년 - 논리적 문제해결

1970년 - AI의 겨울

1990년대 이후 - 컴퓨터 성능의 향상과 대규모 데이터 축적

## 종류
좁은AI(Narrow AI) : 지금 현실에 존재하는 한가지 기능만을 하는

일반AI(General AI): 이론개념(현실존재X) 인간처럼 생각하는 애

강한AI(Strong AI): 이론개념(현실존재X)

## 특이점
AI가 인간의 지능을 뛰어넘는 것
(인간이 이세상에서 필요가 없어질때 인간이 도구)
General AI와 Strong AI가 나오는 시점일 것이다.

# Nachine Searning(ML)이란?
- 단순한 것을 학습시키는 것
# Deep Learning(딥러닝)이란?
- 지금 우리가 생각하는 AI 학습과정
- 자연어 처리
- 이미지, 영상 학습
- 자율주행

# LLM(Large Language Model)
- Narrow AI를 묶고 묶고 묶어서 만든 것

## 멀티모달
- 텍스트, 이미지, 소리...등을 고도로 학습한 AI

## 제미나이
- GPT 구글(웹) 버전

# 배열
순서있는 데이터 묶음
```javascript
const array = [1,2,3,4,5,6,7,8,9];
```

## 배열관련 다루기
```javascript
console.log(students);
console.log(students[1]); //인덱스[첨자] 불러오기

students[1] = "John";
console.log(students[1]); //원하는 값 바꾸기 

console.log(students.length); //배열길이
console.log(students.push("현서")); //뒤에 추가

console.log(students.pop());//뒤에 삭제

console.log(students.shift()); //앞에 삭제
console.log(students.unshift("준석")); // 앞에 추가
```

# 오브젝트
변수들의 집합이라 생각하면 쉬움.
키값으로 묶은 것,
아마 python에 딕셔너리와 비슷한 듯?
```javascript
const me = {
    name: "정현서",
    age: 19,
    score: [60, 50],
    cat: false
};
```

### 배열안 오브젝트
이렇게도 사용할 수 있다.
```javascript
const students = [
    { name: "준석", age: 17 },
    { name: "준영", age: 17 },
    { name: "승원", age: 17 },
    { name: "윤솔", age: 17 },
    { name: "예건", age: 17 }
];
```

# 함수
다른 인자를 사용하여 동일한 코드를 여러번 사용할 수 있으며,
다른 결과를 도출 할 수 있다.
```javascript
function div(a,b) {
return a/b;
}

console.log(div(3,3)); // 1출력
console.log(div(4,2)); // 2출력
```

# 전역변수, 지역변수
밑에있는 코드 참고
```javascript
let a = 20; // 전역변수

function varDas() {
    let a = 10; // 지역변수
}

console.log(a); //20출력
```

# 백앤드 개발이란?

## 백엔드의 구분
### - API (Application Programming Interface)
  - 한 프로그램에서 다른 프로그램으로 주고 받기 위한 방법

    #### API가 가져야할 내용
    - method: 데이터를 달라고 할 것이냐 보낼 것이냐 같은 요청방식
    - endpint: 어떤 데이터 요청 할 것이냐
    - parameter 자료요청에 필요한 추가정보

    ### rest란? 
      : REST(REprentational State Transfer)의 약자로 자원을 이름으로 구분하여 해당 자원의 상태를 주고받는 모든 것

    #### Rest API
    - HTTP URL를 통해 Resource를 명시하고, HTTP Method를 통해 해당 URL에 대한 CRUD를 적용하는 것이다.

    #### rest api 원칙
    1) 동사를 사용하지 않고 소문자를 사용하여야 한다.
    2) '_'대신'-'을 사용
    3) url 마지막에'/' 포함 하지 않는다.
    4) 파일 확장자 사용하지 않는다.

    #### - CRUD
    - C(create)
    - R(reead)
    - U(update)
    - D(delete)

    #### - http 메소드
    - get - 데이터 조회
    - post - 데이터 생성
    - put - 데이터 부분수정
    - patch - 데이터 전체수정
    - delet - 데이터 삭제

### - Database
- RDB(관계형DB)
    
    ex) myspl

- NoSQL DB
    SQL 사용하지 않는 DB
    ex) redis, mongoDB


#### 서버 구조

Controller - 직접적으로 메소드를 정해서 Url로 통신하는 곳

Service - 통신하며 사용할 로직을 적는 곳

Repository - 데이터베이스를 연결하고, 데이터를 저장하는 곳

Entity - 데이터의 구조를 잡아 구조체를 저장하는 곳


### -infrastructure
 -> devops 개발자

소프트웨어 및 하드워어  시스테의 기본구조 및 기반을 설계, 구축, 보조하는...

#### ci/cd
지속적 통합 밒 지속적 제공 배포를 의미 소프트웨어 개발 라이프사이클을 가속화 하는 것.