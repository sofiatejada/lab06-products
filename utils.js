import pokémon from './data/pokemon.js';
import cartItems from './cart/cart-items.js';

export function findById(array, id) {
    // returns first item found that has an .id property that matches the passed in id
    for (let item of array) {
        if (id === item.id) {
            //returns the WHOLE object, eg the whole of dratini and dratini's properties, by MATCHING the ID of dratini, to the id that is passed in along with the array. essentially, loop through the POKEMON of the POKEMONARRAY and FIND the POKEMON.ID matching the ID we passed in.
            return item;
        }
    }

    return null;
}

export function getCartTotal() {
    let accumulator = 0;

    for (let item of cartItems) {
        //this FUNCTION returns a pokemon OBJECT, ONE OF THE POKEMON, SUCH AS DRATINI, JUST THE WHOLE THING
        const pokemonToBuy = findById(pokémon, item.id);
        // console.log(pokemonToBuy);

        //HERE we are multiplying the QUANTITY of each cartITEM  that we are looping through, BY what the functio above has RETURNED, such as the OBJECT DRATINI and grabbing the value of its property, PRICE. so that's how we're multiplying the amount of items in their cart, times the price of the individual item by looping.
        const total = item.quantity * pokemonToBuy.price;

        //this is just putting the total in the variable we created earlier. we stored zero in there, the LOOP thing adds more TOTALs to the accumulator as it loops
        accumulator = accumulator + total;
    }

    // console.log(accumulator);
    //here we return the WHOLE total, after the loop finished
    return accumulator;
}

// console.table((findById(pokémon, 4)).price);



//TLDR: findById function GRABS specific pokemon OBJECT and its PROPERTIES
//getCartTotal function LOOPS THRU each pokemon from CARTITEMS, GRABS that pokemon's OBJECT using findById, and then MULTIPLIES the QUANTITY property from CARTITEMS by the PRICE of that pokemon's PRICE property.
//it then ADDS these values to the ACCUMULATOR variable
//NOW WE HAVE OUR TOTAL PRICE!!

