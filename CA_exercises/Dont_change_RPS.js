let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

//Player 1 move values
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

// Player 2 move types
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

// Player 2 move values
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

const isValidMove = (moveType) => {
  if (moveType === 'rock' || moveType === 'paper' || moveType === 'scissors') {
    return moveType;
  }
  else {
    return false;
  }
};

const setPlayerMoves = ( player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue ) => {
  if (isValidMove(moveOneType) && isValidMove(moveTwoType) && isValidMove(moveThreeType)) {
    if (moveOneValue + moveTwoValue + moveThreeValue === 99 && (moveOneValue + moveTwoValue + moveThreeValue) > 3 ) {
      if (player.toLowerCase() === 'player one') {
        // Setting moves for Player One
        playerOneMoveOneType = moveOneType;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveThreeType = moveThreeType;

        // Setting strength for Player One
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeValue = moveThreeValue;
      }
      else if (player.toLowerCase() === 'player two') {
        // Setting moves for Player Two
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveThreeType = moveThreeType;

        // Setting strength for Player Two
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeValue = moveThreeValue;
      }
      else {
        console.log('Options for choosing a player: \'player one\' or \'player two\'.');
      }
    }
      else {
        console.log('Sum of the strength points should be equal to 99. Strength of each move should be at least 1');
      }
    }
    else {
      return undefined;
    //console.log('Available move types are: \'rock\', \'paper\', \'scissors\'');
  }
};

setPlayerMoves('Player One', 'rok', 11, 'paper', 33, 'scissors', 55);

console.log(playerOneMoveOneType);
console.log(playerOneMoveTwoType);
console.log(playerOneMoveThreeType);

//Player 1 move values
console.log(playerOneMoveOneValue);
console.log(playerOneMoveTwoValue);
console.log(playerOneMoveThreeValue);

// Player 2 move types
console.log(playerTwoMoveOneType);
console.log(playerTwoMoveTwoType);
console.log(playerTwoMoveThreeType);

// Player 2 move values
console.log(playerTwoMoveOneValue);
console.log(playerTwoMoveTwoValue);
console.log(playerTwoMoveThreeValue);

const getRoundWinner = (roundNumber) => {
};

const getGameWinner = () => {


};

const setComputerMoves = () => {

  let num = Math.floor(Math.random() * 2);


};
