const validacao = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    }, { abortEarly: false });
    return next();
  } catch (error) {
    const errors = {};

    if (error.inner) {
      error.inner.forEach(err => {
        errors[err.path] = err.message;
      });
    }
  
    // Aqui você pode definir seu próprio código de status e mensagem de erro
    return res.status(400).json({
      message: 'Erro de validação',
      errors,
    });
  }
};


module.exports = { validacao };