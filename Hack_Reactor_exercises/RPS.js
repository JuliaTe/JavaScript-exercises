function calculateScore(games) {
  // define players
  // define winning combinations for player 1
  // define winning combinations for player 2
  // define number 0f wins for player 1
  // define number of wins for player 2
  // iterate through games array
  // if game is from winning combinations of player 1, increment number of wins for player 1,
  // if game is from winning combinations of player 2, increment number of wins for player 2
  // compare player 1 and 2 number of wins
  // return the player who has more wins
  let player1 = 'Abigail';
  let player2 = 'Benson';
  let winning1 = [['P', 'R'], ['R', 'S'], ['S', 'P']];
  let winning2 = [['R', 'P'], ['S', 'R'], ['P', 'S']];
  let numberOfWins1 = 0;
  let numberOfWins2 = 0;
  for (let i = 0; i < games.length; i++) {
    let game = games[i];
    if ((game[0] === 'P' && game[1] === 'R') || (game[0] === 'R' && game[1] === 'S') || (game[0] === 'S' && game[1] === 'P')) {
      numberOfWins1 += 1
    } else if ((game[0] === 'R' && game[1] === 'P') || (game[0] === 'S' && game[1] === 'R') || (game[0] === 'P' && game[1] === 's')) {
      numberOfWins2 += 1;
    }
  }

  if (numberOfWins1 > numberOfWins2) {
    return player1;
  } else if (numberOfWins1 < numberOfWins2) {
    return player2;
  } else {
    return 'Tie';
  }
}

// Test function
function assertEqual(expected, actual, testName) {
  if (expected === actual) {
    console.log('PASSED');
  } else {
    console.log(`FAILED ${testName}. Expected ${expected}, actual ${actual}`);
  }
}

// Test cases
let input1 = [["R", "P"], ["R", "S"], ["S", "P"]];
let expected1 = "Abigail";
let actual1 = calculateScore(input1);
console.log(actual1);
assertEqual(expected1, actual1, 'Should display winning user');

let input2 = [["R", "R"], ["S", "S"]];
let expected2 = 'Tie';
let actual2 = calculateScore(input2);
console.log(actual2);
assertEqual(expected2, actual2, 'Should return a tie');
