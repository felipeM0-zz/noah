import React from "react";

interface PropsSetState {
  checked: boolean;
}

const storageValue = localStorage.getItem("theme");

const DefaultValue = {
  theme: {
    checked: storageValue ? JSON.parse(storageValue) : true,
  },
  setTheme: (state: PropsSetState) => {},
};

const ContextTheme = React.createContext(DefaultValue);

export default ContextTheme;
