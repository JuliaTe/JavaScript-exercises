function getShiftedString(s, leftShifts, rightShifts) {
  // Write your code here
  // LEFT SHIFT:
  // convert string to array
  // the first string will be the sliced portion leftShift slice(0, leftShift)
  // the second string will be the remaining portion
  // after that append teh first string to the second
// > leftSh = arr.slice(0,2)
// > leftSh = arr.slice(2)

  // Right shifts
  // Slice last n elements
//   > rightS = arr.slice(-2)
// slice the remainder
// append last n sliced elements to the the remainder
// arr1.concat(arr2).join('')

  let stringifiedArray = s.split('');
  let leftSlicedString = stringifiedArray.slice(0, leftShifts);
  let leftRemainderString = stringifiedArray.slice(leftShifts);
  let leftShiftedString = leftRemainderString.concat(leftSlicedString);

  let rightSlicedString = leftShiftedString.slice(-rightShifts);
  let rightRemainderString = leftShiftedString.slice(0, stringifiedArray.length - rightShifts);
  let rightShiftedString = rightSlicedString.concat(rightRemainderString)
  return rightShiftedString.join('');
  

}

getShiftedString('abcdefg', 10, 8)