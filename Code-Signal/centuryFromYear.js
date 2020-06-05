//prompt
// Given a year, return the century it is in.The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

//   Example

// For year = 1905, the output should be
// centuryFromYear(year) = 20;
// For year = 1700, the output should be
// centuryFromYear(year) = 17.
// Input / Output

// [execution time limit]4 seconds(js)

// [input] integer year

// A positive integer, designating the year.

// Guaranteed constraints:
// 1 ≤ year ≤ 2005.

// [output] integer

// The number of the century the year is in.

//solution

// divide argument value by 100
// if number is less or equal to 1, return 1st century
// use remainder arithmetic to see if returned number is whole number, return century
// make any decimal number into an integer
// add the result of that integer + 1
// return for century

function centuryFromYear(year) {
  let century;

  century = year / 100;

  if (century <= 1) return 1
  if (century % 1 === 0) return century
  century = Math.floor(century)
  century = century + 1;

  return century;

}
