/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let firstChars = strs[0].split('');
    let otherChars = strs.slice(1, strs.length);
    let prefix = '';

    
    for (let index = 0; index < firstChars.length; index++) {
        if(index === 0){
          otherChars.filter((char) => char.startsWith(firstChars[index])).length === otherChars.length ? prefix += firstChars[index] : '';
        }
        else {
          if(!prefix){
              break;
          }
          else {
            if(otherChars.filter((char) => char.startsWith(prefix + firstChars[index])).length === otherChars.length){
              prefix += firstChars[index]
            }
            else {
              break;
            }
          }
        }
    }

    return prefix;

};
longestCommonPrefix(["flower","flow","flight"])
