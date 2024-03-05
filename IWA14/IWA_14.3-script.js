// script.js
// Declare the add function using arrow function syntax
const add = (a, b) => {return a + b;}
//Used multiplication sign 
const multiply = (a, b)  => {return a * b} 

function internal() {
// Calculate the sum and assign it to the 'c' property
    const added= add(this.internal.c, this.internal.b);
    const multiplied= multiply(add(this.internal.a, this.internal.b),this.internal.c);
	//console.log(added)
	console.log(multiplied)

    //return this;
  }
 
// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()

