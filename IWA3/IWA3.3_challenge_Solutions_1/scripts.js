import { company,year } from  "./configuration.js" /*fixed file path-in order to link external correct js file*/
const message = ' © ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message


