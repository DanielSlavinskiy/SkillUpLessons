/**
 * @author "SDaniel"
 * Tasks по evernt & jquery
 * ProgreesBar
 */
function progressStart(){
  function userProgress(time){
    let start = 0;
    let progressElement = document.getElementById("progressBar");
    let intervalId = setInterval(function(){
        if(start>100){
            clearInterval(intervalId);
        }
        else{
            progressElement.value = start;
        }
        start++;
    },time);
}
userProgress(100);
console.log(userProgress);  
}


function progressStart2(){
    function userProgress(time){
    let start = 0;
    let progressElement = document.getElementById("progressBar2");
    let intervalId = setInterval(function(){
        if(start>100){
            clearInterval(intervalId);
        }
        else{
            progressElement.value = start;
        }
        start++;
    },time);
}
userProgress(100);
console.log(userProgress);
}
progressStart();
progressStart2();

