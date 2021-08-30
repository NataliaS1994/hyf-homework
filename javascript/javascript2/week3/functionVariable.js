//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions
const funcArray = [funct1(), funct2(), funct3()];

function funct1() {
  console.log(`Function 1`);
}

function funct2() {
  console.log(`Function 2`);
}

function funct3() {
  console.log(`Function 3`);
}

funcArray.forEach((element) => {
  return element;
});

//Create a function as a const and try creating a function normally. Call both functions
const newfunction = function () {
    console.log("");
    normalFunction();
  };
  
  function normalFunction() {
    console.log(`This function has been created normally`);
  }
  
  newfunction();

  //Create an object that has a key whose value is a function. Try calling this function.
  const createObject = {
    user: function personalInfo(age, nationality) {
      const userAge = 27;
      const userNationality = "Polish";
      return `This person is ${userAge} years old, ${userNationality}`;
    },
  };
  console.log(createObject.user());
    