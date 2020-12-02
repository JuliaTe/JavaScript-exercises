//**The next problem is intentionally written this way. It is not factual */

//3) Watered Down Wine

  /*
  You are receiving casks of wine. It is your job to weigh the wine to know if it is watered down or not. 
  Different kinds of wine will have different expected weights. 
  You will have to calculate the expected weight of the wine and compare it to a range. If it is within the range, the wine is not watered down. If it is too heavy, it is watered down. If it too light, it has been mislabled.


  */ 

//****don't edit the assert function */
//A
function assertWateredDownWines(actual, expected) {
  return actual === expected;
}


  function wateredDownWines(wineVol, minKG, maxKG) {

  }

  //A) Given a wine volume in liters, and a min and max in kilograms, return a string of the wine in kg weight if it is within the min kg and max kg, or 'rejected' if it is not.


/*
  additional Info:
  Water has a specific gravity of 1.0, which means that 1 liter of water weighs 1 kilogram.

  If something has a specific gravity of 1.5 then that means that 1 liter would weigh 1.5 kilograms.

  Because alcohol is less dense than water, wine has a gravity of around .98.
 */

var actual1 = wateredDownWines(100, 97, 99); 
var expected1 = '98 kg';

var actual2 = wateredDownWines(120, 100, 102);
var expected2 = 'rejected';

var actual3 = wateredDownWines(120, 116, 118); 
var expected3 =  '117.6 kg';

// console.log(assertWateredDownWines(actual1, expected1));
// console.log(assertWateredDownWines(actual2, expected2));
// console.log(assertWateredDownWines(actual3, expected3));


//-----------------------

//Watered Down Wines B

  var cases = [
    {liters: 170, minKG: 150, maxKG: 160, gravity: .97},
    {liters: 180, minKG: 175, maxKG: 179, gravity: .96},
    {liters: 200, minKG: 197, maxKG: 199, gravity: .99},
    {liters: 130, minKG: 122, maxKG: 125, gravity: .98},
  ]

  /*
  You are given an array of wine shipments in liters.
    Return an array of booleans.
      - If the  weigths is within the given range, it is a true case
      - If the weight is not within the range, it is a false case
    Use what you read about the weight of wine versus water above to caculate if the weight is within the range.
   */

  function wateredDownWinesB(wines) {
    
  }

console.log(wateredDownWinesB(cases)) 
  //result =>: 
  /* 
  [false, false, true, false]
  */

