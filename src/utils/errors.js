class AppError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

class NotFoundError extends AppError {
  constructor(message = "Resource not found") {
    super(404, message);
  }
}

class ValidationError extends AppError {
  constructor(errors, message = "Validation failed") {
    super(400, message);
    this.errors = errors;
  }
}

export { AppError, NotFoundError, ValidationError };
