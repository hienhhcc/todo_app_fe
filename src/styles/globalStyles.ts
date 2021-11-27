import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,body{
  height:100%;
  width:100% !important;
  scroll-behavior: smooth;
  
}

body{
  font-family: 'Roboto', sans-serif;
  font-weight:500;
  overflow:auto !important;
  
}

#root{
  height:100%;
  width:100%;
}

p,
  label {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

`;
