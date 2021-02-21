import React from "react";
import { CheckUser } from "../Data/LocalStorage";
import styled, {ThemeProvider} from "styled-components";
import GameRoom from "../Routes/GameRoom";
import {UserLoggedIn} from "../Data/LocalStorage"
import GlobalStyles from "../Styles/GlobalStyles";
import { LoginPage } from "../Routes/LoginPage";
import Theme from "../Styles/Theme";

function App() {
    CheckUser()
    return(
        <>
        <ThemeProvider theme = {Theme}/>
        <GlobalStyles />
            {UserLoggedIn? <GameRoom /> : <LoginPage/>}
        </>
    )
}

export default App;