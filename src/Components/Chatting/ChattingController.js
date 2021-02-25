import react from "react";
import styled from "styled-components";
import InputHook from "../../Hook/InputHook";
import ChattingPresenter from "./ChattingPresenter"




export default () => {
    const ChatText = InputHook("");
    return (
        <ChattingPresenter
        chatText = {ChatText}
        />
    )

}