//Convertion-Function
function convert() {
    const fromValue = parseFloat(document.getElementById("fromValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
  
    if (isNaN(fromValue)) {
      // Check for Input-value -> null
      document.getElementById("result").textContent = "Please enter a valid number";
      return;
    }
  
    if (fromUnit === toUnit) {
      document.getElementById("result").textContent = "Same units selected";
      return;
    }
  
    let result;
    let resultUnit;
  
    if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
        result = (fromValue * 9 / 5) + 32;
        resultUnit = "°F";
      } else if (toUnit === "kelvin") {
        result = fromValue + 273.15;
        resultUnit = "K";
      }
    } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") {
        result = (fromValue - 32) * 5 / 9;
        resultUnit = "°C";
      } else if (toUnit === "kelvin") {
        result = (fromValue - 32) * 5 / 9 + 273.15;
        resultUnit = "K";
      }
    } else if (fromUnit === "kelvin") {
      if (toUnit === "celsius") {
        result = fromValue - 273.15;
        resultUnit = "°C";
      } else if (toUnit === "fahrenheit") {
        result = (fromValue - 273.15) * 9 / 5 + 32;
        resultUnit = "°F";
      }
    }
  
    if (result !== undefined) {
      document.getElementById("result").textContent = result.toFixed(2) + " " + resultUnit;
    }
  }
  
  // Function to reset input and result
  function reset() {
    document.getElementById("fromValue").value = "";
    document.getElementById("result").textContent = "";
  }