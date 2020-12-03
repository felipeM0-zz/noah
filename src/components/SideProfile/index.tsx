import React from "react";
// ICONS
import {
  MdBusiness,
  MdClose,
  MdExitToApp,
  MdModeEdit,
  MdNotifications,
  MdPerson,
} from "react-icons/md";
// STYLES
import Container from "./styles";

const SideProfile = (props: { setShowOptions: (arg0: boolean) => void }) => {
  const closeOptions = () => {
    let elem = document.getElementById("content-sideprof");

    elem?.classList.remove("active");
    elem?.addEventListener("animationend", () => {
      props.setShowOptions(false);
    });
  };

  return (
    <Container onClick={() => closeOptions()}>
      <div id="content-sideprof" className="active" onClick={(e) => e.stopPropagation()}>
        <div>
          <MdPerson />
          <span>Perfil</span>
        </div>

        <div>
          <MdModeEdit />
          <span>Editar Perfil</span>
        </div>

        <div>
          <MdNotifications />
          <span>Notificações</span>
        </div>

        <div>
          <MdBusiness />
          <span>Conta</span>
        </div>

        <div>
          <MdExitToApp />
          <span>Sair</span>
        </div>

        <MdClose onClick={() => closeOptions()} />
      </div>
    </Container>
  );
};

export default SideProfile;
