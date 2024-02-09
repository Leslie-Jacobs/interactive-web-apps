const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah   '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

//parse a string and returns number

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance)
//leo information(used trim() method to remove white_spaces)
const leo = `${leoName} ${leoSurname.trim()} Owed R ${Math.abs(leoBalance).toFixed(2)}`
//sarah information
const sarah = `${sarahName} ${sarahSurname.trim()} Owed R ${Math.abs(sarahBalance).toFixed(2)}`
//Used .toFixed() method in order to round off to two decimal places and Math.abs method to return value into positive.
const total = `Total amount Owed: R ${Math.abs(owed).toFixed(2)}` 
//used template literal to combine all information.
const result = `${leo}\n${sarah}\n\n${divider}\n${total}\n${divider}` 

//displays final positive results 
console.log(result)