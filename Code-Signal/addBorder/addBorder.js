//Notes
//- Decide where to draw a border of asterisks
//- place an asterisk on the left and right sides of a character string
// - push asterisk of same character length to top and bottom

// Pseudocode
// - go through array and concat and asterisk to the left and right of each string word
// - once at the last string, unshift and push top and bottom borders to the array for border


function addBorder(picture) { // picture = [*a*,
  //           b]
  let i = 0;
  while (i < picture.length) { // 1
    picture[i] = `*${picture[i]}*` // b => *b*
    if (i === picture.length - 1) { //
      let characterCount = picture[i].length // = 3
      let border = ""; //
      while (characterCount) { // 0
        border = border + '*'; // "***"
        characterCount--
      }
      picture.unshift(border); //  picture = ["***", "*a*", "b"]
      picture.push(border) // picture = ["***", "*a*", "*b*", "***"]
      return picture
    }
    i++
  }
}



//Top Solution by Jackzo found after solving problem v
// function addBorder(picture) {
//     var width = picture[0].length + 2;
//     return [
//         '*'.repeat(width),
//         ...picture.map(line => `*${line}*`),
//         '*'.repeat(width)
//     ];
// }
