// Rewrite with map:
// var arr = ["Есть", "жизнь", "на", "Марсе"];
//
// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//     arrLength[i] = arr[i].length;
// }
//
// alert( arrLength ); // 4,5,2,5

const arr = ["Есть", "жизнь", "на", "Марсе"];

const arrLength = arr.map((item) => item.length );

console.log( arrLength ); // 4,5,2,5

// reduce, callback(previousValue, currentItem, index, arr)

const arr1 = [ 1, 2, 3, 4, 5 ];

const getSums = (arr) => arr.map(i => i).reduce((sum, current) => sum + current, 0);

console.log(getSums(arr1));
console.log(arr1);