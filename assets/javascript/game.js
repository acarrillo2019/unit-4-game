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




const numArray = () => {

    // Function to generate random number  
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    document.write("Random Number between 1 and 100: ")

    // Function call 
    document.write(randomNumber(19, 99));

}


numArray()