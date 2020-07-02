//notes
//run a loop once to check if the sequence is increasing
//define a counter that will increment if the current nummber is greater than the previous number in sequence
// if counter is greater than 1, return false, else return true
//no repeats

//check to see if you can pop current index off



//pseudocode
//1. make a placeholder that will act as our counter (done)
//2. go through the array and compare current integer with integer right before it; start at second index (done)
//2a. if previous number is greater than current, increment counter by 1
//3. check for duplicate numbers
//4.. if counter is greater than 1 and duplicateCheck is false, return false, else return true

function almostIncreasingSequence(sequence) {
  let counter = 0;
  let duplicateCheck = false;
  let minimumCounter = 0;
  let currentMin = sequence[0];



  for (let i = 0; i < sequence.length - 1; i++) {

    if (sequence[i] > sequence[i + 1]) {
      counter = counter + 1;
    }
  }
  console.log(counter)

  if (counter < 2) {
    return true
  } else {
    return false
  }

  // let currentValue;

  // for (let i = 0; i < sequence.length; i++ ){
  //     currentValue = sequence[i]
  //     for (let j = i + 1; j < sequence.length; j++){
  //         if (currentValue === sequence[j]){
  //             duplicateCheck = true
  //         }
  //     }
  // }

  // if (counter > 1){
  // for (let i = 0; i <  sequence.length-1; i++){

  //   if (sequence[i] > sequence[i + 1]){
  //         minimumCounter = minimumCounter + 1
  //     }
  // }

  // }
  // console.log(minimumCounter)

  // console.log(duplicateCheck)

  // if (counter > 1 || duplicateCheck || minimumCounter > 0) {
  //     return false
  // } else {
  //     return true
  // }

}
