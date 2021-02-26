import react, { useState } from "react";
import styled from "styled-components";
import InputHook from "../../Hook/InputHook";
import { commends, getSocket } from "../../Socket";
import ChattingPresenter from "./ChattingPresenter";
import updateChatHook from "../../Hook/updateChatHook";

let chatList = []

export const addNewChat = (msg) => {
    chatList.push(msg)
    if(chatList.length > 10){
        chatList.splice(0, 1)
    }
    console.log(chatList.length)
    console.log(chatList)
}

export default () => {
    const ChatText = InputHook("");
    
    const onSubmit= (e) => {
        e.preventDefault();
        getSocket().emit(commends.sendMsg, ChatText.value)
    }
    return (
        <ChattingPresenter
        chatText = {ChatText}
        onSubmit = {onSubmit}
        />
    )

}