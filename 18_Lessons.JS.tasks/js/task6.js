/**
 * написати калькулятор з методами add() - додає два значення, mul() -
перемножає їх
 * @author {Daniel_Slavinskiy}
 */
var calc = {};
function add(number1,number2){
    number1 = +prompt('додай перше число','number1');
    number2 = +prompt('до другого числа','number2');
return number1 + number2;
}
add._proto_ = calc;
document.write('результат =' + add());
document.write('<br/>');
function mul(number1,number2){
    number1 = +prompt('помнож перше число','number1');
    number2 = +prompt('до другого числа','number2');
    return number1 * number2;
    }
    mul._proto_ = calc;
    document.write('результат =' + mul());
    document.write('<br/>');
    document.write(calc);

//Варіан №2

var calculator = {
    sum: function() {
      return a + b;
    },
    mul: function() {
      return a * b;
    },
    Vvedit: function() {
      a = +prompt('перше число', 0);
      b = +prompt('друге число', 0);
    }
  }
  calculator.Vvedit();
  document.write( calculator.sum(),'<br/>', calculator.mul());
  
