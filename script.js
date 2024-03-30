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

app.flashcardMaker.addEventListener("click",  (e)=> {

  e.preventDefault(); // PREVENT DEFAULT BEHAVIOR (PAGE RELOAD)

if(app.flashcardSection.children.length <= 5 ) {
  //MAKING NEW  FLASHCARDS
  let newFlashcard = document.createElement("div");
  let newQuestion = document.createElement("span");
  let newAnswer = document.createElement("span");
  let newEditButton = document.createElement("img");


  newQuestion.textContent = app.question.value;
  newAnswer.textContent =  app.answer.value;
  newEditButton.src = "img/edit_FILL0_wght400_GRAD0_opsz48.svg";
  newEditButton.alt = "edit button";

  //ADDING CLASS
  newFlashcard.classList.add("flashcardSubmitted");
  newQuestion.classList.add("questionSubmitted");
  newAnswer.classList.add("questionAnswer");
  newEditButton.classList.add("editButton");

  //ADDING NEW ELEMENTS TO flashcardSection
  newFlashcard.append(newQuestion);
  newFlashcard.append(newAnswer);
  newFlashcard.append(newEditButton);
  app.flashcardSection.append(newFlashcard);

  app.flashcards.push({question: newQuestion.textContent, answer: newAnswer.textContent })
  newEditButton.addEventListener("click",  ()=> { 

  //ADDING NEW FLASHCARD TO ARRAY

    
  app.question.value = newQuestion.textContent;
  app.answer.value = newAnswer.textContent
  newQuestion.textContent = null;
  newAnswer.textContent = null;
    if (newQuestion.textContent.trim() === '' && newAnswer.textContent.trim() === '') {
     app.flashcardSection.removeChild(newFlashcard);
    }
    
})

}
else {
  console.log(" Flashcard limit reached");
};

})
app.flashcardRemover.addEventListener("click",e => {

  e.preventDefault() // PREVENT DEFAULT BEHAVIOR (PAGE RELOAD)
   if(app.flashcardSection.children.length > 0){
    let lastFlashcard = app.flashcardSection.lastElementChild;
    app.flashcardSection.removeChild(lastFlashcard);
    app.flashcards.pop();
   }
   else {
    console.log("Nie ma żadnych fiszek do usuniecia");
   }

})
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

  KnownFlashcard.textContent = "Known";
  UnknownFlashcard.textContent = "Unknown"

  //ADDING CLASS
  Battlefield.classList.add("Battlefield");
  BattlefieldFlashcard.classList.add("BattlefieldFlashcard");
  BattlefieldFlashcardQuestion.classList.add("BattlefieldFlashcardQuestion");
  BattlefieldFlashcardAnswer.classList.add("BattlefieldFlashcardAnswer");
  choice.classList.add("choice");
  KnownFlashcard.classList.add("KnownFlashcard");
  UnknownFlashcard.classList.add("UnknownFlashcard");

  //ADDING ELEMENTS
  choice.append(UnknownFlashcard);
  choice.append(KnownFlashcard);
  BattlefieldFlashcard.append(BattlefieldFlashcardQuestion);
  BattlefieldFlashcard.append(BattlefieldFlashcardAnswer);
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
  
});