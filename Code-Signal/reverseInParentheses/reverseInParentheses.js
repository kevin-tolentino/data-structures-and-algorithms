//notes
// find a way to locate the parentheses
// possibly write declare a helper function for when detecting parentheses with current index in parentheses
// make a for loop to go through the string
// recording the index for each parentheses
// turn the string into an array with each character as an index
// if no other left bracket and the index is less than first closing right bracket...
// make a new string to return
//2 arrays to store left and right brackets


//pseudocode
//1. declare a placeholder for the return string
//1a. declare an array with each index as a character of inputString
//2. go through the string's characters and check when a parentheses occurs
//2a. if the parentheses occurs, find where it starts and ends and make a function that will be called at the end parentheses





function reverseInParentheses(inputString) {
  let returnString = '';
  let leftIndex = 0;
  let rightIndex = 0;
  const inputArray = []
  const leftBracketArray = [];
  const rightBracketArray = [];

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === '(') {
      leftBracketArray.push(i)
    }
  }


}
