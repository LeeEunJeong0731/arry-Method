//! 배열에서 첫번째 요소를 제거하고 그 요소를 반환하는 메서드는?

const arry = [1, 2, 3, 4, 5];

//* shift() 메서드를 사용 할 시 배열의 첫번쨰 요소 제거

const cut = arry.shift();

//* arry 출력시 첫번째 요소가 제거된 다음 출력이 됨
//* cut 출력시 제거된 요소 확인이 가능하다.

console.log(arry);
console.log(cut);
