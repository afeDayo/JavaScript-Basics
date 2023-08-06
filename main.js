console.log("Hello World");
console.log("Javascript is easy");

console.log("Next week will be interesting");

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// DECLARATORS

// -----const--(declare)--constant
// ----let--(declare, re-assign)
// -----var--(declare, re-declare and re-assign)

// ---camelCasing (todayIsAGoodDay) used for javascript
// ---PascalCasing (GoingOut)
// ---snake_casing (ade_is_a_boy)

// Example 1
// let myName = 'David'
// (declarator) (variable name) = '(value/data)'
// console.log(myName)
// (Go to the console of my PC and print the value in the varaible name)(variable name)

// variable names cant start with numbers ans symbols
// Reserved keys are names that cant be used as a variable name in javascript

// for you to be able to re-assigned and re-declare you should have declare that variable first

// NEVER USE VAR--------------------------------------------

// const myName = 'David'

// ======================================================================================================

// declare
var myName = "Tobi";
console.log(myName);

var myName1 = "Afe";
console.log(myName1);

// re-declare
var myName = "David";
console.log(myName);

var myName = "Kcee";
console.log(myName);

// re-assign
myName = "Dayo";
console.log(myName);

// ===========================================================================================================
// declare
let schools = "tech school";
console.log(schools);

// re-assign
let school = "Tech Studio";
school = "Unilag";
console.log(school);

// ===========================================================================================================

// declare
const location1 = "Ojuelegba";
console.log(location1);

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// VARIABLES
// these are containers to store VALUE/(DATA)
// never use numbers and symbols to write variable names

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// DATA TYPES (Values)

// Primitive Data Types
// -Strings
// -Numbers
// -Booleans
// -Null
// -Undefined

// Complex Data Types
// -Arrays
// -Objects

// =======================================================================================================

// DATA TYPE 1 ============================STRINGS=================================

// STRINGS
// cotation mark around the data type means "STRINGS"

let randomText = "i am anime";
console.log(randomText);
console.log(typeof randomText);

let age = 19;
console.log(age);
console.log(typeof age);

let population = "1000";
console.log(population);
console.log(typeof population);

// STRINGS METHODS
// Strings methods are used to manipulate strings

// Method_one toUpperCase
let footballClub = "Arsenal is a winner";
let newFootballClub = footballClub.toUpperCase();
// every string method has to end with ()
console.log(newFootballClub);
console.log(footballClub);

// Method_two toLowerCase
let bestCoach = "GUARDIOLA";
let loBestCoach = bestCoach.toLowerCase();
console.log(loBestCoach);
console.log(bestCoach);
// or
let bestCoach1 = "TEMIDAYO".toLowerCase();
console.log(bestCoach1);

// Method_three slice
let text = "i love cooking";
// whatever you pass in into the braket of a method is an (ARGUMENT)
// Space counts for strings
// for index and position start counting from 0
// for length start counting from 1
let lovetext = text.slice(5, 8);
console.log(lovetext);
// it will start printing from the index number (arguement)

let melove = text.slice(2, 6);
console.log(melove);

// Method_four indexof
let lastText = "Eren is a Genius";
let res = lastText.indexOf("Eren");
console.log(res);

let inde = lastText.indexOf("e");
console.log(inde);

let oop = lastText.indexOf("Genius");
console.log(oop);

// Method_five trimstart
// Method_six trim
// endswith
// concat

// STRING LENGHT IS NOT A METHOD used to count number of text and starts counting from 1 and not 0
let mtName = "AFE TEMIDAYO";
console.log(mtName.length);

// ====================================================================

let text2 = "i_dont_understand_what_i_was_given_to_explain_(matchAll)";
let confusion = text2.charAt(17);
console.log(confusion);

// ===========================================DAY 2===================================================='''''''''''''''

// Read up on strings (concatenation and template literals)

// CONCATENATION
// this isthe process of adding strings and varaibles

let firstName = "Temidayo";
let middleName = "Olasunkanmi";
let lastName = "Afe";

let fullName = firstName + " " + middleName + " " + lastName;
console.log(fullName);

// OR

let myName2 = "David";
let myLocation = "Onipan";
let myJob = "Web developer";

console.log(
  "My name is " +
    myName2 +
    " and i am currently in " +
    myLocation +
    " and i am a " +
    myJob
);

// TEMPLATE LITERALS===============This is better=======================
let firstName2 = "Joy";
let middleName2 = "Chioma";
let lastName2 = "Igweh";
let age2 = 25;

let aboutMe = `Hello everyone, my name is ${firstName2} ${middleName2} ${lastName2} and i am ${age2} years old.`;
console.log(aboutMe);

// DATA TYPE 2============================NUMBERS=================================

// NUMBERS

let num = 10;
console.log(typeof num);

// numbers dont have numbers but have mathematical operators
// MATHEMATICAL OPERATORS

// - SUBTRACTION/MINUS
// + ADDITION/PLUS
// / DIVISION
// * MULTIPLICATION/TIMES
// % MODULUS/REMAINDER
// ** EXPONENTIAL/RAISE TO POWER
// ++ INCREMENT
// -- DECREMENT

// SUBSTRACTION
let num1 = 10;
let num2 = 22;

let sub = num1 - num2;
console.log(sub);

// ADDITION
let numb = 10;
let numbs = 22;

let add = numb + numbs;
console.log(add);

// DIVISION
let numc = 10;
let numf = 22;

let div = numc / numf;
console.log(div);

// MULTIPLICATION
let numm = 10;
let numt = 22;

let mul = numm * numt;
console.log(mul);

// MODULUS
let numo = 100;
let numl = 33;

let mod = numo % numl;
console.log(mod);

// EXPONENTIAL
let nume = 5;
// nume will also be used in exponetial example
let numex = 6;

let expo = nume ** numex;
console.log(expo);

// INCREMENT & DECREMENT
// nume++ means take 5 and add 1 to it while nume-- means take 5 and subtract 1 from it
nume++;
nume--;

nume++;
nume += 2;
nume = nume + 3;

// TYPE COERCION (NUMBER + STRING)
let nbi = 100;
let nhf = "10";

let result = nbi + nhf;
console.log(result);

let bayo = 20 + 10 + "20" + 20 + 30 + "10";
console.log(bayo);
console.log(typeof bayo);

// COMPARISON OPERATORS=====every single comparison operators returns a BOOLEAN===========

// GREATER THAN >
// LESS THAN <
// GREATER THAN OR EQUALS TO >=
// LESS THAN OR EQUALS TO <=
// STRICTLY EQUALS TO === (This checks for both an equality in data type as well as the value)
// LOOSELY EQUALS TO == (This checks for just an equality in just the value)

// GREATER THAN
let nuop = 200;
let ngd = 20;

let greater = nuop > ngd;
console.log(greater);

// LESS THAN
let firy = 100;
let jui = 200;

let less = firy < jui;
console.log(less);

let ano = 200;
let ther = 100;

let anles = ano < ther;
console.log(anles);

// GREATER THAN OR EQUALS TO & LESS THAN OR EQUALS TO
let gre = 200;
let ter = 200;

let geteq = gre >= ter;
console.log(geteq);

let gster = gre <= ter;
console.log(gster);

let hush = 200;
let bush = 299;

let buxh = hush >= bush;
console.log(buxh);

// STRICTLY EQUALS TO & LOOSELY EQUALS TO

let man = 200;
let muu = "200";

let jux = man === muu;
console.log(jux);

let juxm = man == muu;
console.log(juxm);

// LOGICAL OPERATIONS====ONLY USED FOR BOOLEANS==========================

// LOGICAL AND - &&
// LOGICAL OR - ||
// LOGICAL NOT - ! (OPPOSITE OF THE ORIGINAL LOGIC)

// EXPLANATION
// (and) is multiplication
// (or) is addition
// true = 1
// false = 0

// True and True = TRUE
// True and False = FALSE
// False and Faslse = FALSE
// True or True = TRUE
// True or False = TRUE
// False or False = FALSE

let ass = true;
let sss = true;

let gas = ass && sss;
console.log(gas);

// ==================

let jaz = true;
let baz = false;

let bazz = jaz || baz;
console.log(bazz);

// =======================

let noo = true;
let yes = false;

let yaaa = noo && !yes;
console.log(yaaa);

// CONDITIONAL STATEMENTS AND CONTROL FLOW
// Conditional statement is used to control the flow of the code
// TYPES OF CS
// A CONDITIONAL STATEMENT SHOULD ONLY GIVE YOU A TRUE OF FALSE

// - if and else
// - ternary operator
// - switch case

// IF & ELSE

// if (condition){
//     block of code or code block
// }

// if the condition in the () is true then run the code in the {}
// if the condition in the () is false then skip the code in the {}
// the (condition) should always run a boolean (true or false)

let good = 16;

if (good >= 16) {
  console.log("im a fine boy");
}

// ==============================

let ages = 17;

if (ages > 18) {
  console.log("you can have a drink");
}

let hud = 17;

if (hud > 13) {
  console.log("you can have her");
}

// =============================

if (ages > 18) {
  console.log("you are a fine boy");
} else if (ages > 17) {
  console.log("Almost fine bro");
} else {
  console.log("you ugly");
}

// you can only have one (if) and it should always start an if statement
// you can have multiple (else if)
// you should always end your if statement with (else)
// you can have an (if) that goes start to the (else)

if (ages > 18) {
  console.log("you are a fine boy");
} else if (ages >= 17) {
  console.log("Almost fine bro");
} else {
  console.log("you ugly");
}

// ================================

let doon = 100;
let noon = 100;

if (doon === noon) {
  console.log("same data type and value");
}

// ======================================

let doon1 = 100;
let noon1 = "100";

if (doon1 === noon1) {
  console.log("same data type and value");
} else {
  console.log("nooooooooooooooooooooo");
}

// =========================================

let doon2 = 100;
let noon2 = "100";

if (doon2 == noon2) {
  console.log("same data type and value");
}

// ==================================================================================================

let bill = 200;

if (bill > 100) {
  let tip = (bill * 10) / 100;
  console.log(`your tip is ${tip} for spending ${bill}`);
}

// 0-99 - 10%
// 100-499 - 15%
// 500 and above - 20%

let bill2 = 600;

if (bill2 <= 99) {
  let tip = (bill2 * 10) / 100;
  console.log(`your tip is ${tip} for spending ${bill2}`);
} else if (bill2 >= 100 && bill2 <= 499) {
  let tip = (bill2 * 15) / 100;
  console.log(`your tip is ${tip} for spending ${bill2}`);
} else {
  let tip = (bill2 * 20) / 100;
  console.log(`your tip is ${tip} for spending ${bill2}`);
}

// alert means show it to the user
// alert("Hello Welcome to my page")

// prompt means i want to collect something or get something
// prompt("Provide a Number");
// prompt("Provide an Operator");
// prompt("Provide another Number");

// let userInput = prompt("Provide a number");
// console.log(userInput);

// let operator = prompt ("Provide an Operator")
// console.log(operator);

// let userInput2 = prompt ("Provide another number")
// console.log(userInput2);

// CREATE A CALCULATOR ===========================

// let userInput = prompt("Provide a number");
// let operator = prompt("Provide an Operator");
// let userInput2 = prompt("Provide another number");

// if (operator === "-") {
//   let ans = userInput - userInput2;
//   alert(`The result for ${userInput} - ${userInput2} is equals to ${ans}`);
// }

// TYPE CONVERSION
// Used to convert data from one data type to another
// Number()
// String()

// let userInput = Number(prompt("Provide a number"));
// let operator = prompt("Provide an Operator");
// let userInput2 = Number(prompt("Provide another number"));

// if (operator === "-") {
//   let ans = userInput - userInput2;
//   alert(`The result for ${userInput} - ${userInput2} is equals to ${ans}`);
// } else if (operator === "+") {
//   let ans = userInput + userInput2;
//   alert(`The result for ${userInput} + ${userInput2} is equals to ${ans}`);
// }

// MULTIPLICATION
// let userInput = Number(prompt("Provide a number"));
// let operator = prompt("Provide an Operator");
// let userInput2 = Number(prompt("Provide another number"));

// if (operator === "*") {
//   let ans = userInput * userInput2;
//   alert(`The result for ${userInput} * ${userInput2} is equals to ${ans}`);
// }

// DIVISION
// let userInput = Number(prompt("Provide a number"));
// let operator = prompt("Provide an Operator");
// let userInput2 = Number(prompt("Provide another number"));

// if (operator === "/") {
//   let ans = userInput / userInput2;
//   alert(`The result for ${userInput} / ${userInput2} is equals to ${ans}`);
// }

// MODULOS
// let userInput = Number(prompt("Provide a number"));
// let operator = prompt("Provide an Operator");
// let userInput2 = Number(prompt("Provide another number"));

// if (operator === "%") {
//   let ans = userInput % userInput2;
//   alert(`The result for ${userInput} % ${userInput2} is equals to ${ans}`);
// }

// EXPONENT
// let userInput = Number(prompt("Provide a number"));
// let operator = prompt("Provide an Operator");
// let userInput2 = Number(prompt("Provide another number"));

// if (operator === "**") {
//   let ans = userInput ** userInput2;
//   alert(`The result for ${userInput} ** ${userInput2} is equals to ${ans}`);
// }

// let userInput = Number(prompt("Provide a number"));
// let operator = prompt("Provide an Operator");
// let userInput2 = Number(prompt("Provide another number"));

// if (operator === "-") {
//   let ans = userInput - userInput2;
//   alert(`The result for ${userInput} - ${userInput2} is equals to ${ans}`);
// } else if (operator === "+") {
//   let ans = userInput + userInput2;
//   alert(`The result for ${userInput} + ${userInput2} is equals to ${ans}`);
// } else if (operator === "*") {
//   let ans = userInput * userInput2;
//   alert(`The result for ${userInput} * ${userInput2} is equals to ${ans}`);
// } else if (operator === "/") {
//   let ans = userInput / userInput2;
//   alert(`The result for ${userInput} / ${userInput2} is equals to ${ans}`);
// } else if (operator === "%") {
//   let ans = userInput % userInput2;
//   alert(`The result for ${userInput} % ${userInput2} is equals to ${ans}`);
// } else if (operator === "**") {
//   let ans = userInput ** userInput2;
//   alert(`The result for ${userInput} ** ${userInput2} is equals to ${ans}`);
// }

// ==========================read and write on Ternary operator============================??????????????????????????????????????????????

// its a shorthand way of writing conditional statement rather than using if and else (simple conditions)

// condition ? expression1 : expression2;
// if (condition){
//     block of code or code block
// }

let aget = 25;
let isAdult = aget >= 18 ? "Adult" : "Minor";
console.log(isAdult);

let email = "afedayo@gmail.com";
let validemail = email.includes("@")
  ? "This is a valid email"
  : "This is an invalid email";
console.log(validemail);

let age5 = 17;
let drinking =
  age5 === 17
    ? "Not yet bro"
    : age5 === 16
    ? "Leave bro"
    : age5 >= 18
    ? "Have a drink"
    : "I will tell your mom";
console.log(drinking);

// ========================================DAY 3====================================

// let bike = Number(prompt("Provide a Number"));
// let mike = prompt("Operation");
// let ike = Number(prompt("Provide another Number"));

// if (mike === "+") {
//   let ke = bike + ike;
//   alert(`if we plus ${bike} from ${ike} it will give you ${ke}`);
// }

// THE SWITCH CASE===============================READ UP ON IT????????????????????????????????????????????????????

// NULL VARIABLE means that you want to leave a vairable empty and is user set
let randomf = null;

// UNDEFINED VARIABLE means a data or value was not assigned to it and is system set
let roman;

// COMPLEX DATA TYPE========================================
// ARRAY
// Arrays are used to store multipile data . they can hold every and all data type in javascript including otherarrays
// After each array a comma "," must be added
// In arrays you start counting each data type from 0

let arr = ["Dayo", "Deji", "Dupe", "ola", 20, true, false, null, 100];
console.log(typeof arr[2]);
console.log(arr[2]);
console.log(arr[7]);
console.log(typeof [7]);
console.log(arr.length);
console.log(arr);

arr[0] = "peace";
console.log(arr);

arr[4] = "Afe";
console.log(arr);

arr[3] = 200;
console.log(arr);

arr = "hello";
console.log(arr);

// ARRAY METHODS =====================================================
let students = [
  "Ola",
  "Dayo",
  "Adura",
  "Peace",
  "Yinka",
  "Abiodun",
  29,
  null,
  true,
  2453,
];

// ARRAY PUSH METHOD it adds more items to an array to the last
students.push("Afe");
students.push(50);
students.push(false);
console.log(students);

// ARRAY POP METHOD it will remove items to an array from the last
students.pop();
students.pop();
let ab = students.pop();
console.log(students);
console.log(ab);

// ARRAY INDEXOF
let dayoindex = students.indexOf("Dayo");
console.log(dayoindex);

let nubbr = students.indexOf(29);
console.log(nubbr);

let adura = students.indexOf("Adura", 1);
console.log(adura);

let peace = students.indexOf(29, 7);
console.log(peace);

// ARRAY SHIFT METHOD
students.shift();
students.shift();
console.log(students);

// ARRAY UNSHIFT METHOD
students.unshift();
students.shift();
console.log(students);

// ARRAY CONCAT METHOD
let arr1 = ["ronaldo", "messi"];
let arr2 = ["pele", "maradona", "zidan"];

let footballGrates = arr1.concat(arr2);
console.log(footballGrates);

// ARRAY SPLICE METHOD
let food = ["rice", "spag", "amala", "yam", "garri", "semo"];
food.splice(3, 2, "pounded yam", "moimoi");
console.log(food);

// ARRAY INCLUDE METHOD
// IT IS USED TO CHECH IF A PARTICULAR DATA EXISTS WITHIN AN ARRAY (TRUE OR FALSE)
let media = ["twitter", "facebook", "instagram"];
let sm = media.includes("twitter");
console.log(sm);

// ARRAY SHIFT METHOD
let boys = ["peace", "kcee", "ola", "adura"];
boys.shift();
console.log(boys);

// ARRAY REVERSE METHOD
let numbb = [1, 2, 3, 4, 5, 6, 8, 9];
numbb.reverse();
console.log(numbb);

// OR

let nob = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let rev = nob.reverse();
console.log(nob);
console.log(rev);

// ARRAY FLAT METHOD
let peae = [[1, 2], 8, [2, 3], 9, [3, 4]];
let gop = peae.flat();
console.log(gop);
console.log(peae);

let dss = [10, 20, 30, [40, 50, 60], 70, 80, 90];
console.log(dss[3][1]);

// ARRAYS SLICE
let azz = ["a", "b", "c", "d", "e"];
console.log(azz.slice(1, 4));

// ARRAY TOSTRINGS METHOD
let cars = ["toyota", "chevolet", "ford", "benz"];
let allCars = cars.toString();
console.log(cars);
console.log(allCars);

// ARRAY JOIN METHOD
let number = [1, 2, 3, 4];
let resultnumb = number.join(" and ");
console.log(resultnumb);

// ARRAYS DELETE OPERATOR
// delete cars[2]
// console.log(cars);

// ===============================================================================

// HIGHER ORFER FUNCTIONS
// Map
// Filter
// ForEach

// ==================Read and develop codes on Spread Operator & Array Destructuring=========================================

// SPREAD OPERATOR
// The spread operator in JavaScript is a powerful syntax that allows you to expand elements from an iterable (like arrays, strings, or objects) into individual elements.
//  It provides an easy and concise way to copy or merge elements from one array or object to another.
// let newArray = [...iterable];

// Example 1: Copying an array using spread operator
let originalArray = [1, 2, 3, 4, 5];
let copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3, 4, 5]

// Example 2: Concatenating arrays using spread operator
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatenatedArray = [...array1, ...array2];

console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

// Example 3: Adding elements to an existing array using spread operator
let existingArray = [1, 2, 3];
let newArrayWithElement = [...existingArray, 4];

console.log(newArrayWithElement); // Output: [1, 2, 3, 4]

// ARRAY DESTRUCTURING
// Array destructuring is a feature in JavaScript that allows you to unpack elements from an array and assign them to individual variables.
// It provides a concise and convenient way to extract values from an array and work with them separately.
// let [variable1, variable2, ..., variableN] = array;

// Example 1: Basic array destructuring
let numbers = [1, 2, 3];

let [a, b, c] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

// Example 2: Skipping elements during array destructuring
let colors = ["red", "green", "blue"];

let [, secondColor] = colors;

console.log(secondColor); // Output: 'green'

// Example 3: Rest operator with array destructuring
let animals = ["dog", "cat", "elephant", "tiger"];

let [pet1, pet2, ...wildAnimals] = animals;

console.log(pet1); // Output: 'dog'
console.log(pet2); // Output: 'cat'
console.log(wildAnimals); // Output: ['elephant', 'tiger']

// before array destructuring
let stud = ["joy", "abiodun", "peace", "kcee", "dayo"];

// let name1 = stud[0];
// let name2 = stud[1];
// let name3 = stub[2];
// let name4 = stud[3];
// let name5 = stud[4];

// console.log(name5);

let [zz, ay, ui, , ko] = stud;
console.log(zz);

// Spread
let newStud = ["ola", "ibrahim", "ope"];

let allStud = [...stud, "adura", ...newStud];
console.log(allStud);

// LOOP
// FOR LOOP
// DO WHILE LOOP
// WHILE LOOP
// FOR IN LOOP
// FOR OF LOOP
// FOR EACH

// LOOPS are used to sumplify repetitive tasks
// SYNTAX
// for (initializer; condition; increment;) {block of code}

// a loop from 0-1000
// for (let i = 0; i < 1001; i++) {
//   console.log(i);
// }

// if the condition never returns false it can become a runtime error (infinity loop)

// for (let u = 5; i > 2; i++) {
// console.log(u);
// }

// for (let z = 0; i < 2; i++) {
// console.log(z);
// }

let myGuy = ["joy", "abiodun", "peace", "kcee", "dayo"];

for (i = 0; i < myGuy.length; i++) {
  console.log(i);
  console.log(myGuy[i]);
}

let myGuys = ["joy", "abiodun", "peace", "kcee", "dayo"];

for (i = 0; i < myGuys.length; i++) {
  if (myGuys[i].includes("o")) {
    console.log("name will not be shown");
  } else {
    console.log(myGuys[i]);
  }
}

let myGuys1 = ["joy", "abiodun", "peace", "kcee", "dayo", "Ola"];

for (i = 0; i < myGuys1.length; i++) {
  if (myGuys1[i].includes("o")) {
    console.log("name will not be shown");
  } else {
    console.log(myGuys1[i]);
  }
}

let myGuys2 = ["joy", "abiodun", "peace", "kcee", "dayo", "Ola"];

for (i = 0; i < myGuys2.length; i++) {
  if (myGuys2[i].toLowerCase().includes("o")) {
    console.log("name will not be shown");
  } else {
    console.log(myGuys2[i]);
  }
}

let fruits = [
  "oranges",
  "apple",
  "strawberry",
  "cherry",
  "kiwi",
  "banana",
  "floating berries",
];

for (f = 0; f < fruits.length; f++) {
  console.log(fruits[f]);
}

for (f = 0; f < fruits.length; f++) {
  if (fruits[f].includes("i")) {
    console.log(`This fruit ${fruits[f]} contains an i`);
  } else {
    console.log(`This fruit ${fruits[f]} does not contain an i`);
  }
}

// DO WHILE LOOP operate (do this) while the condition remains is tru

let azzx = [1, 2, 3, 4, 5];

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

let azux = [1, 2, 3, 4, 5];

let m = 0;
do {
  console.log(m);
  m++;
} while (m < arr.length);

// WHILE LOOP

let aoux = [1, 2, 3, 4, 5];

let v = 0;

while (v < aoux.length) {
  console.log(aoux[v]);
  v++;
}

// FOR IN LOOP

let hers = ["ola", "ibrahim", "abiodun", "yinka", "kcee"];

for (let i in hers) {
  console.log(`${hers[i]} is a hers`);
}

// READ ON SWITCH (CONDITIONING STATEMENT)===============================================

// FUNCTIONS=====
// Functions are a set of intructions set aside to be executed at a later time when called/ invoke.
// TYPES OF FUNCTIONS
// -Function declaration
// -Function expression
// -Arrow function (also called annoymous function)

// SYNTAX FOR FUNCTION DECLERATION
// function functionName (parameters) {
// console.log(block of code)
// }
// functionName()

function getMeFood() {
  console.log("Now you can go get me food");
}
getMeFood();

// HOISTING Hoisting is the ability to invoke or call above where it was created
// only function declaration accepts hoisting

// SYNTAX FOR FUNCTION EXPRESSION
let getMeFood1 = function () {
  console.log("Now go and eat");
};
getMeFood1();

// SYNTAX FOR ARROW FUNCTION
let getMeFood2 = () => {
  console.log("now im eating");
};
getMeFood2();

// ============================================
function greet() {
  console.log("Hello Adura");
  console.log("Good Morning");
}
greet();
greet();
greet();
greet();

// PARAMETERS
// placeholders for incoming values that will be provided at the point of calling or invoking the function (it can be called what ever you want)
function greet1(time) {
  console.log("Hello Adura");
  console.log(`Good ${time}`);
}
greet1("Night");
greet1("Afternoon");

function greet3(time, name) {
  console.log(`Hello ${name}`);
  console.log(`Good ${time}`);
}
greet3("Night", "Bro");
greet3("Afternoon", "MUM");
greet3("Morning", "dad");

// constant and dynamic for parameter (argument & parameter)
// when you want to add a string and a variable (Template Literial)
