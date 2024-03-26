"use strict";

let app = {
  question: document.getElementById("question"),
  answer: document.getElementById("answer"),
  flashcardMaker: document.getElementById("flashcardMaker"),
  flashcardRemover: document.getElementById("flashcardRemover"),

};
/*CREATING ELEMENTS*/

app.flashcardSection =  document.getElementById("flashcards");
app.flashcardSubmitted = document.createElement("div");
app.questionSubmitted = document.createElement("span");
app.questionAnswer = document.createElement("span");
/*ADDING A TO A SECTION*/


app.flashcardSubmitted.appendChild(app.questionAnswer);
/*ADDING A CLASS*/
app.flashcardSubmitted.classList.add("flashcardSubmitted");
app.questionSubmitted.classList.add("questionSubmitted");
app.questionAnswer.classList.add("questionAnswer");

app.flashcardMaker.addEventListener("click",  (e)=> {

  e.preventDefault(); // PREVENT DEFAULT BEHAVIOR (PAGE RELOAD)

if(app.flashcardSection.children.length <= 5 ) {
  //MAKING NEW  FLASHCARDS
  let newFlashcard = document.createElement("div");
  let newQuestion = document.createElement("span");
  let newAnswer = document.createElement("span");

  newQuestion.textContent = app.question.value;
  newAnswer.textContent =  app.answer.value;


  //ADDING CLASS
  newFlashcard.classList.add("flashcardSubmitted");
  newQuestion.classList.add("questionSubmitted");
  newAnswer.classList.add("questionAnswer");

  //ADDING NEW ELEMENTS TO flashcardSection
  newFlashcard.append(newQuestion);
  newFlashcard.append(newAnswer);
  app.flashcardSection.append(newFlashcard);
}
else {
  console.log(" Flashcard limit reached");
};

})
app.flashcardRemover.addEventListener("click",e => {
  e.preventDefault() // PREVENT DEFAULT BEHAVIOR (PAGE RELOAD)
   
})