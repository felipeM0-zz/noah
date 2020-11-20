import React, { useState } from "react";
import Switch from "react-switch";
// UTILS
import { checkEmail, checkPass } from "../../../utils/checkInputsOutside";
// STYLES
import { Container } from "./styles";

const Login = (props: { setShowCreate: (arg0: boolean) => void }) => {
  const [conected, setConected] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <span>Entre com seus dados inseridos no momento do cadastro.</span>

        <form onSubmit={(e) => handleEnter(e)}>
          <div>
            <span>Seu email</span>
            <input
              type="email"
              value={email}
              className={`${checkEmail(email)[1]}`}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>{checkEmail(email)[0]}</span>
          </div>

          <div>
            <span>Sua senha</span>
            <input
              type="password"
              value={password}
              className={`${checkPass(password)[1]}`}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>{checkPass(password)[0]}</span>
          </div>

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

          <button
            type="submit"
            disabled={(checkEmail(email)[2] || checkPass(password)[2]) === true}
          >
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
