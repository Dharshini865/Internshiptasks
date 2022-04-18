/**
* Convert minutes to seconds
* @param {number} minutes - minutes
* @returns {number} - returns seconds
*/

function minToSec(minutes) {
    return Math.floor(minutes * 60); 
}

let seconds = minToSec(4); 
console.log("Result of conversion:" + seconds + " seconds");
