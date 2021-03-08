import React, { useEffect, useState } from "react";
import styled from "styled-components";
import commends from "../Socket/Commends";
import { getSocket } from "../Socket/Socket";


const Wrapper = styled.div`
    background-color : white;
    height : 30px;
    width : 100%;
    display : flex;
    justify-content : space-between;
    position:absolute;
    border-top-right-radius:20px;
    border-bottom: 1px solid gray;
    align-items:center;
    *{
        -webkit-user-select: none;
        -webkit-user-drag: none;
        -webkit-app-region: no-drag;
        cursor: default;
    }
`

const Word = styled.div`
    width : 100%;
    padding-left : 10px;
`
const Timer = styled.div`
    padding-right : 10px;
    width : 150px;
`

let setListener = false;

export default (
) => {
    const [word, setWord] = useState("");
    const [timer, setTimer] = useState("");
    useEffect(()=>{
        if(setListener === false){
            getSocket().on(commends.painterNotif, (data)=>{
                setWord(data);
            });
            getSocket().on(commends.countDown, (data)=>{
                setTimer(data);
            })
        }
        setListener = true
    })
    return(
        <Wrapper>
            <Word>
                {word}
            </Word>
            <Timer>
                {timer}
            </Timer>
        </Wrapper>
    )
}