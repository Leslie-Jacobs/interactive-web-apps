const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

//check if ID 9 is assigned or not
if (holidays[9]) {
    console.log(`ID 9 assigned: ${holidays[9].name}`);
  } else {
    console.log('ID 9 not created yet');
  }
// new changes to christmas object
const copied = { ...holidays };

copied[6].name = 'X-mas';
copied[6].date.setHours(0, 0, 0, 0); //time indicates midnight


//if new date is earlier than current date
const currentDate = new Date();
const newDate = new Date(copied[6].date);

console.log(`New date is earlier: ${newDate < currentDate}`);


//'copied' objects changes
console.log(`ID change: ${copied[6].id !== holidays[6].id}`);
console.log(`Name change: ${copied[6].name !== holidays[6].name ? copied[6].name : 'X-mas'}`);
console.log(`Date change: ${copied[6].date !== holidays[6].date.getTime() ? copied[6].date : 'false'}`);

//first and last holiday

/** copied retrieves an array of the values from the copied object.
 * applied the map function to extract the date property from each holiday object.
 * Math.min finds the earliest date in the array of holiday dates
 * Math.max finds the latest date in the array of holiday dates
*/
const allDates = [
    new Date(holidays[0].date),
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,
]
const holidayDates = Object.values(copied).map((holiday) => holiday.date);
const firstHoliday = new Date(Math.min(...allDates));
const lastHoliday = new Date(Math.max(...allDates));

/*
*This is a template literal that formats the date to a string with the format "DD/MM/YYYY".
*converts it to a string, and pads it with '0' .
*/
function formatDate(date) {
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear();
    return day + '/' + month + '/' + year;
}

console.log(`First holiday in the year: ${formatDate(firstHoliday)}`);
console.log(`Last holiday in the year: ${formatDate(lastHoliday)}`);

//random holiday output
const randomHoliday = holidayDates[Math.floor(Math.random()* holidayDates.length)]
console.log(`Random Holiday date:${formatDate(randomHoliday)}`)