

const nav = document.querySelector('button');
const list = document.getElementById('hide');


console.log(nav);


nav.addEventListener('click', () => {

    list.classList.toggle('hidden');


});