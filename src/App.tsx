import React, { useContext, useState } from "react";
// ROUTES
import Routes from "./routes";
// CONTEXTS
import ContextRegister from "./contexts/ContextRegister";

function App() {
  const RegCont = useContext(ContextRegister);

  const [cliente, setCliente] = useState({
    prop: RegCont.cliente.prop ,
    emp: RegCont.cliente.emp,
  });

  return (
    <ContextRegister.Provider value={{ cliente, setCliente }}>
      <Routes />
    </ContextRegister.Provider>
  );
}

export default App;
