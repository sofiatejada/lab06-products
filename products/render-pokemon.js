import { addItemToCart } from '../local-store-utils.js';

export function renderPokemon(pokemon) {
    const li = document.createElement('li');
    li.classList.add('pokemon.type');
    li.title = pokemon.type;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = `./${pokemon.image}`;
    img.alt = `An image of ${pokemon.name}`;
    li.appendChild(img);

    const p = document.createElement('p');
    p.textContent = `$${pokemon.price.toFixed(2)}`;
    li.appendChild(p);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = pokemon.id;
    p.appendChild(button);

    button.addEventListener('click', () => {

        addItemToCart(pokemon.id);


    });

    const article = document.createElement('article');
    article.textContent = `${pokemon.description}`;
    li.appendChild(article);

    return li;

}