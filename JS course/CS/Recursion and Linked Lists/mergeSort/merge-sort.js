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
  console.log("length: ", length)
  // divide array in half
  
}

let unsortedArray = [1, 4, 5, 2, 7, 3, 9, 6];
mergeSort(unsortedArray);
