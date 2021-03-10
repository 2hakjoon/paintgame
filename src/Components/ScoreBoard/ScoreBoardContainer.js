import { useEffect, useState } from "react";
import commends from "../../Socket/Commends";
import { getSocket } from "../../Socket/Socket";
import ScoreBoardPresentser from "./ScoreBoardPresentser"

let setListener = false;

export default () =>{
    const [userList, setUserList] = useState([]);
    useEffect(()=>{
        if (setListener === false){
            getSocket().on(commends.userList, data=>{
                setUserList([...data]);
            });
        }
        setListener = true;
    })
    return(
        <ScoreBoardPresentser userList={userList}/>
    )
}