import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default  createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
    *{
        box-sizing:border-box;
    }
    body{
        background:linear-gradient(170deg, white 50%, gray 50%);
        width:100vw;
        height:100vh;
        font-size:14px;
        font-family: 'Open Sans', sans-serif;
    }
    a {
        text-decoration : none;
    }
    input{
        outline : none;
    }
    #root{
        width:100vw;
        height:100vh;
    }
`;