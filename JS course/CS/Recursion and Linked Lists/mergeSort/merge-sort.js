console.log("ohai merge-sort");

// from cs 50:
// if n < 2
//  return
// else
//  sort left half of elements
//  sort right half of elements
//  merge sorted halves

function mergeSort(array) {
  let length = array.length
  if (length < 2) {
    console.log("returning", array)
    return;
  }
  console.log("next", array)
  // divide array in half to sort
  let firstHalf = array.slice(0, length/2)
  let secondHalf = array.slice(length/2)
  console.log("first: ", firstHalf)
  console.log("second: ", secondHalf)
  mergeSort(firstHalf)
  mergeSort(secondHalf)
}

let unsortedArray = [1, 4, 5, 2, 7, 3, 9, 6];
mergeSort(unsortedArray);
