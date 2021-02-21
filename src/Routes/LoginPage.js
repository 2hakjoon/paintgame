import styled from "styled-components";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { Bigtext } from "../Components/Text";

const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    display :flex;
    justify-content : center;
    align-items : center;
`

const Box = styled.div`
    width : 500px;
    height : 500px;
    display : flex;
    flex-direction: column;
    justify-content : center;
    align-items : center;
    background-color : #fcfcfc;
    border-radius : 50px;
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


export const LoginPage = () => {
    return(
        <Wrapper>
            <Box>
                <Bigtext>
                    Login
                </Bigtext>
                <Form>
                    <Input placeholder = "ID를 입력하세요."/>
                    <Button text="로그인"/>
                </Form>
            </Box>
        </Wrapper>
    )
}
