//notes
//sum every other number accordingly


//Pseudocode
// Declare two variables to act as team 1 and team 2
//go through the array and add accordingly
//return new array with added values

function alternatingSums(a) {
  let team1 = 0;
  let team2 = 0;
  newArray = []

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      team1 = team1 + a[i]
    } else {
      team2 = team2 + a[i]
    }

    if (i === a.length - 1) {
      newArray.push(team1)
      newArray.push(team2)
    }
  }

  return newArray;

}
