import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import validator from "validator";
// CONTEXTS
import ContextRegister from "../../contexts/ContextRegister";
// ICONS
import { BsPencil, BsArrowRight } from "react-icons/bs";
// UTILS
import ChooseInputModal from "./utils/inputsRegister";
// DEFAULTS
import { defaultCEP, defaultProp, defaultEmp } from "../../utils/defaults/defaultsRegister";
// ALERTS
import { msgSuccess } from "../../utils/swalAlerts";
// STYLES
import { Container } from "./styles";

const Register = () => {
  const RegContext = useContext(ContextRegister);
  const route = useHistory();

  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState<string>("");
  const [buttonBool, setButtonBool] = useState(true);
  const [dataCEP, setDataCEP] = useState(defaultCEP);
  const [checkSend, setCheckSend] = useState(true);

  const RegProp = RegContext.cliente.prop;
  const RegEmp = RegContext.cliente.emp;

  const resetModal = () => {
    let elem = document.getElementById("modalEdit")?.querySelector("form");

    elem?.classList.remove("active");
    elem?.addEventListener("animationend", () => {
      setInputVal("");
      setDataCEP(defaultCEP);
      setButtonBool(true);
      setShowModal(false);
    });
  };

  const checkProceed = useCallback(() => {
    let elem = document.getElementById("btn-send");
    let firstcheck = Object.values(RegProp).every((item) => item.val !== "");
    let secondcheck = Object.values(RegEmp).every((item) => item.val !== "");

    setCheckSend(!(firstcheck && secondcheck));

    firstcheck && secondcheck
      ? elem?.removeAttribute("disabled")
      : elem?.setAttribute("disabled", "disabled");
  }, [RegProp, RegEmp]);

  useEffect(() => {
    checkProceed();
  }, [checkProceed]);

  return (
    <Container>
      <p>Sobre você...</p>
      <div>
        {Object.entries(RegProp).map((v, i) => {
          return (
            <div key={i} className={validator.isEmpty(v[1].val) ? "undefined" : ""}>
              <div>
                <p>{v[1].id}</p>
                <BsPencil
                  onClick={() => {
                    setShowModal(true);
                    setDataModal([v[1].id, v[1].val, v[0], "prop"]);
                  }}
                />
              </div>
              <p>{validator.isEmpty(v[1].val) ? "Não definido" : v[1].val}</p>
            </div>
          );
        })}
      </div>

      <p>Sobre a empresa...</p>
      <div>
        {Object.entries(RegEmp).map((v, i) => {
          return (
            <div key={i} className={validator.isEmpty(v[1].val) ? "undefined" : ""}>
              <div>
                <p>{v[1].id}</p>
                <BsPencil
                  onClick={() => {
                    setShowModal(true);
                    setDataModal([v[1].id, v[1].val, v[0], "emp"]);
                  }}
                />
              </div>
              <p>{validator.isEmpty(v[1].val) ? "Não definido" : v[1].val}</p>
            </div>
          );
        })}
      </div>

      <div>
        <button
          id="btn-send"
          onClick={() => {
            msgSuccess(
              "Confirmação",
              `Dados enviados para análise. </br> ` +
                `Aguarde informações no email informado </br>` +
                `<i>(${RegProp.email.val})</i>`,
              0,
              true
            ).then(() => {
              RegContext.setCliente({
                prop: { ...defaultProp },
                emp: { ...defaultEmp },
              });
              route.push("/");
            });
          }}
          disabled={checkSend}
        >
          <span>Enviar</span>
          <BsArrowRight />
        </button>
      </div>

      {/* MODAL */}

      {showModal && (
        <div id="modalEdit" onClick={() => resetModal()}>
          <form
            className="active"
            onClick={(e) => e.stopPropagation()}
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <div className="cep-info">
                {!Object.values(dataCEP).every((item) => item.val === "") &&
                  Object.values(dataCEP)
                    .slice(1)
                    .filter((v) => v.val !== "")
                    .map((v, i) => {
                      return <span key={i}>{`${v.id}: ${v.val}`}</span>;
                    })}
              </div>
              <div>
                <p>{dataModal[0]}</p>
                <p>{dataModal[1]}</p>
              </div>
            </div>

            <div>
              <ChooseInputModal
                type={dataModal[2]}
                inputVal={inputVal}
                setInputVal={(v: string) => {
                  setInputVal(v);
                }}
                setDataCEP={(v) => {
                  setDataCEP(v);
                }}
                setButtonBool={(v: boolean) => {
                  setButtonBool(v);
                }}
              />
            </div>

            {!Object.values(dataCEP).every((item) => item.val === "") ? (
              <button
                type="submit"
                disabled={buttonBool}
                onClick={() => {
                  let values = {};

                  Object.entries(dataCEP)
                    .filter((item) => item[1].val !== "")
                    .forEach((v) => {
                      Object.assign(values, { [v[0]]: v[1] });
                    });

                  RegContext.setCliente({
                    prop: { ...RegProp },
                    emp: { ...RegEmp, ...values },
                  });

                  resetModal();
                }}
              >
                <span>OK</span>
              </button>
            ) : (
              <button
                type="submit"
                disabled={buttonBool}
                onClick={() => {
                  if (dataModal[3] === "prop") {
                    RegContext.setCliente({
                      prop: {
                        ...RegProp,
                        [dataModal[2]]: {
                          val: inputVal,
                          id: dataModal[0],
                        },
                      },
                      emp: { ...RegEmp },
                    });
                  } else {
                    RegContext.setCliente({
                      prop: { ...RegProp },
                      emp: {
                        ...RegEmp,
                        [dataModal[2]]: {
                          val: inputVal,
                          id: dataModal[0],
                        },
                      },
                    });
                  }
                  resetModal();
                }}
              >
                <span>OK</span>
              </button>
            )}
          </form>
        </div>
      )}
    </Container>
  );
};

export default Register;
