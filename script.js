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
    console.log("Nie ma żadnych fiszek do usuniecia")
   }

})
app.flashcardStart.addEventListener("click",  (e) => {

  e.preventDefault();
  app.flashcards.forEach((flashcard, index) => {
    setTimeout(() => {
      alert(`Pytanie: ${flashcard.question}\nOdpowiedź: ${flashcard.answer}`);
    }, index * 2000);
  });
  
});