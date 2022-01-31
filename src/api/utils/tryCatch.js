const tryCatch = anyFunction => (req, res, next) =>
    Promise.resolve(anyFunction(req, res, next)).catch(next);

export default tryCatch;
