"use strict";

let app = {

  question: document.getElementById("question"),
  answer: document.getElementById("answer"),
  flashcardMaker: document.getElementById("flashcardMaker"),
  flashcardRemover: document.getElementById("flashcardRemover"),
  flashcardStart: document.getElementById("flashcardStart"),
  flashcards: [],
  
};
/*CREATING ELEMENTS*/

app.flashcardSection =  document.getElementById("flashcards");

// app.flashcardSubmitted = document.createElement("div");
// app.questionSubmitted = document.createElement("span");
// app.questionAnswer = document.createElement("span");

/*ADDING A TO A SECTION*/


// app.flashcardSubmitted.appendChild(app.questionAnswer);
// /*ADDING A CLASS*/
// app.flashcardSubmitted.classList.add("flashcardSubmitted");
// app.questionSubmitted.classList.add("questionSubmitted");
// app.questionAnswer.classList.add("questionAnswer");
// Funkcja to generate flashcard on  based from  LocalStorage

function generateFlashcardsFromLocalStorage() {
  let storedFlashcards = localStorage.getItem('flashcards');  // Take from localStorage item as key "flashcards" and assing to variable
  if (storedFlashcards) { //if exists
    app.flashcards = JSON.parse(storedFlashcards);//assing existed flashcard to app.flashcards to prevent bug with reload and deleting all array properties
    let parsedFlashcards = JSON.parse(storedFlashcards); //Convert to OBJ from string
    parsedFlashcards.forEach(flashcard => { //for every element of this array...

      // CREATE ELEMENT

      let newFlashcard = document.createElement("div");
      let newQuestion = document.createElement("span");
      let newAnswer = document.createElement("span");
      let newEditButton = document.createElement("img");

      

      newQuestion.textContent = flashcard.question;
      newAnswer.textContent = flashcard.answer;
      newEditButton.src = "img/edit_FILL0_wght400_GRAD0_opsz48.svg";
      newEditButton.alt = "edit button";

      // ADD CLASS

      newFlashcard.classList.add("flashcardSubmitted");
      newQuestion.classList.add("questionSubmitted");
      newAnswer.classList.add("questionAnswer");
      newEditButton.classList.add("editButton");

      //APPEND

      newFlashcard.appendChild(newQuestion);
      newFlashcard.appendChild(newAnswer);
      newFlashcard.appendChild(newEditButton);
      app.flashcardSection.appendChild(newFlashcard);

      newEditButton.addEventListener("click", (e) => {

        app.question.value = newQuestion.textContent;
        app.answer.value = newAnswer.textContent;

        newQuestion.textContent = null;
        newAnswer.textContent = null;

        app.flashcardSection.removeChild(newFlashcard);
      

        app.flashcards.forEach((flashcard, index) => {
          if (flashcard.question === app.question.value && flashcard.answer === app.answer.value) {
              app.flashcards.splice(index, 1);
          }
      }); //remove flashcard from array
  
        // Update data  in LocalStorage after remove flashcard
        app.flashcards = app.flashcards.filter(flash => flash.question !== null && flash.answer !== null); //assing every flashcard from array flashcards to app.flashcards  which is not equel to given condition
        
        localStorage.setItem('flashcards', JSON.stringify(app.flashcards)); // convert app.flashcards to json obj string, then setItem() save our data

      });

    });

  }

}

generateFlashcardsFromLocalStorage();



app.flashcardMaker.addEventListener("click", (e) => {
  e.preventDefault(); // PREVENT DEFAULT BEHAVIOR (PAGE RELOAD)

  if (app.flashcardSection.children.length <= 5) {
    let newFlashcard = document.createElement("div");
    let newQuestion = document.createElement("span");
    let newAnswer = document.createElement("span");
    let newEditButton = document.createElement("img");

    newQuestion.textContent = app.question.value;
    newAnswer.textContent = app.answer.value;
    newEditButton.src = "img/edit_FILL0_wght400_GRAD0_opsz48.svg";
    newEditButton.alt = "edit button";

    if (newQuestion.textContent.trim() !== "" && newAnswer.textContent.trim() !== "") {

      newFlashcard.classList.add("flashcardSubmitted");
      newQuestion.classList.add("questionSubmitted");
      newAnswer.classList.add("questionAnswer");
      newEditButton.classList.add("editButton");

      newFlashcard.append(newQuestion);
      newFlashcard.append(newAnswer);
      newFlashcard.append(newEditButton);
      app.flashcardSection.append(newFlashcard);

      // ADD NEW FLASHCARD TO LocalStorage

      app.flashcards.push({ question: newQuestion.textContent, answer: newAnswer.textContent }); //make new obj in app.flashcards and properties which are used to save in LocalStorage 

      localStorage.setItem('flashcards', JSON.stringify(app.flashcards)); //convert app.flashcards to json obj string, then setItem() save our data

      newEditButton.addEventListener("click", (e) => {
        app.question.value = newQuestion.textContent;
        app.answer.value = newAnswer.textContent;

        newQuestion.textContent = null;
        newAnswer.textContent = null;


          app.flashcardSection.removeChild(newFlashcard);

          // UPDATE  DATA  IN LocalStorage AFTER REMOVE FLASHCARD

          app.flashcards.forEach((flashcard, index) => {
            if (flashcard.question === app.question.value && flashcard.answer === app.answer.value) {
                app.flashcards.splice(index, 1);
            }
        });//remove flashcard from array
    

          app.flashcards = app.flashcards.filter(flashcard => flashcard.question !== null && flashcard.answer !== null);  //make new obj in app.flashcards and properties which are used to save in LocalStorage 

          localStorage.setItem('flashcards', JSON.stringify(app.flashcards)); //convert app.flashcards to json obj string, then setItem() save our data
      });

    }
      else {

        alert("Complete the fields")

      }
  }
   else {

    console.log(" Flashcard limit reached");

  }
});

app.flashcardRemover.addEventListener("click", (e)=> {
  

  e.preventDefault() // PREVENT DEFAULT BEHAVIOR (PAGE RELOAD)

  
   if(app.flashcardSection.children.length > 0){

    let lastFlashcard = app.flashcardSection.lastElementChild;
    
    app.flashcardSection.removeChild(lastFlashcard);

    app.flashcards.pop();
    
    app.flashcards = app.flashcards.filter(flash => flash.question !== null && flash.answer !== null);  //make new obj in app.flashcards and properties which are used to save in LocalStorage 
    
    localStorage.setItem('flashcards', JSON.stringify(app.flashcards)); //convert app.flashcards to json obj string, then setItem() save our data
   }

   else {

    console.log("No more flashcards to remove");

   };

});

app.flashcardStart.addEventListener("click",  (e) => {

  e.preventDefault();

  //CREATING ELEMENTS
  let Battlefield = document.createElement("section");
  let BattlefieldFlashcard = document.createElement("section");
  let BattlefieldFlashcardQuestion = document.createElement("div");
  let BattlefieldFlashcardAnswer = document.createElement("div");
  let choice = document.createElement("section");
  let KnownFlashcard = document.createElement("div");
  let UnknownFlashcard = document.createElement("div");
  let BattlefieldCloseButton = document.createElement("img");

  KnownFlashcard.textContent = "Known";
  UnknownFlashcard.textContent = "Unknown"
  BattlefieldCloseButton.src = "img/close_FILL0_wght400_GRAD0_opsz48.svg";
  BattlefieldCloseButton.alt = "close button";

  //ADDING CLASS
  Battlefield.classList.add("Battlefield");
  BattlefieldFlashcard.classList.add("BattlefieldFlashcard");
  BattlefieldFlashcardQuestion.classList.add("BattlefieldFlashcardQuestion");
  BattlefieldFlashcardAnswer.classList.add("BattlefieldFlashcardAnswer");
  choice.classList.add("choice");
  KnownFlashcard.classList.add("KnownFlashcard");
  UnknownFlashcard.classList.add("UnknownFlashcard");
  BattlefieldCloseButton.classList.add("closeButton");

  //ADDING ELEMENTS
  choice.append(UnknownFlashcard);
  choice.append(KnownFlashcard);
  BattlefieldFlashcard.append(BattlefieldFlashcardQuestion);
  BattlefieldFlashcard.append(BattlefieldFlashcardAnswer);
  Battlefield.append(BattlefieldCloseButton);
  Battlefield.append(BattlefieldFlashcard);
  Battlefield.append(choice);

  document.body.appendChild(Battlefield);


  //
  function changeFlashcard(){

    if(app.flashcards.length > 0){

      let currentFlashcard = app.flashcards.shift(); //FIRST FLASHCARD
      BattlefieldFlashcardQuestion.textContent =  currentFlashcard.question;
      BattlefieldFlashcardAnswer.textContent =  currentFlashcard.answer;
    }

    else {
      BattlefieldFlashcard.textContent = "Nie ma więcej fiszek";
    
      
    }
  }

  KnownFlashcard.addEventListener("click", changeFlashcard);
  UnknownFlashcard.addEventListener("click", changeFlashcard);

  //SHOW FIRST FLASHCARD IN BattlefieldFlashcard
  changeFlashcard();


  BattlefieldCloseButton.addEventListener("click", ()=> {

    document.body.removeChild(Battlefield);
  })

});