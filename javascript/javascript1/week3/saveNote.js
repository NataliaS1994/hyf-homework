//Save a note

const notes = [];

function saveNote(content, id) {
  if (typeof content ==='string' && id ==='number') {
    notes.push({ content, id });
}
  }

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]