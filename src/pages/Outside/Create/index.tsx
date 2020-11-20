import React, { useState } from "react";
// UTILS
import { checkNames, checkEmail } from "../../../utils/checkInputsOutside";
// STYLES
import { Container } from "./styles";

const Create = (props: { setShowCreate: (arg0: boolean) => void }) => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");

  const handleEnter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
                value={firstName.trim()}
                placeholder="João"
                className={`${checkNames(firstName)[1]}`}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <p>{checkNames(firstName)[0]}</p>
            </div>

            <div>
              <span>Segundo nome</span>
              <input
                type="text"
                value={secondName.trim()}
                placeholder="Paulo"
                className={`${checkNames(secondName)[1]}`}
                onChange={(e) => setSecondName(e.target.value)}
              />
              <p>{checkNames(secondName)[0]}</p>
            </div>
          </div>

          <div>
            <span>Email</span>
            <input
              type="email"
              value={email}
              placeholder="usuario@hotmail.com"
              className={`${checkEmail(email)[1]}`}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>{checkEmail(email)[0]}</span>
          </div>

          <button
            type="submit"
            disabled={
              (checkNames(firstName)[2] ||
                checkNames(secondName)[2] ||
                checkEmail(email)[2]) === true
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
