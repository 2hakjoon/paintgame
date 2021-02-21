import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const getColor = (color) => {
    return `background-color : ${color};`
}

const Circle = styled.div`
    ${props => getColor(props.color)}
    width : 100px;
    height : 100px;
    border-radius : 43px;
`

export const ColorPick = ({color}) => {
    return (
        <Circle color={color} id="jsColor"/>
    )

}

ColorPick.propTypes = {
    color : propTypes.string.isRequired
}