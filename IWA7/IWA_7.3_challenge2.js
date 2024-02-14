 const nickName= "Timmy";
 const firstName = "Timothy";

// //template literal used
 
 const greeting = `${"Good Morning" || nickName ||firstName}`

 //output-Good Morning
console.log(greeting)

/*the below output will result in a string instead either 
displaying  correct name (nickname or firstName) or if neither is present, it only displays "Good morning."*/

//console.log(Good Morning, ${nickName} || ${firstName}!`)