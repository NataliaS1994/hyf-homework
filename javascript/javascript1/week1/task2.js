console.log("Goodboy-Oldboy!") // This is Goodboy-Oldboy

let dogYearOfBirth = 2017;
let dogYearOfFuture = 2027;

let inHumanYear = dogYearOfFuture - dogYearOfBirth;

let dogYear = (dogYearOfFuture - dogYearOfBirth) * 7;

let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    console.log ("Your dog will be " + dogYear + " dog years old in " + dogYearOfFuture)
} else {
    console.log("Your dog will be " + inHumanYear + " human years old in " + dogYearOfFuture)
}