import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
     --color-primary: ${(props) => props.theme.colors.primary};
     --color-primary-darker: ${(props) => props.theme.colors.primary_darker};
     --color-secundary: ${(props) => props.theme.colors.primary_text};
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  body {
    color: var(--color-secundary);
    background-color: var(--color-primary);
    -webkit-tap-highlight-color: transparent;
    min-width: 320px;

    transition: background-color .3s;
  }
  
  p,
  label,
  span {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 0px;
    background-color: transparent;
  }

  input {
    background-color: var(--color-secundary);
  }
  
  body,
  input,
  button,
  label,
  textarea {
    font: 400 1rem Maven Pro, sans-serif !important;
  }
`;

export default GlobalStyle;
