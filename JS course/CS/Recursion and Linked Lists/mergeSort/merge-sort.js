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

function mergeSort(array) {
  let length = array.length
  // step 1: if n < 2 return 
  if (length < 2) {
    console.log("returning", array)
    return array;
  }
  console.log("next", array)
  // divide array in half to sort
  let firstHalf = array.slice(0, length/2)
  let secondHalf = array.slice(length/2)
  console.log("first: ", firstHalf)
  console.log("second: ", secondHalf)
  // 2. sort left half
  let a = mergeSort(firstHalf)
  // 3. sort right half
  let b = mergeSort(secondHalf)
  // merge sorted halves
  console.log("a ", a)
  console.log("b ", b)
  
  let indexA = 0
  let indexB = 0
  let merged = []
  if (a[indexA] < b[indexB]) {
    merged.push(a[indexA], b[indexB])
    indexA++
  } else {
    merged.push(b[indexB], a[indexA])
    indexB++
  }

  console.log("merged: ", merged)
  return merged
}

let unsortedArray = [1, 4, 5, 2, 7, 3, 9, 6];
mergeSort(unsortedArray);
