export function renderPokemon(pokemon) {
    const li = document.createElement('li');
    li.classList.add('pokemon.type');
    li.title = pokemon.description;

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

    return li;

}