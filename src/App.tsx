import React, { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
// ROUTES
import Routes from "./routes";
// CONTEXTS
import ContextRegister from "./contexts/ContextRegister";
import ContextTheme from "./contexts/ContextTheme";
// STYLES
import { dark, light } from "./styles/theme";
import GlobalStyle from "./styles/global";

const App = () => {
  const RegCont = useContext(ContextRegister);
  const ThemeCont = useContext(ContextTheme);

  const [cliente, setCliente] = useState({
    prop: RegCont.cliente.prop,
    emp: RegCont.cliente.emp,
  });

  const [theme, setTheme] = useState({
    checked: ThemeCont.theme.checked,
  });

  return (
    <ContextRegister.Provider value={{ cliente, setCliente }}>
      <ContextTheme.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={theme.checked ? dark : light}>
          <Routes />
          <GlobalStyle />
        </ThemeProvider>
      </ContextTheme.Provider>
    </ContextRegister.Provider>
  );
};

export default App;
