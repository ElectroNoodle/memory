import { cards } from "./cards.js";

// For loop to generate one array of numbers 0 - 7 [4, 1, 6, 7, 0, 2, 3, 5]
// Generate another one of these
// Join the two of the two arrays

console.log(cards)

var elements = document.querySelectorAll('div.playing-card');

function funcMain(){
    
    funcAssignID(elements);

}

function funcRandomNumGen(){

    var intRandomNumber = Math.floor(math.random() * 9);

    console.log(intRandomNumber);

    return intRandomNumber;

}



function funcAssignID(cards){

    var array = "";//list of playingcards

    cards.forEach(element => {

        if (element.id){
            console.log(element.id)
        } else {
            
        }
        //go through, assign an ID and check if it exists
    });
}


function generateCards(cards) {
  //for ()
}