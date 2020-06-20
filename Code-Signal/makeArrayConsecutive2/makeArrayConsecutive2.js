//make placeholder for area set equal to 1 init.
//iterate through the input n
// get area by adding existing area plus i multiplied by 4 subtracted by 4 to account for duplicate sides
//return area when iteration is done

function shapeArea(n) {
  let area = 1
  for (let i = 1; i <= n; i++) {
    area = area + i * 4 - 4;
  }
  return area
}
