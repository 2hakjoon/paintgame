import React, { useEffect } from "react";
import styled, {ThemeProvider} from "styled-components";
import GameRoom from "../Routes/GameRoom/GameRoomContainer";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import {initCanvas } from "../Routes/GameRoom/CanvasController";
import ChattingController from "./Chatting";
import ScoreBoardContainer from "./ScoreBoard/index";

const Wrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    
@media screen and (max-width: 600px) {
    flex-direction : column;
    align-items : center;
    justify-content : space-between;
    max-height : 100vh;
    max-width : 100vw;
    #scoreBoard{
        display:none;
    }
    #chattingBoard{
        width : 100%;
        margin-top:25px;
        #chatListWrapper{
            max-height : 120px;
        }
        #chats{
            max-height : 120px;
        }
    }
    #paintWrapper{
        width:100%;
        height:100%;
    }
    #paintBox{
        width:100%;
        height:100%;
        margin : 0px;
    }
    #canvasBox{
        width : 100%;
    }
    .jsColor{
        width:40px;
        height:40px;
    }
}
`

function App() {    
    useEffect(() => {
        initCanvas();
    });

    return(
        <ThemeProvider theme = {Theme}>
        <GlobalStyles />
            <Wrapper id = "Wrapper_window">
                <ScoreBoardContainer>

                </ScoreBoardContainer>
                <GameRoom />       
                <ChattingController>

                </ChattingController>
            </Wrapper>
        </ThemeProvider>
    )
}
export default App;