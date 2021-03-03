import socketio from "socket.io-client";
import { addNewChat, updateChats } from "../Components/Chatting/ChattingController";
import { handleBeganPath, handleFilled, handleStrokedPath } from "../Routes/GameRoom/CanvasController";
import commends from "./Commends";

const socket = socketio.connect('http://localhost:4000');

export const getSocket = () =>{
    return socket;
}

socket.on(commends.beganPath, (data)=>{
    handleBeganPath(data);
});
socket.on(commends.strokedPath, (data)=>{
    handleStrokedPath(data);
});

socket.on(commends.fill, (data)=>{
    handleFilled(data);
});
socket.on(commends.newMsg, (data)=>{
    updateChats(data)
})

