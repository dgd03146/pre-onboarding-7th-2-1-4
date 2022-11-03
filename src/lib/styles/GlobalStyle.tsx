import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
    *{
      box-sizing: border-box;
    }
    html,body{
        font-size:1rem;
        font-family: 'Inter', sans-serif;
       
    }
  
    button{
      outline: none;
      background-color: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
    }
  
`;

export default GlobalStyle;
