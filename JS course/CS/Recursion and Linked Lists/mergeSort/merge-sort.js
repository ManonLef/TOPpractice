// from cs 50:
// if n < 2
//  return
// else
//  sort left half of elements
//  sort right half of elements
//  merge sorted halves

///////////////////////////// F I N A L  ////  S O L U T I O N /////////////////////////////

function mergeSort(array) {
  console.log("rewrite* array ", array);
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

  console.log("returning merged ", merged);
  return merged;
}

let unsortedArray = [9, 4, 6, 5, 7, 2, 3, 8, 1, 13, 10, 12, 14, 11];
mergeSort(unsortedArray);
