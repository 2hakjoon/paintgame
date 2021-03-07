import React, { useEffect, useState } from "react";
import styled from "styled-components";
import commends from "../Socket/Commends";
import { getSocket } from "../Socket/Socket";
import { updateChats } from "./Chatting/ChattingController";


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
`

const Word = styled.div`
    width : 100%;
    padding-left : 10px;
`

export default (
) => {
    const [word, setWord] = useState("");
    useEffect(()=>{
        getSocket().on(commends.painterNotif, (data)=>{
            setWord(data);
        });
    })
    return(
        <Wrapper>
            <Word>
                제시어 : {word}
            </Word>
        </Wrapper>
    )
}