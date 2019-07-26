/**
 * tasks по масивам
 */

 //дано масив [1, 9, 22, 7, 6] додати число 8 після 22
 var numbs = [1,9,22,7,6];
numbs.splice(3,0,8);
console.log(numbs);

/*● написати функцію randomNumber(number) яка наповнює масив
випадковими числами від 0 до 100, де number - довжина масиву
● перевірити чи в масивові є число, яке вводиться через prompt()*/
var mass = [];
function randomNumber(){
    for (var i = 0, numder =100; i < numder; i++) {
        mass.push(Math.floor(Math.random() * 100))
    }
    return mass;
}
randomNumber()
 mass[2] = (mass[2] = 5)?+prompt(): console.log('інше число'); 
console.log(mass);
console.log(mass.indexOf(5));
// якщо поставити + перед prompt - не побачим яке саме число виводиться в prompt


/*● за допомогою методу forEach знайти найдовше слово в строці lorem
● за допомогою методу map створити масив квадратів масиву
arr = [8, 6, 12, 10];*/
//1
function findWord(str){
var strArr = str.split(' ');
var longestWord = 0;
for( var i = 0;i<strArr.length; i++){
    if(strArr[i].length > longestWord){
        longestWord = strArr[i].length;
    }
}
return longestWord;
}
console.log(findWord('Lorem ipsum dolor sit amet consectetur adipisicing elit.'));

//2
function whoLonger(str){
    var longestWord = str.split(' ').sort(function(a,b){return b.length - a.length;});
return longestWord[0].length;
}
console.log(whoLonger('Lorem ipsum dolor sit amet consectetur adipisicing elit.'));

//3
function findLonger(str){
    return str.length;
}
console.log(findLonger('Lorem ipsum dolor sit amet consectetur adipisicing elit.'));

//4
function findLongestWord(str) {
    var longestWord = str.split(' ').reduce(function(longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length;
  }
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

  //  за допомогою методу map створити масив квадратів масиву arr = [8, 6, 12, 10];
var arr = [8, 6, 12, 10];
var arr2 = arr.map(function (a) {
    return a * a;
});
console.log(arr2);

/*● розбити строку lorem по розділювачу ‘ ’ і вивести в консоль слова
довжиною більше 5*/
function findWord(str){
    var strArr = str.split(' ');
    for( var i = 0;i<strArr.length; i++){
        if(strArr[i].length > 5){
            console.log(strArr[i]);
        }
    }
    return strArr;
    }
   findWord('Lorem ipsum dolor sit amet consectetur adipisicing elit.');