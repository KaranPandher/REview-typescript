// Create calculator from class.
const newCalculator: Calculator = new Calculator(); 
// Event listener
newCalculator.form.addEventListener('submit', event => { 
    event.preventDefault(); // Prevents refresh 
    newCalculator.calculate();
});