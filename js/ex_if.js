const name = 'Mike';
const age = 30;

if(name === "Tom" && age > 19){
    console.log("너 뒤짐");
}
else{
    console.log("넌 다음에 뒤질 듯ㅋ");
}
if(name === "Tom"|| age == 19){
    console.log("너 뒤짐");
}
else{
    console.log("넌 다음에 뒤질 듯ㅋ");
}

if(name === "Mike"&& age == 19){
    console.log("ㅂㅂ");
}
else{
    console.log("다음에 보지...ㅎㅎ");
}

let isAdult = age > 19;
if(isAdult){
    console.log("성인입니다.");
}
if(!isAdult){
    console.log("미성년자 입니다.");
}

let num = 2;

switch (num){
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;
    default:
        console.log("기본값");
        break;
}