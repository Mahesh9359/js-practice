//Basic GET request
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));

//POST with JSON
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Alice' })
});

//Error handling
async function fetchWithErrorHandling() {
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) throw new Error('Network response was not ok');
  return await response.json();
}

//Upload file
const fileInput = document.querySelector('input[type="file"]');
const formData = new FormData();
formData.append('file', fileInput.files[0]);
fetch('/upload', { method: 'POST', body: formData });

//AbortController (cancel fetch)
const controller = new AbortController();
setTimeout(() => controller.abort(), 5000); // Timeout after 5s
fetch('https://api.example.com/data', { signal: controller.signal })
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Request aborted');
    }
  });