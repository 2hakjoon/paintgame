import  { useEffect, useState } from "react";
import { getUserInfo } from "../../Data/LocalStorage";
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
    const [message, setMessage] = useState([]);
    
    const interval = () => {
        if(newChat === true){
            setMessage(message=>[...message.concat(chatList)]);
            console.log(message);
            newChat = false;
        }
    }

    useEffect(()=>{
        clearInterval(int)
        int = setInterval(interval, 100);
        if(document.getElementById("chats")){
            const element = document.getElementById("chats");
            element.scrollTop = element.scrollHeight;
        }
    })

    const onSubmit= (e) => {
        e.preventDefault();
        if(ChatText.value !== ""){
            const userInfo = getUserInfo();
            const chat = {
                user: userInfo.userId,
                text: ChatText.value,
                color: userInfo.userColor
            }
            getSocket().emit(commends.sendMsg, chat);
            
            setMessage(message=>[...message.concat(chat)])
            ChatText.setValue("");
        }
    }
    return (
        <>
            <ChattingPresenter
            value = {ChatText.value}
            onchange = {ChatText.onChange}
            onSubmit = {onSubmit}
            msg={message}
            />
        </>
    )

}