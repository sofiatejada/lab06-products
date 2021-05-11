import pokémon from '../data/pokemon.js';
import { findById } from '../utils.js';

//WHAT are we doing here?
//WE ARE CREATING THE TABLE!!!!
//what are we USING to create the table??/HOW are we building the table?
//by using the functions: findById
//and referring to the array, pokemon

export function renderCartItem(cartItem) {

    //WHAT are we doing here?
    //we are plopping our pokemon object, SAME way we did in getCartTotal, INTO a variable
    //HOW are we getting that object??
    //we are sticking in to the findById function, the pokemon array, and the cartItem.id that we would get from the cartItem PARAMETER that renderCartItem takes
    const pokemons = findById(pokémon, cartItem.id);

    //WHAT are we doing here?
    //we are creating ELEMENTS!!
    //we're creating the table row element that each pokemon info will go into
    //we're creating the table data elements needed to place the name, quantity, price, and total
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');


    //WHAT are we doing here?
    //we are placing WITHIN each of these elements we created up top, the relevant information
    //HOW?
    //by grabbing each element, and within its textContent, placing the properties of the OBJECT pokemon that we recieved from the findById function
    nameTd.textContent = pokemons.name;
    quantityTd.textContent = cartItem.quantity;
    priceTd.textContent = pokemons.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    //WHAT are we doing here?
    //we are getting the TOTAL price of the pokemon based on the QUANTITY specified in the cartItem we passed in to the PARAMETER of renderCartItem function
    const total = pokemons.price * cartItem.quantity;

    totalTd.textContent = total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    //here we are appending all the info we just got into the table row
    tr.append(nameTd, quantityTd, priceTd, totalTd);

    return tr;
}