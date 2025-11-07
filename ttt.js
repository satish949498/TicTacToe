let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetbtn");
let newgamebtn=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turn0=true;
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
       
        if (turn0) {
            box.innerText ="0";
            box.classList.add("green");
            turn0 =false;
        }
        else{
            box.innerText ="X";
            box.classList.add("blue");
            turn0=true;
        }
        box.disable=true;
        checkwinner();
    });
});

const disableboxes=()=>{
    for (const box of boxes) {
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for (const box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}
const checkwinner=()=>{
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;1
        if(pos1val!="" && pos2val!=""&& pos3val!=""){
           if(pos1val===pos2val && pos2val===pos3val){
             showwinner(pos1val);
           }
        }
        
    }
}
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);