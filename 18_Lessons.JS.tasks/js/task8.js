/**
 * Tasks DOM
 * @author "DanielS"
 */

/*● знайти ul елемент
● знайти другий li*/

console.log(document.body.children[1]);

var b = document.body.children;
var item = 0;
for ( var item of b){
    console.log(item);
}
for( var i =0; i<b.length; i++){
    console.log(b[1].tagName);
    for(var j = 0; j< b[i].children.length; j++){
        if(j==1){
             console.log(b[i].children[j].innerHTML);
        }else{
            console.log(b[i].children[j].innerHTML);
        }}}

 /*● знайти елемент з класом list
● знайти другий li і змінити в ньому текст
● зробити текст в div червоним*/       
console.log(document.getElementsByClassName("list"));
var b = document.body.children;
for( var i =0; i<b.length; i++){
    console.log(b[1].tagName);
    for(var j = 0; j< b[i].children.length; j++){
         b[i].children[j].innerHTML = "BOOM";
        var el =(j==1)?document.write(b[i].children[j].innerHTML = "BOOM"):document.write(b[i].children[j].innerHTML = "DOM");
        }}
document.body.firstElementChild.style.color = "red";

