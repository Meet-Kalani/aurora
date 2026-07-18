const errorHandler = (err, _req, res, _next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong!";

  if (process.env.NODE_ENV === "development") {
    return res.status(statusCode).json({
      success: false,
      message,
      errorStack: err.stack,
    });
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};

export { errorHandler };
