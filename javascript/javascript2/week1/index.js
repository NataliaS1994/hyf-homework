/*==================================================
        Spirit animal name generator
==================================================*/
//create reference 
const nameRequired = document.getElementById("nameRequired");
const rootDiv = document.getElementById("root");
const log = document.getElementById("log");

//add event listener for the button
const clickButton = document.querySelector("#submit");
clickButton.addEventListener("click", getTheAnimalSpirit);
nameRequired.addEventListener("hover", getTheAnimalSpirit);
nameRequired.addEventListener("output", getTheAnimalSpirit);

//create function called 'getTheAnimalSpirit'
function getTheAnimalSpirit(e) {
	var actionType = document.getElementById("animal-selection").value;
	if (actionType === e.type) {
		getUserName(e);
	}
}
// create function called 'getUserName'
function getUserName(e) {
	if (nameRequired.value !== "" && nameRequired.value.trim()) {
		const randomItem =
			spiritNames[Math.floor(Math.random() * spiritNames.length)];
		log.innerHTML = nameRequired.value + " - " + randomItem;
	} else {
		log.innerHTML = "Enter your name";
	}
}
const spiritNames = [
	"The fullmoon wolf",
	"The Butterfly",
	"The Hummingbird",
	"The flexible Spider",
	"The smart Owl",
	"The Eagle",
	"The Grasshopper",
	"The Frog",
	"The sneaky fox",
	"The brave tiger",
];