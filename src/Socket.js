import socketio from "socket.io-client";

const socket = socketio.connect('http://localhost:4000');

export let commends = null
socket.on ('setCommend', async (data) => {
    commends = data
    console.log(commends)
});


export const initSocket = () => {
    socket.emit('init', { name: 'test' });
}

  