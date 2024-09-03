function errCode() {
    console.log("404");
}

errCode();

function sayHello(name) {
    console.log(`${name}님, 안녕하세요`);
}

sayHello("장승원");


function addNumber(a, b) {
    return a + b;
}

const num = addNumber(5,6);
console.log(num);

console.log(addNumber(5,6));

let a = 20; // 전역변수

function varDas() {
    let a = 10; // 지역변수
}

console.log(a); //20출력