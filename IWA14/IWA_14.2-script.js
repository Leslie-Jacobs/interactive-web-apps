//declared variables using LET in order to reassign
let firstName = 'John';
let age = 35;
let hobby = 'Coding';
/**parse the word 'parameter' in the parameter ,console.log output shows results twice 
 * inserted missing console.LOG function 
*/
const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}
//inserted the correct firstName is placeholder.
function info () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

info()