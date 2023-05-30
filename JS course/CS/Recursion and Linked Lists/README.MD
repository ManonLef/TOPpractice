- [Recursion video from CS50](https://www.youtube.com/watch?v=mz6tAJMVmfM)
  - [Fibonacci part of video](https://youtu.be/mz6tAJMVmfM?t=512)
  - [Collatz part of video](https://youtu.be/mz6tAJMVmfM?t=576)

- [wiki article on implementation issues](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm#Implementation_issues)
 - noteworthy: checking the recursion would meet the base case before actually recursing avoids and extra recursion call. Quote from article:
    >  *A general procedure for a simple hybrid recursive algorithm is short-circuiting the base case, also known as **arm's-length recursion**. In this case, whether the next step will result in the base case is checked before the function call, avoiding an unnecessary function call.*

- [ ] Look into the syntax for Q4 solution creating shallow copy"
  - theirs `var copy = copy || array.slice();`
  - mine `const copy = [...arr]`
  - figure out why `const copy = arr` will not work. Could be because of array references but I'm not 100%

- [ ] try understanding why my Q6 function didn't work with foreach, but did with for let ... in, I feel it has to do with continued iterating but can't really figure it out

```js
// foreach
function contains(nest, value) {
  Object.values(nest).forEach(val => {
    console.log("forEaching: ", val);
    if (typeof val === "object") {
      console.log("it's an object, recursing");
      return contains(val, value);
    }

    if (val === value) {
      console.log("found one, returning true");
      return true;
    }    
  });
}

// for in 
function contains(nest, value) {
  for (let key in nest) {
    if (typeof nest[key] === "object") {
      return contains(nest[key], value)
    }
    if (nest[key] === value) return true
  }
  return false
}
```

