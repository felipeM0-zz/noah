import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
// UTILS
import { checkNames, checkEmail } from "../../../utils/checkInputsOutside";
import { msgError, msgLoading } from "../../../utils/swalAlerts";
// CONTEXTS
import ContextRegister from "../../../contexts/ContextRegister";
// STYLES
import { Container } from "./styles";

const Create = (props: { setShowCreate: (arg0: boolean) => void }) => {
  const route = useHistory();
  const RegContext = useContext(ContextRegister);

  const RegProp = RegContext.cliente.prop;
  const RegEmp = RegContext.cliente.emp;

  const [loading, setLoading] = useState(false);

  const handleEnter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !checkNames(RegProp.nome.val)[1] ||
      !checkNames(RegProp.sobrenome.val)[1] ||
      !checkEmail(RegProp.nome.val)[1] ||
      !loading
    ) {
      setLoading(true);

      let elem = document.getElementById("create")?.parentElement?.parentElement;
      elem?.classList.add("main");
      elem?.addEventListener("animationend", () => {
        msgLoading("", "Só mais alguns dados...", 2000).then(() => {
          route.push("/register");
        });
      });
    } else {
      msgError("", "Há campos inválidos!", 2000).then(() => {
        setLoading(false);
      });
    }
  };

  const changeScreen = () => {
    const elem = document.getElementById("create");
    elem?.classList.add("out");

    elem?.addEventListener("animationend", () => {
      props.setShowCreate(false);
    });
  };

  return (
    <Container>
      <div id="create">
        <p>Criar conta</p>
        <span>Insira os dados abaixo para iniciar seu cadastro</span>

        <form onSubmit={(e) => handleEnter(e)}>
          <div>
            <div>
              <span>Primeiro nome</span>
              <input
                type="text"
                name="Primeiro Nome"
                value={RegProp.nome.val.trim()}
                placeholder="João"
                onChange={(e) =>
                  RegContext.setCliente({
                    prop: {
                      ...RegProp,
                      nome: { val: e.target.value, id: RegProp.nome.id },
                    },
                    emp: { ...RegEmp },
                  })
                }
              />
              <p>{checkNames(RegProp.nome.val)[0]}</p>
            </div>

            <div>
              <span>Segundo nome</span>
              <input
                type="text"
                name="Segundo nome"
                value={RegProp.sobrenome.val.trim()}
                placeholder="Paulo"
                onChange={(e) =>
                  RegContext.setCliente({
                    prop: {
                      ...RegProp,
                      sobrenome: { val: e.target.value, id: RegProp.sobrenome.id },
                    },
                    emp: { ...RegEmp },
                  })
                }
              />
              <p>{checkNames(RegProp.sobrenome.val)[0]}</p>
            </div>
          </div>

          <div>
            <span>Email</span>
            <input
              type="email"
              value={RegProp.email.val}
              name="Email"
              placeholder="usuario@hotmail.com"
              onChange={(e) =>
                RegContext.setCliente({
                  prop: {
                    ...RegProp,
                    email: { val: e.target.value, id: RegProp.email.id },
                  },
                  emp: { ...RegEmp },
                })
              }
            />
            <span>{checkEmail(RegProp.email.val)[0]}</span>
          </div>

          <button
            type="submit"
            disabled={
              (checkNames(RegProp.nome.val)[1] ||
                checkNames(RegProp.sobrenome.val)[1] ||
                checkEmail(RegProp.email.val)[1] ||
                loading) === true
            }
          >
            <span>Continuar</span>
          </button>
        </form>

        <div>
          <span>Já tem uma conta?</span>
          <span onClick={() => changeScreen()}>Entre!</span>
        </div>
      </div>
    </Container>
  );
};

export default Create;
