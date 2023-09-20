const palindromes = function (string) {
  
  const filteredString = string.toLowerCase().replace(/[^a-z0-9]/g,"");
  return filteredString.split("").reverse().join("") == filteredString;
  
};

// Do not edit below this line
module.exports = palindromes;
