console.log

function getFullname (firstname, surname, useFormalName = false, gender = 'male') {
  const fullname = firstname + ' ' + surname;

    if (useFormalName && gender=='male') {
      return 'Lord ' + fullname;
    } else if (useFormalName && gender=='female') {
      return 'Miss ' + fullname;
    } else {
      return fullname;
    }
}

const fullname1 = getFullname('Benjamin', 'Hughes','true', 'male');
const fullname2 = getFullname('Benjamin', 'Emilie','true', 'female');
console.log(fullname1);
console.log(fullname2); 