import validator from "validator";
import { cpf, cnpj } from "cpf-cnpj-validator";
import cep from "./cep";

// CHECAR NOMES ÚNICOS
const checkNames = (v: string) => {
  return isEmpty(v)[1]
    ? isEmpty(v)
    : v.trim().indexOf(" ") > 0
    ? ["Insira apenas um nome", true]
    : maxLength(v)[1]
    ? maxLength(v)
    : ["", false];
};

// CHECAR VALIDADE DOS EMAILS
const checkEmail = (v: string) => {
  return isEmpty(v)[1]
    ? isEmpty(v)
    : !validator.isEmail(v)
    ? ["Email inválido", true]
    : maxLength(v)[1]
    ? maxLength(v)
    : ["", false];
};

// CHECAR SENHAS
const checkPass = (v: string) => {
  return isEmpty(v)[1]
    ? isEmpty(v)
    : v.length < 6
    ? ["Senha curta (mínimo: 6 caracteres)", true]
    : ["", false];
};

// CHECAR CPFS
const checkCPF = (v: string) => {
  let val = onlyNumbers(v);

  return isEmpty(val)[1]
    ? isEmpty(v)
    : !cpf.isValid(val)
    ? ["CPF inválido", true]
    : maxLength(v)[1]
    ? maxLength(v)
    : ["", false];
};

// CHECAR TELEFONES
const checkTel = (v: string) => {
  let val = onlyNumbers(v);

  return isEmpty(val)[1]
    ? isEmpty(v)
    : val.length < 11
    ? ["Formato inválido", true]
    : maxLength(v)[1]
    ? maxLength(v)
    : ["", false];
};

// CHECAR CNPJS
const checkCNPJ = (v: string) => {
  let val = onlyNumbers(v);

  return isEmpty(val)[1]
    ? isEmpty(v)
    : !cnpj.isValid(val)
    ? ["CNPJ inválido", true]
    : maxLength(v)[1]
    ? maxLength(v)
    : ["", false];
};

// CHECAR INSCRIÇÕES ESTADUAIS
const checkInsc = (v: string) => {
  let val = onlyNumbers(v);

  return isEmpty(val)[1]
    ? isEmpty(val)
    : val.length < 9
    ? ["Formato inválido", true]
    : maxLength(v)[1]
    ? maxLength(v)
    : ["", false];
};

// CHECAR CEPS
const checkCEP = (v: string) => {
  let val: string = onlyNumbers(v);

  return isEmpty(val)[1]
    ? isEmpty(val)
    : val.length !== 8
    ? ["Formato inválido", true]
    : maxLength(v)[1]
    ? maxLength(v)
    : ["", false];
};

// CHECAR UNIDADES FEDERATIVAS
const checkUF = (v: string) => {
  let val = v.toUpperCase();
  return isEmpty(val)[1]
    ? isEmpty(val)
    : val.length !== 2
    ? ["Formato inválido", true]
    : maxLength(v)[1]
    ? maxLength(v)
    : UFs(val);
};

// -- HELPERS --

// CONVERTER PARA APENAS NÚMEROS
const onlyNumbers = (v: string) => {
  return v.replace(/[^0-9]+/g, "");
};

// CHECAR VAZIOS
const isEmpty = (v: string) => {
  return validator.isEmpty(v)
    ? ["Não pode ser vazio", true]
    : maxLength(v)[1]
    ? maxLength(v)
    : ["", false];
};

// OBTER CEPS
const getDataCEP = (v: string) => {
  let val: string = onlyNumbers(v);
  return cep(val);
};

// CHECAR TAMANHO
const maxLength = (v: string) => {
  return v.length >= 80 ? ["Muito extenso (máximo 80)", true] : ["", false];
};

// UNIDADES FEDERATIVAS
const UFs = (v: string) => {
  switch (v) {
    case "RO":
    case "AC":
    case "AM":
    case "RR":
    case "PA":
    case "AP":
    case "TO":
    case "MA":
    case "PI":
    case "CE":
    case "RN":
    case "PB":
    case "PE":
    case "AL":
    case "SE":
    case "BA":
    case "MG":
    case "ES":
    case "RJ":
    case "SP":
    case "PR":
    case "SC":
    case "RS":
    case "MS":
    case "MT":
    case "GO":
    case "DF":
      return ["", false];

    default:
      return ["Não consta", true];
  }
};

export {
  checkNames,
  checkEmail,
  checkPass,
  checkCPF,
  checkTel,
  checkCNPJ,
  checkInsc,
  checkCEP,
  checkUF,
  isEmpty,
  getDataCEP,
};
