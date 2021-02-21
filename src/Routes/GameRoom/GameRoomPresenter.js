import React from "react";
import styled from "styled-components";
import { ColorPick } from "../../Components/ColorPick";

const CONTAINER_WIDTH = 600;
const CONTAINER_HEIGHT = 600;

const CANVAS_WIDTH = CONTAINER_WIDTH * 2;
const CANVAS_HEIGHT = CONTAINER_HEIGHT * 2;


const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`

const CanvasBox = styled.div`
    width:700px;
    height : 700px;
    display:flex;
    justify-content : center;
    align-items : center;
`

const Canvas = styled.canvas`
    width:${CONTAINER_WIDTH}px;
    height:${CONTAINER_HEIGHT}px;
    background-color : white;
    border : 1px solid whitesmoke;
    box-shadow:${props => props.theme.normalShadow};
    border-radius:20px;
`

const ColorArray = styled.div`
    width:100%;
    height:100%;
`

export default ({canvasId}) => {
    return (
        <>
            <Wrapper>
            <ColorArray>
                <ColorPick color="red"/>
            </ColorArray>
                <CanvasBox>
                    <Canvas width={CANVAS_WIDTH} height={CANVAS_HEIGHT} id={canvasId}/> 
                </CanvasBox>
            </Wrapper>
        </>
    )
        
}

