/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let input = x.toString();
    return input.split('').reverse().join('') == x ? true : false
};

isPalindrome(221)