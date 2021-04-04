import React, { useEffect, useState } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { INITIAL_COLOR } from "../Routes/GameRoom/CanvasController";



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
    border : ${props => props.border};
`

export const ColorPick = ({color}) => {
    let colors = "";
    let border = "none";
    
    useEffect(()=>{
        colors = document.getElementsByClassName("jsColor");
    })

    if(INITIAL_COLOR === color){
        border = "CornflowerBlue 4px solid";
    }
    const onClick=(e)=>{
        Array.from(colors).forEach((color) =>
            color.style.border = "none"
        );
        const selectedColor = e.target.id;
        if(selectedColor === color){
            document.getElementById(`${selectedColor}`).style.border = "CornflowerBlue 4px solid"
        }
    }
    

    return (
        <Circle id={color} color={color} onClick={onClick} border={border}className="jsColor"/>
    )

}

ColorPick.propTypes = {
    color : propTypes.string.isRequired
}