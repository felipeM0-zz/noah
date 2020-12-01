import React from "react";
// ICONS
import {
  MdDashboard,
  MdNoteAdd,
  MdAttachMoney,
  MdAccountBalance,
  MdPictureAsPdf,
} from "react-icons/md";

const defaultOptions = {
  dashboard: {
    router: "/dashboard",
    icon: <MdDashboard />,
    id: "Dashboard",
  },
  access: {
    router: "/access",
    icon: <MdNoteAdd />,
    id: "Cadastros",
  },
  sales: {
    router: "/sales",
    icon: <MdAttachMoney />,
    id: "Vendas",
  },
  financial: {
    router: "/financial",
    icon: <MdAccountBalance />,
    id: "Financeiro",
  },
  reports: {
    router: "/reports",
    icon: <MdPictureAsPdf />,
    id: "Relatórios",
  },
};

export { defaultOptions };
