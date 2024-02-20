
// 1st Order

/**
 * the attribute selector [data-key="order1"] and use the root element of Order 1 .
 * chooses specific elements within Order 1 using querySelector for each item and status.
 * get values from the data- attributes of the 'order1Root'.
 * status for each item in Order1 using 'textContext,if data-delivered true otherwise its pending
 *  */ 

const order1_Root = document.querySelector('[data-key="order1"]');
const order1_Biscuits = order1_Root.querySelector('.biscuits .count');
const order1_Donuts = order1_Root.querySelector('.donuts .count');
const order1_Pancakes = order1_Root.querySelector('.pancakes .count');
const order1_Status = order1_Root.querySelector('.status dd');

order1_Biscuits.textContent = order1_Root.getAttribute('data-biscuits');
order1_Donuts.textContent = order1_Root.getAttribute('data-donuts');
order1_Pancakes.textContent = order1_Root.getAttribute('data-pancakes');
order1_Status.textContent = order1_Root.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

//2nd Order

const order2_Root = document.querySelector('[data-key="order2"]');
const order2_Biscuits = order2_Root.querySelector('.biscuits .count');
const order2_Donuts = order2_Root.querySelector('.donuts .count');
const order2_Pancakes = order2_Root.querySelector('.pancakes .count');
const order2_Status = order2_Root.querySelector('.status dd');

order2_Biscuits.textContent = order2_Root.getAttribute('data-biscuits');
order2_Donuts.textContent = order2_Root.getAttribute('data-donuts');
order2_Pancakes.textContent = order2_Root.getAttribute('data-pancakes');
order2_Status.textContent = order2_Root.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';


// 3rd Order

const order3_Root = document.querySelector('[data-key="order3"]');
const order3_Biscuits = order3_Root.querySelector('.biscuits .count');
const order3_Donuts = order3_Root.querySelector('.donuts .count');
const order3_Pancakes = order3_Root.querySelector('.pancakes .count');
const order3_Status = order3_Root.querySelector('.status dd');

order3_Biscuits.textContent = order3_Root.getAttribute('data-biscuits');
order3_Donuts.textContent = order3_Root.getAttribute('data-donuts');
order3_Pancakes.textContent = order3_Root.getAttribute('data-pancakes');
order3_Status.textContent = order3_Root.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

