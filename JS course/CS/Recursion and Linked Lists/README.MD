- [Recursion video from CS50](https://www.youtube.com/watch?v=mz6tAJMVmfM)
  - [Fibonacci part of video](https://youtu.be/mz6tAJMVmfM?t=512)
  - [Collatz part of video](https://youtu.be/mz6tAJMVmfM?t=576)

- [wiki article on implementation issues](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm#Implementation_issues)
 - noteworthy: checking the recursion would meet the base case before actually recursing avoids and extra recursion call. Quote from article:
    >  *A general procedure for a simple hybrid recursive algorithm is short-circuiting the base case, also known as **arm's-length recursion**. In this case, whether the next step will result in the base case is checked before the function call, avoiding an unnecessary function call.*

- [ ] Look into the syntax for Q4 solution creating shallow copy"
  - theirs `var copy = copy || array.slice();`
  - mine `const copy = [...arr]`
  - [x] research why `const copy = arr` will not work. Could be because of array references but I'm not 100%
    - because that is a reference to the original array and will manipulate the original as well.

- [x] try understanding why my Q6 function didn't work with foreach, but did with for let ... in, I feel it has to do with continued iterating but can't really figure it out.
Figured it out thanks to Nevz who helped me out on Discord. I completely overlooked the basics of the forEach method:
- it always returns undefined 
- ! a callback is an intrinsic part of the forEach method. 
- the callback returns to the forEach method, not the outer function so if a method does return something, it would still need to be stored into something else to be returned from the outer function. 
- [ ] look into the some method for arrays

- [ ] Q7: not sure why they implement a case for array 0 here.

- Q9: their solution is way more elegant using concat.
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

Another Discord question
## Lesson link: 
JS CS Recursion https://www.theodinproject.com/lessons/javascript-recursive-methods#test-yourself 
Q6 from linked article https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

## Question:
Why is the first function using `forEach` not working and returning `false` while it should return `true`, while the second version I created using `for...in` does correctly return `true`.

I went into a little bit of a rabbit hole for this one in my attempt to use forEach on an object since I do secretly enjoy testing things I read about, but I didn't expect this behavior at all and am not sure what causes the difference since they seem to be near identical. 

## What I've Tried/Expected: 
I expected these two to work the same. They both iterate through all the key values correctly, both find a match, but the `forEach` method doesn't seem to consider their `return true` to be a return value for the whole function, and continues to the next section after the `forEach` statement to then `return false`.

Well I tried solving this question using the `forEach` first, and eventually rewrote it using `for...in` only because an array recursion on `js.info` they were using `for...of` (since it was an array). I was just surprised to find it working with `for...in` with a function that looks otherwise exactly the same to me.

I do realize that `forEach` is an Array method, but that it can be used on objects using `Object.values()` (or keys) as I did. The console logs make me believe these two functions are really going through the exact same steps, except for one ignoring the `return true` as a reason to return it as the outcome value for the function.

## Code
```js
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

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

// function 1 using forEach not working

function contains(nest, value) {
  Object.values(nest).forEach(val => {
    console.log(val)
    if (typeof val === "object") {
      return contains(val, value);
    }
    console.log("found it ", val)
    if (val === value) return true;
  });
  return false;
}

console.log("Q6 hasit?:", hasIt); // returns false ?!! should be true
console.log("Q6 doesntHave?:", doesntHaveIt); // returns false

// function 2 using for...in works. Changed the function and variable names by adding an A to them

function containsA(nest, value) {
  for (let key in nest) {
    console.log("A ", nest[key])
    if (typeof nest[key] === "object") {
      return containsA(nest[key], value);
    }
    if (nest[key] === value) return true;
  }
  return false;
}

let hasItA = containsA(nestedObject, 44); // true
let doesntHaveItA = containsA(nestedObject, "foo"); // false

console.log("Q6A hasit?:", hasItA); // true
console.log("Q6A doesntHave?:", doesntHaveItA); // false

```

