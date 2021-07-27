/**
 * @param {number} x
 * @return {string}
 */
var reverse = function(x) {
  let input = x.toString();

  if(input === '0'){
    return 0;
  }

  input = input.split('');

  if(input[0] === '-'){
    input.shift();
    input = '-'+input.reverse().join('');
  }else if(input[input.length-1] === '0'){
    input.pop();
    input = input.reverse().join('');
    input = input.replace(/0/g, '');

  }
  else {
    input = input.reverse().join('');
  }

  if(parseInt(input) < Math.pow(-2, 31) || parseInt(input) > Math.pow(2, 31) - 1){
    return 0;
  }
  return input;
};
reverse(5500);
