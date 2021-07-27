/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let result = 0,
    romanChar = s.split('');

  let symbolToValue = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };

  for(let i = 0; i < romanChar.length; i++){
    if(romanChar[i+1] && symbolToValue[romanChar[i]+romanChar[i+1]]){
      result += symbolToValue[romanChar[i]+romanChar[i+1]];
      i++;
    }
    else {
      result += symbolToValue[romanChar[i]];
    }
  }

  return result;

};

romanToInt('MCMXCIV');
