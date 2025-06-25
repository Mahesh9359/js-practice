//Click event
document.getElementById('myBtn').addEventListener('click', function() {
  console.log('Button clicked!');
});

//Mouse events
const box = document.querySelector('.box');
box.addEventListener('mouseenter', () => box.style.backgroundColor = 'blue');
box.addEventListener('mouseleave', () => box.style.backgroundColor = '');

//Keyboard events
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') console.log('Esc pressed');
});

//Event delegation
document.querySelector('ul').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
});

//Remove listener
const handler = () => console.log('Only once!');
document.getElementById('onceBtn').addEventListener('click', handler, { once: true });