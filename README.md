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
