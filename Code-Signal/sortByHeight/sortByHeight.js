//Notes
// find the indices that I need to change for order
// record the value of specific array index
//find a way to sort the numbers that are not -1
// Looked up sort array method for reference
// https://alligator.io/js/array-sort-numbers/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift



//PseudoCode
//1. make a placeholder for a new array to hold values that are not -1 (done)
//1a. push non -1 numbers into new array
//2. sort through the new array in ascending order using array.prototype.sort() method
//3. plug sorted array index values back into original array by array.prototype.shift() method
//4. return the array





function sortByHeight(a) { //[-1, 40, 2, -1]
  const newArr = []

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      newArr.push(a[i])
    }
  } // newArr = [40, 2]

  newArr.sort((a, b) => a - b) // [2, 40]

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = newArr.shift() //[-1, 2, 40, -1]
      console.log(typeof a[i])
    }
  }

  return a

}
