function highScoringPlayers(players, points, rebounds) {
  // define empty result array
  // iterate through players array ob objects
  // if score is higher than 20, store the name into the array
  // return array

  let result = [];
  for (let i = 0; i < players.length; i++) {
    let player = players[i];
    if (player['pointsPerGame'] >= points && player['reboundsPerGame'] > rebounds) {
      result.push(player['name']);
    }
  }
  return result;
}

// Test function
function assertArrayEquals(expected, actual, testName) {
  let equalLength = expected.length === actual.length;

  let equalValue = true;
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i]) {
      equalValue = false;
      break;
    }
  }

  if (equalValue && equalLength) {
    console.log('PASSED');
  } else {
    console.log(`FAILED ${testName}. Expected ${expected}, got ${actual}`);
  }
}

// Test cases
let input1 = [{
  name: "Dwyane Wade",
  pointsPerGame: 23.7,
  assistsPerGame: 5.8,
  reboundsPerGame: 4.8
}, {
  name: "Kyle Lowry",
  pointsPerGame: 13.5,
  assistsPerGame: 5.7,
  reboundsPerGame: 4.0
}, {
  name: "LeBron James",
  pointsPerGame: 27.2,
  assistsPerGame: 6.9,
  reboundsPerGame: 7.2
}, {
  name: "Paul George",
  pointsPerGame: 16.9,
  assistsPerGame: 3.1,
  reboundsPerGame: 6.2
}, {
  name: "Carmelo Anthony",
  pointsPerGame: 24.9,
  assistsPerGame: 3.2,
  reboundsPerGame: 6.6
}, {
  name: "Stephen Curry",
  pointsPerGame: 22.4,
  assistsPerGame: 6.9,
  reboundsPerGame: 4.3
}, {
  name: "Russell Westbrook",
  pointsPerGame: 21.5,
  assistsPerGame: 2.6,
  reboundsPerGame: 5.6
}, {
  name: "Kobe Bryant",
  pointsPerGame: 25.0,
  assistsPerGame: 4.7,
  reboundsPerGame: 5.2
}, {
  name: "Kevin Durant",
  pointsPerGame: 25.6,
  assistsPerGame: 2.9,
  reboundsPerGame: 5.6
}, {
  name: "Kawhi Leonard",
  pointsPerGame: 14.3,
  assistsPerGame: 2.0,
  reboundsPerGame: 6.3
}
]

let expected1 = ["Dwyane Wade", "LeBron James", "Carmelo Anthony", "Stephen Curry", "Russell Westbrook", "Kobe Bryant", "Kevin Durant"];
let actual1 = highScoringPlayers(input1, 20, 3);
assertArrayEquals(expected1, actual1, "Should return array of players who scored over 20 points");

let expected2 = ["LeBron James"];
let points2 = 27;
let rebounds2 = 5;
let actual2 = highScoringPlayers(input1, points2 , rebounds2);
assertArrayEquals(expected2, actual2, "Should display a correct player");