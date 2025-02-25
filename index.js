function dicee() { 

    var randomNumber1 = Math.floor(Math.random()*6) +1;
    var randomNumber2 = Math.floor(Math.random()*6) +1;

    var images1 ="assets/img/dice" + randomNumber1 +".png";
    var images2 ="assets/img/dice" + randomNumber2 +".png";

    document.querySelector(".diceOne").setAttribute("src", images1);
    document.querySelector(".diceTwo").setAttribute("src", images2);

        if (randomNumber1 > randomNumber2) {
            document.querySelector("h2").textContent = "Player 1 Wins!";
        } else if (randomNumber1 < randomNumber2) {
            document.querySelector("h2").textContent = "Player 2 Wins!";
        } else {
            document.querySelector("h2").textContent = "Draw!";
        }

} 