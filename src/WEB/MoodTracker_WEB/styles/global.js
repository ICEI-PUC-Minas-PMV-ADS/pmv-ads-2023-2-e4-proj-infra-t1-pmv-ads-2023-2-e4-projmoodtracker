import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: rgba(75, 87, 161, 0.58);
    color: white;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    outline: none;  

  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;    
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }   
  

`;