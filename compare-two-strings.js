/**
* Compare two strings
* @param {string} str1 - actual string
* @param {string} str2 - to compare string
* @returns {boolean} - returns true if the length of the strings are equal
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
