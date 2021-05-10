// this page is dedicated to the listing of the pokemon available and their array

const gastly = {
    id: 'gastly',
    name: 'Gastly',
    image: 'gastly.png',
    description: 'A ghost/poison type pokémon that evolves into Haunter at level 25, and Gengar when traded.',
    type: 'ghost-poison',
    level: 5,
    gender: 'female',
    price: 40.00
};

const ralts = {
    id: 'ralts',
    name: 'Ralts',
    image: 'ralts.png',
    description: 'A psychic/fairy type pokémon that evolves into Kirlia at level 20, and Gardevoir at level 30, or if male, Gallade when exposed to a dawn stone.',
    type: 'psychic-fairy',
    level: 5,
    gender: 'male',
    price: 60.00
};

const abra = {
    id: 'abra',
    name: 'Abra',
    image: 'abra.png',
    description: 'A psychic type pokémon that evolves into Kadabra at level 16, and Alakazam when traded.',
    type: 'psychic',
    level: 5,
    gender: 'female',
    price: 50.00
};

const dratini = {
    id: 'dratini',
    name: 'Dratini',
    image: 'dratini.png',
    description: 'A dragon type pokémon that evolves into Dragonair at level 30, and Dragonite at level 55.',
    type: 'dragon',
    level: 5,
    gender: 'male',
    price: 70.00
};

const budew = {
    id: 'budew',
    name: 'Budew',
    image: 'budew.png',
    description: 'A grass/poison type pokémon that evolves into Roselia with high friendship during the day, and Roserade when exposed to a Shiny Stone.',
    type: 'grass-poison',
    level: 5,
    gender: 'female',
    price: 40.00
};

const togepi = {
    id: 'togepi',
    name: 'Togepi',
    image: 'togepi.png',
    description: 'A fairy type pokémon that evolves into Togetic when leveled up with high friendship, and Togekiss when exposed to a Shiny Stone.',
    type: 'fairy',
    level: 5,
    gender: 'female',
    price: 50.00
};

const pokémon = [
    gastly,
    ralts,
    abra,
    dratini,
    budew,
    togepi
];

export default pokémon;