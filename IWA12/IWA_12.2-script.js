// scripts.js

const STATUS_MAP = {
    shelf: {
        color: "green",
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: "blue",
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: "red",
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: "orange",
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
};
//---------------------------Book Elements------------------------------------//
//----------------------------------------------------------------------------//
const bookElements = {
    book1: {
        status: document.querySelector("#book1 .status"),
        reserve: document.querySelector("#book1 .reserve"),
        checkout: document.querySelector("#book1 .checkout"),
        checkIn: document.querySelector("#book1 .checkin"),
    },
    book2: {
        status: document.querySelector("#book2 .status"),
        reserve: document.querySelector("#book2 .reserve"),
        checkout: document.querySelector("#book2 .checkout"),
        checkIn: document.querySelector("#book2 .checkin"),
    },
    book3: {
        status: document.querySelector("#book3 .status"),
        reserve: document.querySelector("#book3 .reserve"),
        checkout: document.querySelector("#book3 .checkout"),
        checkIn: document.querySelector("#book3 .checkin"),
    },
};
//----------------------------------------------------------------------------//
//-------------------Style of Button & Status of Books------------------------//
//----------------------------------------------------------------------------//
const setButtonStyle = (element, style) => {
    element.setAttribute("style", style);
};

const bookStatus = (bookElement, status) => {
    const { status: statusElement, reserve, checkout, checkIn } = bookElement;

    // Set button color to black and grayscale
    setButtonStyle(checkIn, "background-color: #f8f8f8;");

    // Set status color and enable/disable buttons based on status
    statusElement.style.color = STATUS_MAP[status].color;
    reserve.disabled = !STATUS_MAP[status].canReserve;
    checkout.disabled = !STATUS_MAP[status].canCheckout;
    checkIn.disabled = !STATUS_MAP[status].canCheckIn;
};

// Set status for each book
bookStatus(bookElements.book1, "overdue");
bookStatus(bookElements.book2, "reserved");
bookStatus(bookElements.book3, "shelf");
//---------------------...ooo000 END OF FILE 000ooo...------------------------//