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

let sum = 0;
let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

// function contains(nest, value) {
//   Object.values(nest).forEach(val => {
//     console.log("forEaching: ", val);
//     if (typeof val === "object") {
//       console.log("it's an object, recursing");
//       return contains(val, value);
//     }

//     if (val === value) {
//       console.log("found one, returning true");
//       return true;
//     }    
//   });
// }

function contains(nest, value) {
  for (let key in nest) {
    if (typeof nest[key] === "object") {
      return contains(nest[key], value)
    }
    if (nest[key] === value) return true
  }
  return false
}

console.log("hasit?:", hasIt); // undefined?
console.log("doesntHave?:", doesntHaveIt); // undefined?
