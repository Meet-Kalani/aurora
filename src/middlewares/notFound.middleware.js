import { NotFoundError } from "../utils/errors.js";

const notFound = (req, _res, next) => {
  next(new NotFoundError(`Route not found: ${req.method} ${req.originalUrl}`));
};

export { notFound };
