const value = "3";

//the + operator is used for both numeric addition and string concatenation.
//the + operator is considered as a string concatenation operator rather than adding numbers,
//this can be done using the Number() operator or parseInt() operator

console.log(Number(value) + 4 + Number(value));

console.log(typeof Number(value));
