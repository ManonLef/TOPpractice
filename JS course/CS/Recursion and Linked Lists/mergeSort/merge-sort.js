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
  let a = mergeSort(firstHalf);
  // 3. sort right half
  let b = mergeSort(secondHalf);
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

let unsortedArray = [3, 4, 6, 5, 7, 2, 1, 8];
mergeSort(unsortedArray);
