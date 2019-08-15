
/**
 * @author "SDaniel"
 * Tasks по evernt & jquery
 * Бокс пересувається за кліком миші
 * Приклад Замкнення
 * 
 */



//Замкнення
let outer = function(){
    const Number = 20;
    let inner = function(){
       console.log("The number is " + Number)
    };
    return inner();
  }
  outer()
//  Координати миші
  document.querySelector("#container").onmousemove = function(event){
      event = event || window.event;
      console.log(event);
      document.querySelector('#offX').innerHTML = event.offsetX;
      document.querySelector('#offY').innerHTML = event.offsetY;
      ;
  }


// приклад 1
function boxMove(){
  const box = document.querySelector("#box");
  const container = document.querySelector('#container');
  container.addEventListener('click', () =>{
      
      box.style.left = event.pageX;
      box.style.top = event.pageY;
  });
}
 boxMove();

  


//приклад 2
$("#container").click (function (event) {
    $("#box").offset ( {
      left: event.pageX,
      top: event.pageY
    });
    });







