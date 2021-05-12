// IMPORT MODULES under test here:
import { renderPokemon } from '../products/render-pokemon.js';
import pokémon from '../data/pokemon.js';
import { getCartTotal, findById } from '../utils.js';
// import cartItems from '../cart/cart-items.js';


const test = QUnit.test;

test('testing renderpokemon', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="pokemon.type" title="ghost-poison"><h3>Gastly</h3><img src="./gastly.png" alt="An image of Gastly"><p>$40.00<button value="1">Add</button></p><article>A ghost/poison type pokémon that evolves into Haunter at level 25, and Gengar when traded.</article></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderPokemon(pokémon[0]);
    const actual = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('testing getcarttotal', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 320;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getCartTotal();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('testing findbyid', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Dratini';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = (findById(pokémon, 4)).name;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

