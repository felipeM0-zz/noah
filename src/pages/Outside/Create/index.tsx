import React from "react";

import { Container } from "./styles";

const Create = (props: { setShowCreate: (arg0: boolean) => void; }) => {
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
              <input type="text" />
            </div>

            <div>
              <span>Segundo nome</span>
              <input type="text" />
            </div>
          </div>

          <span>Email válido</span>
          <input type="email" />

          <button type="submit">
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
