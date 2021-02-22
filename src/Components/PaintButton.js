import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

 const PaintFill = styled.div`
    text-align: center;
    vertical-align: middle;
    line-height: 70px; 
    background-color : wheat;
    width: 70px;
    height : 70px;
    border : grey 1px solid;
    border-radius : 20px;
    cursor: pointer;
    box-shadow : ${props => props.theme.smallShadow};
 `

export const PaintButton = ({text = "paint"}) => {
    return(
    <PaintFill id="jsMode">{text}</PaintFill>
    )
}

PaintButton.propTypes = {
    text : propTypes.string.isRequired
}
