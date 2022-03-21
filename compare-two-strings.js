/** 
 * @param {string} str1 is to be raise
 * @param {string} str2 is to be raise
 * @return {boolean} returns true if length of strings is equal
   otherwise return false
*/

function compareStrings(str1, str2) {
   
    if (str1.length == str2.length) {
        return true;
    } else {
        return false;
    }
}
 
let result = compareStrings("hello", "world"); 
console.log (result);