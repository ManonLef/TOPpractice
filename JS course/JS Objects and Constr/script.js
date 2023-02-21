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

//howNameAndColor method was inherited by the aBanana object even though it was defined all the way up the prototype chain on the Plant.prototype object.
