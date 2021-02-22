import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const getColor = (color) => {
    return `background-color : ${color};`
}

const Circle = styled.div`
    ${props => getColor(props.color)}
    width : 60px;
    height : 60px;
    border-radius : 27px;
    cursor: pointer;
    box-shadow:${props => props.theme.smallShadow};
`

export const ColorPick = ({color}) => {
    return (
        <Circle id={color} color={color} className="jsColor"/>
    )

}

ColorPick.propTypes = {
    color : propTypes.string.isRequired
}