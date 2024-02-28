let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

//-------------------function to log calculations increment by 1---------//
const logCalc = () => {
  // Check if 'calculated' is a numerical string 
  const isString = typeof calculated === 'string'
  // Parse 'calculated' as a number if it's a string 
  const calculatedAsNumber = isString ? parseInt(calculated) : calculated
  calculated = calculatedAsNumber + 1
}
//-----------------------------------------------------------------------//
//--------------------calculations of user and status--------------------//
const calcUser = () => {
  logCalc()
  //If calculated value exceeds 2, set user to 'John'
  if (calculated > 2) user = 'John'
  //If calculated value exceeds 2, set user to 'requesting'
  if (calculated > 2) state = 'requesting'
  //If calculated value exceeds 3, set user to 'idle'
  if (calculated > 3) state = 'idle'
}
//------------------------------------------------------------------------//
//--------------if conditions are met ,this function will be used to check and log user--------//
const checkUser = () => {
  // Check if a user exists and the state is 'requesting'
  if (user && state === 'requesting') {
    console.log(`User: ${user} (${calculated})`)
  }
}
//---------------------...ooo000 END OF FILE 000ooo...------------------------//
// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()


