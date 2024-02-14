const leoName = "Leo Musvaire";
const leoNumber = "2";
const leoStreet = "Church St.";
const leoPostal = "3105";
const leoBalance = "-10";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21000111";
const sarahNumber = "13";
const sarahStreet = "William Close";
const sarahPostal = "0310";

// Only change below this line


//leo object literal with nested address
//Added missing colons (:) between property names and values
//changed property names by using camelCase.

const leo = {
  name: leoName ,
  balance: leoBalance,
  accessId: '47afb389-8014-4d0b-aff3-e40203d2107f',
  age: 24,

  address: {
			number: leoNumber,
			street: leoStreet,
			'postal-code': leoPostal,
  }
}
//sarah object literal with nested address
const sarah = {
  name: sarahName + sarahSurname,
  balance: sarahBalance,
  accessId: '6b:57-4240-80e9-23f6b635f7a8',
  age: 62,
  
   address: {
			number: sarahNumber,
			street: sarahStreet,
			'postal-code': sarahPostal,// added  quotes to reference square bracket notation in output
  }
}
//displays leo and sarah objects with postal codes, used bracket and dot notation
console.log(leo,leo.address['postal-code']);
console.log(sarah,sarah.address['postal-code']);
