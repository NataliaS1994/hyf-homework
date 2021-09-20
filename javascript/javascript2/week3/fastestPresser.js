//Create an input and a button in html
const button = document.getElementById("submit");
const result = document.getElementById("result");
const timer = document.getElementById("timer");
let countS = 0;
let countL = 0;
const sCount = document.querySelector(".s-count");
const lCount = document.querySelector(".l-count");


button.addEventListener("click", () => {
    let timer = document.getElementById("time").value;
    //Check valid input
    if (timer <= 0) {
        return alert("Insert a valid time")
    }

    let res = "";
    result.innerHTML = "";
  
  //Create an event listener
    document.addEventListener("keydown", keyUser)
    restartGame();
    countdown(timer);
    setTimeout(() => {
        if (countS > countL) {
            res = "S is the winner";
        } else if (countS < countL) {
            res = "L is the winner";
        } else if (countS === 0 && countL === 0) {
            res = "Key not pressed"
        } 
        result.innerHTML = res;
        document.removeEventListener("keydown", keyUser)
    }, timer * 1000);
});

//keypressed
let keyUser = (event) => {
    let keyChar = event.key
    if (keyChar === "s") {
        countS++;
        showActive(".s-container");
        sCount.innerHTML = countS;
    } else if (keyChar === "l") {
        countL++;
        showActive(".l-container");
        lCount.innerHTML = countL;
    } else {
        console.log("Another key was pressed");
    }
}

//Restart game
function restartGame() {
    countL = 0;
    countS = 0;
    sCount.innerHTML = countS;
    lCount.innerHTML = countL;
}

//Add countdown
function countdown(time) {
    result.innerHTML = time;
    let myInterval = setInterval(countInterval, 1000);
    function countInterval() {
        time--;
        if (time <= 1) {
            clearInterval(myInterval)
        }
        result.innerHTML = time;
    }
}
