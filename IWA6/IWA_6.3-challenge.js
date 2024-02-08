const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

// Only change below this line
const primaryToNumber = Number(primaryPhone) // Convert primaryPhone and secondaryPhone to numbers
const secondaryToNumber = Number(secondaryPhone)

const primaryValid =
  typeof primaryToNumber == "number" && !isNaN(primaryToNumber) // Check if the conversion to numbers is successful and not NaN
const secondaryValid =
  typeof secondaryToNumber == "number" && !isNaN(secondaryToNumber)

console.log("Primary phone is valid numerical number:", primaryValid)
console.log("Secondary phone is valid numerical number:", secondaryValid)
