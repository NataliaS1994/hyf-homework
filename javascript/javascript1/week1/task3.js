console.log('Housey pricey!') // Housey pricey 
//Peter's calculation
var houseWidth = 8
var houseDepth = 10
var houseHight = 10
var gardenSizeInM2 = 100
var houseCost = 100
let volumeInMeters = houseWidth * houseDepth * houseHight;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (housePrice < houseCost) {
    console.log ("Peter pays more than the value of the house")   
}
else {
    console.log("Peter pays less than the value of the house")
}