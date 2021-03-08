import { useEffect } from "react";
import commends from "../../Socket/Commends";
import { getSocket } from "../../Socket/Socket";
import ScoreBoardPresentser from "./ScoreBoardPresentser"

let setListener = false;

export default ({}) =>{

    useEffect(()=>{
        if (setListener === false);
        getSocket().on(commends.userList, data=>{
            console.log(data)
        });
        setListener = true;
    })
    return(
        <ScoreBoardPresentser>

        </ScoreBoardPresentser>
    )
}