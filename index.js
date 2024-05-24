let num;

function dice(){
    // document.querySelector("h1")
    num1 = (Math.floor(Math.random()*5) + 1);
    num2 = (Math.floor(Math.random()*5) + 1);
    console.log("player one got : " + num1);
    console.log("player two got : " + num2);

    document.getElementById("player1-img").src = `./img/dice-six-faces-${num1}.png`;
    document.getElementById("player2-img").src = `./img/dice-six-faces-${num2}.png`;

    if(num1 > num2){
        document.querySelector("h1").textContent = "Player 1 wins";
    } else if(num1 < num2){
        document.querySelector("h1").textContent = "Player 2 wins";
    }else{
        document.querySelector("h1").textContent = "Draw";
    }
}



    