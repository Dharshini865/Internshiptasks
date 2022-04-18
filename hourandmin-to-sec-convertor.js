/**
* Convert hours and minutes to seconds
* @param {number} hours - hours
* @param {number} minutes - minutes
* @returns {number} - returns seconds
*/

function hrMinToSec(hours, minutes) {
    return Math.floor( (hours * 60 * 60) + (minutes * 60) ); 
}

let seconds = hrMinToSec(1, 1); 
console.log("Result is " + seconds + " seconds");
