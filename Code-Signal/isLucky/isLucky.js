//Notes
//Change the number into a string in some way
//section off the string per digit
// find a way to split the digits first half and second half
//add the first half and second half together
//compare the two halves


//Pseudocode
//1. create placeholder for both halves (two arrays) and two number placeholders for sums
//2. Change the number into a string
//3. Find out the length of the string and determine the halves
//4. Push first half of digits into first array and second half in second
//5. Go through each string index in the arrays, convert back to integer, and add to respective sum placeholders
//6. compare the two numbers and return true if numbers match, false if numbers do not match


function isLucky(n) {
  const arr1 = [];
  const arr2 = [];

  let sum1 = 0;
  let sum2 = 0;

  const number = n.toString()

  for (let i = 0; i < number.length; i++) {
    if (i < number.length / 2) {
      arr1.push(number[i])
    } else {
      arr2.push(number[i])
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    sum1 = sum1 + parseInt(arr1[i], 10)
    sum2 = sum2 + parseInt(arr2[i], 10)
  }

  return (sum1 === sum2) ? true : false

}
