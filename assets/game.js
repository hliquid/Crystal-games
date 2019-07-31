/* The game opens up the user sees the title of the game and a set of instructions
as well as some images of different crystals.
The user will be given a random number of 50-100 they have to match using the crytals.
The crystals themselves will have different randomized numbers 1-10. 
if the user matches the given number correctly a win counter will increase by 1.
if the user goes over the given number the losses counter will go up by 1.
each time a player wins/losses the game restarts with a new given number, and different random numbers on the crystal*/

let randomNumber = 47


$(".random-num").text(randomNumber)

let counter = 0;

let numberOptions = [10, 5, 3, 7];

for (let i = 0; i < numberOptions.length; i++) {
    const gameImage = $("<img>");
    gameImage.addClass("game-image");
    gameImage.attr("src", "assets/crystal.jpeg")
    gameImage.attr("data-crystalvalue", numberOptions[i]);
    $("crystals")
}

$(".game-image").on("click", function() {
    const crystalValue = ($(this).attr("data-crytalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    alert("New Score: " + counter);
    if (counter === randomNumber) {
        alert("You win!");
    }
    else if (counter >= randomNumber) {
        alert("you lose!");
    
    }
    console.log(this);
});

