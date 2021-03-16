// // alert('Helo')

// // Variables
// var harsh = 'Harsh';  // const in newer js
// console.log(harsh);

// var someno = 11;
// console.log(someno);

// // changing text 
// console.log(document.getElementById('sometext').innerHTML);

// A simple program til  now
// var name = prompt('What is Your Name?');
// document.getElementById('sometext').innerHTML = name;

// Numbers in Javascript
// var num = 5.7;
// num += 2
// console.log(num);


// Functions
/*
function fun() {
    alert('function is beng called');
}
// fun()

// hello functon basics
function hello() {
    var name = prompt('Whats Ur Name?');
    var result = 'Heloo ' + name;
    console.log(result);
}
// hello()

// function with arguments
function withArguments(num1, num2) {
    console.log(num1 + num2);
}
//withArguments(10, 45)

// better hello functions
function hellobetter(yourname) {
    var result = 'Heloo ' + yourname;
    console.log(result);
}
*/

// while Loops
/*
var num = 0;
while (num < 100) {
    num++;
    console.log(num)
}
*/


// Note: Let is better than var

// For loop

/*for (let num = 0; num <= 100; num++) {
    console.log(num)
}*/

// Data types
/*
let ageyour = 10; // Number
let nameyour = 'name'; // String
let name = { first: 'harsh', last: 'jain' }; // object
let truth = false; // boolean
let listinjava = ['list1', 'list2', 'list3']; // array
let random; // undefined
let nothing = null; // value null
*/

// string methods in javascript
/*
let fruit = 'banana';
//    New Line is donated by \n (as in python)    //
let morefruits = 'apple\nbanana'; // new line
// console.log(fruit.length);
console.log(fruit.indexOf('a')); // get index of string character
console.log(fruit.slice(2, 4)); // slice string
console.log(fruit.replace('ban', 123)); // replace string
console.log(fruit.toUpperCase()); // make string uppercase
console.log(fruit.toLowerCase()); // make string lowercase
console.log(fruit.charAt(2)); // make character at index     ---^ Both are
console.log(fruit[2]); // make character at index            ---^ Same
console.log(fruit.split('')) // split by every thing and get result as a array
*/

// More on arrays
/*
let fruits = ['banana', 'orange', 'apple', 'blueberry'];
fruits = new Array('banana', 'orange', 'apple', 'blueberry')
console.log(fruits[1]);
fruits[0] = 'mango';
console.log(fruits);

for (let num = 0; num < fruits.length; num++) {
    console.log(fruits[num]);
}

// array common methods
console.log('To String:', fruits.toString()); // convert  array to string
console.log(fruits.join('---****---')); // Add something in each item in a array
console.log(fruits, fruits.pop(), fruits); // Remove last item
console.log(fruits.push('newberry'), fruits); // append to a List
console.log(fruits.shift()); // Removes First item
console.log(fruits.unshift('banbery')); // add an item to the list at first
let toaddlist = ['to', 'add', 'karo'];
let alllistconcant = fruits.concat(toaddlist); // add 2 list
console.log(alllistconcant.slice(1, 4)) // slice a list 
console.log(alllistconcant.reverse()) // reverse the list
let somenumbers = [1, 2, 3, 5, 6, 8, 9, 69, 10, 0];
console.log(somenumbers.sort(function(a, b) { return a - b })); // sort numbers in ascending order
console.log(somenumbers.sort(function(a, b) { return b - a })); // sort numbers in descending order
emptyArray = new Array();
for (let i = 0; i <= 10; i++) {
    emptyArray.push(i);
}
*/

// Objects in javascript (Dictionaries in Python)
/*
let students = {
    first: 'Harsh',
    last: 'Jain',
    age: 12,
    oopinjavascript: function() {
        return this.first + '\n' + this.last;
    }
};
console.log(students.first) // Harsh 
students.first = 'Notharsh' // change Value
console.log(students.first)
students.age++;
*/

// Conditionals In Javascript
// && --> and
// || --> Or
/*
let ifage = 10
if ((ifage >= 18) && (ifage <= 30)) {
    console.log(ifage)
} else {
    console.log('Age is smaller than 18')
}
*/
// switch Statements
/*
switch (7) {
    case 0:
        text = 'Helo1';
        break;
    case 7:
        text = 'Helo2';
        break;
    default:
        text = 'default';
}
console.log(text)
*/
