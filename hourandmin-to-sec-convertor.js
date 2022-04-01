/**
 * convert hours and minutes to seconds
 * @param {number} hours - hours must be a natural number
 * @param {number} minutes - minutes must be a natural number
 * @returns {number} - returns seconds of given hours and minutes
 */ 

function hrMinToSec(hours, minutes) {
    return Math.floor( (hours * 60 * 60) + (minutes * 60) ); 
}

let seconds = hrMinToSec(1, 1); 
console.log("Result is " + seconds + " seconds");
