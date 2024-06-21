let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let arr=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
let turn=false;
reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    result1.innerHTML = "";
});
boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        if(turn===false){
            box.innerText="X";
            turn=true;
        }
        else{
            box.innerText="0";
            turn=false;

        }
        checkwin();
        box.disabled=true;
        
        
    })
});
let result1=document.querySelector(".result");
const checkwin = () => {
    for (let win_pattern of arr) {
        let p1 = boxes[win_pattern[0]].innerText;
        let p2 = boxes[win_pattern[1]].innerText;
        let p3 = boxes[win_pattern[2]].innerText;

        if (p1 !== "" && p2 !== "" && p3 !== "") {
            if (p1 === p2 && p2 === p3) {
                console.log("winner");
                result1.innerHTML = "Player " + p1 + " wins!";
                break;
            }
        }
    }
}
    
