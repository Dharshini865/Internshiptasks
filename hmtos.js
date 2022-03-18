//This program convert hours and minutes to seconds 

function hrmintosec(hours,minutes)
{
    return Math.floor((hours*60*60)+(minutes*60)); //it returns seconds
      
}
let seconds=hrmintosec(1,1); //fumction call
console.log("Result is "+seconds+" seconds");