import Swal from "sweetalert2";
import "../styles/swal.css";

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

//-- HELPERS --

// OBRIGAR ALERTA A FECHAR
const closeAlert = () => {
  Swal.close();
};

export { msgError, msgSuccess, msgLoading, closeAlert };
