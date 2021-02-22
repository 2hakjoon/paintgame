import React from "react";
import styled from "styled-components";

const text = "--Loading--";

const LoadingIcon = styled.div`
    position:absolute;
    width:100vw;
    height:100vh;
    font-size : 50px;
    top:0;
    left:0;
    text-align: center;
    vertical-align: middle;
    line-height: 100vh;
    background-color:black;
    opacity:0.5;
    color:white;
`;

const Loading = () => (
    <LoadingIcon>
        {text}
    </LoadingIcon>
);



export default Loading;
