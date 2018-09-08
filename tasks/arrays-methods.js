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

const data = [{"name":"Wanda","email":"wjenkins0@irs.gov","purchases":['iPhone', 'dishwasher', 'cucumbers']},
{"name":"Nicholas","email":"nkennedy1@ox.ac.uk","purchases":['tomatoes', 'toster', 'grill']},
{"name":"Paula","email":"pstephens2@boston.com","purchases":['apples', 'Macbook', 'iPhone']},
{"name":"Fred","email":"fpeterson3@reuters.com","purchases":['beef', 'pork', 'cheese']},
{"name":"Andrew","email":"awagner4@weebly.com","purchases":['cottage cheese', 'cream', 'candies']},
{"name":"Steven","email":"sgonzales5@mashable.com","purchases":['iMac', 'Android phone', 'Windows 10']},
{"name":"Harry","email":"hallen6@nasa.gov","purchases":['green grape', 'tomatoes', 'potatoes']},
{"name":"Bonnie","email":"breyes7@kickstarter.com","purchases":['Windows 10', 'dishwasher', 'grill']},
{"name":"Lisa","email":"lgreene8@spotify.com","purchases":['pork', 'iMac', 'cheese']},
{"name":"Wayne","email":"wramos9@yahoo.com","purchases":['apples', 'cream', 'candies']}];
// Получили данные с сервера и записали их в переменную data
var customers = data.filter(function(customer) {
    return customer.purchases.some(function(purchase) {
      return purchase === 'iPhone' || purchase === 'Macbook' || purchase === 'iMac';
    });
  });
  
  console.log(customers);
  // [{"name":"Wanda","email":"wjenkins0@irs.gov","purchases":["iPhone","dishwasher","cucumbers"]},
  // {"name":"Paula","email":"pstephens2@boston.com","purchases":["apples","Macbook","iPhone"]},
  // {"name":"Steven","email":"sgonzales5@mashable.com","purchases":["iMac","Android phone","Windows 10"]},
  // {"name":"Lisa","email":"lgreene8@spotify.com","purchases":["pork","iMac","cheese"]}]