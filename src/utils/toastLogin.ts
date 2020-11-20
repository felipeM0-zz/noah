import cogoToast from "cogo-toast";

const msgSuccess = async (msg: string) => {
  await cogoToast.success(
    "Seja bem vindo(a) " + msg.split(" ").slice(0, 1).join(" ") + "!",
    {
      position: "bottom-center",
      hideAfter: 2,
    }
  );
};

const msgSuccessCreate = async (msg: string) => {
  await cogoToast.success(msg, {
    position: "bottom-center",
    hideAfter: 2,
  });
};

const msgError = async (error: string) => {
  await cogoToast.error(error, { position: "bottom-center", hideAfter: 2 });
};

export { msgSuccess, msgSuccessCreate, msgError };
