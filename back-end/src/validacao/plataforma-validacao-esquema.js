const yup = require("yup");

const criarPlataformaValidacaoEsquema = yup.object({
  body: yup.object({
    nome: yup
      .string()
      .required("O campo nome é obrigatório")
      .trim()
      .max(32, "O nome deve ter no máximo 32 caracteres"),
    descricao: yup
      .string()
      .required("O campo descricao é obrigatório")
      .trim()
      .max(120, "A descricao deve ter no máximo 120 caracteres"),
  }),
});

module.exports = { criarPlataformaValidacaoEsquema };
