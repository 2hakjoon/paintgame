import styled from "styled-components";
import Button from "../Components/Button";
import { updateChats } from "../Components/Chatting/ChattingController";
import Input from "../Components/Input";
import { Bigtext } from "../Components/Text";
import { getUserId, getUserInfo, makeUser } from "../Data/LocalStorage";
import InputHook from "../Hook/InputHook";
import commends from "../Socket/Commends";
import { getSocket } from "../Socket/Socket";

const Wrapper = styled.div`
    background: rgba(0, 0, 0, 0.6);
    position : absolute;
    top:0;
    left:0;
    width : 100%;
    height : 100%;
    display :flex;
    justify-content : center;
    align-items : center;
`

const Box = styled.div`
    background-color:white;
    width : 500px;
    height : 500px;
    display : flex;
    flex-direction: column;
    justify-content : center;
    align-items : center;
    background-color : #fcfcfc;
    border-radius : 50px;
    box-shadow: 0px 10px 10px 6px rgba(0,0,0,0.21);
`
const Form = styled.form`
    display : flex;
    flex-direction: column;
    justify-content : center;
    align-items : center;
    *{
        margin : 10px;
    }
`
const socket = getSocket();



export const ModalLogin = () => {
    const nickname = InputHook("");
    
    const onSubmit = async(e) =>{
        e.preventDefault();
        socket.emit(commends.setNickname, nickname.value)
        setTimeout(()=>{
            if(getUserInfo() === null){
                console.log("error")
            }
        }, 3000)
        await socket.on(commends.nicknameConfirm, (data)=>{
            makeUser(nickname.value, data)
        })
    }
    return(
        <Wrapper>
            <Box>
                <Bigtext>
                    Login
                </Bigtext>
                <Form onSubmit={onSubmit}>
                    <Input placeholder = "ID를 입력하세요." value={nickname.value} onChange={nickname.onChange}/>
                    <Button text="로그인"/>
                </Form>
            </Box>
        </Wrapper>
    )
}