function mapLetters(word) {
  // define a placeholder/result pbject
  // transform the input string into array
  // triverse through the array
  // if the letter is not in object, store t into the object as a key, store its index as the value inside the array
  // if the letter is not in the object, store it as a new key, assign its index as the value inside the array
  // use array.push() to add values
  // return the result object

  let resultObject = {};
  let wordArray = word.split('');
  for (let i = 0; i < wordArray.length; i++) {
    let letter = wordArray[i];
    if (letter in resultObject) {
      resultObject[letter].push(i);
    } else {
      resultObject[letter] = [i];
    }
  }
  return resultObject;
}

// Test function


// Test cases
console.log(mapLetters("dodo"), "Should be { d: [0, 2], o: [1, 3] }")
console.log(mapLetters("froggy"), "Should be { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }")
console.log(mapLetters("grapes"), "Should be { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }")

