// Objects

// const playerOneName = "Tim"
// const playerTwoName = "Rufus"
// const playerOneMarker = "X"
// const playerTwoMarker = "O"

// const playerOne = {
//   name: "Tim",
//   marker: "X"
// };

// const playerTwo = {
//   name: "jenn",
//   marker: "O"
// }

// function printName(player) {
//   return player.name
// }

// Object Constructors

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    return "hi, my name is " + name;
  };
}

const playerOne = new Player("Steve", "X");
const playerTwo = new Player("Manon", "<3");

// Prototypes

Player.prototype.status = function () {
  return this.name + " is currently offline";
};

//paste for readability from http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/

function Plant() {
  this.country = "Mexico";
  this.isOrganic = true;
}

// Add the showNameAndColor method to the Plant prototype property
Plant.prototype.showNameAndColor = function () {
  console.log("I am a " + this.name + " and my color is " + this.color);
};

// Add the amIOrganic method to the Plant prototype property
Plant.prototype.amIOrganic = function () {
  if (this.isOrganic) console.log("I am organic, Baby!");
};

function Fruit(fruitName, fruitColor) {
  this.name = fruitName;
  this.color = fruitColor;
}

// Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
Fruit.prototype = new Plant();

// Creates a new object, aBanana, with the Fruit constructor
var aBanana = new Fruit("Banana", "Yellow");

// Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
console.log(aBanana.name); // Banana

// Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.
console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.

//showNameAndColor method was inherited by the aBanana object even though it was defined all the way up the prototype chain on the Plant.prototype object.

// PRACTICE CODE Object.prototype Properties Inherited by all Objects

function People() {
  this.superstar = "Michael Jackson";
}
// Define "athlete" property on the People prototype so that "athlete" is accessible by all objects that use the People () constructor.
People.prototype.athlete = "Tiger Woods";

var famousPerson = new People();
famousPerson.superstar = "Steve Jobs";

// The search for superstar will first look for the superstar property on the famousPerson object, and since we defined it there, that is the property that will be used. Because we have overwritten the famousPerson’s superstar property with one directly on the famousPerson object, the search will NOT proceed up the prototype chain.
console.log(famousPerson.superstar); // Steve Jobs

// Note that in ECMAScript 5 you can set a property to read only, and in that case you cannot overwrite it as we just did.

// This will show the property from the famousPerson prototype (People.prototype), since the athlete property was not defined on the famousPerson object itself.
console.log(famousPerson.athlete); // Tiger Woods

// In this example, the search proceeds up the prototype chain and find the toString method on Object.prototype, from which the Fruit object inherited—all objects ultimately inherits from Object.prototype as we have noted before.
console.log(famousPerson.toString()); // [object Object]

// exercises from
//
// https://javascript.info/prototype-inheritance

// EXERCISE 1

// let animal = {
//   jumps: null,
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// alert(rabbit.jumps); // ? (1)

// delete rabbit.jumps;

// alert(rabbit.jumps); // ? (2)

// delete animal.jumps;

// alert(rabbit.jumps); // ? (3)

// 1 true v
// 2 null
// 3 undefined?

//correct

// EXERCISE 2 SEARCHING ALGORITHM

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

// 1. Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
// 2. Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.

// 1. add proto up the chain and check in browser console.
// 2. FALSE head.glasses because it doesn't have to travel up the inheritance chain to search for glasses and will find it in its own properties.
// 2. CORRECT ANSWER  In modern engines, performance-wise, there’s no difference whether we take a property from an object or its prototype. They remember where the property was found and reuse it in the next request.
// For instance, for pockets.glasses they remember where they found glasses (in head), and next time will search right there. They are also smart enough to update internal caches if something changes, so that optimization is safe.

// EXERCISE 3 WHERE DOES IT WRITE?

let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();

// We have rabbit inheriting from animal. If we call rabbit.eat(), which object receives the full property: animal or rabbit?
// My answer: the rabbit. the eat method will be found in the animal prototype but will be executed with this/rabbit

//EXERCISE 4 Why are both hamsters full?

let hamster = {
  // stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [],
  __proto__: hamster,
};

let lazy = {
  stomach: [],
  __proto__: hamster,
};

// This one found the food
speedy.eat("apple");
// alert(speedy.stomach); // apple

// // This one also has it, why? fix please.
// alert(lazy.stomach); // apple

//-----//

// We have two hamsters: speedy and lazy inheriting from the general hamster object.
// When we feed one of them, the other one is also full. Why? How can we fix it?

// My Answer:
// speedy.eat apple will find a method in hamster and execute the speedy.eat method which then pushed the fed food to the stomach array in hamster.
// When you alert speedy.stomach, it will not find the property in speedy, but it will in hamster, and that stomach has an apple.
// Same happends for lazy since the stomach property will not be found in lazy, it will travel up to the hamster prototype and find a stomach with an apple in it.

// My idea to Fix: this.stomach might work in hamster. I'll try that first. RESULT: it doesn't like me adding this to array so I shall look into why that is.
// idea 2: add stomach array to speedy and lazy or return it

//-----//

//CONTINUED TOP LESSON CODE ALONG after reading assignment https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors#the-prototype

//-----//
function Student() { 
}

Student.prototype.sayName = function() { 
  console.log(this.name)
}

function EighthGrader(name) { 
  this.name = name
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype) 

const carl = new EighthGrader("carl")
carl.sayName() // console.logs "carl"
carl.grade // 8