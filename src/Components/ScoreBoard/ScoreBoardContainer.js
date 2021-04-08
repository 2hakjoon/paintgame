import { useEffect, useState } from "react";
import { disableCanvas, enableCanvas, handleStrokedPath, hideControls, resetCanvas, showControls } from "../../Routes/GameRoom/CanvasController";
import commends from "../../Socket/Commends";
import { getSocket } from "../../Socket/Socket";
import ScoreBoardPresentser from "./ScoreBoardPresentser"

let setListener = false;

export default () =>{
    const [userList, setUserList] = useState([]);
    useEffect(()=>{
        if (setListener === false){
            getSocket().on(commends.userList, data=>{
                setUserList(userList.concat(data));
                console.log(data)
                if(data.length === 1){
                    enableCanvas();
                    showControls();
                }
                else{
                    handleStrokedPath(0,0,"white");
                    resetCanvas();
                    disableCanvas();
                    hideControls();
                }
            });
        }
        setListener = true;
    })
    return(
        <ScoreBoardPresentser userList={userList}/>
    )
}