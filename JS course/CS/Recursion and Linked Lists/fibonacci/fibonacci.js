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
    for (let i = 2; i <= num-1; i++) {
      array.push(array[i-1]+array[i-2])
    }
    return array;
  }
  else if (num === 1 ) return [0]
  console.error("not a valid number to output fibonacci sequence");
}

console.log(fibs(1));
console.log(fibs(8));
