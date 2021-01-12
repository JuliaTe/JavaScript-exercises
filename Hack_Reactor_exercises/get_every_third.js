//4) Get every third -> advanced problem
  //** pay close attention to the examples
    //**hint: try looping backwards 

  //Get every third character starting from the end of the string to get a word

  function getEveryThird(str) {
    let result = '';

    for (let i = str.length - 1; i >= 0; i -= 3) {
      if (i === str.length - 1) {
        result += str[i];
      } else {
        result += str[i];
      } 
    }

    return result;
  }

  
  console.log(getEveryThird('drteghlsdbiomweusfj')); //=> 'jumbled'
  console.log(getEveryThird('oerwtyt')); //=> 'two'
  console.log(getEveryThird('atlka')); //=> at
  
  function theBabes(Str){
    let babes = "Isaiah"
    let theBabes = "Jules"
    console.log(babes + " <3 " + theBabes)

  }