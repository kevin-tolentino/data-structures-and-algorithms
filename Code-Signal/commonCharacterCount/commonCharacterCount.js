//notes
// create an placeholder for number of common characters
// make an object that will map out properties for the string that's longest
//compare against the shorter string through for-loop



//pseudocode
//1. create a placeholder for the number of common characters and make an array for each string with each index as each character of the string
//2. create a hashmap Map object to keep track
//3. go through each index of first array and map each character to a key in the hash, increment by 1 for duplicate characters
//4. go through each index of second array and chech if hash has character and if character is greater than 0, if so, deduct character in hash and increment characterCount var
//5. return characterCount


function commonCharacterCount(s1, s2) {
  let characterCount = 0

  let s1Array = s1.split("");
  let s2Array = s2.split("")

  let hash = new Map();

  for (let character of s1Array) {
    hash.has(character) ? hash.set(character, hash.get(character) + 1) : hash.set(character, 1)

    console.log(hash)
  }

  for (let character of s2Array) {
    if (hash.has(character) && hash.get(character) > 0) {
      hash.set(character, hash.get(character) - 1);
      characterCount++
    }
  }

  return characterCount

  // attempt with an object
  // if (s1 >= s2) {
  //     longerString = s1;
  //     shorterString = s2
  // } else {
  //     longerString = s2;
  //     shorterString = s1;
  // }

  // const object = {};

  // let iterator = 0;

  // while (iterator < longerString.length){
  //     object[longerString[iterator]] = longerString[iterator]
  //     iterator++
  // }

  // iterator = 0;

  // while (iterator < shorterString.length){
  //     if (object[shorterString[iterator]]){
  //         characterCount = characterCount + 1
  //     }
  //     iterator++
  // }
  // console.log('shorter', shorterString)
  // console.log('longer', longerString)
  // console.log(object)
  // console.log(characterCount)

  // return characterCount

}
