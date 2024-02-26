// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}


//---------------------------...Book 1...-------------------------//
const book1_Status = document.querySelector('#book1 .status');
const book1_Reserve = document.querySelector('#book1 .reserve');
const book1_Checkout = document.querySelector('#book1 .checkout');
const book1_canCheckIn = document.querySelector('#book1 .checkin');
// Set button color to black and grayscale
 const blackAndGrayscaleStyle = 'background-color: #f8f8f8;';
book1_canCheckIn.setAttribute('style', blackAndGrayscaleStyle);
//Set status color and enable/disable buttons based on status
book1_Status.style.color = STATUS_MAP.overdue.color;
book1_Reserve.disabled = !STATUS_MAP.overdue.canReserve;
book1_Checkout.disabled = !STATUS_MAP.overdue.canCheckout;
book1_canCheckIn.disabled = !STATUS_MAP.overdue.canCheckIn;
//---------------------...ooo000 END OF FILE 000ooo...------------------------//
//---------------------------...Book 2...-------------------------//
const book2_Status = document.querySelector('#book2 .status');
const book2_Reserve = document.querySelector('#book2 .reserve');
const book2_Checkout = document.querySelector('#book2 .checkout');
const book2_canCheckIn = document.querySelector('#book2 .checkin');
// Set button color to black and grayscale
const bg = 'background-color: #f8f8f8;';
book2_canCheckIn.setAttribute('style', bg);
//  Set status color and enable/disable buttons based on status
book2_Status.style.color = STATUS_MAP.reserved.color;
book2_Reserve.disabled = !STATUS_MAP.reserved.canReserve;
book2_Checkout.disabled = !STATUS_MAP.reserved.canCheckout;
book2_canCheckIn.disabled = !STATUS_MAP.reserved.canCheckIn;
 //---------------------...ooo000 END OF FILE 000ooo...------------------------//
//----------------------------...Book 3..------------------------//
const book3_Status = document.querySelector('#book3 .status');
const book3_Reserve = document.querySelector('#book3 .reserve');
const book3_Checkout = document.querySelector('#book3 .checkout');
const book3_canCheckIn = document.querySelector('#book3 .checkin');
// Set button color to black and grayscale
const blackAndGrayscale = 'background-color: #f8f8f8;';
book3_canCheckIn.setAttribute('style', blackAndGrayscale);
//Set status color and enable/disable buttons based on status
book3_Status.style.color = STATUS_MAP.shelf.color;
book3_Reserve.disabled = !STATUS_MAP.shelf.canReserve;
book3_Checkout.disabled = !STATUS_MAP.shelf.canCheckout;
book3_canCheckIn.disabled = !STATUS_MAP.shelf.canCheckIn;
//---------------------...ooo000 END OF FILE 000ooo...------------------------//



