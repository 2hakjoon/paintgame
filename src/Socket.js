import socketio from "socket.io-client";
import { handleBeganPath, handleStrokedPath } from "./Routes/GameRoom/CanvasController";

const socket = socketio.connect('http://localhost:4000');

export const getSocket = () =>{
    return socket;
}

export let commends = null
socket.on ('setCommend', async (data) => {
    commends = data;

    
    socket.on(commends.beganPath, (data)=>{
        console.log(data)
        handleBeganPath(data);
    });
    socket.on(commends.strokedPath, (data)=>{
        console.log(data)
        handleStrokedPath(data);
    });

});


  