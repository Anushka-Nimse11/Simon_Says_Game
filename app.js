let gameSeq = [];
let userSeq = [];
let btns = ["purple", "green", "orange", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
});

function btnflash(box){
    box.classList.add("btnflash");
    setTimeout(function() {
        box.classList.remove("btnflash");
    }, 200);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randomIdx = Math.floor(Math.random()*3);
    let randomCol = btns[randomIdx];
    let randomBtns = document.querySelector(`.${randomCol}`);
    gameSeq.push(randomCol);
    btnflash(randomBtns);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over: your score is <b>${level-1} </b><b>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

let allBox = document.querySelectorAll(".box");
for(box of allBox){
    box.addEventListener("click", function btnPress(){
        let btn = this;
        btnflash(btn);
        userColor = btn.getAttribute("id");
        userSeq.push(userColor);
        checkAns(userSeq.length-1);
    });
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}