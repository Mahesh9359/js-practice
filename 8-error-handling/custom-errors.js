//Basic custom error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

//Error with additional properties
class DatabaseError extends Error {
  constructor(message, query) {
    super(message);
    this.name = 'DatabaseError';
    this.query = query;
    this.timestamp = new Date();
  }
}

//Error factory function
function createHTTPError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

//Using custom errors
function validateUser(user) {
  if (!user.email) {
    throw new ValidationError('Email is required');
  }
}

//Error inheritance hierarchy
class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NetworkError';
  }
}

class TimeoutError extends NetworkError {
  constructor() {
    super('Request timed out');
    this.name = 'TimeoutError';
  }
}

//Usage example
try {
  throw new TimeoutError();
} catch (error) {
  if (error instanceof NetworkError) {
    console.error('Network issue:', error.message);
  }
}