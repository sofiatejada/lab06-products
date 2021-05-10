// IMPORT MODULES under test here:
import { renderPokemon } from '../products/render-pokemon.js';
import pokémon from '../data/pokemon.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="pokemon.type" title="A ghost/poison type pokémon that evolves into Haunter at level 25, and Gengar when traded."><h3>Gastly</h3><img src="./gastly.png" alt="An image of Gastly"><p>$40.00<button value="gastly">Add to Cart</button></p></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderPokemon(pokémon[0]);
    const actual = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
