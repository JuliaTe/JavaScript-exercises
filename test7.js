// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual word into individual letters.
  lettersArray = word.split('')
  // Count the instances of each letter
  let countsObject = {}
  for (i in lettersArray) {
      if (word[i] in countsObject) {
        countsObject[lettersArray[i]] += 1
      } else {
        countsObject[lettersArray[i]] = 1
      }
  }
  // Iterate all the counts and find the highest

  let maxCount = 0
  for (key in countsObject) {
    if (countsObject[key] > maxCount) {
      maxCount = countsObject[key]
    }
  }
  // Return this word's max repeat count
  return maxCount
}

function findFirstWordWithMostRepeatedChars(text) {
  let maxRepeatCountOverall = 0;
  let wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  let words = text.split(" ")
  // For each word...
  for (let i = 0; i < words.length; i++) {
        let repeatCountForWord = findMaxRepeatCountInWord(words[i])
    if (repeatCountForWord > maxRepeatCountOverall) {
      maxRepeatCountOverall = repeatCountForWord
      wordWithMaxRepeatCount = words[i]
      console.log(wordWithMaxRepeatCount)
    }
  }
  // for (i in words) {
  //   let repeatCountForWord = findMaxRepeatCountInWord(words[i])
  //   if (repeatCountForWord > maxRepeatCountOverall) {
  //     maxRepeatCountOverall = repeatCountForWord
  //     wordWithMaxRepeatCount = words[i]
  //   }
  // }
  return wordWithMaxRepeatCount
}

findFirstWordWithMostRepeatedChars('litttle kittens are the cutest')

// ASSERTION FUNCTION(S) TO BE USED

// TESTS CASES