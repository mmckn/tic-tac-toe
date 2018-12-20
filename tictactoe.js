

var num1 = document.querySelectorAll(".box1");

var num2 = document.querySelectorAll(".box2");
var num3 = document.querySelectorAll(".box3");
var num4 = document.querySelectorAll(".box4");
var num5 = document.querySelectorAll(".box5");
var num6 = document.querySelectorAll(".box6");
var num7 = document.querySelectorAll(".box7");
var num8 = document.querySelectorAll(".box8");
var num9 = document.querySelectorAll(".box9");

 function checkWin(){
 	if (
    (player1.includes(1) && player1.includes(2) &&player1.includes(3))
    ||(player1.includes(4) &&player1.includes(5) &&player1.includes(6))
    ||(player1.includes(7) &&player1.includes(8) &&player1.includes(9))
    ||(player1.includes(1) &&player1.includes(4) &&player1.includes(7))
    ||(player1.includes(2) &&player1.includes(5) &&player1.includes(8))
    ||(player1.includes(3) &&player1.includes(6) &&player1.includes(9))
    ||(player1.includes(1) &&player1.includes(5) &&player1.includes(9))
    ||(player1.includes(3) &&player1.includes(5) &&player1.includes(7))
    ){
    	
    showWinner("player 1 wins!");

    }
    else if( 
    (player2.includes(1) && player2.includes(2) && player2.includes(3))
    ||(player2.includes(4) && player2.includes(5) && player2.includes(6))
    ||(player2.includes(7) && player2.includes(8) && player2.includes(9))
    ||(player2.includes(1) && player2.includes(4) && player2.includes(7))
    ||(player2.includes(2) && player2.includes(5) && player2.includes(8))
    ||(player2.includes(3) && player2.includes(6) && player2.includes(9))
    ||(player2.includes(1) && player2.includes(5) && player2.includes(9))
    ||(player2.includes(3) && player2.includes(5) && player2.includes(7))
    ){
    	
    showWinner("player 2 wins!");

    }
    else if(count === 10)
    {
showWinner("draw!");

}



};
var player1 = [];
var player2 =[];






var count = 1;
var returnNumber = function(x,y){
	

	x.forEach(function(item){

		item.addEventListener("click", function(){
			console.log(num1);
			
			count++;
			console.log(count);
			
			if (count %  2 == 0){
				
				player1.push(y);
				item.classList.add("p1");
				checkWin();

			
				
			}

else {
	item.classList.add("p2");
	player2.push(y);
	checkWin();
}


	})});
};
returnNumber(num1, 1);
returnNumber(num2, 2);
returnNumber(num3, 3);
returnNumber(num4, 4);
returnNumber(num5, 5);
returnNumber(num6, 6);
returnNumber(num7, 7);
returnNumber(num8, 8);
returnNumber(num9, 9);

function showWinner(x){
var win = document.querySelector(".win")
var box = document.querySelector(".boxlayout")
box.classList.add("boxhidden");
var winMessage = document.createElement("p");
winMessage.classList.add("wincss");
winMessage.id = "win";
win.appendChild(winMessage);
var reset = document.createElement("button");
reset.classList.add("reset");
reset.innerHTML = "New Game";
reset.id ="reset";
win.appendChild(reset);

winMessage.innerHTML =`${x}`;
resetGame();
}

function resetGame(){
    var winMessage = document.getElementById("win");
var box = document.querySelector(".boxlayout");
var allBoxes = document.querySelectorAll(".boxstyle");
    var reset = document.getElementById("reset");
reset.addEventListener("click", function(){
    count = 1;
    winMessage.parentNode.removeChild(winMessage);
    reset.parentNode.removeChild(reset);

    box.classList.remove("boxhidden");
    allBoxes.forEach(function(item){
        item.classList.remove("p1");
        item.classList.remove("p2");
        player1 = [];
        player2 = [];
    });


})

}
