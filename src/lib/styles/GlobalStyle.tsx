import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};

    html,body{
        font-size:1rem;
        font-family: 'Inter', sans-serif;
       
    }
    a{
       
    }
    svg{
      
      
    }
    button{
      font-family: "Inter";
    }
`;

export default GlobalStyle;
