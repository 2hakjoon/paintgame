import { useEffect, useState } from "react";
import { enableCanvas, showControls } from "../../Routes/GameRoom/CanvasController";
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
                if(userList.length === 1){
                    enableCanvas();
                    showControls();
                }
            });
        }
        setListener = true;
    })
    return(
        <ScoreBoardPresentser userList={userList}/>
    )
}