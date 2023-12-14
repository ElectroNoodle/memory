import { cards } from "./cards.js";


// For loop to generate one array of numbers 0 - 7 [4, 1, 6, 7, 0, 2, 3, 5]
// Generate another one of these
// Join the two of the two arrays

console.log(cards);

var arrAssignedInts = [];

var elements = document.querySelectorAll('div.playing-card__Item');

var arrCompletedInts = [];

var objSelected = {};

document.addEventListener("click", funcClick);

//console.log("Array is: " + arrCompletedInts);

var N = 0;

function funcClick(event){
    
    var clickedElement = event.target;

    var clickedID = clickedElement.id;

    var clickedMatchID = clickedElement.dataset.card;

    clickedElement.className = "playing-card__item-selected";

    if (Object.keys(objSelected).length > 0){

        console.log(objSelected);

        if (objSelected[clickedMatchID] && objSelected[clickedMatchID] != clickedID){

            console.log("MATCH!");

            var cardLastClicked = document.getElementById(objSelected[clickedMatchID]);

            cardLastClicked.className = "playing-card__item-match";

            clickedElement.className = "playing-card__item-match";

        } else {

            //Need to add in both selected items to the object and then change the classname by selecting the elements using the ID in
            //object

            setTimeout(function() {

                clickedElement.className = "playing-card__item";

                var lastClicked = document.getElementsByClassName("playing-card__item-selected");

                lastClicked.className = "playing-card__item";
    
            },5000);

            objSelected = {};

        }
        

    } else {

        objSelected[clickedMatchID] = clickedID;

        clickedElement.className = "playing-card__item-selected";

    }

    console.log("obj is: ", objSelected);

    console.log("Clicked ID is: ", clickedID);

}

function funcMain(){
    
    funcAssignValue(elements);

}

function funcRandomNumGen(intExisting){

    console.log(N, "intExisting is: ", intExisting);

    if (intExisting === 10){

        //console.log(N, " Hit IF");
        
    } else {
        //console.log(N, " Exising number is: ", intExisting);

        arrCompletedInts.push(intExisting);

        //console.log(N, " Completed ints: ",arrCompletedInts);
    }

    do {

        var intRandom = Math.floor(Math.random() * 8);

    } while (arrCompletedInts.includes(intRandom));

    //console.log("Random Number is ", intRandom);

    return intRandom;

}



function funcAssignValue(elements){

    var array = "";//list of playingcards
    
    //console.log("Cards are" + elements);

    elements.forEach(element => {

        N++;

        if(element.dataset.cardID){

            console.log(N, " ElementID is: " + element.dataset.cardID);

        } else {

            var intID = funcRandomNumGen(10);

            let arrFiltered = arrAssignedInts.filter(function(value){

                return value === intID;

            })

            if(arrFiltered.length >= 2){

                //console.log(N, " ID already assigned: ", arrFiltered.length, " times.");

                let intNewID = funcRandomNumGen(intID);

                //console.log(N, " intNewID is: ", intNewID);

                arrAssignedInts.push(intNewID);
                
                element.dataset.card = intID;

                console.log(N, " Set ID attribute as: ", intNewID);

            } else if (arrFiltered.length == '1'){

                arrAssignedInts.push(intID);

                arrCompletedInts.push(intID);
                
                element.dataset.card = intID;

                //console.log(N, " Set ID attribute");

            } else {

                arrAssignedInts.push(intID);
                
                element.dataset.card = intID;

                //console.log(N, " Set ID attribute");

            }     
            
        }
        
    });

/*     cards.forEach(element => {

        if (element.id){
            console.log(element.id)
        } else {
            
        }
        //go through, assign an ID and check if it exists
    }); */
}


function generateCards(cards) {
  //for ()
}

funcMain();