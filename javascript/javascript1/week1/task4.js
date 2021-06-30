console.log('Ez Namey!') // This is Ez Namey 
let firstWords = ['Awesome', 'Corporate', 'Friendly', 'Lively', 'Happy', 'Cool', 'Assuring', 'Lovely', 'Hygienic', 'Crunchy']

let secondWords = ['Sad', 'Cold', 'Nasty', 'Warm', 'Honest', 'Moody', 'Faulty', 'Interesting', 'Boring', 'Nonsense'];
const randomNumber = Math.floor(Math.random() * 10);
let startUpName = firstWords[randomNumber] + ' ' + secondWords[randomNumber];
console.log("The startup: "+ startupName + " contains " + startupName.length + " characters");