// Weather wear

function getTheTemperature (temperature) {
    if (temperature >= -2 && temperature <=10) {
      console.log("Wear winter jacket");
    } else if (temperature >10 && temperature <=22) {
      console.log("Wear T'shirt");
    } else if (temperature > 22 && temperature <= 38) {
      console.log ("Wear bikini")
    }
  }
  
  getTheTemperature (0) // Need to wear the winter jacket