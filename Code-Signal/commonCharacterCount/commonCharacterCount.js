//notes
// create an placeholder for number of common characters
// make an object that will map out properties for the string that's longest
//compare against the shorter string through for-loop



//pseudocode
//1. create a placeholder for the number of common characters and longer and shorter strings
//2. determine which is the longer string and which is the shorter string
//2a. assign values to each placeholder for shorter and longer string
//3. create an empty object to map each string character of longer string to object
//3a. map through longer string
//4. compare short string indices against object key values


function commonCharacterCount(s1, s2) {
  let characterCount = 0
  let hash = new Map();

  let s1Array = s1.split("");
  let s2Array = s2.split("")

  for (let character of s1Array) {
    hash.has(characterCount) ? hash.set(character, hash.get(character) + 1) : hash.set(character, 1)
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


//trace
