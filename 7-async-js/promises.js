//Basic promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success!'), 1000);
});
promise.then(console.log);

//Chaining promises
fetch('/api/user')
  .then(response => response.json())
  .then(user => fetch(`/api/profile/${user.id}`))
  .then(profile => console.log(profile))
  .catch(error => console.error(error));

//Promise.all
const promises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
];
Promise.all(promises).then(console.log); // [1, 2, 3]

//Promise.race
Promise.race([
  new Promise(resolve => setTimeout(resolve, 500, 'Fast')),
  new Promise(resolve => setTimeout(resolve, 1000, 'Slow'))
]).then(console.log); // 'Fast'

//Error handling
someAsyncOperation()
  .then(result => processResult(result))
  .catch(error => console.error('Error:', error))
  .finally(() => console.log('Operation complete'));