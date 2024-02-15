const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
};
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
};

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
  };

// You can change below however you want

//converts tax percentages to decimals
const taxAsDecimal = parseFloat(tax[913]) / 100 
const startingAfterTax = salary * (1 - taxAsDecimal)

/**
 * Create a key for rent with lodging and size variables
 * used template literal and subtracted instead of adding.
 * */
const type = `${size}-${lodging}`

//use key amount to get total
const rentTotal = rent[type] 
const balance = startingAfterTax - (expenses.transport + expenses.food + rent[type])

// displays amount rounded off to 2 decimal places
console.log(balance.toFixed(2))
