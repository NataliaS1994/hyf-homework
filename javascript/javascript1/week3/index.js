//Item array removal

const names = [
	"Peter",
	"Ahmad",
	"Yana",
	"kristina",
	"Rasmus",
	"Samuel",
	"katrine",
	"Tala",
];
const nameToRemove = "Ahmad";

names.splice(names.indexOf(nameToRemove), 1);

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

//When will we be there??
const travelInformation = {
	speed: 50,
	destinationDistance: 432,
};

function getArrivalTime() {
	const approxTime = travelInformation.destinationDistance / travelInformation.speed;
	let travelHours = Math.floor(approxTime);
	let travelMinutes = Math.floor((approxTime % 1) * 60);
	return `Travel time is ${travelHours} hours and ${travelMinutes} minutes.`;
	

	const travelTime = getArrivalTime(travelInformation);
	console.log(travelTime); // 8 hours and 38 minutes

	getArrivalTime();

    