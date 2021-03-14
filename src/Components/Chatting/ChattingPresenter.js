import styled from "styled-components"
import UserName from "../UserName"

const Wrapper = styled.div`
    margin-top:200px;
    height : 600px;
    width : 300px;
    background-color: white;
    border : 1px solid whitesmoke;
    border-radius : 20px;
    box-shadow:${props => props.theme.normalShadow};
    display:flex;
    flex-direction:column;
`

const TextWrapper = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    align-items: center;

`

const SendWrapper = styled.form`
    border-top : 1px solid grey;
    display:flex;
    align-items:center;
    height:40px;
`

const Button = styled.div`
    width:50px;
    height:100%;
    border-left : 1px solid gray;
    text-align: center;
    vertical-align: middle;
    line-height: 40px;
    cursor: pointer;
    
`
const Input = styled.input`
    padding-left : 20px;
    width:100%;
    border:none;
    border-radius: 50px;
    pointer-events : ${props => props.clickEn};
`

const Chats = styled.div`
    padding:10px;
    width:100%;
    height:560px;
    display:flex;
    flex-direction:column;
    overflow: auto;
`
const Chat = styled.div`
    width:100%;
    display:flex;
    padding : 4px;
`

const Msg = styled.div`
`


export default ({
    onchange,
    value,
    onSubmit,
    msg,
    clickEn
}) => {
    return (
        <Wrapper>
            <TextWrapper>
                <Chats id="chats">
                {msg.map((ms)=>
                    <Chat key={Math.random()}>
                        <UserName color = {ms.color} name = {ms.user}/>
                        <Msg>
                            {ms.text}
                        </Msg>
                        
                    </Chat>
                )}
             </Chats>
            </TextWrapper>
            <SendWrapper onSubmit={onSubmit}>
                <Input clickEn = {clickEn} value={value} onChange={onchange}/>
                <Button onClick={onSubmit}>입력</Button>
            </SendWrapper>
        </Wrapper>
    )

}