/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 사용하지 않음
 * 2) let
 * 3) const
 */

var name = '장승원';
console.log(name);


let age = '18살 이에요';
console.log(age);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 * 
 * 따라서 변수를 선언할 때,
 * 값을 할당하지 않아도 오류가 나지 않고
 * undefined 값을 초기값으로 가지게 된다.
 * 
 */

age = '19살 이에요';
console.log(age);

const go = '집가고 싶다';
console.log(go);


// go = '집가고 싶지 않다.'

/** 
 * const로 선언하면
 * 값을 추후 변경할 수 없다.
 * 
 * 따라서 변수를 선언할 때,
 * 값을 할당하지 않으면 오류가 뜬다.
 */
