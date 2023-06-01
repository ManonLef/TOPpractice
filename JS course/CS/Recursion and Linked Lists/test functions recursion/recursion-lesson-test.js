//////////////////////////////////////// Question 1: Sum all numbers ////////////////////////////////////////
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

function sumRange(num) {
  // base
  if (num === 1) return num;
  else return num + sumRange(num - 1);
}

console.log("sumRange: " + sumRange(3)); // passes test
// no notes on this one. Pretty straightfwd without issues, omit else in final return

//////////////////////////////////////// Question 2: Power Function ////////////////////////////////////////
// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

function power(base, exp) {
  if (exp === 0) return 1;
  return (base *= power(base, exp - 1));
}

// SAMPLES (uncomment for test)
console.log("Power: " + power(2, 4)); // 16
// console.log("Power: " + power(2, 3)); // 8
// console.log("Power: " + power(2, 2)); // 4
// console.log("Power: " + power(2, 1)); // 2
// console.log("Power: " + power(2, 0)); // 1

// Explanation from solution:
// You can think of it in terms of this example:

// 2^4 = 2 * 2^3;
// 2^3 = 2 * 2^2;
// 2^2 = 2 * 2^1;
// 2^1 = 2 * 2^0; // once our exponent is 0 we KNOW that the value is always 1!

//////////////////////////////////////// Question 3: Calculate Factorial ////////////////////////////////////////
// Write a function that returns the factorial of a number. As a quick refresher,
// a factorial of a number is the result of that number multiplied by the number before it,
// and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
// Sample: factorial(5); // 5 * 4 * 3 * 2 * 1 === 120

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log("Factorial: " + factorial(5)); // 5 * 4 * 3 * 2 * 1 === 120

// no issues on this one

//////////////////////////////////////// Question 4: Check all values in an array ////////////////////////////////////////
// Write a function called all which accepts an array and a callback
// and returns true if every value in the array returns true when passed as parameter to the callback function
// Sample:

// console.log(allAreLessThanSeven); // false

// ********************* my solution **************************

const myArr = [1, 5, 8, 5, 3];
console.log(myArr);
let allAreLessThanSeven = all(myArr, function (num) {
  return num < 7;
});

console.log("allLessSeven: " + allAreLessThanSeven); // false
console.log(myArr);

function all(arr, cb) {
  const copy = [...arr]; // arr will not work
  if (!copy[0]) return true;
  if (cb(copy[0]) === false) return false;
  else {
    copy.shift();
    return all(copy, cb);
  }
}

// ********************* their solution **************************

var lessSeven = all([1, 2, 7], function (num) {
  return num < 7;
});

console.log(lessSeven); // false

function less(array, callback) {
  var copy = copy || array.slice(); // shallow copies array

  if (copy.length === 0) return true;

  if (callback(copy[0])) {
    copy.shift(); // remove first element from array
    return less(copy, callback);
  } else {
    return false;
  }
}

// notes: not entirely sure why they opted for a shallow copy, put out a question on discord (found in readme)
// Redoing my solution with a shallow copy as well. If I were to pass a variable with an array to allAreLessThanSeven it would actually alter the original array.
// That is not desirable at all so a shallow copy is indeed better

// I still have a different way of solving/cloning for shallow copy.

//////////////////////////////////////// Question 5: Product of an array ////////////////////////////////////////
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all
// Samples
// var six = productOfArray([1,2,3]) // 6
// var sixty = productOfArray([1,2,3,10]) // 60

// ********************* my solution **************************

function productOfArray(arr) {
  const copy = [...arr];
  // base case is no items left or last item?
  if (!copy[0]) return 1;
  // otherwise more items left so
  return copy.shift() * productOfArray(copy);
}

var six = productOfArray([1, 2, 3]); // 6
var sixty = productOfArray([1, 2, 3, 10]); // 60

console.log("result: " + six, sixty);

// I struggled due to a very inconvenient mistake. I was adding instead of multiplying.

// ********************* their solution **************************

var sixA = productOfArrayA([1, 2, 3]); // 6
var sixtyA = productOfArrayA([1, 2, 3, 10]); // 60

console.log(sixA, sixtyA);

function productOfArrayA(array) {
  if (array.length === 0) return 1;

  return array.shift() * productOfArrayA(array);
}

// notes: they used array.length === 0, mine results in the same outcome
// they didn't opt for a shallow copy this time, which is interesting to me since the original array is edited with their solution

//////////////////////////////////////// Question 6: Search JS object ////////////////////////////////////////
// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
// Sample:
const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

// function 1 using forEach not working

// let hasIt = contains(nestedObject, 44); // should be true
// let doesntHaveIt = contains(nestedObject, "foo"); // should be false

// function contains(nest, value) {
//   Object.values(nest).forEach((val) => {
//     console.log(val);
//     if (typeof val === "object") {
//       return contains(val, value);
//     }
//     console.log("found it ", val);
//     if (val === value) return true;
//   });
//   return false;
// }

// console.log("Q6 hasit?:", hasIt); // returns false ?!! should be true
// console.log("Q6 doesntHave?:", doesntHaveIt); // returns false

// function 2 using for...in works. Changed the function and variable names by adding an A to them

let hasItA = containsA(nestedObject, 44); // should be true
let doesntHaveItA = containsA(nestedObject, "foo"); // should be false

function containsA(nest, value) {
  for (let key in nest) {
    console.log("A ", nest[key]);
    if (typeof nest[key] === "object") {
      return containsA(nest[key], value);
    }
    if (nest[key] === value) return true;
  }
  return false;
}

console.log("Q6A hasit?:", hasItA); // true
console.log("Q6A doesntHave?:", doesntHaveItA); // false

//////////////////////////////////////// Question 7: Parse a multi-dimensional array ////////////////////////////////////////
// Given a multi-dimensional integer array, return the total number of integers stored inside this array
// Sample:
var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7

// ********************* my solution **************************
function totalIntegers(arr) {
  let sum = 0;
  for (let item of arr) {
    if (Array.isArray(item)) sum += totalIntegers(item);
    else if (typeof item === "number") sum++;
  }
  return sum;
}

console.log("seven: ", seven);

// pseudo:
// 1. array can contain values, or another array, or mix of both
// 2. if value => check num and +1 to var if num
//    if another array; recurse that array

// ********************* their solution **************************

var eight = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7

function totalInt(array) {
  if (array.length === 0) return 0;

  let total = 0;
  let first = array.shift();

  if (Array.isArray(first)) {
    total += totalInt(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }

  return total + totalInt(array);
}

console.log(eight);

// not sure why they need 0

//////////////////////////////////////// Question 8: Write a function that sums squares of numbers in list that may contain more lists ////////////////////////////////////////
// Sample:
let l = [1, 2, 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

// ********************* my solution **************************

function SumSquares(array) {
  let sum = 0;
  for (let item of array) {
    if (Array.isArray(item)) sum += SumSquares(item);
    else if (typeof item === "number") sum += item * item;
  }
  return sum;
}

// ********************* their solution **************************

var lA = [1, 2, 3];
console.log(SumSquaresA(lA)); // 14

lA = [[1, 2], 3];
console.log(SumSquaresA(lA)); // 14

lA = [[[[[[[[[1]]]]]]]]];
console.log(SumSquaresA(lA)); // 1

lA = [10, [[10], 10], [10]];
console.log(SumSquaresA(lA)); // 400

function SumSquaresA(array) {
  if (array.length === 0) return 0;
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      total += SumSquares(array[i]);
    } else {
      total += array[i] * array[i];
    }
  }
  return total;
}
// pseudo:
// at first glance, it looks similar to Q7
// difference: if num => square it and store.

// and it was. rewrote the Q7 function to fit the bill
// Their solution is just as elaborate as their to Q7
