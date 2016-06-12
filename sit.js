 

/*SLIDER*****************************/

document.addEventListener("DOMContentLoaded", function(){
     
     var nextPicture = document.querySelector("#buttonRight");
     var prevPicture = document.querySelector("#buttonLeft");
     var allElementsList =  document.querySelectorAll(".slider ul li");  
     var index = 0;
     
     allElementsList[index].classList.add("visible");
     
     nextPicture.addEventListener("click", buttonRight);
     prevPicture.addEventListener("click", buttonLeft);
     
    
     function buttonRight(event) {
         allElementsList[index].classList.remove("visible");
         index++;
         
         if(index >= allElementsList.length) {
             index = 0;
         }
         allElementsList[index].classList.add("visible");
     }
     
     function buttonLeft(event) {
         allElementsList[index].classList.remove("visible");
         index--;
         
         if(index < 0) {
             index = allElementsList.length-1;
         }
         allElementsList[index].classList.add("visible");
     }
  }); 