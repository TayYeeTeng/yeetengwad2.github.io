
function generate_board() {

    //============================================================================
    // Task 1
    // Retrieve the friend name(s) from the 'friends' multi-select dropdown menu
    //============================================================================

    // Array to contain the names of user-selected friend(s)
    // For example, if the user selected 'Darryl' and 'Yin Kit',
    //   this array's value will be:
    //      [ 'darryl', 'yinkit' ]
    //
    let friends = []; // Initialize to empty


    // YOUR CODE GOES HERE

    var optionList = document.getElementById('friends').selectedOptions;

    // Display user's selection in Developer Tools --> Console.

    for(let friend of optionList){
        friends.push(friend.value);
    }

    console.log(friends);



    //============================================================================
    // Task 2
    // Given one or more selected friends and given 4 fruit names,
    //   generate a 'randomized' Array of finalized card names.
    // 
    // Card names are as follows:
    //    apple_brandon.png
    //    banana_brandon.png
    //    kiwi_brandon.png
    //    orange_brandon.png
    //
    // where 'brandon' can be replaced with another friend's name,
    // e.g.
    //    apple_nick.png
    // (and so on)
    //
    // Display all 4 fruit cards of one or more selected friends.
    //
    // NOTE: Each card must be displayed TWO and ONLY TWO times (thus, a "pair")
    //       (such that the user can attempt to 'match').
    //
    // Check out this utility function (declared at the bottom of this file)
    //   for randomizing the order of Array elements.
    //        shuffleArray()
    //============================================================================
    const fruits = [ 'apple', 'banana', 'kiwi', 'orange' ];

    // YOUR CODE GOES HERE
    var cardList = [];

    for(let friend of friends){
        for (let fruit of fruits) {
            cardList.push(fruit + "_" + friend + ".png");
            cardList.push(fruit + "_" + friend + ".png");
        }
    }

    console.log(cardList);

    //============================================================================
    // Task 3
    // Display the cards in <div id="game-board">
    //
    // For this, we will make use of Template Literal (using backticks).
    //
    // NOTE: The game board will always have 4 columns and N rows, where N denotes
    //       (number of selected friends) x 2.
    //
    //       For example, if I chose 'Brandon', 'Darryl', and 'Nick' (3 friends),
    //         then the newly generated game board will be
    //         6 (rows) by 4 (columns).
    //============================================================================
    const num_cols = fruits.length;
    const num_rows = friends.length * 2;
    finalScore = fruits.length * friends.length;

    console.log("# of columns: " + num_cols)
    console.log("# of rows: " + num_rows);

    // YOUR CODE GOES HERE

    // You will need to rewrite the value of this result_str (String).
    // let result_str = `
    //     <div style='color: red'>
    //         <p>This is a sample HTML code that will replace the parent div's innerHTML!</p>
    //         <p>Instead of paragraph texts, you will display cards here.</p>
    //     </div>
    // `;

    shuffleArray(cardList);
    
    let result_str = '';
    var rowCount = 1;
    document.getElementById('totalScore').innerText = 'Total Score: 0';
    
    for (let i = 0; i < num_rows; i++) {
        
        var colCount = 1;

        for (let x = 0; x < fruits.length; x++) {

            var randCard = Math.floor(Math.random() * cardList.length);
            var chosenCard = cardList[randCard];

            var thisLocation = rowCount + "_" + colCount;
            cardsLocation[thisLocation] = chosenCard;

            result_str += `<img src='cards/hidden.png' style='margin:5px;' id='${rowCount + "_" + colCount}' onclick='flipCard(this)'>`;

            const index = cardList.indexOf(chosenCard);
            cardList.splice(index, 1);

            colCount++;
        }

        result_str += "<br>";

        rowCount++;
        
    }

    // DO NOT MODIFY THE FOLLOWING
    // Replace the innerHTML of <div id="game-board">
    //   with a newly prepared HTML string (result_str).
    document.getElementById('game-board').innerHTML = result_str;
}

var cardsLocation = [];
var chosenCardCount = 0;
var chosenCardsLocation = [];
var chosenCards = [];
var totalScore = 0;
var finalScore = 0;

function flipCard(chosenCard){

    if(chosenCardCount != 2){
        var cardLocation = chosenCard.id;

        if(cardLocation != chosenCardsLocation[0]){
            var getCard = cardsLocation[cardLocation];
            chosenCards.push(getCard);
            chosenCardsLocation.push(cardLocation);
            document.getElementById(cardLocation).setAttribute('src', `cards/${getCard}`);
            chosenCardCount++;
    
            var checkMatch = checkCardMatch();
        
            if(chosenCardCount == 2 && checkMatch == false){
                setTimeout(function() { resetFlipped(); }, 1000);
            }
        }
    }    
}

function checkCardMatch(){
    var firstCard = chosenCards[0];
    var secondCard = chosenCards[1];

    if(firstCard == secondCard){
        totalScore++;
        document.getElementById('totalScore').innerText = 'Total Score: ' + totalScore;
        document.getElementById(chosenCardsLocation[0]).style.opacity = '0.5';
        document.getElementById(chosenCardsLocation[1]).style.opacity = '0.5';

        chosenCardsLocation = [];
        chosenCards = [];
        chosenCardCount = 0;

        if(totalScore == finalScore){
            document.getElementById('totalScore').innerText = 'All Matched, Congratulations!';
        }

        return true;
    }

    return false;

}

function resetFlipped(){

    for(let card of chosenCardsLocation){
        document.getElementById(card).setAttribute('src', 'cards/hidden.png');
    }
    chosenCardsLocation = [];
    chosenCards = [];
    chosenCardCount = 0;
}


// Utility Function
// DO NOT MODIFY
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}