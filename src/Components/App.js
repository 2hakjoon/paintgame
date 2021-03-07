import React, { useEffect } from "react";
import styled, {ThemeProvider} from "styled-components";
import GameRoom from "../Routes/GameRoom/GameRoomContainer";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import { enableCanvas, initCanvas } from "../Routes/GameRoom/CanvasController";
import ChattingController from "./Chatting";

const Wrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:center;

`

function App() {    
    useEffect(() => {
        initCanvas();
        enableCanvas();
    });

    return(
        <ThemeProvider theme = {Theme}>
        <GlobalStyles />
            <Wrapper>
                <GameRoom />
                <ChattingController>

                </ChattingController>
            </Wrapper>
        </ThemeProvider>
    )
}
export default App;