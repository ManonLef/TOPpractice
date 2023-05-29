// restrictions:

// if n is 1, stop
// Otherwise, if n is even, repeat this process on n/2
// Otherwise, if n is odd, repeat this process on 3n+1

// Write a recursive function collatz(n) that calculates how many steps it takes to get to 1 if you start from n and recurse as indicated above

function collatz(n, steps = 0) {
  // base case
  if (n === 1) {
    return steps
  } else if (n%2 === 0) {
    return collatz(n/2, ++steps)
  } else if (n%2 !== 0) {
    return collatz(3*n+1, ++steps)
  };
};

console.log(collatz(50))