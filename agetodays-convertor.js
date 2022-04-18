/**
* Convert age to days
* @param {number} year - Year of Birth
* @returns {number} - returns calculated age to days
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
    var nonLeapyear = age - leapyear;
    return Math.floor( (nonLeapyear * 365) + (leapyear * 366) ); 
}

let days = ageToDays(2002);
console.log("Age in days is: " + days + " days ");
