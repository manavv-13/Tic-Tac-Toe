let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let winningmsg = document.querySelector(".winner");
let newGameBtn = document.querySelector("#newGame");
let turnO = true;
let drawCount = 0;
const winners = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO)
        {
            box.innerText = "O";
            turnO = false;
            box.style.color = "#F374AE";
        }
        else{
            box.innerText = "X";
            turnO = true;
            box.style.color = "#E6B89C";
        }
        box.disabled = true;
        checkWinner();
        drawCount++;
        if(drawCount==9)
        {
            winningmsg.classList.remove("hide");
            winningmsg.querySelector("p").innerText = `Game Draw`;
        }
    });
});

const disablebtn = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}
const newGame = ()=>{
    drawCount = 0;
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const checkWinner = () =>{
    for(let winner of winners){
        let posVal1 =boxes[winner[0]].innerText;
        let posVal2 = boxes[winner[1]].innerText;
        let posVal3 = boxes[winner[2]].innerText;

        if(posVal1!=="" && posVal2 !=="" && posVal3!=="")
        {
            if(posVal1 === posVal2 && posVal2 === posVal3)
            {
                drawCount = 0;
                disablebtn();
                winningmsg.classList.remove("hide");
                winningmsg.querySelector("p").innerText = `Congratulations! ${posVal1} Won!`;
            }
        }
    }
}

resetBtn.addEventListener("click", ()=>{
    winningmsg.classList.add("hide");
    newGame();
})

newGameBtn.addEventListener("click",()=>{
    winningmsg.classList.add("hide");
    newGame();
});