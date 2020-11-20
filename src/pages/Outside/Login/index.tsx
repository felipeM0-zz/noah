import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Switch from "react-switch";
// UTILS
import api from "../../../utils/api";
import { msgError, msgSuccess } from "../../../utils/toastLogin";
import { checkEmail, checkPass } from "../../../utils/checkInputsOutside";
// STYLES
import { Container } from "./styles";

const Login = (props: { setShowCreate: (arg0: boolean) => void }) => {
  const route = useHistory();

  const [conected, setConected] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEnter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!checkEmail(email)[2] && !checkPass(password)[2]) {
      setLoading(true);

      let response = await api.get("/felipeM0/big-boom/main/src/data/users.json");
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].email === email) {
          if (response.data[i].pass === password) {
            return msgSuccess(`${response.data[i].name}`).then(() => {
              let elem = document.getElementById("login")?.parentElement?.parentElement;
              elem?.classList.add("main");
              elem?.addEventListener("animationend", () => {
                route.push("/main");
              });
            });
          } else {
            return msgError("Verifique sua senha").then(() => {
              setLoading(false);
            });
          }
        } else {
          return msgError("Email não encontrado").then(() => {
            setLoading(false);
          });
        }
      }
    } else {
      return msgError("Há campos inválidos");
    }
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
              name="Email"
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
              name="Senha"
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
            disabled={
              (checkEmail(email)[2] || checkPass(password)[2] || loading) === true
            }
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
