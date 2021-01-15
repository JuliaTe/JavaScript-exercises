function countVowels(str) {
  //store vowels in an array
  //split str into array of letters
  // create a counter
  // iterate through the str, increment counter for each vowel

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let strArray = str.toLowerCase().split('');
  let counter = 0;
  for (let i = 0; i < strArray.length; i++) {
    console.log(strArray[i]);
    for (let j = 0; j < vowels.length; j++) {
      if (strArray[i] === vowels[j]){
        counter += 1;
      }
    }
  }
  return counter;
}