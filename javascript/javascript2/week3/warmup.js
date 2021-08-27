//1.Log out the text Called after 2.5 seconds, 2.5 seconds after the script is loaded.
function calledAfterSeconds() {
    setTimeout(() => {
        console.log('Called after 2.5 seconds')
    }, 2500);
}
calledAfterSeconds();

//2.Create a function that takes 2 parameters: delay and stringToLog.
function myFunction(delay, stringToLog) {
    setTimeout(() => {
        console.log(stringToLog);
    }, delay * 1000);
}
myFunction(3.5, 'This string logged after 3.5 seconds');
myFunction(8, 'This string logged after 8 seconds');

//3.Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.
console.log('click button');
const clickedButton = document.getElementById('click-button');

clickedButton.addEventListener('click', () => {
    myFunction(5, 'This string logged after 5 seconds');
});
//4.Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. 
function earthLogFunction() {
    console.log('Earth');
}
function saturnLogFunction() {
    console.log('Saturn');
}

function planetLogFunction(callback) {
    callback();
}

//5-6.Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out.
const logbtn = document.getElementById("location");
const userLocation = document.getElementById("yourLocation");

logbtn.addEventListener("click", getLocation);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        (userLocation.innerHTML =
          "Latitude : " +
          position.coords.latitude.toFixed(4) +
          "<br>Logitude: " +
          position.coords.longitude.toFixed(4))
    );
  } else {
    logbtn.innerHTML = "location is not supported by your browser.";
  }
}

//7.Create a function called runAfterDelay. It has two parameters: delay and callback. 
function runAfterDelay (delay, callback) {
    setTimeout(() => {
        callback();
    }, delay * 1000);
}

runAfterDelay(1.5, () => {
console.log('Should be logged after 1.5 seconds');
});
runAfterDelay(3, () => {
    console.log('Should be logged after 3 seconds');
});
runAfterDelay(7, () => {
    console.log('Should be logged after 7 seconds');
});

//8.Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"
document.body.addEventListener("dblclick", doubleClicked);

function doubleClicked() {
  console.log("double clicked!");
}

//9.Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. 
function logFunnyJoke() {
    console.log("Funny Jokes");
}
function logBadJoke() {
    console.log("Bad Jokes")
}

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {

    if (shouldTellFunnyJoke) {
        logFunnyJoke()
    }

    else {
        logBadJoke()
    }
}

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke); 

