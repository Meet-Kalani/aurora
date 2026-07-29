const validateParams = (schema) => (req, _res, next) => {
  const result = schema.safeParse(req.params);

  req.params = result.data;
  next();
};

export { validateParams };
