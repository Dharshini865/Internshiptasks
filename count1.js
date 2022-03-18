/*program  to compare the length of the strings
 * if it is equal return true
 * otherwise return false
 */
function compare(str1, str2)
{
   
    if(str1.length=== str2.length)
    {
       return "true"
    }
    else
    {
        return "false"
    }
}
let result=compare("hello", "world") 
console.log(result);
