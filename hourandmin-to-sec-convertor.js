/**
 * @param {number} hours to be raise and must be a natural number
 * @param {number} minutes to be raise and must be a natural number
 * @return {number} return seconds of given hours and minutes
 */ 

function hrMinToSec(hours, minutes) {
    return Math.floor( (hours * 60 * 60) + (minutes * 60) ); 
}

let seconds = hrMinToSec(1, 1); 
console.log("Result is " + seconds + " seconds");