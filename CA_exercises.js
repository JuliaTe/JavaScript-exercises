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









