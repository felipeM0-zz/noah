import axios from "axios";

const cep = axios.create({
  baseURL: "https://brasilapi.com.br/api/cep/v1/",
  headers: { "Content-Type": "application/json" },
});

export default cep;
