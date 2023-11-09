//! 배열의 기작에 하나 이상의 요소를 추가하고 배열의 새길이를 반환하는 메서드

const array = [2, 3, 4, 5];

//* unshift() 메서드를 사용하여 배열의 시작에 요소 추가
const puls = array.unshift(1);

//* arry 출력시 추가된 요소까지 출력
//* puls 출력시 배열의 새로운 길이가 출력된다. 5가 뜬다.

console.log(array);
console.log(puls);
