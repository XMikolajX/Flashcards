"use strict";

let app = {
  question: document.getElementById("question"),
  answer: document.getElementById("answer"),
  flashcardMaker: document.getElementById("flashcardMaker"),

};
/*CREATING ELEMENTS*/

app.flashcardSection =  document.getElementById("flashcards");
app.flashcardSubmitted = document.createElement("div");
app.questionSubmitted = document.createElement("span");
app.questionAnswer = document.createElement("span");
/*ADDING A TO A SECTION*/

app.flashcardSection.appendChild(app.flashcardSubmitted);
app.flashcardSubmitted.appendChild(app.questionSubmitted);
app.flashcardSubmitted.appendChild(app.questionAnswer);
console.log(app.flashcardSubmitted) //test
/*ADDING A CLASS*/
app.flashcardSubmitted.classList.add("flashcardSubmitted");
app.questionSubmitted.classList.add("questionSubmitted");
app.questionAnswer.classList.add("questionAnswer");

app.flashcardMaker.addEventListener("click",  (e)=> {

  e.preventDefault(); // PREVENT DEFAULT BEHAVIOR (PAGE RELOAD)

  /* ASSING VALUES FROM INPUT*/
  
 
    app.questionSubmitted.textContent = app.question.value 
    app.questionAnswer.textContent = app.answer.value 
  


})
