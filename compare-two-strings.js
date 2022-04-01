/** 
 * @param {string} str1 - str1 must be a string or string literal
 * @param {string} str2 - str2 must be a string or string literal
 * @returns {boolean} - length of the strings is equal or not
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
