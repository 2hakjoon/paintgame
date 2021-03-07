import GameRoomPresenter from "./GameRoomPresenter";
import ModalLogin from "../ModalLogin";
import { deleteUser, getUserInfo, makeUser, UserLoggedIn } from "../../Data/LocalStorage";
import { useState } from "react";
import commends from "../../Socket/Commends";
import { getSocket } from "../../Socket/Socket";
import InputHook from "../../Hook/InputHook";


const socket = getSocket();

export default () => {
    deleteUser();
    const [loginState, setLoginState] = useState(UserLoggedIn);
    const nickname = InputHook("");
    
    const onSubmit = async(e) =>{
        e.preventDefault();
        socket.emit(commends.setNickname, nickname.value)
        setTimeout(()=>{
            if(getUserInfo() === null){
                console.log("error")
            }
        }, 3000)
        await socket.on(commends.nicknameConfirm, (data)=>{
            makeUser(nickname.value, data)
        })
        setLoginState(true);
    }

    return (
        <>
            <GameRoomPresenter canvasId="jsCanvas"/>
            {loginState? null : <ModalLogin 
            onSubmit={onSubmit}
            nickname={nickname}
            />}
        </>
    )
}