console.log("ohai merge-sort");

// from cs 50:
// if n < 2
//  return
// else
//  sort left half of elements
//  sort right half of elements
//  merge sorted halves

// so up to the sorting this function makes sense.
// when we start returning 1 number and merging is where it gets tricky
// since I think I want to avoid it continuously sorting the merged array.
// So once the initial array is sorted, I need to keep merging all the results without
// it going back to sorting

// I got it mostly working with conditionals so will check array prototype methods to see if I can make
// it failsafe for every order

function mergeSortA(array) {
  // step 1: if n < 2 return
  if (array.length < 2) {
    console.log("returning", array);
    return array;
  }
  console.log("next", array);
  // divide array in half to sort
  let firstHalf = array.slice(0, array.length / 2);
  let secondHalf = array.slice(array.length / 2);
  console.log("first: ", firstHalf);
  console.log("second: ", secondHalf);
  // 2. sort left half
  let a = mergeSortA(firstHalf);
  // 3. sort right half
  let b = mergeSortA(secondHalf);
  // merge sorted halves
  console.log("a ", a);
  console.log("b ", b);

  let indexA = 0;
  let indexB = 0;
  let merged = [];
  if (a.length === 1) {
    if (a[indexA] < b[indexB]) {
      merged.push(a[0]);
      merged.push(b[0]);
    } else {
      merged.push(b[0]);
      merged.push(a[0]);
    }
  } else {
    while (merged.length < a.length + b.length) {
      console.log(
        "*",
        merged.length < a.length + b.length,
        "indexA ",
        indexA,
        "indexB ",
        indexB,
        "a ",
        a,
        "b ",
        b,
        "merged ",
        merged
      );

      if (a[indexA] <= b[indexB]) {
        merged.push(a[indexA]);
        indexA++;
      } else {
        merged.push(b[indexB]);
        indexB++;
      }
    }
  }

  console.log("returning merged: ", merged);
  return merged;
}

function mergeSort(array) {
  if (array.length < 2) return array;
  console.log("rewrite* array ", array);

  let firstHalf = array.slice(0, array.length / 2);
  let secondHalf = array.slice(array.length / 2);

  let left = mergeSort(firstHalf);
  let right = mergeSort(secondHalf);
  console.log("rewrite* left ", left, "right ", right);

  let merged = [];

  // rewritten version but now I'll rewrite the original arrays until one of them is zero
  // this way it will focus on the first index only.
  // if one of them is empty, it will populate the merged list with the leftovers from the other array.
  while (left.length !== 0 && right.length !== 0) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
      console.log("rewrite* merged shifted left", merged, "left ", left);
    } else {
      merged.push(right.shift());
      console.log("rewrite* merged shifted left", merged, "right ", right);
    }
  }
  while (left.length !== 0) {
    merged.push(left.shift());
    console.log("rewrite* left not zero", merged, "left ", left);
  }
  while (right.length !== 0) {
    merged.push(right.shift());
    console.log("rewrite* right not zero", merged, "right ", right )
  }

  console.log("rewrite* merged ", merged);
  return merged;
}

let unsortedArray = [9, 4, 6, 5, 7, 2, 3, 8, 1];
mergeSortA(unsortedArray);
mergeSort(unsortedArray);
