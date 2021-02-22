import GameRoomPresenter from "./GameRoomPresenter";
import {ModalLogin} from "../ModalLogin";
import { UserLoggedIn } from "../../Data/LocalStorage";
import Loading from "../../Components/loading";
import { commends } from "../../Socket";
import { useState } from "react";



export default () => {
    const [isLoading, setIsLoading] = useState(null);
    const checkCommends = () => {
        if(commends !== null){
            setIsLoading(true)
            clearInterval(check)
        }
    }
    
    const check = setInterval(checkCommends, 200);
    

    return (
        <>
            <GameRoomPresenter canvasId="jsCanvas"/>
            {UserLoggedIn? null: <ModalLogin/>}
            {isLoading? null: <Loading/>}
        </>
    )
}