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
  this.name = name
  this.marker = marker
  this.sayName = function() {
    return "hi, my name is " + name
  }
}

const playerOne = new Player("Steve", "X")
const playerTwo = new Player("Manon", "<3")
