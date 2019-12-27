
$( document ).ready(function() {
/*
Here's how the app works:

   * There will be four crystals displayed as buttons on the page.
        - each crystal will have a different value. One will be worth 1, another worth 5, another worth 25, and another worth 50.

   * The player will be shown a random number at the start of the game.
        - Create random number generator and display it in its own div on page.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * Your game will hide this amount until the player clicks a crystal. 
        - The crystal values will randomize each game.
     * When they do click one, update the player's score counter.
        -Crystal clicks/worths will update on counter in its own div.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
*/

let jewel1 = $("#jewel1") 
let jewel2 = $("#jewel2")
let jewel3 = $("#jewel3")
let jewel4 = $("#jewel4")

const jewelValues = [1, 5, 25 ,50]


// random number generator
const numArray = () => {
    // Function to generate random number  
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    randGet = (randomNumber(19, 99));
    return randGet;
}

const assignValues = () => { 
   var assign1 = jewelValues[Math.floor(Math.random() * jewelValues.length)];
   let jewel1 = assign1;
      if (jewel1 = 1) {
         jewel2 = 50;
         jewel3 = 5;
         jewel4 = 25;
      } else if (jewel1 = 5) {
         jewel2 = 1;
         jewel3 = 50;
         jewel4 = 25;
      } else if (jewel1 = 25) {
         jewel2 = 50;
         jewel3 = 1;
         jewel4 = 5
      } else if (jewel1 = 50) {
         jewel2 = 1;
         jewel3 = 25;
         jewel4 = 5;
      }

}


console.log(numArray())

});