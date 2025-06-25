//Basic try-catch
try {
  nonExistentFunction();
} catch (error) {
  console.error('Caught:', error.message);
}

//Try-catch-finally
let connection;
try {
  connection = openDatabaseConnection();
  connection.query('SELECT * FROM users');
} catch (error) {
  console.error('Database error:', error.message);
} finally {
  if (connection) connection.close();
}

//Nested try-catch
try {
  try {
    JSON.parse('invalid json');
  } catch (innerError) {
    throw new Error('Parsing failed: ' + innerError.message);
  }
} catch (outerError) {
  console.error('Outer catch:', outerError.message);
}

//Async error handling
async function fetchData() {
  try {
    const response = await fetch('invalid-url');
    return await response.json();
  } catch (error) {
    console.error('Fetch failed:', error);
    return { fallback: true };
  }
}

//Multiple error types
try {
  const value = potentiallyUndefinedVar.prop;
} catch (error) {
  if (error instanceof TypeError) {
    console.error('Type error occurred');
  } else if (error instanceof ReferenceError) {
    console.error('Reference error occurred');
  } else {
    console.error('Unknown error:', error);
  }
}