import Swal from "sweetalert2";
import "../styles/swal.css";
import api from "./api";

// ENVIAR ALERT DE ERRO
const msgError = async (title: string, html: string, timer: number) => {
  await Swal.fire({
    title: title,
    html: html,
    icon: "error",
    timer: timer,
    showConfirmButton: false,
  });
};

// ENVIAR ALERT DE SUCESSO
const msgSuccess = async (
  title: string,
  html: string,
  timer: number,
  confirm: boolean
) => {
  await Swal.fire({
    title: title,
    html: html,
    timer: timer,
    showConfirmButton: confirm,
    icon: "success",
  });
};

// ENVIAR ALERT DE CARREGAMENTO
const msgLoading = async (title: string, html: string, timer: number) => {
  await Swal.fire({
    title: title,
    html: html,
    timer: timer,
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    customClass: { popup: "swal2-data-loading" },
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

const RecoverPass = (email: string) => {
  Swal.fire({
    title: "Qual o seu email?",
    input: "text",
    inputValue: email,
    inputAttributes: {
      autocapitalize: "off",
    },
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Enviar",
    showLoaderOnConfirm: true,
    inputPlaceholder: "Digite aqui",
    cancelButtonText: "Cancelar",
    preConfirm: async (email) => {
      if (email !== "") {
        let response = await api.get("/felipeM0/big-boom/main/src/data/users.json");
        let count = 0;

        for await (const dt of response.data) {
          if (dt.email === email) {
            count++;
            return msgSuccess(
              "Confirmação",
              `Em alguns segundos um link será </br>` +
                ` enviado para o email informado </br>` +
                ` <i style="color: #a5dc86">(${email})</i> </br>` +
                `Verifique também sua caixa de SPAM`,
              0,
              true
            );
          }
        }

        if (count <= 0) {
          return msgError("Erro", "Email não encontrado", 3000);
        }
      } else {
        return msgError("Erro", "O email não pode ser vazio", 3000);
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
  });
};

//-- HELPERS --

// OBRIGAR ALERTA A FECHAR
const closeAlert = () => {
  Swal.close();
};

export { msgError, msgSuccess, msgLoading, RecoverPass, closeAlert };
