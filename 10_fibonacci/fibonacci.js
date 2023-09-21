const fibonacci = function(index) {
  if(+index < 0 ) return 'OOPS';

  let array = [0,1];

  for (let i = 0; i <= +index; i++ ) {
    if (i >= 2)  {
      array.push(array[i-2] + array[i-1])
    }
  }
  
  return array[+index]
};

// Do not edit below this line
module.exports = fibonacci;
