// const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

// artists.forEach(artist => {
//   console.log(artist + ' is one of my favorite artists.');
// });

// const numbers = [1, 2, 3, 4, 5];

// const squareNumbers = numbers.map(number => {
//   return number * number;
// });

// console.log(squareNumbers);

// const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

// const onlyNumbers = things.filter(thing => {
//   return typeof thing === 'number';
// });

// console.log(onlyNumbers);

// const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// const foundAnimal = animals.findIndex((num) => {num == 'elephant'})

// const startsWithS = animals.findIndex((num) => {
//   return num[0] == 's'
// })

// console.log(startsWithS);

// const newNumbers = [1, 3, 5, 7];

// const newSum = newNumbers.reduce((accumulator, currentValue) => {
//   console.log('The value of accumulator: ', accumulator);
//   console.log('The value of currentValue: ', currentValue);
//   return accumulator + currentValue;
// }, 10)

// console.log(newSum);

// const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// // Something is missing in the method call below

// console.log(words.some(word => {
//   return word.length < 6;
// }));

// // Use filter to create a new array
// const interestingWords = words.filter((word) => {return word.length > 5});


// // Make sure to uncomment the code below and fix the incorrect code before running it

// console.log(interestingWords.every((word) => {return word.length > 5}));
// const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

// const nums = [1, 50, 75, 200, 350, 525, 1000];

// //  Choose a method that will return undefined
// cities.forEach(city => console.log('Have you visited ' + city + '?'));

// // Choose a method that will return a new array
// const longCities = cities.filter(city => city.length > 7);

// // Choose a method that will return a single value
// const word = cities.reduce((acc, currVal) => {
//   return acc + currVal[0]
// }, "C");

// console.log(word)

// // Choose a method that will return a new array
// const smallerNums = nums.map(num => num - 5);

// // Choose a method that will return a boolean value
// nums.some(num => num < 0);

// let spaceship = {
//   homePlanet: 'Earth',
//   color: 'silver',
//   'Fuel Type': 'Turbo Fuel',
//   numCrew: 5,
//   flightPath: ['Venus', 'Mars', 'Saturn']
// };

// // Write your code below
// let crewCount = spaceship.numCrew
// let planetArray = spaceship.flightPath

// let spaceship = {
//   'Fuel Type' : 'Turbo Fuel',
//   'Active Mission' : true,
//   homePlanet : 'Earth', 
//   numCrew: 5
//  };

// let propName =  'Active Mission';

// // Write your code below
// let isActive = spaceship['Active Mission']
// console.log(spaceship['Active Mission'])

// let spaceship = {
//   'Fuel Type' : 'Turbo Fuel',
//   homePlanet : 'Earth',
//   color: 'silver',
//   'Secret Mission' : 'Discover life outside of Earth.'
// };

// // Write your code below
// spaceship.color = 'glorious gold'
// spaceship.numEngines = 5
// delete spaceship['Secret Mission']


// let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// // Write your code below
// let alienShip = {
//   retreat() {
//     console.log(retreatMessage)
//   },
//   takeOff() {
//     console.log('Spim... Borp... Glix... Blastoff!')
//   }
// };

// alienShip.retreat()
// alienShip.takeOff()


// let spaceship = {
//   passengers: null,
//   telescope: {
//     yearBuilt: 2018,
//     model: "91031-XLT",
//     focalLength: 2032 
//   },
//   crew: {
//     captain: { 
//       name: 'Sandra', 
//       degree: 'Computer Engineering', 
//       encourageTeam() { console.log('We got this!') },
//      'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
//   },
//   engine: {
//     model: "Nimbus2000"
//   },
//   nanoelectronics: {
//     computer: {
//       terabytes: 100,
//       monitors: "HD"
//     },
//     backup: {
//       battery: "Lithium",
//       terabytes: 50
//     }
//   }
// }; 

// const capFave = spaceship.crew.captain['favorite foods'][0]
// spaceship.passengers = [{memberOne: 'Cute Cat', memberTwo: 'Brave Doggo'}]

// let firstPassenger = spaceship.passengers[0]


// let spaceship = {
//   'Fuel Type' : 'Turbo Fuel',
//   homePlanet : 'Earth'
// };

// // Write your code below

// let greenEnergy = obj => {
//   obj['Fuel Type'] = 'avocado oil';
// }

// let remotelyDisable = obj => {
//   obj.disabled = true;
// }

// greenEnergy(spaceship);

// remotelyDisable(spaceship);

// console.log(spaceship)


// let spaceship = {
//   crew: {
//   captain: { 
//       name: 'Lily', 
//       degree: 'Computer Engineering', 
//       cheerTeam() { console.log('You got this!') } 
//       },
//   'chief officer': { 
//       name: 'Dan', 
//       degree: 'Aerospace Engineering', 
//       agree() { console.log('I agree, captain!') } 
//       },
//   medic: { 
//       name: 'Clementine', 
//       degree: 'Physics', 
//       announce() { console.log(`Jets on!`) } },
//   translator: {
//       name: 'Shauna', 
//       degree: 'Conservation Science', 
//       powerFuel() { console.log('The tank is full!') } 
//       }
//   }
// }; 

// // Write your code below

// for (let crewMember in spaceship.crew) {
// console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
// };

// for (let crewMember in spaceship.crew) {
// console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
// };

// Advanced Objects Introduction

// const robot = {
//   model: '1E78V2',
//   energyLevel: 100,
//   provideInfo() {
//     return `I am ${this.model} and my current energy level is ${this.energyLevel}`
//   }
// };

// console.log(robot.provideInfo());


// const robot = {
//   energyLevel: 100,
//   checkEnergy() {
//     console.log(`Energy is currently at ${this.energyLevel}%.`)
//   }
// }

// robot.checkEnergy();

// const robot = {
//   _energyLevel: 100,
//   recharge(){
//     this._energyLevel += 30;
//     console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
//   }
// };

// robot._energyLevel = 'high'

// robot.recharge()

// const robot = {
//   _model: '1E78V2',
//   _energyLevel: 100,
//   get energyLevel() {
//     if(typeof this._energyLevel === 'number'){
//       return `My current energy level is ${this._energyLevel}`
//     }
//   }
// };

// const robot = {
//   _model: '1E78V2',
//   _energyLevel: 100,
//   get energyLevel(){
//     if(typeof this._energyLevel === 'number') {
//       return 'My current energy level is ' + this._energyLevel
//     } else {
//       return "System malfunction: cannot retrieve energy level"
//     }
//   }
// };

// console.log(robot.energyLevel);

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if(num >= 0 && typeof num === 'number'){
      return this._numOfSensors = num
    }
    else
      console.log('Pass in a number that is greater than or equal to 0')
  } 
};

robot.numOfSensors = 100
console.log(robot.numOfSensors)

const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep(){
      console.log('Beep Boop')
    }
  }
}

const tinCan = robotFactory('P-500', true)
tinCan.beep()


function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)


const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot;
console.log(functionality.beep())


const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:

const robotEntries = Object.entries(robot);
console.log(robotEntries);

// Declare newRobot below this line:

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)
console.log(newRobot);


class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console


class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
  }
}


class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon("Curry", "Cardiovascular")

const surgeonDurant = new Surgeon('Durant', 'Orthopedics')


class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name
  }

  get department() {
    return this._department
  }

  get remainingVacationDays() {
    return this._remainingVacationDays
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays  -= daysOff
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');


class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name
  }

  get department() {
    return this._department
  }

  get remainingVacationDays() {
    return this._remainingVacationDays
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays  -= daysOff
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurry.name)
surgeonCurry.takeVacationDays(3)
console.log(surgeonCurry.remainingVacationDays)


class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff
  }
}


class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}


class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    super(remainingVacationDays);
    this._certifications = certifications
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics'])

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
 constructor(name, certifications) {
   super(name);
   this._certifications = certifications;
 } 
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5)
console.log(nurseOlynyk.remainingVacationDays)

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 

  get certifications() {
    return this._certifications
  }

  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics')
console.log(nurseOlynyk.certifications)


class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  static generatePassword() {
    return Math.floor(Math.random() * 10000)
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);


var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;

// Set the variable below to a number
let esFivePercentageSupport = 98.87;

// Set the variable below to a number
let esSixTemplateLiterals = 95.23;


const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();

let Airplane = {};

Airplane.availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500
 }
];

export default Airplane;

let Airplane = {};

Airplane.availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800
   }, 
   {name: 'SkyJet',
    fuelCapacity: 500
   }
  ];
  
  export default Airplane;
  
  import Airplane from './airplane';
  
  function displayFuelCapacity() {
    Airplane.availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
    });
  }
  
  displayFuelCapacity();

  

  const inventory = {
    sunglasses: 0,
    pants: 1088,
    bags: 1344
  };
  
  // Write your code below:
  function myExecutor(resolve, reject) {
    if (inventory.sunglasses > 0) {
      resolve('Sunglasses order processed.');
    }
    else {
      reject('That item is sold out.');
    }
  }
  
  function orderSunglasses() {
    return new Promise(myExecutor);
  }
  
  const orderPromise = orderSunglasses();
  console.log(orderPromise);

  console.log("This is the first line of code in app.js.");
  // Keep the line above as the first line of code
  // Write your code here:
  const usingSTO = () => {
    console.log("Hello Jules! You are doing a great job!")
  }
  
  setTimeout(usingSTO, 60)
  
  // Keep the line below as the last line of code:
  console.log("This is the last line of code in app.js.");


  const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:


const number = 1

const handleSuccess = (resolvedV) => {
  console.log(resolvedV);
}

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
}

checkInventory(order).then(handleSuccess, handleFailure)


const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:

checkInventory(order).then(handleSuccess).catch(handleFailure);


const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 9], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return processPayment(resolvedValueArray);
 
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});


const fs = require('fs');
const promisifiedReadfile = require('./promisifiedReadfile');
      
// Here we use fs.readfile() and callback functions:
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile('./file2.txt',  'utf-8', (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  });
});

// Here we use native promises with our "promisified" version of readfile:
let firstSentence
promisifiedReadfile('./file.txt', 'utf-8')
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile('./file2.txt', 'utf-8')
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  })
  .catch((err) => {console.log(err)});

// Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
async function readFiles() {
  let firstSentence = await promisifiedReadfile('./file.txt', 'utf-8')
  let secondSentence = await promisifiedReadfile('./file2.txt', 'utf-8')
  console.log(firstSentence, secondSentence)
}
readFiles()


function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  })
}

withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
})

// Write your code below:
async function withAsync(num){
  if (num === 0){
      return 'zero';
    } else {
      return 'not zero';
    }
}

withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})



const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:

const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.'); 
const  checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject);


  const fs = require('fs');
const promisifiedReadfile = require('./promisifiedReadfile');
      
// Here we use fs.readfile() and callback functions:
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile('./file2.txt',  'utf-8', (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  });
});

// Here we use native promises with our "promisified" version of readfile:
let firstSentence
promisifiedReadfile('./file.txt', 'utf-8')
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile('./file2.txt', 'utf-8')
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  })
  .catch((err) => {console.log(err)});

// Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
async function readFiles() {
  let firstSentence = await promisifiedReadfile('./file.txt', 'utf-8')
  let secondSentence = await promisifiedReadfile('./file2.txt', 'utf-8')
  console.log(firstSentence, secondSentence)
}
readFiles()


/* ASYNC module */

function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  })
}

withConstructor(1)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
})

// Write your code below:

async function withAsync(num){
  if (num === 0){
    return 'zero';
  }
  else {
    return 'not zero';
  }
}

// Leave this commented out until step 3:

withAsync(00)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})

// const brainstormDinner = require('./library.js')


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  })
}


// async/await version:
async function announceDinner() {
  // Write your code below:
  let resolvedValue = await brainstormDinner();
  console.log(`I'm going to make ${resolvedValue} for dinner.`)
  
}

announceDinner();

library.js file:
const brainstormDinner = () => {
  return new Promise((resolve, reject) => {
  console.log(`I have to decide what's for dinner...`)
  setTimeout(() => {
    console.log('Should I make salad...?')
    setTimeout(() => {
      console.log('Should I make ramen...?')
      setTimeout(() => {
        console.log('Should I make eggs...?')
        setTimeout(() => {
          console.log('Should I make chicken...?')
          resolve('beans')
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
})
}

module.exports = brainstormDinner

const shopForBeans = require('./library.js');

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code below:

async function makeBeans() {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans();

const cookBeanSouffle = require('./library.js');

// Write your code below:

async function hostDinnerParty() {
  try {
    let dinner = await cookBeanSouffle();
    console.log(`${dinner} is served!`)
  }
  catch (error) {
    console.log(error);
    console.log('Ordering a pizza!')
  }
}

hostDinnerParty();

//This function returns true 50% of the time.
let randomSuccess = () => {
  let num = Math.random();
  if (num < .5 ){
    return true;
  } else {
    return false;
  }
 };
 
 //This function returns a promise that resolves half of the time and rejects half of the time
 let cookBeanSouffle = () => {
  return new Promise((resolve, reject) => {
    console.log('Fingers crossed... Putting the Bean Souffle in the oven');
    setTimeout(()=>{
      let success = randomSuccess();
      if(success){
        resolve('Bean Souffle');
      } else {
        reject('Dinner is ruined!');
      }
    }, 1000);
  })
 };
 
 module.exports = cookBeanSouffle;


 let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:

async function serveDinner() {
  let vegetablePromise = steamBroccoli();
  let starchPromise = cookRice();
  let proteinPromise = bakeChicken();
  let sidePromise = cookBeans();
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}

serveDinner();

let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:

async function serveDinnerAgain() {
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
let vegetable = foodArray[0];
let starch =  foodArray[1];
let protein =  foodArray[2];
let side =  foodArray[3];

console.log(`Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`);;
}

serveDinnerAgain();

console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');


const xhr = new XMLHttpRequest();
const url = "https://api-to-call.com/endpoint";
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
 } 
}

xhr.open('GET', url);
xhr.send();


// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');



// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery;
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
  // Event handler code
  if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response)
}
}
xhr.open('GET', endpoint);
xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);


// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
const additionalParams = '&topics=';

// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;
  
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);


const xhr = new XMLHttpRequest;
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
}

xhr.open('POST', url);
xhr.send(data);


// Information to reach API
const apiKey = 'dc9060c3045b4d5381299e0b8ab31455';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response);
}
  }
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
xhr.setRequestHeader('apikey', apiKey);
xhr.send(data);
}




// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);


fetch('https://api-to-call.com/endpoint')
.then(response => {
  if(response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
},
networkError => {
  console.log(networkError.message);
})
.then(jsonResponse => {
  return jsonResponse;
});


const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';
// Information to reach API


// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  fetch(endpoint, {cache: 'no-cache'})
  .then(response => {
    if(response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  },
    (networkError => {
    console.log(networkError.message)
  }))

};

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);



// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  fetch(endpoint, {cache: 'no-cache'}).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  })
  .then(jsonResponse => {
    renderResponse(jsonResponse);
  })
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);


fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: "200"})
}).then(response => {
  if(response.ok){
	  return response.json();  
  }
	throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  console.log(jsonResponse);
})


// Information to reach API
const apiKey = 'dc9060c3045b4d5381299e0b8ab31455';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination:urlToShorten});
  fetch(url, {
    method: 'POST',
    headers: {
  'Content-type': 'application/json',
  'apikey': apiKey
},
body: data
  });
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);


// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`
  try {
    const response = await fetch(endpoint, {cache: 'no-cache'});
    if(response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch(error) {
    console.log(error);
  }
}
// Code goes here


// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);



let availableAirplanes = [{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants']
 }];
 
 let flightRequirements = {
   requiredStaff: 4,
 };
 
 function meetsStaffRequirements(availableStaff, requiredStaff) {
   if(availableStaff.length >= requiredStaff) {
     return true
   }
   else {
     return false
   }
 }
 
 export { availableAirplanes, flightRequirements, meetsStaffRequirements};


 import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}


displayStaffStatus();


export let availableAirplanes = [{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300,
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants'],
  maxSpeed: 800,
  minSpeed: 200
 }];
 
 export let flightRequirements = {
   requiredStaff: 4,
   requiredSpeedRange: 700,
 };
 
 export function meetsStaffRequirements(availableStaff, requiredStaff) {
   if(availableStaff.length >= requiredStaff) {
     return true
   }
   else {
     return false
   }
 }
 
 export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
   let range = maxSpeed - minSpeed;
   if(range > requiredSpeedRange) {
     return true;
   }
   else {
     return false;
   }
 }
 
 import { availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements } from './airplane';

 function displayStaffStatus() {
   availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
   });
 }
 
 function displaySpeedRangeStatus() {
   availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
   });
 }
 
 
 displayStaffStatus();
 displaySpeedRangeStatus();

 
 let availableAirplanes = [{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300,
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants'],
  maxSpeed: 800,
  minSpeed: 200
 }];
 
 let flightRequirements = {
   requiredStaff: 4,
   requiredSpeedRange: 700,
 };
 
 function meetsStaffRequirements(availableStaff, requiredStaff) {
   if(availableStaff.length >= requiredStaff) {
     return true
   }
   else {
     return false
   }
 }
 
 function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
   let range = maxSpeed - minSpeed;
   if(range > requiredSpeedRange) {
     return true;
   }
   else {
     return false;
   }
 }
 
 export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs };








