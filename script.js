"use strict";

let app = {
  question: document.getElementById("question"),
  answer: document.getElementById("answer"),
  flashcardMaker: document.getElementById("flashcardMaker"),


 

};
app.flashcardSection =  document.getElementById("flashcards");
app.flashcardSubmitted = flashcardSection.createElement("div");
app.questionSubmitted = flashcardSubmitted.createElement("span");
app.questionAnswer = flashcardSubmitted.createElement("span");


app.flashcardMaker.addEventListener("click",  (e)=> {
  e.preventDefault(); // Zapobieganie domyślnemu zachowaniu
  console.log(app.question.value); // Poprawne użycie dla uzyskania wartości pola question
  

})
