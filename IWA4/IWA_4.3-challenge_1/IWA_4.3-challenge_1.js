const date = 2050  //inserted equal operator to declare const variable date and assign it to the value of 2050
let status_1 = "student"
let count = 0 
 
if (date == 2050) {   //if statement starts checking if date is equal to 2050, used comparison operator to check valuables
	console.log("January", 'New Year’s Day') 
	console.log("March", 'Human Rights Day')

	let date = 'April'// new variable declared with value of april
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	count += 4 

	if (status == "student") { //if status is true, info should print out june holiday
	  console.log('June', 'Youth Day')
		count += 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	  
	date = 'December' 
	console.log(date, 'Day of Reconciliation')
	count += 3

	if (status == "parent") { //if status is true, info should print out  status is parent
	  console.log(date, 'Christmas Day')
		count += 1
  }
	console.log(date, 'Day of Goodwill')
	count += 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)