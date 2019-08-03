/**
 * Tasks DOM
 * @author "DanielS"
 */



//● додати в список 5 елементів li з текстом від 1 до 5
var ele = document.createElement('li');
ele.innerHTML = "1";
list.insertBefore(ele, list.children[-1]);
console.log(document.body.children);

var ele = document.createElement('li');
ele.innerHTML = "2";
list.insertBefore(ele, list.children[-1]);
console.log(document.body.children);

var ele = document.createElement('li');
var eleLi = ele.cloneNode(true);
// var arrey = [];

//  function In(){var i = 0;
// for(i=0; i<=5; i++){
//   var ele = document.createElement('li');
//   document.list.insertBefore(ele,[2]);
//   return this;
// }}
// In();
//while(++i<=5){document.list.append(...eleLi);}
console.log(document.body.children);


// var arr=[2, 3, 4, 5, 6],l = arr.length;
// arr[l-1]=arr.shift()+l
// alert(arr)


// var arr = [1,2,3];
// alert(arr);
// arr.forEach(function(a,b,c){
// c[b] = a + 1;
// });
// alert(arr)





/*●
до чекбокса додати атрибут checked
*/

//#1
function chekP(){
  var a = document.querySelector('input');
  return a.setAttribute('checked','checked');
}
chekP();
//#2
var elem = document.querySelector('input');
elem.setAttribute('checked','checked');
//#3
document.querySelector('input').setAttribute('checked','checked');

/*●
якщо параграф має клас “text” то видалити його і навпаки*/
function deletAtr(){
  var a = (document.querySelector('p').classList.contains('text')==true)? document.querySelector('p').classList.remove('text'): alert('You class don`t exist');
  return a;
}
deletAtr();
console.log(document.querySelector('p').classList.contains('text'));
//#2
document.querySelector('p').classList.toggle('text');
console.log(document.querySelector('p').classList.contains('text'));