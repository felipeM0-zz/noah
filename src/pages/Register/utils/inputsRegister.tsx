import React, { useState } from "react";
import InputMask from "react-input-mask";
// CHECKS
import {
  checkCPF,
  checkCNPJ,
  checkEmail,
  checkNames,
  checkTel,
  checkInsc,
  checkCEP,
  checkUF,
  isEmpty,
  getDataCEP,
} from "../../../utils/checkInputsOutside";
// DEFAULTS
import { defaultCEP } from "../../../utils/defaults/defaultsRegister";
// INTERFACES
import { PropsCEP } from "../../../utils/interfaces/interfacesRegister";
// ALERTS
import { closeAlert, msgError, msgLoading } from "../../../utils/swalAlerts";

const ChooseInputModal = (props: {
  type: string;
  inputVal: string;
  setInputVal: (arg0: string) => void;
  setDataCEP: (arg1: PropsCEP) => void;
  setButtonBool: (arg2: boolean) => void;
}) => {
  const [loading, setLoading] = useState(false);

  switch (props.type) {
    case "nome":
    case "sobrenome":
      return (
        <React.Fragment>
          <input
            placeholder="Digite aqui"
            value={props.inputVal.trim()}
            onChange={(e) => {
              props.setInputVal(e.target.value);
              props.setButtonBool(Boolean(checkNames(e.target.value)[1]));
            }}
            className={`${checkNames(props.inputVal)[1] ? "error" : ""}`}
          />
          <span>{checkNames(props.inputVal)[0]}</span>
        </React.Fragment>
      );
    case "email":
      return (
        <React.Fragment>
          <input
            inputMode="email"
            value={props.inputVal}
            placeholder="Digite aqui"
            onChange={(e) => {
              let val = e.target.value;
              props.setInputVal(val);
              props.setButtonBool(Boolean(checkEmail(val)[1]));
            }}
            className={`${checkEmail(props.inputVal)[1] ? "error" : ""}`}
          />
          <span>{checkEmail(props.inputVal)[0]}</span>
        </React.Fragment>
      );
    case "cpf":
      return (
        <React.Fragment>
          <InputMask
            maskChar={null}
            inputMode="decimal"
            mask="999.999.999-99"
            value={props.inputVal}
            placeholder="Digite aqui"
            onChange={(e) => {
              let val = e.target.value;
              props.setInputVal(val);
              props.setButtonBool(Boolean(checkCPF(val)[1]));
            }}
            className={`${checkCPF(props.inputVal)[1] ? "error" : ""}`}
          />
          <span>{checkCPF(props.inputVal)[0]}</span>
        </React.Fragment>
      );
    case "celular":
      return (
        <React.Fragment>
          <InputMask
            inputMode="decimal"
            maskChar={null}
            mask="(99) 99999-9999"
            value={props.inputVal}
            placeholder="Digite aqui"
            onChange={(e) => {
              let val = e.target.value;
              props.setInputVal(val);
              props.setButtonBool(Boolean(checkTel(val)[1]));
            }}
            className={`${checkTel(props.inputVal)[1] ? "error" : ""}`}
          />
          <span>{checkTel(props.inputVal)[0]}</span>
        </React.Fragment>
      );
    case "cnpj":
      return (
        <React.Fragment>
          <InputMask
            maskChar={null}
            inputMode="decimal"
            value={props.inputVal}
            mask="99.999.999/9999-99"
            placeholder="Digite aqui"
            onChange={(e) => {
              let val = e.target.value;
              props.setInputVal(val);
              props.setButtonBool(Boolean(checkCNPJ(val)[1]));
            }}
            className={`${checkCNPJ(props.inputVal)[1] ? "error" : ""}`}
          />
          <span>{checkCNPJ(props.inputVal)[0]}</span>
        </React.Fragment>
      );
    case "insc_estadual":
      return (
        <React.Fragment>
          <InputMask
            maskChar={null}
            mask="99.999999-9"
            inputMode="decimal"
            value={props.inputVal}
            placeholder="Digite aqui"
            onChange={(e) => {
              let val = e.target.value;
              props.setInputVal(val);
              props.setButtonBool(Boolean(checkInsc(val)[1]));
            }}
            className={`${checkInsc(props.inputVal)[1] ? "error" : ""}`}
          />
          <span>{checkInsc(props.inputVal)[0]}</span>
        </React.Fragment>
      );
    case "cep":
      return (
        <React.Fragment>
          <InputMask
            maskChar={null}
            mask="99999-999"
            disabled={loading}
            inputMode="decimal"
            value={props.inputVal}
            placeholder="Digite aqui"
            onChange={async (e) => {
              let val = e.target.value;
              props.setInputVal(val);

              if (val.length === 9) {
                setLoading(true);
                msgLoading("", "Buscando dados...", 0);

                await getDataCEP(val)
                  .then((v) => {
                    closeAlert();

                    let data = v.data;
                    let dfl = defaultCEP;

                    props.setDataCEP({
                      cep: { ...dfl.cep, val: data.cep },
                      cidade: { ...dfl.cidade, val: data.city.slice(0, 80) },
                      bairro: { ...dfl.bairro, val: data.neighborhood.slice(0, 80) },
                      uf: { ...dfl.uf, val: data.state },
                      rua: { ...dfl.rua, val: data.street.slice(0, 80) },
                    });

                    props.setButtonBool(Boolean(false));
                  })
                  .catch((err) => {
                    let error = err.response.data.type;
                    closeAlert();

                    error === "service_error" &&
                      msgError("CEP inválido", "Verifique os dados", 3000);

                    error === "validation_error" &&
                      msgError(
                        "CEP inválido",
                        "O CEP deve conter exatamente 8 caracteres",
                        3000
                      );

                    props.setButtonBool(Boolean(true));
                  });

                setLoading(false);
              } else {
                props.setButtonBool(Boolean(checkCEP(val)[1]));
                props.setDataCEP(defaultCEP);
              }
            }}
            className={`${checkCEP(props.inputVal)[1] ? "error" : ""}`}
          />
          <span>{checkCEP(props.inputVal)[0]}</span>
        </React.Fragment>
      );
    case "uf":
      return (
        <React.Fragment>
          <InputMask
            mask="aa"
            maskChar={null}
            value={props.inputVal}
            placeholder="Digite aqui"
            autoCapitalize="characters"
            onChange={(e) => {
              let val = e.target.value.toUpperCase().replace(/[^A-Z]+/g, "");
              props.setInputVal(val);
              props.setButtonBool(Boolean(checkUF(val)[1]));
            }}
            className={`${checkUF(props.inputVal)[1] ? "error" : ""}`}
          />
          <span>{checkUF(props.inputVal)[0]}</span>
        </React.Fragment>
      );
    default:
      return (
        <React.Fragment>
          <input
            value={props.inputVal}
            placeholder="Digite aqui"
            onChange={(e) => {
              let val = e.target.value;
              props.setInputVal(val);
              props.setButtonBool(Boolean(isEmpty(val)[1]));
            }}
            className={`${isEmpty(props.inputVal)[1] ? "error" : ""}`}
          />
          <span>{isEmpty(props.inputVal)[0]}</span>
        </React.Fragment>
      );
  }
};

export default ChooseInputModal;
