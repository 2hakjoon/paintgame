import GameRoomPresenter from "./GameRoomPresenter";
import {ModalLogin} from "../ModalLogin";
import { UserLoggedIn } from "../../Data/LocalStorage";

export default () => {
    return (
        <>
            <GameRoomPresenter canvasId="jsCanvas"/>
            {UserLoggedIn? null : <ModalLogin/>}
        </>
    )
}