//Student manager
//Use Array.push

const class07Students = [];
function addStudentToClass (studentName) {
  if (!studentName) return;                            //If no student name is given then return 
  if (studentName === "Queen") {                  //If the student name is 'Queen' then add to class
    class07Students.push (studentName);
    
  } else {
 if (class07Students.length >= 6) {
   console.log ("Cannot add more students to class 07");   //If more than 6 students then don't take to class
  }
 if (class07Students.includes(studentName)) {               // If student alredy in the class inform by message
   console.log ("Student" + studentName + "is already in the class");
 } else {
   class07Students.push(studentName);     // Add student to class
     }
  }
}

function getNumberOfStudents() {
  console.log(class07Students.length);
}


addStudentToClass ("Natalia");
addStudentToClass ("student1");
addStudentToClass ("Queen");
addStudentToClass ("Natalia");
addStudentToClass ("student2");
addStudentToClass ("student3");
addStudentToClass ("student4");
addStudentToClass ("student5");
addStudentToClass ("student6");

getNumberOfStudents();
console.dir (class07Students);
console.log(studentName = " ".trim()); //Using 'trim' I will receive ""

