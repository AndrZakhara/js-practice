// array.forEach((item, index, arr) => {}, thisArg);

class Person {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`Hi ${this.name}!`)
    }
    say(phrase) {
        return console.log(`${this.name} says ${phrase}`)
    }
    mumble(phrase) {
        phrase.forEach((phrase) => this.say(phrase), this)
    }
}

let johnDoe = new Person('John Stone');
johnDoe.sayHi();
johnDoe.mumble(['Hello, World!', 'JS is great', 'I\'m designer and i have a good job']);

// Rewrite with map:
// var arr = ["Есть", "жизнь", "на", "Марсе"];
//
// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//     arrLength[i] = arr[i].length;
// }
//
// alert( arrLength ); // 4,5,2,5

// const arr = ["Есть", "жизнь", "на", "Марсе"];

// const arrLength = arr.map((item) => item.length );

// console.log( arrLength ); 

// reduce, callback(previousValue, currentItem, index, arr)

// const arr1 = [ 1, 2, 3, 4, 5 ];

// const getSums = (arr) => arr.reduce((sum, current) => sum + current, 0);

// console.log(getSums(arr1));
// console.log(arr1);

// // filter
// var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// function filterItems(query) {
//   return fruits.filter(function(el) {
//       return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
//   })
// }

// console.log(filterItems('ap')); 
// console.log(filterItems('an')); 
var fives = [5, 5, 5, 6, 5, 5];
var result = fives.every(function(five) {
  return five === 5;
});

console.log(result); // false — в массиве же есть шестёрка

var fives = [5, 5, 5, 5, 5, 5];
var result = fives.every(function(five) {
  return five === 5;
});

console.log(result); // true — теперь там только пятёрки, всё хорошо

var nums = [1, 2, 3, 4, 5];
var result = nums.some(function(num) {
  return num > 3;
});

console.log(result); // true — в массиве есть хотя бы одно значение больше 3

var nums = [10, 20, 30, 40, 50];
var result = nums.some(function(num) {
  return num < 5;
});

console.log(result); // false — в массиве нет ни одного значения меньше 5