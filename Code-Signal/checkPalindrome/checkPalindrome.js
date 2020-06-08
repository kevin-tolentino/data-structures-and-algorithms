//remove any spaces between words inside of string
// make a placeholder to hold a second word that's reversed first word
// return true if they equal each other

function checkPalindrome(inputString) {
  inputString = inputString.replace(' ', '');
  let stringTwo = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    stringTwo = stringTwo + inputString[i];
  }

  return inputString === stringTwo;
}
