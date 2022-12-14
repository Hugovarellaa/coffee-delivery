import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors["base-background"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body , input, button, textarea {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  [disabled]{
    opacity: 0.7;
    cursor: not-allowed;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
  
  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors["base-button"]}
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors["brand-purple"]}
  }
`