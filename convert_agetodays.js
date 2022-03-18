/**
 * @param {number} year is to be raise
 * @param {number} year must be a natural number
 * @function {number} it finds how many leap years between 
   given year to current year
 * @return {number} returns days of the given year to current year
*/

function ageToDays(year) {
    var today = new Date();
    var leapyear = 0;

    for (i = year; i <= today.getFullYear(); i++) {
        
        if (i % 4 == 0) {
        leapyear ++; 
        }
   
    }

    var age = today.getFullYear() - year; 
    var nonleapyear = age - leapyear;
    return Math.floor( (nonleapyear * 365) + (leapyear * 366) ); 
}

let days = ageToDays(2002);
console.log("Age in days is: " + days + " days ");