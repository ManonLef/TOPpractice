// restrictions for the collatz CS50 problem linked in the readme:

// if n is 1, stop
// Otherwise, if n is even, repeat this process on n/2
// Otherwise, if n is odd, repeat this process on 3n+1

// Write a recursive function collatz(n) that calculates how many steps it takes to get to 1 if you start from n and recurse as indicated above

function collatz(n, steps = 0) {
  // base case
  if (n === 1) return steps;
  // even
  else if (n % 2 === 0) return collatz(n / 2, ++steps);
  // odd
  else if (n % 2 !== 0) return collatz(3 * n + 1, ++steps);
}

console.log(collatz(27));

// note on my solution: I started with ++steps before the conditionals at first, overlooking the fact that for n===1, there's no more step needed.
// reformatted to omit the {} since they're not needed on a single return

// Their solution:

function collatzCS(n) {
  // base
  if (n == 1) return 0;
  // even
  if (n % 2 === 0) return 1 + collatz(n / 2);
  // odd
  else return 1 + collatz(3 * n + 1);
}


console.log(collatzCS(27))

// note on their solution: an extra variable for steps is not needed. 
// they'll just keep returning one for every step until it adds up to the steps including all the recursive calls made. 

// Final note: TODO: Take some time to write out the steps 