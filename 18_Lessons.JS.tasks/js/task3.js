/**
 * Написати функцію яка приймає два параметри range(a, b) і виводить непарні числа від a до b. Зробити перевірку щоб b було більше a
 *@author {Daniel_Slavinskiy}
 * 
 *  */
function range(a,b){
    a =a;
    b =b;
   if(b > a) console.log('good');
    
    for(var i=a; i<b; i++){
       if(i%2==1)console.log(i);
   }
   return i, a, b;
}
range(5,88);