//Save a note

let notes = [];

function saveNote(content, id) {
	if (typeof content === 'string' && typeof id === 'number') {
		notes.push({
			content,
			id
		});
	}
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]


//Get a note
function getNote(id) {
	for (let i = 0; i < notes.length; i++) {
		if (typeof id === 'number' && id === notes[i].id) {
			return notes[i];
		} else {
			console.log('Error');
		}
	}
}
const firstNote = getNote(1);
const checkError = getNote(4);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

//Log out notes

function logOutNotesFormatted() {
	for (let i = 0; i < notes.length; i++) {
		console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`)
	}
}


logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry