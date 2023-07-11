let allCell = document.querySelectorAll(".cell");
let winnersDisplay = document.querySelector(".winnersDisplay");
let winnerName = document.querySelector(".winnerName");
let currentClass = true;

allCell.forEach((cell,index)=>{
    cell.addEventListener("click",whenClicked,{once:true});
    

    function whenClicked(){
        if(currentClass){
            cell.classList.add("cross");
        }else{
            cell.classList.add("circle");
        }

        winnerChecker();
        swapClass();   
    }
});


function swapClass(){
    currentClass = !currentClass;
}


function winnerChecker(){
    // for X winner

    if(
        allCell[0].classList.contains("cross") && allCell[1].classList.contains("cross") && allCell[2].classList.contains("cross")
    ){
        winnersDisplay.style.display = "flex";
        winnerName.innerHTML = "X is WINNER"; 
    }else if(
        allCell[3].classList.contains("cross") && allCell[4].classList.contains("cross") && allCell[5].classList.contains("cross")
    ){
        winnersDisplay.style.display = "flex";
        winnerName.innerHTML = "X is WINNER";
    }else if(
        allCell[6].classList.contains("cross") && allCell[7].classList.contains("cross") && allCell[8].classList.contains("cross")
    ){
        winnersDisplay.style.display = "flex";
        winnerName.innerHTML = "X is WINNER";
    }else if(
        allCell[0].classList.contains("cross") && allCell[3].classList.contains("cross") && allCell[6].classList.contains("cross")
    ){
        winnersDisplay.style.display = "flex";
        winnerName.innerHTML = "X is WINNER";
    }else if(
        allCell[1].classList.contains("cross") && allCell[4].classList.contains("cross") && allCell[7].classList.contains("cross")
    ){
        winnersDisplay.style.display = "flex";
        winnerName.innerHTML = "X is WINNER";
    }else if(
        allCell[2].classList.contains("cross") && allCell[5].classList.contains("cross") && allCell[8].classList.contains("cross")
    ){
        winnersDisplay.style.display = "flex";
        winnerName.innerHTML = "X is WINNER";
    }else if(
        allCell[0].classList.contains("cross") && allCell[4].classList.contains("cross") && allCell[8].classList.contains("cross")
    ){
        winnersDisplay.style.display = "flex";
        winnerName.innerHTML = "X is WINNER";
    }else if(
        allCell[2].classList.contains("cross") && allCell[4].classList.contains("cross") && allCell[6].classList.contains("cross")
    ){
        winnersDisplay.style.display = "flex";
        winnerName.innerHTML = "X is WINNER";
    }

   

    //for O winner

    if(
        allCell[0].classList.contains("circle") && allCell[1].classList.contains("circle") && allCell[2].classList.contains("circle")
    ){
        winnersDisplay.style.display = "flex";
        winnerName.innerHTML = "O is WINNER";
    }else if(
        allCell[3].classList.contains("circle") && allCell[4].classList.contains("circle") && allCell[5].classList.contains("circle")
    ){
        winnersDisplay.style.display = "flex";
        winnerName.innerHTML = "O is WINNER";
    }else if(
        allCell[6].classList.contains("circle") && allCell[7].classList.contains("circle") && allCell[8].classList.contains("circle")
    ){
        winnersDisplay.style.display = "flex";
        winnerName.innerHTML = "O is WINNER";
    }else if(
        allCell[0].classList.contains("circle") && allCell[3].classList.contains("circle") && allCell[6].classList.contains("circle")
    ){
        winnersDisplay.style.display = "flex";
        winnerName.innerHTML = "O is WINNER";
    }else if(
        allCell[1].classList.contains("circle") && allCell[4].classList.contains("circle") && allCell[7].classList.contains("circle")
    ){
        winnersDisplay.style.display = "flex";
        winnerName.innerHTML = "O is WINNER";
    }else if(
        allCell[2].classList.contains("circle") && allCell[5].classList.contains("circle") && allCell[8].classList.contains("circle")
    ){
        winnersDisplay.style.display = "flex";
        winnerName.innerHTML = "O is WINNER";
    }else if(
        allCell[0].classList.contains("circle") && allCell[4].classList.contains("circle") && allCell[8].classList.contains("circle")
    ){
        winnersDisplay.style.display = "flex";
        winnerName.innerHTML = "O is WINNER";
    }else if(
        allCell[2].classList.contains("circle") && allCell[4].classList.contains("circle") && allCell[6].classList.contains("circle")
    ){
        winnersDisplay.style.display = "flex";
        winnerName.innerHTML = "O is WINNER";
    }

}

