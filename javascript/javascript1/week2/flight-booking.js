//Flight booking fullname function

function getFullName (firstName, surName) {
    return firstName + " " + surName;
  }
  
  console.log (getFullName ("Benjamin", "Hughes")); // returns "Benjamin Hughes"
  
  //Formal fullname
  
  function getFullName (firstName, surName, useFormalName) {
    if (useFormalName === true) {
      console.log ("Lord" + " " + firstName + " " + surName); 
    } else if (useFormalName === false) {
        console.log (firstName + " " + surName); 
      } else 
        console.log ("login-failed")
    }
  
  getFullName ("Benjamin", "Hughes", true); //returns "Lord Benjamin Hughes"`
  getFullName ("Benjamin", "Hughes", false); // returns "Benjamin Hughes"
  getFullName ("Benjamin", "Hughes", false); // login-failed