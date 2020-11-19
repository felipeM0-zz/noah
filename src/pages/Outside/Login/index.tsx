import React, { useState } from "react";
import Switch from "react-switch";

import { Container } from "./styles";

const Login = (props: { setShowCreate: (arg0: boolean) => void; }) => {
  const [conected, setConected] = useState(false);

  const handleEnter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const changeScreen = () => {
    const elem = document.getElementById("login");
    elem?.classList.add("out");

    elem?.addEventListener("animationend", () => {
      props.setShowCreate(true);
    });
  };

  return (
    <Container>
      <div id="login">
        <p>Entrar</p>
        <span>Entre com seus dados apresentados no momento do cadastro.</span>

        <form onSubmit={(e) => handleEnter(e)}>
          <span>Seu email</span>
          <input type="email" />
          <span>Sua senha</span>
          <input type="password" />

          <label>
            <Switch
              offColor="#ccc"
              onColor="#404047"
              activeBoxShadow="transparent"
              height={22}
              width={45}
              handleDiameter={22}
              onChange={() => setConected(!conected)}
              checked={conected}
            />
            <span>Manter-me conectado</span>
          </label>

          <button type="submit">
            <span>Entrar</span>
          </button>

          <div>
            <div>
              <span>Ainda não tem conta?</span>
              <span onClick={() => changeScreen()}>Crie uma!</span>
            </div>
            <span>Esqueci minha senha</span>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
