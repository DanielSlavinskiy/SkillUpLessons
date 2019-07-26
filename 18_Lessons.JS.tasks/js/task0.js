/**
 * Перевірити чи число знаходиться в діапазоні від 25 до 99 включно (25 і 99 входять в діапазон). Число ввести за допомогою prompt. Якщо відвідувач ввів число не з діапазону - попросити ввести ще раз, і так далі. Цикл повинен питати число поки відвідувач не введе число з діапазону, або не натисне кнопку Cancel (ESC).
 * @param {number} Number чило яке задається через метод prompt
 * @param {number} result число, яке перевіряється черерз тенарний оператор
 * @author {Daniel_Slavinskiy}
 * 
 */



var Number = +prompt('введи число з діапазону','0');
var result = (Number>=25 && Number<=99)? document.write('Віроно'):  prompt('Не вірно,введи число щераз','0'), Number=null; 

// var Number = +prompt('введи число з діапазону','0');
// while( result = (Number>=25 && Number<=99)){document.write('Віроно')} prompt('Не вірно,введи число щераз','0'), Number=null; 


// function falseNumber(){do{result = prompt('Не вірно,введи число щераз','0'); result++;} while(result==Number);
// return result;}
// var Number = +prompt('введи число з діапазону','0');
// var result = (Number>=25 && Number<=99)? document.write('Віроно'): falseNumber(), Number=null; 


var result;
do {result = prompt('','0');
   
} while( result<=99 && result>=25 && result!=null);


// var Number ={ function numbers(a) {
//    var a>=25 && a<=99
//     for(var i=25;i<=99;i++); 
//     return a[i]
// }};
// do {result = +prompt ('','0');
//     result++;
// } while(result!=(newFunction(Number)));
// function newFunction() {
//     return Number;
// }


// var number = result();
// function result(){
// do {result = +prompt ('','0');
//     result++;
// } while(result=(number>=25 && number<=99)?console.log('true'):console.log('false'))
// return result;}