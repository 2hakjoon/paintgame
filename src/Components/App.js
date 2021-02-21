import React, { useEffect } from "react";
import { CheckUser } from "../Data/LocalStorage";
import styled, {ThemeProvider} from "styled-components";
import GameRoom from "../Routes/GameRoom/GameRoomContainer";
import {UserLoggedIn} from "../Data/LocalStorage"
import GlobalStyles from "../Styles/GlobalStyles";
import { LoginPage } from "../Routes/LoginPage";
import Theme from "../Styles/Theme";
import { enableCanvas, initCanvas } from "../Routes/GameRoom/CanvasController";



function App() {
    CheckUser()
    
    useEffect(() => {
        initCanvas();
        enableCanvas();
    });

    return(
        <ThemeProvider theme = {Theme}>
        <GlobalStyles />
            <GameRoom />
        </ThemeProvider>
    )
}
export default App;