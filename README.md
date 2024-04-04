# SPAM-Web-Basic

프론트 엔드
- html : 웹사이트의 뼈대를 만드는 역할 -> 기본 구조 역할
- css : 웹사이트를 꾸며주는 역할 -> 디자인 역할
- js(JavaScript) : 기능을 넣는 역할

라이브러리 : 함수들의 모임(가져다 쓰면 코딩이 편해진다)
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
