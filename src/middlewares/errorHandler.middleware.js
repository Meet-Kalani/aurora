import { ENVIRONMENT } from "../utils/constants.js";

const errorHandler = (err, _req, res, _next) => {
  const statusCode = err.statusCode || 500;
  const message =
    process.env.NODE_ENV === ENVIRONMENT.DEVELOPMENT
      ? err.message || "Internal server error!"
      : "Internal server error!";

  res.status(statusCode).json({
    success: false,
    message,
    ...(err.errors && { errors: err.errors }),
  });
};

export { errorHandler };
