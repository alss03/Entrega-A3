const yup = require("yup");

const loginUsuarioValidacaoEsquema = yup.object({
  body: yup.object({
    email: yup
      .string()
      .required("O campo email é obrigatório")
      .trim()
      .email("E-mail inválido")
      .max(120, "O e-mail deve ter no máximo 120 caracteres"),
    senha: yup
      .string()
      .required("O campo senha é obrigatório")
      .trim()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .max(16, "A senha deve ter no máximo 16 caracteres"),
  }),
});

const criarUsuarioValidacaoEsquema = yup.object({
  body: yup.object({
    usuario: yup
      .string()
      .max(12)
      .required("O campo usuário é obrigatório")
      .trim()
      .min(4, "O usuário deve ter no mínimo 5 caracteres"),
    nome: yup
      .string()
      .required("O campo nome é obrigatório")
      .trim()
      .min(4, "O nome deve ter no mínimo 8 caracteres")
      .max(32, "O nome deve ter no máximo 32 caracteres"),
    email: yup
      .string()
      .required("O campo email é obrigatório")
      .trim()
      .email("E-mail inválido")
      .max(120, "O e-mail deve ter no máximo 120 caracteres"),
    senha: yup
      .string()
      .required("O campo senha é obrigatório")
      .trim()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .max(16, "A senha deve ter no máximo 16 caracteres"),
  }),
});

const buscarUsuarioValidacaoEsquema = yup.object({
  params: yup.object({
    id: yup.number().required("O campo usuário é obrigatório"),
  }),
});

module.exports = {
  criarUsuarioValidacaoEsquema,
  buscarUsuarioValidacaoEsquema,
  loginUsuarioValidacaoEsquema,
};
