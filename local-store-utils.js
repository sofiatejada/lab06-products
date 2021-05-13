import { findById } from './utils.js';

//getCart() is opposite of setCart() because it unzips whatever setCart zipped, to make it usable
export function getCart() {

    const stringyCartGet = localStorage.getItem('CART');

    const parsedCart = JSON.parse(stringyCartGet);

    if (parsedCart) {
        return parsedCart;
    } else {
        return [];
    }
}


//this function does the opposite of getCart(), it packs it up into localStorage
export function setCart(someCart) {
    const stringyCartSet = JSON.stringify(someCart);

    localStorage.setItem('CART', stringyCartSet);
}

export function addItemToCart(itemId) {

    const cart = getCart();

    const cartItem = findById(cart, itemId);


    //this is what we're doing tot he cat once the information is usable, meaning, once it's gone by getCart

    if (cartItem) {
        cartItem.quantity++;
    } else {
        const newCartItem = { id: itemId, quantity:1 };
        cart.push(newCartItem);
    }


    setCart(cart);


}