const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = '0';

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * (NONE_SELECTED);
const batteries = 35 * 2;
const pens = 5 * (NONE_SELECTED) ;


// shipping = null
// currency = '$'

  
  // location = 'RSA';
  // currency = null;
  
  function calcShipping() {
    console.log('calcShippingShipping')
    let location = 'RSA';
    let shipping ;
    let currency ;
    let customers = 1;

    // if location is based in South Africa
    if (location === 'RSA') 
    {
        // Set Default shipping cost and currency
        shipping = 400
        currency = 'R'  
        
        // if cost of basket is more that R1000
        if (shoes +toys+ batteries + pens + shirts > 1000){
          // then if  there is ony 1 customer
          if (customers === 1) {
            // then set shipping to free R0
            shipping = 0
          }
          else{
            // otherwise log warning about free shipping only for 1 customer
            console.log(FREE_WARNING);
          }
        }

        // Finally log the price of the order
        console.log('Price:', currency, (shoes + toys + batteries + pens + shirts + shipping));
    }

    else if (location === 'NAM')
        {shipping = 600
        currency = '$' 

        if (shoes + toys + batteries + pens + shirts > 60){
          if (customers >= 1 ) {
            shipping = 0
            currency = '$'
          }
          else{
            console.log(FREE_WARNING);
          }
        }

        console.log('Price:', currency, (shoes + toys + batteries + pens + shirts + shipping));
      
      }
//if location is anything but North Korea
    else if (location !== 'North Korea'){
      shipping = 800
      currency = '$'
      console.log('Price:', currency, (shoes + toys + batteries + pens + shirts + shipping));
    }  
    else {
      console.log(BANNED_WARNING);
    }       

  } 

  calcShipping();