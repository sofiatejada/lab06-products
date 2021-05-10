import pokémon from '../data/pokemon.js';
import { renderPokemon } from './render-pokemon.js';

const ul = document.querySelector('#poke-list');

// loop through each pokemon in pokemon array

for (const pokemon of pokémon) {

    
    // render the pokemon listing using renderPokemon function
    const data = renderPokemon(pokemon);

    // append the rendered pokemon to the <ul> element
    ul.appendChild(data);

}