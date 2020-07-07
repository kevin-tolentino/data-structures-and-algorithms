//notes
// - determine how to rule out the incoming matrix values when you encounter 0
// - create a helper function to check if that specific index is ruled out
// - make a variable for total accumulated cost



//pseudocode
// -create a helper function that checks the index of the matrix (done)
// // - go through the array and return true or false (done)
// - create a placeholder to store the total cost (done)
// - create an empty placeholder for designated falsy index values (done)
// - go through matrix to either key the falsy index or add the truthy value to the total
// // -check the index against the array of falsy indexes
// return total

function checkIndex(array, currentIndex) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === currentIndex) return false
  }
  return true
}

let total = 0;

let falsyIndexArray = []

function matrixElementsSum(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const currentArray = matrix[i]
    for (let j = 0; j < currentArray.length; j++) {
      const currentValue = currentArray[j]
      if (checkIndex(falsyIndexArray, j) && currentValue) {
        total = total + currentValue;
      } else {
        falsyIndexArray.push(j)
      }
    }
  }
  return total
}
