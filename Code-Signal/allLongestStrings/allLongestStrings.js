//notes
// - think of a way to go through all of the string values and log the highest letter count
// - possibly go through the array again to pick out the array index(ces) with highest count
// - push to new array

//pseudocode
// 1. make a placeholder for the highest letter count, and the new array with longest strings (done)
// 2. go through the original array and go through each string value to take note of the letter count (done)
// 2a. compare with previous variable for highest letter count and take the highest count (done)
// 3. go through the array again and pick out the strings with the highest letter count

function allLongestStrings(inputArray) {
  let count = 0;
  let newArray = []
  for (let i = 0; i < inputArray.length; i++) {
    let counter = 0
    while (counter < inputArray[i].length) {
      counter++
    }
    if (counter > count) {
      count = counter
    }
  }

  for (let i = 0; i < inputArray.length; i++) {
    let counter = 0
    while (counter < inputArray[i].length) {
      counter++
    }
    if (counter === count) {
      newArray.push(inputArray[i])
    }
  }
  return newArray
}
