function shiftString(stringToShift , leftShift, rightShift){
  let shiftNumber = Math.abs(rightShift - leftShift) % stringToShift.length;
  console.log(shiftNumber)
  if(stringToShift.length === 1){
      console.log("only 1 character")
      return stringToShift
  }
 
  if(rightShift > leftShift){
      console.log("right shifting")
      shiftNumber = stringToShift.length - shiftNumber
      console.log(shiftNumber)
      return stringToShift.substring(shiftNumber,stringToShift.length) + stringToShift.substring(0,shiftNumber)
  }else if(leftShift > rightShift){
      console.log("left shifting")
      return stringToShift.substring(shiftNumber , stringToShift.length) + stringToShift.substring(0,shiftNumber)
  }else {
      return stringToShift;
  }

}


console.log(shiftString("isaiah", 7 , 2))