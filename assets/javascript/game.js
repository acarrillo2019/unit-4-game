$( document ).ready(function() {

   resetGame();

   $(".jewelImages").on("click",function() {
      // console.log($(this).attr("id"));
      // console.log(this);

      // Clear previous game status on first gem click in new game
      if (playerScore===0) {
          $("#status").fadeOut();
          // $("#status").html("");
      }

      // Add selected gem value to playerScore
      addScore($(this).attr("id"));

      if (playerScore === randGet) {
          wins++;
          $("#status").html("You Win!");
          $("#status").fadeIn();
          resetGame();
      }
      else if (playerScore > randGet) {
          losses++;
          $("#status").html("You Lose!");
          $("#status").fadeIn();
          resetGame();
      }
});
})

var playerScore;
var randGet;
var wins = 0;
var losses = 0;

var jewel1 = new Gem(); 
var jewel2 = new Gem();
var jewel3 = new Gem();
var jewel4 = new Gem();

function Gem (value) {
   this.value = value;
}

function addScore(gem) {
   switch(gem) {
       case "jewel1":
           playerScore += jewel1.value;
           break;
       case "jewel2":
           playerScore += jewel2.value;
           break;
       case "jewel3":
           playerScore += jewel3.value;
           break;
       case "jewel4":
           playerScore += jewel4.value;
           break;
   }
   // Display the new score
   $("#playerScore").html(playerScore);
}

function resetGame() {
   var powersArr = [];
   playerScore = 0;
   const numArray = () => {
      // Function to generate random number  
      function randomNumber(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
      }
      randGet = (randomNumber(19, 99));
      return randGet;
  }
   

   jewel1.value = getRandomPower(powersArr);
   jewel2.value = getRandomPower(powersArr);
   jewel3.value = getRandomPower(powersArr);
   jewel4.value = getRandomPower(powersArr);



   console.log("Red:" + jewel1.value);
   console.log("Blue:" + jewel2.value);
   console.log("Green:" + jewel3.value);
   console.log("Purple:"+ jewel4.value);


   // Display values
   $("#playerScore").html(playerScore);
   $("#thirdRowBox").html(numArray);
   $("#wins").html(wins);
   $("#losses").html(losses);
}
 
function getRandomPower(pa) {
   var power;

   // Loop until a unique power value is generated
   do {
       power = Math.floor(Math.random() * 12)+1;
   } while(pa.includes(power));

   pa.push(power);

   return power;
}