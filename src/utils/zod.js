const formatError = (zodErrors) => {
  return zodErrors.issues.map(({ path, message }) => ({
    field: path.join("."),
    message,
  }));
};

export { formatError };
