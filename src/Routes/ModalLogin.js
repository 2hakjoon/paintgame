import styled from "styled-components";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { Bigtext } from "../Components/Text";


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

export default ({
    onSubmit,
    nickname,
}) => {
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