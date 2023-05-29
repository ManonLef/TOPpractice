// QUESTION 1 Sum all numbers
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

function sumRange(num) {
  // base
  if (num === 1) return num;
  else return num + sumRange(num - 1);
}

console.log("sumRange: " + sumRange(3)); // passes test
// no notes on this one. Pretty straightfwd without issues, omit else in final return

// QUESTION 2 Power function
// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

function power(base, exp) {
  console.log(base, exp);
  if (exp === 0) return 1;
  return (base *= power(base, exp - 1));
}

// SAMPLES (uncomment for test)
console.log("Power: " + power(2, 4)); // 16
console.log("Power: " + power(2, 3)); // 8
console.log("Power: " + power(2, 2)); // 4
console.log("Power: " + power(2, 1)); // 2
console.log("Power: " + power(2, 0)); // 1

// Explanation from solution:
// You can think of it in terms of this example:

// 2^4 = 2 * 2^3;
// 2^3 = 2 * 2^2;
// 2^2 = 2 * 2^1;
// 2^1 = 2 * 2^0; // once our exponent is 0 we KNOW that the value is always 1!
