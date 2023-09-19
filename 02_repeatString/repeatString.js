const repeatString = function(word, numberOfRepetition) {
  if (numberOfRepetition < 0) return 'ERROR';
  
  let joinedWords = '';
  for (let index = 0; index < numberOfRepetition; index++) {
    joinedWords+=word;
  }

  return joinedWords;
};

// Do not edit below this line
module.exports = repeatString;
