import socketio from "socket.io-client";
import { disableCanvas, enableCanvas, handleBeganPath, handleFilled, handleStrokedPath, hideControls, resetCanvas, showControls } from "../Routes/GameRoom/CanvasController";
import commends from "./Commends";
require("dotenv").config();

const socket = socketio.connect(process.env.REACT_APP_DEV_BACKEND || 'https://paintgame-backend.herokuapp.com');

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

socket.on(commends.disablePaint, data =>{
    disableCanvas();
    hideControls();
});

socket.on(commends.enablePaint, data =>{
    enableCanvas();
    showControls();
});

socket.on(commends.gameEnded, data=>{
    handleStrokedPath(0,0,"white");
    resetCanvas();
    disableCanvas();
    hideControls();
});