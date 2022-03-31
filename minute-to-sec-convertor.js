/**
 * @param {number} minutes to be raise
 * @param {number} minutes must be an natural number
 * @return {number} returns seconds of a given minutes
*/

function minToSec(minutes) {
    return Math.floor(minutes * 60); 
}

let seconds = minToSec(5); 
console.log("Result of conversion:" + seconds + " seconds");