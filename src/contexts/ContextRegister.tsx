import React from "react";
// INTERFACES
import {
  PropsProp,
  PropsEmp,
} from "../pages/Register/utils/interfaces/interfacesRegister";
// DEFAULTS
import {
  defaultProp,
  defaultEmp,
} from "../pages/Register/utils/defaults/defaultsRegister";

interface PropsSetState {
  prop: PropsProp;
  emp: PropsEmp;
}

const DefaultValue = {
  cliente: {
    prop: defaultProp,
    emp: defaultEmp,
  },
  setCliente: (state: PropsSetState) => {},
};

const ContextRegister = React.createContext(DefaultValue);

export default ContextRegister;
