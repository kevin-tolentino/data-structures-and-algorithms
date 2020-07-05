//notes
//run a loop once to check if the sequence is increasing
//define a counter that will increment if the current nummber is greater than the previous number in sequence
// if counter is greater than 1, return false, else return true
//no repeats

//check to see if you can pop current index off



//pseudocode
//1. make a placeholder that will act as our counter (done)
//2. go through the array and compare current integer with integer right before it; start at second index (done)
    //2a. if previous number is greater than or equal current, increment counter by 1
//3. check for duplicate numbers
//4.. if counter is greater than 1 and duplicateCheck is false, return false, else return true

function almostIncreasingSequence(sequence) {
let counter = 0;

    for (let i=0; i < sequence.length; i++) {
      if (sequence[i] <= sequence[i-1]) {
        counter++;
        if (counter > 1) return false;
        if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false;
      }

    }
    return true;

}
