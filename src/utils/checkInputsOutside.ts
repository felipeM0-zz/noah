import validator from "validator";

const checkNames = (v: string) => {
  return validator.isEmpty(v)
    ? ["Não pode ser vazio", "error", true]
    : v.trim().indexOf(" ") > 0
    ? ["Insira apenas um nome", "error", true]
    : ["", "", false];
};

const checkEmail = (v: string) => {
  return validator.isEmpty(v)
    ? ["Não pode ser nulo", "error", true]
    : !validator.isEmail(v)
    ? ["Email inválido", "error", true]
    : ["", "", false];
};

const checkPass = (v: string) => {
  return validator.isEmpty(v)
    ? ["Não pode ser nulo", "error", true]
    : v.length < 6
    ? ["Senha curta (mínimo: 6 caracteres)", "error", true]
    : ["", "", false];
};

export { checkNames, checkEmail, checkPass };
