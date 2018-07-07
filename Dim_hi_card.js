var count = 0;
var hold = 'Hold ';
var bet = 'Bet ';

function cc(card) {
  // Only change code below this line
  var lowCards = [2, 3, 4, 5, 6];
  var medCards = [7, 8, 9];
  var highCards = [10, 'J', 'Q', 'K', 'A'];

  if (lowCards.includes(card)) {
    count += 1;
    if (count > 0) {
      console.log( bet + count );
    }
    else {
      console.log( hold + count );
    }
  }
  else if (highCards.includes(card)) {
    count -= 1;
    if (count > 0) {
      console.log( bet + count );
    }
    else {
      console.log( hold + count );
    }

  }

  else {
    if (count > 0) {
      console.log( bet + count );
    }
    else {
      console.log( hold + count );
    }

  }

}


cc(2);
