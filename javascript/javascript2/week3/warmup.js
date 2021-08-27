//Log out the text Called after 2.5 seconds, 2.5 seconds after the script is loaded.
function calledAfterSeconds() {
    setTimeout(() => {
        console.log('Called after 2.5 seconds')
    }, 2500);
}
calledAfterSeconds();

//Create a function that takes 2 parameters: delay and stringToLog.
function myFunction(delay, stringToLog) {
    setTimeout(() => {
        console.log(stringToLog);
    }, delay * 1000);
}
myFunction(3.5, 'This string logged after 3.5 seconds');
myFunction(8, 'This string logged after 8 seconds');

//Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.
console.log('click button');
const clickedButton = document.getElementById('click-button');

clickedButton.addEventListener('click', () => {
    myFunction(5, 'This string logged after 5 seconds');
});