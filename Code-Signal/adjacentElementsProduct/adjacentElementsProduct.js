//notes
//two variable to declare
//conditional within the loop to check what to keep
//return largest product

//pseudocode
//define a placeholder for the initialProduct and calcProduct
// go through each number in the array until the length - 2
// compare products and take whichever is bigger

function adjacentElementsProduct(inputArray) {
  let initialProduct = inputArray[0] * inputArray[1];
  let calcProduct;
  for (let i = 0; i <= inputArray.length - 2; i++) {
    if (i > 0) {
      initialProduct = calcProduct
    }
    calcProduct = inputArray[i] * inputArray[i + 1]
    if (initialProduct >= calcProduct) {
      calcProduct = initialProduct
    }
    if (i === inputArray.length - 2) return calcProduct

  }
}
