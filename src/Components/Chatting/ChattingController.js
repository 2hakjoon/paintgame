import react, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getUserId } from "../../Data/LocalStorage";
import InputHook from "../../Hook/InputHook";
import commends from "../../Socket/Commends";
import { getSocket } from "../../Socket/Socket";
import ChattingPresenter from "./ChattingPresenter";



let int = setInterval(console.log(), 1000);

let chatList = []
let newChat = false;

export const updateChats = (msg) => {
    chatList=[];
    chatList.push(msg.data)
    newChat = true;
    if(chatList.length > 10){
        chatList.splice(0,1)
    }
}

export default () => {
    const ChatText = InputHook("");
    const [test, setTest] = useState([]);
    
    const interval = () => {
        if(newChat === true){
            setTest(test=>[...test.concat(chatList)]);
            console.log(test);
            newChat = false;
        }
    }

    useEffect(()=>{
        clearInterval(int)
        int = setInterval(interval, 100);
    })

    const onSubmit= (e) => {
        const chat = {
            user: getUserId(),
            text: ChatText.value
        }
        e.preventDefault();
        getSocket().emit(commends.sendMsg, chat)

    }
    return (
        <>
            <ChattingPresenter
            chatText = {ChatText}
            onSubmit = {onSubmit}
            msg={test}
            />
        </>
    )

}