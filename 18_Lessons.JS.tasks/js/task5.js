/**
 * Додати метод newString() в прототип String який буде робити першу і
останню літеру строки великою
 * 
 * 
 */
var String = 'lorem ipsum dolor sit amet';
function newString(){
    return String = String.replace(String[0],String[0].toUpperCase()) , String.replace(String.slice(-1),String.slice(-1).toUpperCase());
   } 
newString.prototype = String;
var up = newString;
console.log(up());