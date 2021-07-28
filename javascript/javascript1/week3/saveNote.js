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
			return console.log('Error');
		}
	}
}
const firstNote = getNote(1);
const checkError = getNote(4);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}