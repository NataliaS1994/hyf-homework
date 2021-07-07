//Fvent application
//Today is Sunday and the event is in 5 days. Therefore the event will be held on a friday.
// Hint: use remainder operator, array indexes and investigate new Date in js.


const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getEventWeekday (daysLeft) {
  const today = new Date ();
  const result  = today.getDay () + (daysLeft % 7);
  
  console.log ("The event will be held on" + weekDays[result] + " ");
}

// With todays weekday a tuesday
getEventWeekday (9); // Logs out "Thursday"

// With todays weekday a Friday
getEventWeekday (2); // Logs out "Sunday"