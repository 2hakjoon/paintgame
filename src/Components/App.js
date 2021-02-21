import React from "react";
import { CheckUser } from "../Data/LocalStorage";
import styled, {ThemeProvider} from "styled-components";
import GameRoom from "../Routes/GameRoom";
import {UserLoggedIn} from "../Data/LocalStorage"
import LoginPage from "../Routes/LoginPage";
import GlobalStyles from "../Styles/GlobalStyles";

function App() {
    CheckUser()
    return(
        <>
        <GlobalStyles />
            {UserLoggedIn? <GameRoom /> : <LoginPage/>}
        </>
    )
}

export default App;