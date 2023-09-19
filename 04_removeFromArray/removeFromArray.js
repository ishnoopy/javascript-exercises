const removeFromArray = function(numbersArray, ...numbersToRemove) {
  for (const numberToRemove of numbersToRemove){
    // To check if number is in the array.
    if (numbersArray.indexOf(numberToRemove) !== -1) {
       let indexOfRemovedNumber = numbersArray.indexOf(numberToRemove)
      // To check if number and element of array are the same datatype.
       if( numberToRemove === numbersArray[indexOfRemovedNumber]) {
        numbersArray.splice(indexOfRemovedNumber, 1)
       }
    }
  }

  return numbersArray;
};

// Do not edit below this line
module.exports = removeFromArray;
