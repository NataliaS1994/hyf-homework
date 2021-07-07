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

    //What if the person is a woman?

function getFullName (firstName, surName, useFormalName, gender) {
    if (gender === "woman" && useFormalName === true) {
      console.log ("Lady" + " " + firstName + " " + surName);
    } else if (gender === "woman" && useFormalName === false) {
      console.log (firstName + surName);
    } else if ( gender === "man" && useFormalName === true) {
      console.log ("Lord" + firstName + " " + surName);
    } else if (gender === "man" && useFormalName === false) {
      console.log (firstName + surName);
    } else
      console.log ("login-failed");
  }
  
  getFullName ("Natalia", "Sowa", true, "woman"); // returns "Lady Natalia Sowa"
  getFullName ("Natalia", "Sowa", false, "woman"); // returns "Natalia Sowa"
  getFullName ("Benjamin", "Hughes", true, "man"); // returns "Lord Benjamin Hughes"
  getFullName ("Benjamin", "Hughes", false, "man"); // returns "Benjamin Hughes"
  getFullName ("Benjamin", "Hughes", false, "x"); // returns "login-failed"
  
  
  
  getFullName ("Benjamin", "Hughes", true); //returns "Lord Benjamin Hughes"`
  getFullName ("Benjamin", "Hughes", false); // returns "Benjamin Hughes"
  getFullName ("Benjamin", "Hughes", false); // login-failed