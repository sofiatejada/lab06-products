import cartItems from './cart-items.js';
import { getCartTotal } from '../utils.js';
import { renderCartItem } from './render-cart-item.js';

//WHAT are we doing here? POPULATING the table with all the info we gathered through the other functions
//HOW?? WHAT are we USING??
//we are using: cartItems (arbitrarily created/static), getCartTotal, and renderCartItem

//RECAP:
//WHAT do EACH of our imports DO???
//cartItems is the OBJECT LITERAL array that we arbitrarily created
//getCartTotal uses findById to multiply the quantity of the items from cartItems by the pokemon object's price property's value. it ACCUMULATES these products into the accumulator variable
//renderCartItems ALSO uses findById to grab the object of a pokemon to populate the table by calling its properties


//first we grab the DOM elements we want to put stuff in
const anchor = document.querySelector('tbody');
const total = document.getElementById('total');

//then we create a LOOP
//WHY? to CYCLE/LOOP thru the cartItems, and we pass EACH cartItem into the function renderCartItem 
//we are LOOPING THRU CARTITEMS array
for (let item of cartItems) {
    //HERE we are placing that rendered tr, into a variable called tableRow
    //HOW?
    //we are LOOPING thru the items in cartItems array and putting each item into the function renderCartItem that creates the table, for EACH of those items
    const tableRow = renderCartItem(item);
    // console.log(renderCartItem(item));

    //tableRow is now being appended into the anchor, or the tbody tag in the HTML
    anchor.append(tableRow);
}

//WHAT are we doing here?
//we are getting the total price of the items in the cart
//HOW?
//we are calling the getCartTotal() function that has looped through the pokemon objects, matched them to the cartItem id's, and used the findById function to return matching pokemon objects. this object is then USED to grab the PRICE property, and multiply it by the QUANTITY property of cartItems.
//TLDR: it's grabbing the total of the price of the items in the cartItems array
const totalPrice = getCartTotal();

//WHAT is happening here?
//we are putting the price into the total in the footer of the HTML
//HOW?
//by putting the result of totalPrice into the textContent of total
total.textContent = totalPrice.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
});
