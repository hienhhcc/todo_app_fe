import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,body{
  height:100%;
  width:100% !important;
  scroll-behavior: smooth;
}

body{
  font-family: 'Montserrat', sans-serif;
  font-weight:500;
  overflow:auto !important;
}

#root{
  min-height:100%;
  min-width:100%;
}

p,
  label {
    font-family: 'Lato', sans-serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

`;
