// Using iteration, write a function fibs which takes a number and returns an array containing
// that many numbers from the fibonacci sequence.
// Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].

// notes up front:
// Fibonacci was covered in Recursion CS50
// The first element is 0
// The second element is 1
// The nth element is the sum of the n-1 and n-2 element

function fibs(num) {
  if (num >= 2) {
    let array = [0, 1];
    for (let i = 2; i < num; i++) {
      array.push(array[i - 1] + array[i - 2]);
    }
    return array;
  } else if (num === 1) return [0];
  console.error("not a valid number to output fibonacci sequence");
}

console.log("fibs: ", fibs(1));
console.log("fibs: ", fibs(20));

// Recursive Fibonacci

function fibsRec(num) {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];
  if (num > 2) {
    let array = [].concat(fibsRec(num - 1));
    return array.concat(array[array.length - 1] + array[array.length - 2]);
  }
}

console.log("fibsRec 1: ", fibsRec(1));
console.log("fibsRec 2: ", fibsRec(2));
console.log("fibsRec 3: ", fibsRec(3));
console.log("fibsRec 5: ", fibsRec(5));
console.log("fibsRec 10: ", fibsRec(10));
console.log("fibsRec 11: ", fibsRec(11));
console.log("fibsRec 12: ", fibsRec(12));
console.log("fibsRec 13: ", fibsRec(13));
console.log("fibsRec 14: ", fibsRec(14));
console.log("fibsRec 15: ", fibsRec(15));
console.log("fibsRec 20: ", fibsRec(20));
// the base array for num 1 and num 2 for index 0 and index 1 are = value 0 and value 1
// if we pass number 10, we want to add 10 numbers to the array, so 10 iterations
