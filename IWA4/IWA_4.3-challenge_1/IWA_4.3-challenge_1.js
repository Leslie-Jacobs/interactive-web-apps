const date = 2050  //could not define variable as colon was implemented, (=) operator is used to assign variables
let status = "student"
let count = 0 
 
if (date == 2050) {  
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	let date = 'April'

	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	count += 4 

	if (status === "student") {
	  console.log('June', 'Youth Day')
		count += 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	 date = 'December'

	console.log(date, 'Day of Reconciliation')
	count += 3

	if (status === "parent") {
	  console.log(date, 'Christmas Day')
		count += 1
  }

	console.log(date, 'Day of Goodwill')
	count += 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)