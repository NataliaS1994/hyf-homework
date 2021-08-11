let userName = []
let toDo = []

function getReply(command) {

	//Hello my name is Benjamin
	if (command.includes("Hello my name is")) {
		userName = command.split(' ').splice(-1);
		return `Nice to meet you ${userName[0]}`

	}

	//whats my name?
	if (command.includes("What is my name")) {
		if (userName !== "") {
			return `Your name is ${userName[0]}`

		} else {
			return "I didn't hear your name";
		}
	}
	//add activities
	if (command.includes("Add")) {
		let todoItem = command.split('Add').pop().split('to my todo').splice(0, 1);
		todoItem = todoItem.toString().trim();
		toDo.push(todoItem);
		return `${todoItem} added to your todo`;
	}

	//remove activity such as f.ex fishing
	if (command.includes("Remove")) {
		let todoItem = command.split('Remove').pop().split('from my todo').splice(0, 1);
		todoItem = todoItem.toString().trim();
		const index = toDo.indexOf(todoItem);
		if (index > -1) {
			toDo.splice(index, 1);
			return `Removed ${todoItem} from your todo`

		}
	}

	//return activities
	if (command.includes("on my todo?")) {

		if (toDo.length > 1) {
			let noOfItems = toDo.length;
			let lastItem = toDo.pop(); //Last item removed 
			return `You have ${noOfItems} activities ${toDo} and ${lastItem} `;
		}

	}
	//demand the date
	if (command.includes("today")) {
		var today = new Date();
		let currentMonth = today.toLocaleString('default', {
			month: 'long'
		});
		return today.getDate() + '. of ' + currentMonth + ' ' + today.getFullYear();
	}

	//math calculations
	if (command.includes("What is")) {
		const mathArray = command.match(/(\d+)\s*([\+\-\*\/\%])\s*(\d+)/);
		switch (mathArray[2]) {
			case '+':
				return parseInt(mathArray[1]) + parseInt(mathArray[3]);
			case '-':
				return parseInt(mathArray[1]) - parseInt(mathArray[3]);
			case '*':
				return parseInt(mathArray[1]) * parseInt(mathArray[3]);
			case '/':
				return parseInt(mathArray[1]) / parseInt(mathArray[3]);
			case '%':
				return parseInt(mathArray[1]) % parseInt(mathArray[3]);
		}
	}

	//Timer set for 4 min
	if (command.includes("Set a timer")) {

		let commandArray = command.split(' ');
		let minutes = commandArray[commandArray.length - 2];
		let milliSeconds = minutes * 60 * 1000; //milliseconds
		setTimeout(function () {
			console.log("Timer completed");
		}, milliSeconds);
		return `Timer set for ${minutes} minutes`;
	}

}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply(""));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower room to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("Add dancing to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 4*12"));
console.log(getReply("Set a timer for 4 minutes"));