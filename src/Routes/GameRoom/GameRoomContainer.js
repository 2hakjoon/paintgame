import GameRoomPresenter from "./GameRoomPresenter";
import {ModalLogin} from "../ModalLogin";
import { UserLoggedIn } from "../../Data/LocalStorage";
import Loading from "../../Components/loading";
import { useState } from "react";



export default () => {

    return (
        <>
            <GameRoomPresenter canvasId="jsCanvas"/>
            {UserLoggedIn? null: <ModalLogin/>}
        </>
    )
}