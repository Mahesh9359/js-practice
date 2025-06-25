//getElementById
const header = document.getElementById('header');
console.log(header.textContent);

//querySelector (first match)
const firstBtn = document.querySelector('.btn');
firstBtn.style.color = 'red';

//querySelectorAll (NodeList)
const allImages = document.querySelectorAll('img');
allImages.forEach(img => img.alt = 'Demo image');

//getElementsByClassName (live HTMLCollection)
const cards = document.getElementsByClassName('card');
Array.from(cards).forEach(card => card.classList.add('shadow'));

//Traversal
const container = document.querySelector('.container');
const firstChild = container.firstElementChild;
const lastChild = container.lastElementChild;