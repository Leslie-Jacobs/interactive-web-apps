const rent = 400;
const tax = "8%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

//Only change below this line

function calBalance() { // Function to calculate and log the user's balance
 
  if (hourOfDay === 0 && minuteOfDay === 0) {// Check if both hourOfDay and minuteOfDay are defined
    
    const taxAsDecimal = parseInt(tax) / 100; // Calculate tax deduction as a percentage of the salary
    const startingAfterTax = salary * (1 - taxAsDecimal);
    const balance = startingAfterTax - transport - food - rent; // Calculate the final balance after deducting expense

    console.log(balance.toFixed(2)); //  rounded to two decimal places
  }
}
calBalance(); // Call the calBalance function to execute the results
