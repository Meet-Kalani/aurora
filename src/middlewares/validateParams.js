import { ValidationError } from "../utils/errors.js";
import { formatError } from "../utils/zod.js";

const validateParams = (schema) => (req, _res, next) => {
  const result = schema.safeParse(req.params);

  if (!result.success) {
    const errors = formatError(result.error);
    return next(new ValidationError(errors));
  }

  req.params = result.data;
  next();
};

export { validateParams };
