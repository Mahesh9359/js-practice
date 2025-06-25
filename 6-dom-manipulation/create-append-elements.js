//createElement
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World!';

//appendChild
document.body.appendChild(newDiv);

//insertBefore
const parent = document.querySelector('ul');
const newItem = document.createElement('li');
newItem.textContent = 'New Item';
parent.insertBefore(newItem, parent.firstChild);

//cloneNode
const original = document.querySelector('.template');
const clone = original.cloneNode(true);
document.body.appendChild(clone);

//DocumentFragment (performance)
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const item = document.createElement('div');
  item.textContent = `Item ${i}`;
  fragment.appendChild(item);
}
document.getElementById('list').appendChild(fragment);