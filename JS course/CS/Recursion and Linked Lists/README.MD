- [Recursion video from CS50](https://www.youtube.com/watch?v=mz6tAJMVmfM)
  - [Fibonacci part of video](https://youtu.be/mz6tAJMVmfM?t=512)
  - [Collatz part of video](https://youtu.be/mz6tAJMVmfM?t=576)

- [wiki article on implementation issues](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm#Implementation_issues)
 - noteworthy: checking the recursion would meet the base case before actually recursing avoids and extra recursion call. Quote from article:
    >  *A general procedure for a simple hybrid recursive algorithm is short-circuiting the base case, also known as **arm's-length recursion**. In this case, whether the next step will result in the base case is checked before the function call, avoiding an unnecessary function call.*

Discord Question

**Lesson link:** https://www.theodinproject.com/lessons/javascript-recursive-methods#test-yourself > **Q4** https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

**Question:** As you can see in the code below, my solution is very similar to the "official" solution except for them using a shallow copy of the array.

I'm wondering why they would opt for a shallow copy since as far as I know, it will take the same amount of memory inside the function or even more to create an array copy and manipulate that one. The original array is passed as an argument to the function and will be edited inside the recursive function. However, it will not be edited in the allAreLessThanSeven declaration. I tried the below to see if my reasoning was flawed. Maybe I'm missing something.

I would love to hear your ideas!

**What I've Tried/Expected:** I tried to prove myself wrong on the above, for if it were to alter the original passed array after running the function `all`, a second run would have to return `true` with the array being sliced to empty.
I created dom elements to synchronously populate with the outcome of `allAreLessThanSeven` but it kept returning `false`, which tells me that the original array passed as an argument is not being altered. 

```js
// ***** my solution *****

let allAreLessThanSeven = all([1, 2, 7, 5, 6], function (num) {
  return num < 7;
});

console.log("allLessSeven: " + allAreLessThanSeven); // false

function all(arr, cb) {
  if (!arr[0]) return true;
  if (cb(arr[0]) === false) return false;
  else {
    arr.shift();
    return all(arr, cb);
  }
}

// ***** their solution *****

var lessSeven = all([1,2,7], function(num){
	return num < 7;
});

console.log(lessSeven); // false

function less(array, callback){
	var copy = copy || array.slice(); // shallow copies array

	if(copy.length === 0) return true;

	if(callback(copy[0])){
		copy.shift(); // remove first element from array
		return less(copy, callback);
	} else {
		return false;
	}
}

```
