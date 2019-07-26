/**
 *	Переписати код через тернарний оператор
if(a === b) { 
    rezult = "a and b are equal";
     } else if(a > b) { 
         rezult = "a is greater";
     } else { 
    rezult = "b is greater"; 
    }
 *@author {Daniel_Slavinskiy}  
 * 
 */

    
var a= prompt(),
b=prompt();
var rezult = (a===b)?'a and b are equal':(a > b)? 'a is greater':'b is greater';
console.log(rezult);