 

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


/*SHOW HIDE BOX**********************/

    var picOne = document.querySelector(".picone");
    var picTwo = document.querySelector(".pictwo");
    
    var pClair = document.getElementById("p_clair");
    var pMargarita = document.getElementById("p_margarita");

    
    picOne.addEventListener("mouseover", function(event) {
        pClair.classList.add("invisible");
    });
    picTwo.addEventListener("mouseover", function(event) {
        pMargarita.classList.add("invisible");
    });
    
    picOne.addEventListener("mouseout", function(event) {
        pClair.classList.remove("invisible");
    });
    picTwo.addEventListener("mouseout", function(event) {
        pMargarita.classList.remove("invisible");
    });
}); 