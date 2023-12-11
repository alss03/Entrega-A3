const yup = require("yup");

const buscarCategoriaPorIdEsquema = yup.object({
  params: yup.object({
    id: yup.number().required("O campo usuário é obrigatório"),
  }),
});

module.exports = { buscarCategoriaPorIdEsquema }