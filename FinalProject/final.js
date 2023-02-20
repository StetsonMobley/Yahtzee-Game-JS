"use strict";

//----------Dice rolling function and global variable-----
let dice = 0;
let getDiceRoll = () => {
    
    let rand = Math.random();
    dice = Math.floor(rand * 6) + 1;
    
    return dice;
}
//-----------------------------------------------------

//--------------------Function and array for locking in dice values------------------------------
//let arrayOfDie = [];
let holdArr = [0, 0, 0, 0, 0];
const holdFunc = () => {
        $("#dice1").click(() => {
            if(holdArr[0] == 1){ //allows for toggling (if it has already been clicked)
                holdArr[0] = 0;
                $("#dice1").removeClass("locked");
            } else {
                holdArr[0] = 1; //if hasn't been clicked already, set array element to 1 and add background
                $("#dice1").addClass("locked");
            }
            if(die1 == 0 || arrayOfDie[0] == 0) { //can't do arrayOfDie[0] here, probably because it is not called above this function
                holdArr[0] = 0;                    //arrayOfDie[] does work, is needed for all rolls, die1 is needed for initial load
                $("#dice1").removeClass("locked");
            }
        });
        $("#dice2").click(() => {
            if(holdArr[1] == 1){
                holdArr[1] = 0;
                $("#dice2").removeClass("locked");
            } else {
                holdArr[1] = 1;
                $("#dice2").addClass("locked");
            }
            if(die2 == 0 || arrayOfDie[1] == 0) {
                holdArr[1] = 0;
                $("#dice2").removeClass("locked");
            }
        });
        $("#dice3").click(() => {
            if(holdArr[2] == 1){ 
                holdArr[2] = 0;
                $("#dice3").removeClass("locked");
            } else {
                holdArr[2] = 1;
                $("#dice3").addClass("locked");
            }
            if(die3 == 0 || arrayOfDie[2] == 0) {
                holdArr[2] = 0;
                $("#dice3").removeClass("locked");
            }
        });
        $("#dice4").click(() => {
            if(holdArr[3] == 1){ 
                holdArr[3] = 0;
                $("#dice4").removeClass("locked");
            } else {
                holdArr[3] = 1;
                $("#dice4").addClass("locked");
            }
            if(die4 == 0 || arrayOfDie[3] == 0) {
                holdArr[3] = 0;
                $("#dice4").removeClass("locked");
            }
        });
        $("#dice5").click(() => {
            if(holdArr[4] == 1){ 
                holdArr[4] = 0;
                $("#dice5").removeClass("locked");
            } else {
                holdArr[4] = 1;
                $("#dice5").addClass("locked");
            }
            if(die5 == 0 || arrayOfDie[4] == 0) {
                holdArr[4] = 0;
                $("#dice5").removeClass("locked");
            }
        });
    return holdArr;
}
//---------------------------------------------------------------------------------------

//---------Removes red background from dice images-------
const clearLockFunc = () => {
    $("#dice1").removeClass("locked");
    $("#dice2").removeClass("locked");
    $("#dice3").removeClass("locked");
    $("#dice4").removeClass("locked");
    $("#dice5").removeClass("locked");
}
//--------------------------------------------------------

//---------------Function for changing dice images to correspond with val-----
let arrayOfDie = [];
let arrayOfDieCopy = [];
const imgChange = arrayOfDie => { //takes in the array of values and switches images accordingly
    let n = 0;
    for(let i = 0; i < arrayOfDie.length; i++){
        n = i+1; //since arrays start at 0, but the img are numbered at 1-5
        switch(n) {
            case 1:
                if(holdArr[0] != 1) {
                    $("#dice1").fadeOut(100, ()=> {
                        $("#dice1").attr("src", "images/dice"+arrayOfDie[0]+".png").fadeIn(100);
                    });
                }
                break;
            case 2:
                if(holdArr[1] != 1) {
                    $("#dice2").fadeOut(100, ()=>{
                        $("#dice2").attr("src", "images/dice"+arrayOfDie[1]+".png").fadeIn(100);
                    });
                }
                break;
            case 3:
                if(holdArr[2] != 1) {
                    $("#dice3").fadeOut(100, ()=>{
                        $("#dice3").attr("src", "images/dice"+arrayOfDie[2]+".png").fadeIn(100);
                    });
                }
                break;
            case 4:
                if(holdArr[3] != 1) {
                    $("#dice4").fadeOut(100, ()=>{
                        $("#dice4").attr("src", "images/dice"+arrayOfDie[3]+".png").fadeIn(100);
                    });
                }
                break;
            case 5:
                if(holdArr[4] != 1) {
                    $("#dice5").fadeOut(100, ()=>{
                        $("#dice5").attr("src", "images/dice"+arrayOfDie[4]+".png").fadeIn(100);
                    });
                }
                break;
            default:
                throw new Error("Dice array went out of scope / rng issue"); //error object
        }
    }
}
//-------------------------------------------------------------

//--------------Determines radio value (Player number)------
let player = 1;
let playerCount = () => {
    return parseInt($('input[name="Players"]:checked').val());
}
//----------------------------------------------------------

//--------------changePlayer Function-------------
const changePlayer = () =>{
        if (playerCount() == 2) {
            $("#count").removeClass("hide");
            if(player == 1) {
                player = 2;
                $("#current").text("Player 2");
                $("#p2").css("background-color", "yellow");
                $("#p1").css("background-color", "white");
        } else {
            player = 1;
            $("#current").text("Player 1");
            $("#p1").css("background-color", "yellow");
            $("#p2").css("background-color", "white");
        }
    } else {
        player = 1;
    }
}
//---------------------------------------------------

//--------Function for determining if die make a straight-------
const straightScore = () => {
    if(arrayOfDieCopy[0] == 1 && arrayOfDieCopy[1] == 2 && arrayOfDieCopy[2] == 3 && arrayOfDieCopy[3] == 4 && arrayOfDieCopy[4] == 5) {
        return true;
    }
    else if(arrayOfDieCopy[0] == 2 && arrayOfDieCopy[1] == 3 && arrayOfDieCopy[2] == 4 && arrayOfDieCopy[3] == 5 && arrayOfDieCopy[4] == 6) {
        return true;
    }
    else {
        return false;
    }
}

const straightScore2 = () => {
    if(arrayOfDieCopy.includes(1) && arrayOfDieCopy.includes(2) && arrayOfDieCopy.includes(3) && arrayOfDieCopy.includes(4)) {
        return true;
    }
    else if (arrayOfDieCopy.includes(2) && arrayOfDieCopy.includes(3) && arrayOfDieCopy.includes(4) && arrayOfDieCopy.includes(5)) {
        return true;
    }
    else if (arrayOfDieCopy.includes(3) && arrayOfDieCopy.includes(4) && arrayOfDieCopy.includes(5) && arrayOfDieCopy.includes(6)) {
        return true;
    }
    else {
        return false;
    }
}
//------------------------------------------------------

//------------Class for scoring one-six------------------
class Scoring {
    constructor(arr, num) {
        this.arr = arr;
        this.num = num;
    }
    Calculate() {
        let score = 0;
        for(let i = 0; i < 5; i++) {
            if(this.arr[i] == this.num) {
                score += this.num;
            }
        }
        return score;
    }
}
//-----------------------------------------------------

//-----------Loops through dice values, gets sum-----
const DieLoop = arrayOfDie => {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        sum += arrayOfDie[i];
    }
    return sum;
}
//

//------------Game Over Function--------------
const isGameOver = () => {
    if(playerCount() == 1 && totalTurns == 13){
            $("#finalScore").text(totalScore);
            alert("Game Over! Score: " +totalScore);
            $("#roll").addClass("hide");
            $("#next").addClass("hide");
        }
        if(playerCount() == 2 && totalTurns == 26) {
            $("#finalScore").text(totalScore);
            $("#finalScore2").text(totalScore2);
            const winner = document.getElementById("winner");
            const winh2 = document.createElement("h2"); 
            if(totalScore > totalScore2) {
                const msg = document.createTextNode("Player 1 WINS!");
                winh2.appendChild(msg);
                winner.appendChild(winh2);
                alert("Player 1 WINS!");
            } else {
                const msg = document.createTextNode("Player 2 WINS!");
                winh2.appendChild(msg);
                winner.appendChild(winh2);
                alert("Player 2 WINS!");
            }
            $("#roll").addClass("hide");
            $("#next").addClass("hide");
        }
}
//--------------------------------------------

//------Disable the click events that add to scoreboard-----
const disableClicks = () => {
    $("tr").css("pointer-events", "none");
} //the disableClicks function prevents players from tallying multiple scores in one turn
const enableClicks = () => {
    $("tr").css("pointer-events", "auto");
} //the enableClicks function undo's the disableClicks function
//---------------------------------------------------------

//-----------Most Global variables---------------
const turnMax = 3; //player has 3 rolls
let turnCount = 0; //will increment
let totalTurns = 0; //increments per turn

let totalScore = 0;
let totalScore2 = 0;
let score = 0; //scoring variables

let die1 = 0; //variables for holding dice values
let die2 = 0;
let die3 = 0;
let die4 = 0;
let die5 = 0;
//--------------------------------------------



//------------------------Prescore functions--------------------------
let preScoreOnes = arrayOfDie => {
    score = 0;
    const onesScoring = new Scoring(arrayOfDie, 1);
    score = onesScoring.Calculate();
        if (player == 1) {
            if($("#onesScore").hasClass("counted")) {
                return 0;
            } else {
                $("#onesScore").addClass("count");
                $("#onesScore").text(score);
            }
        } 
        if (player == 2){
            if($("#onesScore2").hasClass("counted")) {
                return 0;
            } else {
                $("#onesScore2").addClass("count");
                $("#onesScore2").text(score);
            }
        }
}

let preScoreTwos = arrayOfDie => {
    score = 0;
    const twosScoring = new Scoring(arrayOfDie, 2);
    score = twosScoring.Calculate();
        if (player == 1) {
            if($("#twosScore").hasClass("counted")) {
                return 0;
            } else {
                $("#twosScore").addClass("count");
                $("#twosScore").text(score);
            }
        } 
        if (player == 2){
            if($("#twosScore2").hasClass("counted")) {
                return 0;
            } else {
                $("#twosScore2").addClass("count");
                $("#twosScore2").text(score);
            }
        }
}

let preScoreThrees = arrayOfDie => {
    score = 0;
    const threesScoring = new Scoring(arrayOfDie, 3);
    score = threesScoring.Calculate();
        if (player == 1) {
            if($("#threesScore").hasClass("counted")) {
                return 0;
            } else {
                $("#threesScore").addClass("count");
                $("#threesScore").text(score);
            }
        } 
        if (player == 2){
            if($("#threesScore2").hasClass("counted")) {
                return 0;
            } else {
                $("#threesScore2").addClass("count");
                $("#threesScore2").text(score);
            }
        }
}

let preScoreFours = arrayOfDie => {
    score = 0;
    const foursScoring = new Scoring(arrayOfDie, 4);
    score = foursScoring.Calculate();
        if (player == 1) {
            if($("#foursScore").hasClass("counted")) {
                return 0;
            } else {
                $("#foursScore").addClass("count");
                $("#foursScore").text(score);
            }
        } 
        if (player == 2){
            if($("#foursScore2").hasClass("counted")) {
                return 0;
            } else {
                $("#foursScore2").addClass("count");
                $("#foursScore2").text(score);
            }
        }
}

let preScoreFives = arrayOfDie => {
    score = 0;
    const fivesScoring = new Scoring(arrayOfDie, 5);
    score = fivesScoring.Calculate();
        if (player == 1) {
            if($("#fivesScore").hasClass("counted")) {
                return 0;
            } else {
                $("#fivesScore").addClass("count");
                $("#fivesScore").text(score);
            }
        } 
        if (player == 2){
            if($("#fivesScore2").hasClass("counted")) {
                return 0;
            } else {
                $("#fivesScore2").addClass("count");
                $("#fivesScore2").text(score);
            }
        }
}

let preScoreSixes = arrayOfDie => {
    score = 0;
    const sixesScoring = new Scoring(arrayOfDie, 6);
    score = sixesScoring.Calculate();
        if (player == 1) {
            if($("#sixesScore").hasClass("counted")) {
                return 0;
            } else {
                $("#sixesScore").addClass("count");
                $("#sixesScore").text(score);
            }
        } 
        if (player == 2){
            if($("#sixesScore2").hasClass("counted")) {
                return 0;
            } else {
                $("#sixesScore2").addClass("count");
                $("#sixesScore2").text(score);
            }
        }
}

let preThreeKind = arr => {
    score = 0;
    if (arr[2] == arr[1] && arr[2] == arr[0]) { //compares the middle element with the lower indexs.
        score = DieLoop(arr); //just a for loop that sums all the array elements
    }
    if (arr[2] == arr[3] && arr[2] == arr[4]) { //compares the middle with the two higher indexs. 
        score = DieLoop(arr);
    }
    if (arr[2] == arr[1] && arr[2] == arr[3]) {
        score = DieLoop(arr);
    }
    if (player == 1) {
            if($("#threeKindScore").hasClass("counted")) {
                return 0;
            } else {
                $("#threeKindScore").addClass("count");
                $("#threeKindScore").text(score);
            }
        } 
        if (player == 2){
            if($("#threeKindScore2").hasClass("counted")) {
                return 0;
            } else {
                $("#threeKindScore2").addClass("count");
                $("#threeKindScore2").text(score);
            }
        }
}

let preFourKind = arr => {
    score = 0;
    if (arr[2] == arr[1] && arr[2] == arr[0] && arr[2] == arr[3]) {
        score = DieLoop(arr); //same logic as three-of-a-kind, one extra check
    }
    if(arr[2] == arr[3] && arr[2] == arr[4] && arr[2] == arr[1]) {
        score = DieLoop(arr);
    }
    if (player == 1) {
            if($("#fourKindScore").hasClass("counted")) {
                return 0;
            } else {
                $("#fourKindScore").addClass("count");
                $("#fourKindScore").text(score);
            }
        } 
        if (player == 2){
            if($("#fourKindScore2").hasClass("counted")) {
                return 0;
            } else {
                $("#fourKindScore2").addClass("count");
                $("#fourKindScore2").text(score);
            }
        }
}

let preFullHouse = arr => {
    score = 0;
    if (arr[2] == arr[1] && arr[2] == arr[0]) { //if three of them are equal
            if(arr[3] == arr[4]) { //if the other two are equal
                score = DieLoop(arr);
            }
        }
        if (arr[2] == arr[3] && arr[2] == arr[4]) {
            if(arr[0] == arr[1]) {
                score = DieLoop(arr);
            }
        }
    if (player == 1) {
            if($("#fullScore").hasClass("counted")) {
                return 0;
            } else {
                $("#fullScore").addClass("count");
                $("#fullScore").text(score);
            }
        } 
        if (player == 2){
            if($("#fullScore2").hasClass("counted")) {
                return 0;
            } else {
                $("#fullScore2").addClass("count");
                $("#fullScore2").text(score);
            }
        }
}

let preSmall = () => {
    score = 0;
    if(straightScore2() == true) { //if the return value of straightScore() function is true
        score = 30; //used a function as large straight is basically the same. score is hard set to 30 for small straight
    }
    else {
        score = 0;
    }
    if (player == 1) {
        if($("#smallScore").hasClass("counted")) {
            return 0;
        } else {
            $("#smallScore").addClass("count");
            $("#smallScore").text(score);
        }
    } 
    if (player == 2){
        if($("#smallScore2").hasClass("counted")) {
            return 0;
        } else {
            $("#smallScore2").addClass("count");
            $("#smallScore2").text(score);
        }
    }
}

let preLarge = () => {
    score = 0;
    if(straightScore() == true) { //if the return value of straightScore() function is true
        score = 40; //used a function as large straight is basically the same. score is hard set to 40
    }
    else {
        score = 0;
    }
    if (player == 1) {
        if($("#largeScore").hasClass("counted")) {
            return 0;
    } else {
        $("#largeScore").addClass("count");
        $("#largeScore").text(score);
    }
    } 
    if (player == 2){
        if($("#largeScore2").hasClass("counted")) {
            return 0;
    } else {
        $("#largeScore2").addClass("count");
        $("#largeScore2").text(score);
    }
    }
}

let preChance = arr => {
    score = DieLoop(arr); //chance just counts the sum of the dice no matter what
    if (player == 1) {
        if($("#chanceScore").hasClass("counted")) {
            return 0;
    } else {
        $("#chanceScore").addClass("count");
        $("#chanceScore").text(score);
    }
    } 
    if (player == 2){
        if($("#chanceScore2").hasClass("counted")) {
            return 0;
    } else {
        $("#chanceScore2").addClass("count");
        $("#chanceScore2").text(score);
        }
    }
}

let preYahtzee = arrayOfDie => {
    score = 0;
    let counter = 0;
    for(let i = 0; i < 4; i++) { //i goes from 0 to 4
        if(arrayOfDie[i] == arrayOfDie[i + 1]) { //(ie array[0] == array[1]) and so on
            counter++;
        }
    }
    if(counter == 4) { //if all elements are equal
        score = 50;
    }
    if (player == 1) {
        if($("#yahtzeeScore").hasClass("counted")) {
            return 0;
    } else {
        $("#yahtzeeScore").addClass("count");
        $("#yahtzeeScore").text(score);
    }
    } 
    if (player == 2){
    if($("#yahtzeeScore2").hasClass("counted")) {
        return 0;
    } else {
        $("#yahtzeeScore2").addClass("count");
        $("#yahtzeeScore2").text(score);
    }
    }
}
//-------------------------------------------------------------------

//-------------------New NextTurn function - gets rid of needing the next turn button, nicer user experience-------
let nextTurnFunc = () => {
    totalTurns++;
    $("#roll").removeClass("hide");
    turnCount = 0;
    arrayOfDie = [0, 0, 0, 0, 0];
    arrayOfDieCopy = [0, 0, 0, 0, 0];
    holdArr = [0, 0, 0, 0, 0];
    clearLockFunc();
    imgChange(arrayOfDie);

    preScoreOnes(arrayOfDie); //these are needed here before the changePlayer() so that the values from last turn
    preScoreTwos(arrayOfDie); //dont sit for an extra roll
    preScoreThrees(arrayOfDie);
    preScoreFours(arrayOfDie);
    preScoreFives(arrayOfDie);
    preScoreSixes(arrayOfDie);

    arrayOfDieCopy.sort();
    preThreeKind(arrayOfDieCopy);
    preFourKind(arrayOfDieCopy);
    preFullHouse(arrayOfDieCopy);
    preSmall();
    preLarge();
    preChance(arrayOfDie);

    isGameOver(); //making all of that into a function lessens the clutter of this event
    changePlayer();
    enableClicks();
    $(".scorebox").val(0);
}
//------------------------------------------------------------------------------------------------------

//----------------------------when the document loads---------------------------------------
$(document).ready(() => {
    
    //---------Accordion jQuery------
    $( "#accordion" ).accordion({
        event: "click",
        collapsible: true,
        active: false,
        height: "content"
    });
    //-------------------------------
    
    //-------Simple new game event-------
    $("#newGame").click(() =>{
        location.reload(true);
    });
    //-----------------------------------
    
    //----------A few things that need to occur when the DOM is loaded rather than after an event
    //alert("Please select the number of players"); //this alert gets annoying when doing a new game, so just leaving it out entirely
    holdFunc(); //needs to be outside of roll click function
    $("#count").removeClass("hide");
    $("#current").text("Player 1"); //needs to happen outside of any click event, else it takes one turn to show
    //-------------------------------------------------------------
    
    //----------function that controls the rng, image changes, and roll button----------
    $("#roll").click(() => {
        turnCount++;
        
        $(":radio[name='Players']").attr("disabled", true); //prevents any error from occurring from reselecting player count
        playerCount();
        
        $("boxes").each(function() {
        if ($("boxes").hasClass("count")) {
            $("boxes").text("");
            $("boxes").removeClass("count");
        }
        });
        
        if(holdArr[0] == 0) { //So long as the hold array element doesn't get set to 1
            $("#score1").val(getDiceRoll()); //put the return val of getDice Roll into the score1 textbox
            die1 = parseInt($("#score1").val()); //set the dice value to that same value
        }
        
        if(holdArr[1] == 0) {
            $("#score2").val(getDiceRoll());
            die2 = parseInt($("#score2").val());
        }
        
        if(holdArr[2] == 0) {
            $("#score3").val(getDiceRoll());
            die3 = parseInt($("#score3").val());
        }

        if(holdArr[3] == 0) {
            $("#score4").val(getDiceRoll());
            die4 = parseInt($("#score4").val());
        }

        if(holdArr[4] == 0) {
            $("#score5").val(getDiceRoll());
            die5 = parseInt($("#score5").val());
            //$("#dice5").attr("src", "images/dice"+die5+".png");    
        }
        
        arrayOfDie = [die1, die2, die3, die4, die5]; //sets the array of dice to the values
        
        try { //try/catch block. An error should never occur here
            imgChange(arrayOfDie);
        } catch(err) {
            const div = document.getElementById("errMsg"); //all of this javascript is unaffected
            const theHTML = document.createElement("h2"); //by use of jquery, which is pretty interesting
            const message = document.createTextNode(err.name + ": " + err.message);
            theHTML.appendChild(message);
            div.appendChild(theHTML);
        }
        
        if (turnCount == turnMax) { //after 3 turns
            $("#roll").addClass("hide");
        }
        
        arrayOfDieCopy = [die1, die2, die3, die4, die5];
         
        preScoreOnes(arrayOfDie);
        preScoreTwos(arrayOfDie);
        preScoreThrees(arrayOfDie);
        preScoreFours(arrayOfDie);
        preScoreFives(arrayOfDie);
        preScoreSixes(arrayOfDie);
        
        arrayOfDieCopy.sort();
        
        preThreeKind(arrayOfDieCopy); //sorting the first arrayOfDie would cause issues with the image swaps
        //had to specifically make a copy of the elements of the array, couldn't just set it to the original array.
        preFourKind(arrayOfDieCopy);
        preFullHouse(arrayOfDieCopy);
        preSmall();
        preLarge();
        preChance(arrayOfDie);
        preYahtzee(arrayOfDie);
        
    }); //end of roll click function
    
    //-----Start of the main click events, calculate score and put it into the scoreboard--------
        $("#ones").click(()=> {
            //$("#roll").addClass("hide"); unnecessary after removing next turn button
            if(player == 1){ //in player 1's case
                    if($("#onesScore").hasClass("count")) { //if it is one of those temporary numbers
                        $("#onesScore").removeClass("count"); //take away the red color/ the tell of being a prescore
                        totalScore += parseInt($("#onesScore").text()); 
                        $("#onesScore").addClass("counted"); //essentially locks the score in
                        disableClicks(); //disables the other click events - mostly obsolete now that the next turn button is gone
                        nextTurnFunc(); //resets everything necessary
                }
            } else {
                    if($("#onesScore2").hasClass("count")) {
                        $("#onesScore2").removeClass("count");
                        totalScore2 += parseInt($("#onesScore2").text());
                        $("#onesScore2").addClass("counted");
                        disableClicks();
                        nextTurnFunc();
                    }
            }
        });
    
        $("#twos").click(()=> {
            if(player == 1){
                if($("#twosScore").hasClass("count")) {
                    $("#twosScore").removeClass("count");
                    totalScore += parseInt($("#twosScore").text());
                    $("#twosScore").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            } else {
                if($("#twosScore2").hasClass("count")) {
                    $("#twosScore2").removeClass("count");
                    totalScore2 += parseInt($("#twosScore2").text());
                    $("#twosScore2").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            }
        });
    
        $("#threes").click(()=> {
            if(player == 1){
                if($("#threesScore").hasClass("count")) {
                        $("#threesScore").removeClass("count");
                        totalScore += parseInt($("#threesScore").text());
                        $("#threesScore").addClass("counted");
                        disableClicks();
                        nextTurnFunc();
                }
            } else {
                if($("#threesScore2").hasClass("count")) {
                    $("#threesScore2").removeClass("count");
                    totalScore2 += parseInt($("#threesScore2").text());
                    $("#threesScore2").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            }
        });
    
        $("#fours").click(()=> {
            if(player == 1){
                if($("#foursScore").hasClass("count")) {
                    $("#foursScore").removeClass("count");
                    totalScore += parseInt($("#foursScore").text());
                    $("#foursScore").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            } else {
                if($("#foursScore2").hasClass("count")) {
                    $("#foursScore2").removeClass("count");
                    totalScore2 += parseInt($("#foursScore2").text());
                    $("#foursScore2").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            }
        });
    
        $("#fives").click(()=> {
            if(player == 1){
                if($("#fivesScore").hasClass("count")) {
                    $("#fivesScore").removeClass("count");
                    totalScore += parseInt($("#fivesScore").text());
                    $("#fivesScore").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            } else {
                if($("#fivesScore2").hasClass("count")) {
                    $("#fivesScore2").removeClass("count");
                    totalScore2 += parseInt($("#fivesScore2").text());
                    $("#fivesScore2").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            }
        });
    
        $("#sixes").click(()=> {
            if(player == 1){
                if($("#sixesScore").hasClass("count")) {
                    $("#sixesScore").removeClass("count");
                    totalScore += parseInt($("#sixesScore").text());
                    $("#sixesScore").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            } else {
                if($("#sixesScore2").hasClass("count")) {
                    $("#sixesScore2").removeClass("count");
                    totalScore2 += parseInt($("#sixesScore2").text());
                    $("#sixesScore2").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            }
        });
    
        $("#three-of-a-kind").click(() => {
            if(player == 1){
                if($("#threeKindScore").hasClass("count")) {
                    $("#threeKindScore").removeClass("count");
                    totalScore += parseInt($("#threeKindScore").text());
                    $("#threeKindScore").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            } else {
                if($("#threeKindScore2").hasClass("count")) {
                    $("#threeKindScore2").removeClass("count");
                    totalScore2 += parseInt($("#threeKindScore2").text());
                    $("#threeKindScore2").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            }
        });
        
    $("#four-of-a-kind").click(() => {
            if(player == 1){
                if($("#fourKindScore").hasClass("count")) {
                    $("#fourKindScore").removeClass("count");
                    totalScore += parseInt($("#fourKindScore").text());
                    $("#fourKindScore").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            } else {
                if($("#fourKindScore2").hasClass("count")) {
                    $("#fourKindScore2").removeClass("count");
                    totalScore2 += parseInt($("#fourKindScore2").text());
                    $("#fourKindScore2").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            }
    });
    
    $("#full-house").click(() =>{
            if(player == 1){
                if($("#fullScore").hasClass("count")) {
                    $("#fullScore").removeClass("count");
                    totalScore += parseInt($("#fullScore").text());
                    $("#fullScore").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            } else {
                if($("#fullScore2").hasClass("count")) {
                    $("#fullScore2").removeClass("count");
                    totalScore2 += parseInt($("#fullScore2").text());
                    $("#fullScore2").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            }
    });
    
    $("#small-straight").click(() => {
            if(player == 1){
                if($("#smallScore").hasClass("count")) {
                    $("#smallScore").removeClass("count");
                    totalScore += parseInt($("#smallScore").text());
                    $("#smallScore").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            } else {
                if($("#smallScore2").hasClass("count")) {
                    $("#smallScore2").removeClass("count");
                    totalScore2 += parseInt($("#smallScore2").text());
                    $("#smallScore2").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            }
    });
    
    $("#large-straight").click(() => {
            if(player == 1){
                if($("#largeScore").hasClass("count")) {
                    $("#largeScore").removeClass("count");
                    totalScore += parseInt($("#largeScore").text());
                    $("#largeScore").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            } else {
                if($("#largeScore2").hasClass("count")) {
                    $("#largeScore2").removeClass("count");
                    totalScore2 += parseInt($("#largeScore2").text());
                    $("#largeScore2").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            }
    });
    
    $("#chance").click(() => {
            if(player == 1){
                if($("#chanceScore").hasClass("count")) {
                    $("#chanceScore").removeClass("count");
                    totalScore += parseInt($("#chanceScore").text());
                    $("#chanceScore").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            } else {
                if($("#chanceScore2").hasClass("count")) {
                    $("#chanceScore2").removeClass("count");
                    totalScore2 += parseInt($("#chanceScore2").text());
                    $("#chanceScore2").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            }
    });
    
    $("#yahtzee").click(() => {
            if(player == 1){
                if($("#yahtzeeScore").hasClass("count")) {
                    $("#yahtzeeScore").removeClass("count");
                    totalScore += parseInt($("#yahtzeeScore").text());
                    $("#yahtzeeScore").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            } else {
                if($("#yahtzeeScore2").hasClass("count")) {
                    $("#yahtzeeScore2").removeClass("count");
                    totalScore2 += parseInt($("#yahtzeeScore2").text());
                    $("#yahtzeeScore2").addClass("counted");
                    disableClicks();
                    nextTurnFunc();
                }
            }
    });
    //---------------------End of the click events for scoring----------------------------
    });
    //---------------------End of Ready function/ End of Program--------------------------



//-------Saving old click functions in case something goes terribly wrong-----

 /*
    $("#ones").click(() => {
        score = 0;
        const onesScoring = new Scoring(arrayOfDie, 1); //since 1 - 6 score so similarly, was able to make
        score = onesScoring.Calculate(); //into a class and use objects
        if(player == 1){ //in player 1's case
                if($("#onesScore").text() == "") { //so long as a score isn't already in the box
                    $("#roll").addClass("hide");
                    $("#onesScore").text(score);
                    totalScore += score;
                    disableClicks();
                }
            } else {
                if($("#onesScore2").text() == "") {
                    $("#roll").addClass("hide");
                        $("#onesScore2").text(score);
                        totalScore2 += score;
                        disableClicks();
                    }
                   }
    });
    
    
    
    
        $("#twos").click(()=> {
            score = 0;
            const twosScoring = new Scoring(arrayOfDie, 2);
            score = twosScoring.Calculate();
            if(player == 1){
                if($("#twosScore").text() == "") {
                    $("#roll").addClass("hide");
                    $("#twosScore").text(score);
                    totalScore += score;
                    disableClicks();
                }
            } else {
                if($("#twosScore2").text() == "") {
                    $("#roll").addClass("hide");
                    $("#twosScore2").text(score);
                    totalScore2 += score;
                    disableClicks();
                }
            }
        });
    
        $("#threes").click(()=> {
            score = 0;
            const threesScoring = new Scoring(arrayOfDie, 3);
            score = threesScoring.Calculate();
            if(player == 1){
                if($("#threesScore").text() == "") {
                    $("#roll").addClass("hide");
                    $("#threesScore").text(score);
                    totalScore += score;
                    disableClicks();
                }
            } else {
                if($("#threesScore2").text() == "") {
                    $("#roll").addClass("hide");
                    $("#threesScore2").text(score);
                    totalScore2 += score;
                    disableClicks();
                }
            }
        });
    
        $("#fours").click(()=> {
            score = 0;
            const foursScoring = new Scoring(arrayOfDie, 4);
            score = foursScoring.Calculate();
            if(player == 1){
                if($("#foursScore").text() == "") {
                    $("#roll").addClass("hide");
                    $("#foursScore").text(score);
                    totalScore += score;
                    disableClicks();
                }
            } else {
                if($("#foursScore2").text() == "") {
                    $("#roll").addClass("hide");
                    $("#foursScore2").text(score);
                    totalScore2 += score;
                    disableClicks();
                }
            }
        });
    
        $("#fives").click(()=> {
            score = 0;
            const fivesScoring = new Scoring(arrayOfDie, 5);
            score = fivesScoring.Calculate();
            if(player == 1){
                if($("#fivesScore").text() == "") {
                    $("#roll").addClass("hide");
                    $("#fivesScore").text(score);
                    totalScore += score;
                    disableClicks();
                }
            } else {
                if($("#fivesScore2").text() == "") {
                    $("#roll").addClass("hide");
                    $("#fivesScore2").text(score);
                    totalScore2 += score;
                    disableClicks();
                }
            }
        });
    
        $("#sixes").click(()=> {
            score = 0;
            const sixesScoring = new Scoring(arrayOfDie, 6);
            score = sixesScoring.Calculate();
            if(player == 1){
                if($("#sixesScore").text() == "") {
                    $("#roll").addClass("hide");
                    $("#sixesScore").text(score);
                    totalScore += score;
                    disableClicks();
                }
            } else {
                if($("#sixesScore2").text() == "") {
                    $("#roll").addClass("hide");
                    $("#sixesScore2").text(score);
                    totalScore2 += score;
                    disableClicks();
                }
            }
        });
        
        $("#three-of-a-kind").click(() =>{
            score = 0;
            arrayOfDie.sort(); //sorts the array, these more complicated scoring methods need it
            if (arrayOfDie[2] == arrayOfDie[1] && arrayOfDie[2] == arrayOfDie[0]) { //compares the middle element with the lower indexs. works when the three-kind are lower than the pair that isnt being tallied
                    score = DieLoop(arrayOfDie); //just a for loop that sums all the array elements
            }
            if (arrayOfDie[2] == arrayOfDie[3] && arrayOfDie[2] == arrayOfDie[4]) { //compares the middle with the two higher indexs. works when the three kind is highest (ie 6) than the pair of randoms (1, 5) 
                    score = DieLoop(arrayOfDie);
            }
            if(player == 1) {
                if($("#threeKindScore").text() == "") {
                    $("#roll").addClass("hide");
                    $("#threeKindScore").text(score);
                    totalScore += score;
                    disableClicks();
                }
            } else {
                if($("#threeKindScore2").text() == "") {
                    $("#roll").addClass("hide");
                    $("#threeKindScore2").text(score);
                    totalScore2 += score;
                    disableClicks();
                }
            }
        });
        
    $("#four-of-a-kind").click(() => {
        score = 0;
        arrayOfDie.sort();
        if (arrayOfDie[2] == arrayOfDie[1] && arrayOfDie[2] == arrayOfDie[0] && arrayOfDie[2] == arrayOfDie[3]) {
                score = DieLoop(arrayOfDie); //same logic as three-of-a-kind, one extra check
        }
        if(arrayOfDie[2] == arrayOfDie[3] && arrayOfDie[2] == arrayOfDie[4] && arrayOfDie[2] == arrayOfDie[1]) {
                score = DieLoop(arrayOfDie);
        }
        if(player == 1) {
            if($("#fourKindScore").text() == "") {
                $("#roll").addClass("hide");
                $("#fourKindScore").text(score);
                totalScore += score;
                disableClicks();
            }
        } else {
            if($("#fourKindScore2").text() == "") {
                $("#roll").addClass("hide");
                $("#fourKindScore2").text(score);
                totalScore2 += score;
                disableClicks();
            }
        }
        
    });
    
    $("#full-house").click(() =>{
        score = 0;
        arrayOfDie.sort();
        if (arrayOfDie[2] == arrayOfDie[1] && arrayOfDie[2] == arrayOfDie[0]) { //if three of them are equal
            if(arrayOfDie[3] == arrayOfDie[4]) { //if the other two are equal
                score = DieLoop(arrayOfDie);
            }
        }
        if (arrayOfDie[2] == arrayOfDie[3] && arrayOfDie[2] == arrayOfDie[4]) { //was else if
            if(arrayOfDie[0] == arrayOfDie[1]) {
                score = DieLoop(arrayOfDie);
            }
        }
        //had else score =0
        if(player == 1) {
            if($("#fullScore").text() == "") {
                $("#roll").addClass("hide");
                $("#fullScore").text(score);
                totalScore += score;
                disableClicks();
            }
        } else {
            if($("#fullScore2").text() == "") {
                $("#roll").addClass("hide");
                $("#fullScore2").text(score);
                totalScore2 += score;
                disableClicks();
            }
        }
    });
    
    $("#small-straight").click(() => {
        score = 0;
        arrayOfDie.sort();
        if(straightScore() == true) { //if the return value of straightScore() function is true
            score = 30; //used a function as large straight is basically the same. score is hard set to 30 for small straight
        }
        else {
            score = 0;
        }
        if(player == 1) {
            if($("#smallScore").text() == "") {
                $("#roll").addClass("hide");
                $("#smallScore").text(score);
                totalScore += score;
                disableClicks();
            }
        } else {
            if($("#smallScore2").text() == "") {
                $("#roll").addClass("hide");
                $("#smallScore2").text(score);
                totalScore2 += score;
                disableClicks();
            }
            
        }
    });
    
    $("#large-straight").click(() => {
        score = 0;
        arrayOfDie.sort();
        if(straightScore() == true) {
            score = 40; //large straight score is hard set to 40
        }
        else {
            score = 0;
        }
        if(player == 1) {
            if($("#largeScore").text() == "") {
                $("#roll").addClass("hide");
                $("#largeScore").text(score);
                totalScore += score;
                disableClicks();
            }
        } else {
            if($("#largeScore2").text() == "") {
                $("#roll").addClass("hide");
                $("#largeScore2").text(score);
                totalScore2 += score;
                disableClicks();
            }
        }
    });
    
    $("#chance").click(() => {
        score = DieLoop(arrayOfDie); //chance just counts the sum of the dice no matter what
        if(player == 1) {
            if($("#chanceScore").text() == "") {
                $("#roll").addClass("hide");
                $("#chanceScore").text(score);
                totalScore += score;
                disableClicks();
            }
        } else {
            if($("#chanceScore2").text() == "") {
                $("#roll").addClass("hide");
                $("#chanceScore2").text(score);
                totalScore2 += score;
                disableClicks();
            }
        }
    });
    
    $("#yahtzee").click(() => {
        score = 0;
        let counter = 0;
        for(let i = 0; i < 4; i++) { //i goes from 0 to 4
            if(arrayOfDie[i] == arrayOfDie[i + 1]) { //(ie array[0] == array[1]) and so on
                counter++;
            }
        }
        if(counter == 4) { //if all elements are equal
            score = 50;
        }
        if(player == 1) {
            if($("#yahtzeeScore").text() == "") {
                $("#roll").addClass("hide");
                $("#yahtzeeScore").text(score);
                totalScore += score;
                disableClicks();
                
            }
        } else {
            if($("#yahtzeeScore2").text() == "") {
                $("#roll").addClass("hide");
                $("#yahtzeeScore2").text(score);
                totalScore2 += score;
                disableClicks();
            }
        }
    });
        
    */

    //--Next button click event. Adds to turn, shows roll button, resets necessary var---
   /* $("#next").click(()=> { //controls next turn, ends game after 13 turns/26 turns
        totalTurns++;
        $("#roll").removeClass("hide");
        turnCount = 0;
        arrayOfDie = [0, 0, 0, 0, 0];
        arrayOfDieCopy = [0, 0, 0, 0, 0];
        holdArr = [0, 0, 0, 0, 0];
        clearLockFunc();
        imgChange(arrayOfDie);
        
        preScoreOnes(arrayOfDie); //these are needed here before the changePlayer() so that the values from last turn
        preScoreTwos(arrayOfDie); //dont sit for an extra roll
        preScoreThrees(arrayOfDie);
        preScoreFours(arrayOfDie);
        preScoreFives(arrayOfDie);
        preScoreSixes(arrayOfDie);
        
        arrayOfDieCopy.sort();
        preThreeKind(arrayOfDieCopy);
        preFourKind(arrayOfDieCopy);
        preFullHouse(arrayOfDieCopy);
        preSmall();
        preLarge();
        preChance(arrayOfDie);
        
        isGameOver(); //making all of that into a function lessens the clutter of this event
        changePlayer();
        enableClicks();
        $(".scorebox").val(0);
        
    }); */
    //--this COULD be put into a function entirely, then added to the end of every score click event---