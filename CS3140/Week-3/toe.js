let board = document.getElementById("gameboard");

let gameData = [
    [,,],
    [,,],
    [,,]
]

let turnPlayer = 0;

board.addEventListener("click", (e) => {
    console.log(e.target.id);
    console.dir(e);

    if(e.target.innerHTML === ""){
        if(turnPlayer % 2 === 0){
            e.target.innerHTML = "X";
        } else {
            e.target.innerHTML = "O";
        }
        turnPlayer++;
    }
   
});
