//convert age in year to days
function ageTodays(year)
{
    var today=new Date()
    var leapyear=0;
    for(i=year;i<=today.getFullYear();i++)
    {
        //check if it is leap year or not
        if(i%4==0) //2002%4==0
        {
        leapyear++; 
        }
    }
    var age=today.getFullYear()-year; //to find the age
    var nonleapyear=age-leapyear;
    return Math.floor((nonleapyear*365)+(leapyear*366)); //return the days
}
let day=ageTodays(2002);
console.log("Age in days is:"+day);