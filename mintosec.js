//This program converts minutes into seconds

function convertMintoSec(minutes)
{
   
    return Math.floor(minutes*60); //returns seconds
     
}
let  seconds=convertMintoSec(3); //function call
console.log("Result of conversion:" +seconds+" seconds");