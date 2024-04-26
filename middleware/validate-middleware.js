const validate = (schema) => async (req, res) => {
  try {
    const parsebody = await schema.parseAsync(req.body);
    req.body = parsebody;
    next();
  } catch (err) {
    // const message=err.errors.message;
    res.status(400).json("internal server error");
  }
};

module.exports = validate;
