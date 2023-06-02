// Using iteration, write a function fibs which takes a number and returns an array containing
// that many numbers from the fibonacci sequence.
// Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].

// notes up front:
// Fibonacci was covered in Recursion CS50
// The first element is 0
// The second element is 1
// The nth element is the sum of the n-1 and n-2 element

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// L O O P Y ///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// R E C U R S I V E ///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fibsRec(num) {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];
  if (num > 2) {
    let array = [].concat(fibsRec(num - 1));
    return array.concat(array[array.length - 1] + array[array.length - 2]);
  }
}


// Pseudo code/Explanation
// Let's say I start with passing the number 3:
// I want to be able to add the last two numbers of the result of fibonacci number 2
// So I will take an empty array to start with (I don't want to reinitialize anywhere here)
// I will concat the empty array with the result of the previous array returned from num 2 ([0, 1])
// now when I have that array, I will take the last two numbers, add them up and return that.
// This is now the result of fibsRec(3)
//
// Will this work for higher numbers?
// let's say fibsRec(5)
// - gets to num > 2 if statement.
// - will concat the result of fibsRec(4) to the array
// - fibsRec(4) will in turn first have to solve fibsRec(3)
// - fibsRec(3) will be resolved as stated above and return [0,1,1]
// - fibsRec(4) can no resolve with returning [0,1,1,2]
// - fibsRec(5) will now resolve and return [0,1,1,2,3]

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
