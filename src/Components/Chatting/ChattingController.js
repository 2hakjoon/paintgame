import  { useEffect, useState } from "react";
import { getUserInfo } from "../../Data/LocalStorage";
import InputHook from "../../Hook/InputHook";
import commends from "../../Socket/Commends";
import { getSocket } from "../../Socket/Socket";
import ChattingPresenter from "./ChattingPresenter";

let setListener = false;


export default () => {
    const ChatText = InputHook("");
    const [message, setMessage] = useState([]);
    const [clickEn, setClickEn] = useState([]);

    useEffect(()=>{
        if(setListener === false){
            getSocket().on(commends.newMsg, (data)=>{
                setMessage(message=>[...message.concat(data.data)]);
                console.log(data.data.text)
                if(data.data.text == "당신이 그릴 차례입니다."){
                    setClickEn("none");
                }
                else{
                    setClickEn("auto");
                }
            })
            getSocket().on(commends.playerUpdate, (data)=>{
                setMessage(message=>[...message.concat(data.data)]);
            });
            getSocket().on(commends.gameStarted, (data)=>{
                setMessage(message=>[...message.concat(data.data)]);
            });
        }
        setListener = true;
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
            clickEn = {clickEn}
            />
        </>
    )

}