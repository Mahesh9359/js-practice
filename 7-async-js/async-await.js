//Basic async/await
async function fetchUser() {
  const response = await fetch('/api/user');
  return await response.json();
}

//Error handling with try/catch
async function loadData() {
  try {
    const data = await fetch('/api/data');
    return await data.json();
  } catch (error) {
    console.error('Failed to load:', error);
  }
}

//Multiple parallel requests
async function fetchAll() {
  const [users, posts] = await Promise.all([
    fetch('/api/users'),
    fetch('/api/posts')
  ]);
  return {
    users: await users.json(),
    posts: await posts.json()
  };
}

//Await in loops
async function processItems(items) {
  for (const item of items) {
    await processItem(item);
  }
}

//Top-level await (ES2022)
const config = await fetch('/config.json').then(r => r.json());