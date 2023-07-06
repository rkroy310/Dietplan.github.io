// Function to handle the form submission
function calculateNutrition(event) {
    event.preventDefault();
  
    // Get the input values
    const calories = parseInt(document.getElementById('calories').value);
    const protein = parseInt(document.getElementById('protein').value);
    const carbs = parseInt(document.getElementById('carbs').value);
    const fat = parseInt(document.getElementById('fat').value);
  
    // Calculate the result
    const result = calories + (protein * 4) + (carbs * 4) + (fat * 9);
  
    // Show the result
    document.getElementById('calculated-result').innerText = `Total calories: ${result}`;
    document.getElementById('result').classList.remove('hidden');
  }
  
  // Attach event listener to the form
  document.getElementById('calculator-form').addEventListener('submit', calculateNutrition);
  