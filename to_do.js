function toDo(day){
  // 1. check IF day is saturday OR sunday
  if (day === 'Saturday' || day === 'Sunday'){
      return weekendChore();
  // 2. return the weekendChore function

  }
  else{
  // 3. otherwise return the weekdayChore function.
    return weekdayChore();
  }
}
      // These are the functions we will return:
function weekendChore(){
  console.log("Weekend: walk 9am, feed at 4pm, walk at 10pm");
  return 1;
}

function weekdayChore(){
  console.log("Weekday: feed at 12pm, walk at 1pm");
  return 0;
}

toDo("Wednesday");
