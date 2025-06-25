//Basic callback
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}
greet('Alice', () => console.log('Callback executed'));

//Error-first callback
function divide(a, b, callback) {
  if (b === 0) {
    callback(new Error('Division by zero'));
  } else {
    callback(null, a / b);
  }
}

//Callback hell example
function getUserData(userId, callback) {
  getUser(userId, (user) => {
    getPosts(user.id, (posts) => {
      getComments(posts[0].id, (comments) => {
        callback(comments);
      });
    });
  });
}

//Sequential async operations
function doTask1(callback) {
  setTimeout(() => callback('Task 1 done'), 500);
}
function doTask2(callback) {
  setTimeout(() => callback('Task 2 done'), 300);
}

//Callback with multiple results
function getCoordinates(callback) {
  setTimeout(() => callback({ lat: 40.7128, lng: -74.0060 }), 1000);
}