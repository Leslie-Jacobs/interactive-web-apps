import { company,year } from  "./configuration.js" /*fixed file path*/
const message = ' © ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message

/* another way to solve is to maybe consolidate the two script files into html*/
