"use strict";

let app = {
/*CREATING ELEMENTS*/
  question: document.getElementById("question"),
  answer: document.getElementById("answer"),
  flashcardMaker: document.getElementById("flashcardMaker"),
  flashcardRemover: document.getElementById("flashcardRemover"),
  flashcardStart: document.getElementById("flashcardStart"),
  flashcards: [],
  flashcardSection: document.getElementById("flashcards"),
  repeatedFlashcard: {},
  flashcardId: {}, // Dodanie obiektu flashcardIdb
};

function loadFlashcardIdFromLocalStorage() {
  const storedFlashcardId = localStorage.getItem('flashcardId');
  if (storedFlashcardId) {
    app.flashcardId = JSON.parse(storedFlashcardId);
  }
}

loadFlashcardIdFromLocalStorage(); // Wczytaj dane z localStorage

function updateCounter(element, counterClassName, count) {
    let counterNumber = element.querySelector("." + counterClassName);
    if (!counterNumber) {
        counterNumber = document.createElement("div");
        counterNumber.className = counterClassName;
        element.appendChild(counterNumber);
    }
    counterNumber.textContent = count;
}

function updateCorrectCounter(element, count) {
  updateCounter(element, "counterNumberCorrectAnswers", count);
}

function updateWrongCounter(element, count) {
  updateCounter(element, "counterNumberWrongAnswers", count);
}

function updateFlashcardId(question, answer, remembered) {
  const flashcardKey = `${question}_${answer}`; // Klucz identyfikujący fiszkę na podstawie pytania i odpowiedzi
  if (!app.flashcardId[flashcardKey]) {
    app.flashcardId[flashcardKey] = { known: 0, unknown: 0 }; // Jeśli nie istnieje jeszcze wpis dla tej fiszki, tworzymy nowy
  }
  if (remembered) {
    app.flashcardId[flashcardKey].known++; // Inkrementacja liczby znanych fiszek
  } else {
    app.flashcardId[flashcardKey].unknown++; // Inkrementacja liczby nieznanych fiszek
  }
  localStorage.setItem('flashcardId', JSON.stringify(app.flashcardId)); // Zapisz dane do localStorage
}

function generateFlashcardsFromLocalStorage() {
  let storedFlashcards = localStorage.getItem('flashcards');

  if (storedFlashcards) {
    app.flashcards = JSON.parse(storedFlashcards);
    let parsedFlashcards = JSON.parse(storedFlashcards);
    parsedFlashcards.forEach(flashcard => {
      let newFlashcard = document.createElement("div");
      let newQuestion = document.createElement("span");
      let newAnswer = document.createElement("span");
      let newEditButton = document.createElement("img");

      newQuestion.textContent = flashcard.question;
      newAnswer.textContent = flashcard.answer;
      newEditButton.src = "img/edit_FILL0_wght400_GRAD0_opsz48.svg";
      newEditButton.alt = "edit button";

      newFlashcard.classList.add("flashcardSubmitted");
      newQuestion.classList.add("questionSubmitted");
      newAnswer.classList.add("questionAnswer");
      newEditButton.classList.add("editButton");

      const flashcardKey = `${flashcard.question}_${flashcard.answer}`;
      if (app.flashcardId[flashcardKey]) {
        if (app.flashcardId[flashcardKey].known > app.flashcardId[flashcardKey].unknown) {
          newFlashcard.classList.add("remembered");
        } else {
          newFlashcard.classList.add("notRemembered");
        }

        updateCorrectCounter(newFlashcard, app.flashcardId[flashcardKey].known);
        updateWrongCounter(newFlashcard, app.flashcardId[flashcardKey].unknown);
      }

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
        });

        app.flashcards = app.flashcards.filter(flash => flash.question !== null && flash.answer !== null);
        localStorage.setItem('flashcards', JSON.stringify(app.flashcards));
      });
    });
  }
}

generateFlashcardsFromLocalStorage();

app.flashcardMaker.addEventListener("click", (e) => {
  e.preventDefault(); // PREVENT DEFAULT BEHAVIOR (PAGE RELOAD)

  if (app.flashcardSection.children.length <= 10000) {
    
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
      
      newEditButton.addEventListener("click", () => {

        app.question.value = newQuestion.textContent;
        app.answer.value = newAnswer.textContent;

        newQuestion.textContent = null;
        newAnswer.textContent = null;

<<<<<<< HEAD
        app.flashcardSection.removeChild(newFlashcard);
=======
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
              
                imgShowBtn.style.display = "none"
    
            
              
                  let presentFlashcard = document.createElement("div"); //make new container for elements
                  body.appendChild(presentFlashcard); //add container for elements to body 
                  presentFlashcard.classList.add("presentFlashcardPosition");// add class to container
                  newFlashcardFront.classList.add("newFlashcardFront");
                  newFlashcardBack.classList.add("newFlashcardBack" );
                  presentFlashcard.appendChild(newFlashcardFront); 
              
                  presentFlashcard.appendChild(imgRotateBtn); //add elements to container
                  imgRotateBtn.classList.add("positonAbsoluteShowBtn");
                  let clonedImgCloseBtn = imgCloseBtn.cloneNode(true); // button cloned  imgCloseBtn
                  presentFlashcard.appendChild(clonedImgCloseBtn); // append cloned button to present flashcard after click on  imgShowBtn
                  
                  clonedImgCloseBtn.addEventListener("click", () => {
                    body.removeChild(presentFlashcard); //after click on clonedImgCloseBtn creater flashcards remove her
                  
                    imgShowBtn.style.display = "block"
                  
                });
              
                imgRotateBtn.addEventListener("click", () => {
                      // true - false - false - true - false 
                     if(isTurn) {
                      presentFlashcard.appendChild(newFlashcardBack); 
                      newFlashcardFront.replaceWith(newFlashcardBack)
                      isTurn = false
                     
                      }
                     else{
                        presentFlashcard.appendChild(newFlashcardFront); 
                        newFlashcardBack.replaceWith(newFlashcardFront)
                        isTurn = true
                   
                     }
                 
              
                });
              });
         
            
>>>>>>> a39f415 (comeback)

        // UPDATE  DATA  IN LocalStorage AFTER REMOVE FLASHCARD

        app.flashcards.forEach((flashcard, index) => {

          if ((flashcard.question === app.question.value) && (flashcard.answer === app.answer.value)) {
            app.flashcards.splice(index, 1);
          }
        }); //remove flashcard from array

        app.flashcards = app.flashcards.filter(flashcard => flashcard.question !== null && flashcard.answer !== null); //make new obj in app.flashcards and properties which are used to save in LocalStorage 

        localStorage.setItem('flashcards', JSON.stringify(app.flashcards)); //convert app.flashcards to json obj string, then setItem() save our data
      });

    } else {
      alert("Complete the fields");
    }
  } else {
    console.log("Flashcard limit reached");
  }
});

app.flashcardRemover.addEventListener("click", (e) => {
  e.preventDefault(); // PREVENT DEFAULT BEHAVIOR (PAGE RELOAD)

  if (app.flashcardSection.children.length > 0) {
    let lastFlashcard = app.flashcardSection.lastElementChild;

    app.flashcardSection.removeChild(lastFlashcard);

    app.flashcards.pop();

    app.flashcards = app.flashcards.filter(flash => flash.question !== null && flash.answer !== null); //make new obj in app.flashcards and properties which are used to save in LocalStorage 

    localStorage.setItem('flashcards', JSON.stringify(app.flashcards)); //convert app.flashcards to json obj string, then setItem() save our data
  } else {
    console.log("No more flashcards to remove");
  }
});

app.flashcardStart.addEventListener("click", (e) => {
  e.preventDefault();

  //CREATING ELEMENTS
  let Battlefield = document.createElement("section");
  let BattlefieldFlashcard = document.createElement("section");
  let BattlefieldFlashcardQuestion = document.createElement("div");
  let BattlefieldFlashcardAnswer = document.createElement("div");
  let choice = document.createElement("section");
  let KnownFlashcard = document.createElement("div");
  let UnknownFlashcard = document.createElement("div");
  let hint = document.createElement("div");
  let BattlefieldCloseButton = document.createElement("img");
  let result = document.createElement("section");
  let goodAnswer = document.createElement("div");
  let badAnswer = document.createElement("div");

  KnownFlashcard.textContent = "Known";
  UnknownFlashcard.textContent = "Unknown";
  hint.textContent = "Hint";
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
  hint.classList.add("hint");
  BattlefieldCloseButton.classList.add("closeButton");
  result.classList.add("result");
  goodAnswer.classList.add("goodAnswer");
  badAnswer.classList.add("badAnswer");

  //ADDING ELEMENTS
  choice.append(UnknownFlashcard);
  choice.append(hint);
  choice.append(KnownFlashcard);
  BattlefieldFlashcard.append(BattlefieldFlashcardQuestion);
  BattlefieldFlashcard.append(BattlefieldFlashcardAnswer);
  Battlefield.append(BattlefieldCloseButton);
  Battlefield.append(BattlefieldFlashcard);
  Battlefield.append(choice);

  document.body.appendChild(Battlefield);

  let currentFlashcardIndex = 0;

  function changeFlashcard() {
    if (app.flashcards.length > 0) { //if is greater than  0
      if (currentFlashcardIndex < app.flashcards.length) {  //if  app.flashcards.length is greater than currentFlashcardIndex 
        let currentFlashcard = app.flashcards[currentFlashcardIndex]; //assing to currentFlashcard 

        BattlefieldFlashcardQuestion.textContent = currentFlashcard.question;

        hint.addEventListener("click", () => { 
          BattlefieldFlashcardAnswer.textContent = currentFlashcard.answer;

          if (BattlefieldFlashcardAnswer.textContent === currentFlashcard.answer) {
            setTimeout(() => {
              BattlefieldFlashcardAnswer.textContent = '';
            }, 400); 
          }
        });
        
        currentFlashcardIndex++;
      } else {
        BattlefieldFlashcard.textContent = "There are no more flashcards";

        result.append(goodAnswer, badAnswer);
        BattlefieldFlashcard.append(result);

        choice.removeChild(UnknownFlashcard);
        choice.removeChild(KnownFlashcard);
        choice.removeChild(hint);
      }
    } else {
      BattlefieldFlashcard.textContent = "There are no flashcards created";
      choice.removeChild(UnknownFlashcard);
      choice.removeChild(KnownFlashcard);
      choice.removeChild(hint);
    }
  }

  let clickCount1 = 0;
  let clickCount2 = 0;
  let currentIndex = 0;

  function isItRemembered(className) {
    if (currentIndex < app.flashcardSection.children.length) {
      let currentElement = app.flashcardSection.children[currentIndex];
      let question = currentElement.querySelector(".questionSubmitted").textContent;
      let answer = currentElement.querySelector(".questionAnswer").textContent;
      const flashcardKey = `${question}_${answer}`;
      
      updateFlashcardId(question, answer, className === "remembered");
      
      if (app.flashcardId[flashcardKey]) {
        updateCorrectCounter(currentElement, app.flashcardId[flashcardKey].known);
        updateWrongCounter(currentElement, app.flashcardId[flashcardKey].unknown);
      }
      
      currentElement.classList.add(className); 
  
      if (currentIndex === app.flashcardSection.children.length) { 
        currentIndex = 0;
      }
      
      currentIndex++;
      
      let classList = currentElement.classList;
      let filteredClassNames = Array.from(classList).filter(className => className != "flashcardSubmitted");
      localStorage.setItem("classNames", JSON.stringify(filteredClassNames));
    }
  }

  KnownFlashcard.addEventListener("click", () => {
    isItRemembered("remembered");
    changeFlashcard(); 
    clickCount1++;
    goodAnswer.textContent = "Know : " +  clickCount1;
    Battlefield.classList.add('green');
    setTimeout(() => {
      choice.classList.remove('shake');
      Battlefield.classList.remove('green');
    }, 1000);
  });

  UnknownFlashcard.addEventListener("click", () => { 
    isItRemembered("notRemembered");
    changeFlashcard();
    clickCount2++;
    badAnswer.textContent = "Unknow : " + clickCount2;
    choice.classList.add('shake');
    Battlefield.classList.add('red');
    setTimeout(() => {
      choice.classList.remove('shake');
      Battlefield.classList.remove('red');
    }, 1000);
  });

  //SHOW FIRST FLASHCARD IN BattlefieldFlashcard
  changeFlashcard();
 
  BattlefieldCloseButton.addEventListener("click", () => {
    document.body.removeChild(Battlefield);
  });
});
