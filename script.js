"use strict"; 

let createdFlashcards = document.getElementById("createdFlashcards"),
makeFlashcard = document.getElementById("makeFlashcard"),
titleFlashcard = document.getElementById("titleFlashcard"),
descriptionFlashcard = document.getElementById("descriptionFlashcard"),
flashcardFront = document.getElementById("flashcardFront"),
body = document.getElementById("body"),
flashcardBack = document.getElementById("flashcardBack"),
isFront = true;


makeFlashcard.addEventListener("click", () => {
        let newFlashcardContainer = document.createElement("div");//create a div
        let newFlashcardTitle = document.createElement("div");//create a div
        let newFlashcardDescription = document.createElement("div");//create a div
        let newFlashcardFront = document.createElement("div");//create a div
        let newFlashcardBack = document.createElement("div");//create a div
        let imgCloseBtn = document.createElement("img");
        let imgEditBtn = document.createElement("img");
        let imgShowBtn = document.createElement("img");
        let imgRotateBtn = document.createElement("img");
        imgEditBtn.src = "img/edit_FILL0_wght400_GRAD0_opsz48.svg";
        imgCloseBtn.src = "img/close_FILL0_wght400_GRAD0_opsz48.svg";
        imgShowBtn.src = "img/visibility_FILL0_wght400_GRAD0_opsz48.svg";
        imgRotateBtn.src = "img/360_FILL0_wght400_GRAD0_opsz48.svg";
        newFlashcardTitle.textContent = titleFlashcard.value; //add text from input to div
        newFlashcardDescription.textContent = descriptionFlashcard.value;
        newFlashcardFront.textContent = flashcardFront.value;
        newFlashcardBack.textContent = flashcardBack.value;
        if(newFlashcardTitle.textContent.trim() == "" || newFlashcardDescription.textContent.trim() == ""){

        }
        else {
      
            newFlashcardContainer.classList.add("flashcardContainer");//add class to div
      
            createdFlashcards.appendChild(newFlashcardContainer);//add newFlashcardContainer as child createdFlashcards  Container for elements

            newFlashcardContainer.appendChild(newFlashcardTitle);//add newFlashcardFront as child newFlashcardContainer  
            newFlashcardContainer.appendChild(imgCloseBtn); //add buttons to newFlashcardContainer
            newFlashcardContainer.appendChild(imgEditBtn); 
            newFlashcardContainer.appendChild(imgShowBtn); 

            imgCloseBtn.classList.add("positonAbsoluteRemoveBtn");//set position to button
            imgEditBtn.classList.add("positonAbsoluteEditBtn");
            imgShowBtn.classList.add("positonAbsoluteShowBtn");
        
            newFlashcardContainer.appendChild(newFlashcardDescription);//add newFlashcardBack as child newFlashcardContainer  

            imgCloseBtn.addEventListener("click", () => {
                createdFlashcards.removeChild(newFlashcardContainer); //after click on imgCloseBtn remove  newFlashcardContainer
             
              });
           imgEditBtn.addEventListener("click", () => {
              titleFlashcard.value =   newFlashcardTitle.textContent;
              descriptionFlashcard.value = newFlashcardDescription.textContent; 
              flashcardFront.value =   newFlashcardFront.textContent;
              flashcardBack.value  = newFlashcardBack.textContent;
              createdFlashcards.removeChild(newFlashcardContainer); //after click return input value
            })
            
              imgShowBtn.addEventListener("click", () => {
                  let presentFlashcard = document.createElement("div"); //make new container for elements
                  body.appendChild(presentFlashcard); //add container for elements to body 
                  presentFlashcard.classList.add("presentFlashcardPosition");// add class to container
                  presentFlashcard.appendChild(newFlashcardFront); 
                  presentFlashcard.appendChild(imgRotateBtn); //add elements to container
                  imgRotateBtn.classList.add("positonAbsoluteShowBtn");
                  let clonedImgCloseBtn = imgCloseBtn.cloneNode(true); // button cloned  imgCloseBtn
                  presentFlashcard.appendChild(clonedImgCloseBtn); // append cloned button to present flashcard after click on  imgShowBtn
                  
                  clonedImgCloseBtn.addEventListener("click", () => {
                    body.removeChild(presentFlashcard); //after click on clonedImgCloseBtn creater flashcards remove her
                });
              
                imgRotateBtn.addEventListener("click", () => {
                    if (isFront) {
                      presentFlashcard.removeChild(newFlashcardFront);
                      presentFlashcard.appendChild(newFlashcardBack);
                    } else {
                      presentFlashcard.removeChild(newFlashcardBack);
                      presentFlashcard.appendChild(newFlashcardFront);
                    }
                    isFront = !isFront;
                    
                  
                });
              });
         
            

            titleFlashcard.value = " ";//remove everything in input after click
            descriptionFlashcard.value = " ";//remove everything in input after click
            flashcardFront.value = " ";//remove everything in input after click
            flashcardBack.value = " ";//remove everything in input after click
        }
        
        
});


