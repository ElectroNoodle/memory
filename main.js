// Import the array of card objects
import { cards } from "./cards.js";

// Access the card container so we can append the random order of cards
const cardContainer = document.querySelector(".playing-card__container");

// Loop through cards array and add them to the cardContainer
function generateCards(cardsArray) {
  // Create an empty string which we will set the innerHTML to
  let cardElements = "";

  // Using a template string to create the HTML for the cards
  for (let i = 0; i < cardsArray.length; i++) {
    cardElements += `
    <div class="playing-card__item">
      <img src="${cardsArray[i].src}" alt="${cardsArray[i].alt}" />
    </div>
    `;
  }

  // After running through the loop, we can then assign the contents of
  // cardElements, which prevents DOM rendering for each iteration
  cardContainer.innerHTML = cardElements;
}

generateCards(cards);



// var elements = document.querySelectorAll("div.playing-card__Item");

// var arrAssignedInts = [];

// var arrCompletedInts = [];

// var objSelected = {};

// Adding an event listener to the whole document?
// document.addEventListener("click", funcClick);

//console.log("Array is: " + arrCompletedInts);

// var N = 0;

// function funcClick(event) {
//   var clickedElement = event.target;

//   var clickedID = clickedElement.id;

//   var clickedMatchID = clickedElement.dataset.card;

//   clickedElement.className = "playing-card__item-selected";

//   if (Object.keys(objSelected).length > 0) {
//     console.log(objSelected);

//     if (
//       objSelected[clickedMatchID] &&
//       objSelected[clickedMatchID] != clickedID
//     ) {
//       console.log("MATCH!");

//       var cardLastClicked = document.getElementById(
//         objSelected[clickedMatchID]
//       );

//       cardLastClicked.className = "playing-card__item-match";

//       clickedElement.className = "playing-card__item-match";
//     } else {
//       //Need to add in both selected items to the object and then change the classname by selecting the elements using the ID in
//       //object

//       setTimeout(function () {
//         clickedElement.className = "playing-card__item";

//         var lastClicked = document.getElementsByClassName(
//           "playing-card__item-selected"
//         );

//         lastClicked.className = "playing-card__item";
//       }, 5000);

//       objSelected = {};
//     }
//   } else {
//     objSelected[clickedMatchID] = clickedID;

//     clickedElement.className = "playing-card__item-selected";
//   }

//   console.log("obj is: ", objSelected);

//   console.log("Clicked ID is: ", clickedID);
// }

// function funcMain() {
//   funcAssignValue(elements);
// }

// function funcRandomNumGen(intExisting) {
//   console.log(N, "intExisting is: ", intExisting);

//   if (intExisting === 10) {
//     //console.log(N, " Hit IF");
//   } else {
//     //console.log(N, " Exising number is: ", intExisting);

//     arrCompletedInts.push(intExisting);

//     //console.log(N, " Completed ints: ",arrCompletedInts);
//   }

//   do {
//     var intRandom = Math.floor(Math.random() * 8);
//   } while (arrCompletedInts.includes(intRandom));

//   //console.log("Random Number is ", intRandom);

//   return intRandom;
// }

// function funcAssignValue(elements) {
//   var array = ""; //list of playingcards

//   //console.log("Cards are" + elements);

//   elements.forEach((element) => {
//     N++;

//     if (element.dataset.cardID) {
//       console.log(N, " ElementID is: " + element.dataset.cardID);
//     } else {
//       var intID = funcRandomNumGen(10);

//       let arrFiltered = arrAssignedInts.filter(function (value) {
//         return value === intID;
//       });

//       if (arrFiltered.length >= 2) {
//         //console.log(N, " ID already assigned: ", arrFiltered.length, " times.");

//         let intNewID = funcRandomNumGen(intID);

//         //console.log(N, " intNewID is: ", intNewID);

//         arrAssignedInts.push(intNewID);

//         element.dataset.card = intID;

//         console.log(N, " Set ID attribute as: ", intNewID);
//       } else if (arrFiltered.length == "1") {
//         arrAssignedInts.push(intID);

//         arrCompletedInts.push(intID);

//         element.dataset.card = intID;

//         //console.log(N, " Set ID attribute");
//       } else {
//         arrAssignedInts.push(intID);

//         element.dataset.card = intID;

//         //console.log(N, " Set ID attribute");
//       }
//     }
//   });
// }

// function generateCards(cards) {
//   //for ()
// }

// funcMain();
