interface PropsProp {
  nome: { val: string; id: string };
  sobrenome: { val: string; id: string };
  email: { val: string; id: string };
  cpf: { val: string; id: string };
  celular: { val: string; id: string };
}

interface PropsEmp {
  razao_social: { val: string; id: string };
  nome_fantasia: { val: string; id: string };
  cnpj: { val: string; id: string };
  insc_estadual: { val: string; id: string };
  rua: { val: string; id: string };
  numero: { val: string; id: string };
  bairro: { val: string; id: string };
  cep: { val: string; id: string };
  cidade: { val: string; id: string };
  uf: { val: string; id: string };
}

interface PropsCEP {
  cep: { val: string; id: string };
  cidade: { val: string; id: string };
  bairro: { val: string; id: string };
  uf: { val: string; id: string };
  rua: { val: string; id: string };
}

export type { PropsCEP, PropsProp, PropsEmp };
