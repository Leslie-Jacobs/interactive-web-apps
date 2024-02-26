//--------------------------------1st Order--------------------------------------------//
/**
 * used the attribute selector [data-key="order1"] and use the root element of Order 1 .
 * chooses specific elements within Order 1,2,and 3 using querySelector for each item and status.
 * status for each item in Order1 using 'innerText,if data-delivered true otherwise its pending
 *  */ 
//finds elements with classes like biscuits,donuts etc.
const order1_Root = document.querySelector('[data-key="order1"]');
const order1_Biscuits = order1_Root.querySelector('.biscuits .count');
const order1_Donuts = order1_Root.querySelector('.donuts .count');
const order1_Pancakes = order1_Root.querySelector('.pancakes .count');
const order1_Status = order1_Root.querySelector('.status dd');

// const html = {
//     orders: {
//         1: {
//             root: document.querySelector('[data-key="order1"]'),
//             biscuits: document.querySelector('[data-key="order1"] .biscuits .count'),
//             donuts: document.querySelector('[data-key="order1"] .donuts .count'),
//             pancakes: document.querySelector('[data-key="order1"] .pancakes .count'),
//             status: document.querySelector('[data-key="order1"] .status dd')
//         }}},
/**
 * These lines assign values to the innerText of the elements.
 *  The values are taken from the data- attributes of the order1_Root element. 
 */
order1_Biscuits.innerText = order1_Root.getAttribute('data-biscuits');
order1_Donuts.innerText = order1_Root.getAttribute('data-donuts');
order1_Pancakes.innerText = order1_Root.getAttribute('data-pancakes');
//The last line checks if the data-delivered attribute is equal to 'true', and if so, sets the inner text to 'Delivered'; otherwise, it sets it to 'Pending'.
order1_Status.innerText = order1_Root.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';
//---------------------...ooo000 END OF FILE 000ooo...------------------------//
//--------------------------------2nd Order--------------------------------------------//
const order2_Root = document.querySelector('[data-key="order2"]');

const order2_Biscuits = order2_Root.querySelector('.biscuits .count');
const order2_Donuts = order2_Root.querySelector('.donuts .count');
const order2_Pancakes = order2_Root.querySelector('.pancakes .count');
const order2_Status = order2_Root.querySelector('.status dd'); //element
order2_Biscuits.innerText = order2_Root.getAttribute('data-biscuits');
order2_Donuts.innerText = order2_Root.getAttribute('data-donuts');
order2_Pancakes.innerText = order2_Root.getAttribute('data-pancakes');
order2_Status.innerText = order2_Root.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';
//---------------------...ooo000 END OF FILE 000ooo...------------------------//
//--------------------------------3rd Order--------------------------------------------//
const order3_Root = document.querySelector('[data-key="order3"]');
const order3_Biscuits = order3_Root.querySelector('.biscuits .count');
const order3_Donuts = order3_Root.querySelector('.donuts .count');
const order3_Pancakes = order3_Root.querySelector('.pancakes .count');
const order3_Status = order3_Root.querySelector('.status dd');
order3_Biscuits.innerText = order3_Root.getAttribute('data-biscuits');
order3_Donuts.innerText = order3_Root.getAttribute('data-donuts');
order3_Pancakes.innerText = order3_Root.getAttribute('data-pancakes');
order3_Status.innerText = order3_Root.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';
//---------------------...ooo000 END OF FILE 000ooo...------------------------//