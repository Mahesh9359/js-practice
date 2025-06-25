//Form submission
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log(Object.fromEntries(formData));
});

//Input events
document.getElementById('username').addEventListener('input', (e) => {
  console.log(`Typing: ${e.target.value}`);
});

//Form validation
document.getElementById('email').addEventListener('blur', (e) => {
  if (!e.target.value.includes('@')) {
    e.target.setCustomValidity('Invalid email');
  }
});

//Dynamic form fields
document.getElementById('addField').addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'dynamicField';
  document.querySelector('form').appendChild(input);
});

//Radio button change
document.querySelectorAll('input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    console.log(`Selected: ${e.target.value}`);
  });
});