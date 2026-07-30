import { ValidationError } from "../utils/errors.js";
import { formatError } from "../utils/zod.js";

const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    const errors = formatError(result.error);
    return next(new ValidationError(errors));
  }

  req.body = result.data;
  next();
};

export { validate };
