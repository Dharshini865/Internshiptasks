/**
 * convert minutes to seconds
 * @param {number} minutes - minutes must be an natural number
 * @returns {number} - returns seconds of a given minutes
 */

function minToSec(minutes) {
    return Math.floor(minutes * 60); 
}

let seconds = minToSec(4); 
console.log("Result of conversion:" + seconds + " seconds");
