import react,{useState} from "react"
import styled from "styled-components"

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
    height:80px;
`

const Button = styled.div`
    width:50px;
    height:100%;
    border-left : 1px solid gray;
    text-align: center;
    vertical-align: middle;
    line-height: 70px;
    cursor: pointer;
    
`
const Input = styled.input`
    width:100%;
    border:none;
    border-radius: 50px;
`

const Chats = styled.div`
    padding:10px;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
`
const Chat = styled.div`
    width:100%;
    display:flex;
`
const UserName = styled.div`
    font-weight : bold;
    margin-right: 5px;
`
const Msg = styled.div`
`


export default ({
    chatText,
    onSubmit,
    msg
}) => {
    return (
        <Wrapper>
            <TextWrapper>
                <Chats>
                {msg.map((ms)=>
                    <Chat key={Math.random()}>
                        <UserName>
                            {ms.user}
                        </UserName> 
                        <Msg>
                            {ms.text}
                        </Msg>
                        
                    </Chat>
                )}
             </Chats>
            </TextWrapper>
            <SendWrapper onSubmit={onSubmit}>
                <Input value={chatText.value} onChange={chatText.onChange}/>
                <Button>입력</Button>
            </SendWrapper>
        </Wrapper>
    )

}