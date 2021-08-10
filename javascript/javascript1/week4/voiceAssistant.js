const userName = []
const todoList = []
const computation = ['+', '-', '/', '*']

//Create a function called getReply(command)
function getReply(command) {
	if (command.indexOf('name is') !== -1) {
		userName.push(command.slice(command.indexOf('name is') + 'name is'.length))
		return `Nice to meet you ${userName[0]}`
	}

	if (command.indexOf('is my name') !== -1) {
		return `Your name is ${userName[0]}`
	}

	if (command.toLowerCase().indexOf('add') !== -1) {
		todoList.push(
			command.slice(command.indexOf('add') + 5, command.indexOf('to') - 1)
		)
	}

	for (let i = 0; i < todoList.length; i++) {
		if (
			command.includes(todoList[i]) &&
			command.toLowerCase().indexOf('add') !== -1
		) {
			return `${todoList[i]} added to your todo`
		}
	}

	if (command.toLowerCase().includes('remove')) {
		for (let i = 0; i < todoList.length; i++) {
			if (command.includes(todoList[i])) {
				let removedItem = todoList.splice(
					todoList.indexOf(todoList[i]),
					1
				)
				return `Removed ${removedItem} from your todo`
			}
		}
	}

	if (command.toLowerCase().includes('What is on my todo')) {
		return `You have ${todoList} in your todo list`
	}

	if (command.includes('today')) {
		return `Today is the ${new Date().getDate()}th of ${new Date().toLocaleString(
            'en-us',
            { month: 'long', year: 'numeric' }
        )}.`
	}

	for (let index = 0; index < computation.length; index++) {
		if (command.includes(computation[index])) {
			let numbers = command.match(/\d+/g)
			if (computation[index] === '+') {
				let result = parseInt(numbers[0]) + parseInt(numbers[1])
				return result
			}
			if (computation[index] === '/') {
				return `${numbers[0] / numbers[1]}`
			}
			if (computation[index] === '*') {
				return `${numbers[0] * numbers[1]}`
			}
			if (computation[index] === '-') {
				return `${numbers[0] - numbers[1]}`
			}
		}
	}

	if (command.toLowerCase().includes('minutes')) {
		const totalMinutes = command.match(/\d+/)
		const totalInMilliseconds = totalMinutes[0] * 60 * 1000
		console.log(`Timer set to ${totalMinutes[0]} minutes.`)

		function setTimer(minutes) {
			console.log(minutes + ' minut(s) are done')
		}

		setTimeout(setTimer, totalInMilliseconds, totalMinutes)

	} else {
		return `Goodbye`
	}
}

console.log(getReply('Hello my name is Benjamin'))
console.log(getReply('What is my name?'))
console.log(getReply('Add fishing to my todo'))
console.log(getReply('Add singing in the shower to my todo'))
console.log(getReply('Remove fishing from my todo'))
console.log(getReply('What is on my todo?'))
console.log(getReply('What day is it today?'))
console.log(getReply('what is 33 + 3'))
console.log(getReply('what is 4 * 12'))
console.log(getReply('Set timer to 2 minutes'))
console.log(getReply(''))