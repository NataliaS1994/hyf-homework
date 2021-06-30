console.log('Housey pricey!') // Housey pricey 

//Peter's calculation
var houseWidth: 8,
var houseDepth: 10,
var houseHight: 10,
var gardenSizeInM2: 100,
var houseCost: 2500000

let volumeInMeters = houseWidth * houseDepth * houseHight;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (housePrice < houseCost) {
    console.log('Peter pays more than the actual house price')
} else {
    console.log('Peter pays less than the actual house price')
}

//Julia's calculation
var houseWidth: 5,
var houseDepth: 11,
var houseHight: 8,
var gardenSizeInM2: 70,
var houseCost: 2500000

let volumeInMeters = houseWidth * houseDepth * houseHight;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (housePrice < houseCost) {
    console.log('Julia pays more than the actual house price')
} else {
    console.log('Julia pays less than the actual house price')
}