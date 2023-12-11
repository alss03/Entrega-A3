const yup = require("yup");

const criarJogoValidacaoEsquema = yup.object({
  body: yup.object({
    nome: yup
      .string()
      .required("O campo nome é obrigatório")
      .trim()
      .min(2, "O nome deve ter no mínimo 2 caracteres")
      .max(32, "O nome deve ter no máximo 32 caracteres"),
    descricao: yup
      .string()
      .required("O campo descricao é obrigatório")
      .trim()
      .max(120, "A descricao deve ter no máximo 120 caracteres"),
    nota: yup
      .number()
      .required("O campo senha é obrigatório")
      .min(1, "A senha deve ser no mínimo 1")
      .max(5, "A senha deve ser no máximo 5"),
    fk_plataforma: yup.number().required("O campo fk_plataforma é obrigatório"),
    fk_usuario: yup.number().required("O campo fk_usuario é obrigatório"),
    fk_categoria: yup.array().required("O campo fk_categoria é obrigatório"),
  }),
});

const atualizarJogoValidacaoEsquema = yup.object({
  body: yup.object({
    nome: yup
      .string()
      .required("O campo nome é obrigatório")
      .trim()
      .min(2, "O nome deve ter no mínimo 2 caracteres")
      .max(32, "O nome deve ter no máximo 32 caracteres"),
    descricao: yup
      .string()
      .required("O campo descricao é obrigatório")
      .trim()
      .max(120, "A descricao deve ter no máximo 120 caracteres"),
    nota: yup
      .number()
      .required("O campo senha é obrigatório")
      .min(1, "A senha deve ser no mínimo 1")
      .max(5, "A senha deve ser no máximo 5"),
    fk_plataforma: yup.number().required("O campo fk_plataforma é obrigatório"),
    fk_usuario: yup.number().required("O campo fk_usuario é obrigatório"),
    fk_categoria: yup.array().required("O campo fk_categoria é obrigatório"),
  }),
  params: yup.object({
    id: yup.number().required("O campo usuário é obrigatório"),
  }),
});

const buscarJogoValidacaoEsquema = yup.object({
  params: yup.object({
    id: yup.number().required("O campo usuário é obrigatório"),
  }),
});

const buscarJogoPorUsuarioValidacaoEsquema = yup.object({
  params: yup.object({
    fk_usuario: yup.number().required("O campo usuário é obrigatório"),
  }),
});

module.exports = {
  atualizarJogoValidacaoEsquema,
  criarJogoValidacaoEsquema,
  buscarJogoValidacaoEsquema,
  buscarJogoPorUsuarioValidacaoEsquema,
};
