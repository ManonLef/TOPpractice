// from cs 50:
// if n < 2
//  return
// else
//  sort left half of elements
//  sort right half of elements
//  merge sorted halves

///////////////////////////// F I N A L  ////  S O L U T I O N /////////////////////////////

function mergeSort(array) {
  if (array.length < 2) return array;

  let firstHalf = array.slice(0, array.length / 2);
  let secondHalf = array.slice(array.length / 2);

  let left = mergeSort(firstHalf);
  let right = mergeSort(secondHalf);

  let merged = [];

  while (left.length !== 0 && right.length !== 0) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  while (left.length !== 0) {
    merged.push(left.shift());
  }
  while (right.length !== 0) {
    merged.push(right.shift());
  }

  return merged;
}

console.log(mergeSort([9, 4, 6, 5, 7, 2, 3, 8, 1, 13, 10, 12, 14, 11, 15])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(mergeSort([9, 4, 6, 5, 7, 2, 3, 8])); // [2, 3, 4, 5, 6, 7, 8, 9];
console.log(mergeSort([])); // [];
console.log(mergeSort([5, 0, 10, -3, -1, 4, 12, -5])); // [-5, -3, -1, 0, 4, 5, 10, 12];

// notes after looking at other solutions. I could probably refactor the code in the future when I have let this solution sink in.
