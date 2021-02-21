import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default  createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
    *{
        box-sizing:border-box;
    }
    body{
        background-color:red;
        font-size:14px;
        font-family: 'Open Sans', sans-serif;
    }
    a {
        text-decoration : none;
    }
    input{
        outline : none;
    }
`;