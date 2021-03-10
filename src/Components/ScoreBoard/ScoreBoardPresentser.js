import { useEffect } from "react";
import styled from "styled-components"
import UserName from "../UserName"


const Wrapper = styled.ul`
    background-color : gray;
    border : 1px solid whitesmoke;
    border-radius : 20px;
    margin-top:200px;
    width : 300px;
    height : 600px;
    overflow: auto;
    display:flex;
    flex-direction:column;
`

const UserList = styled.li`
    background-color:lightgreen;
    width:100%;
    height : 70px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:10px;
`;

const Name = styled(UserName)`
`;


export default ({
    userList
}) => {
    return(
        <Wrapper>
            {userList && userList.map(user=>{
                <UserList>
                    <Name color={user.userColor} name={user.userId} fontsize="20px"/>
                </UserList>
            })}
        </Wrapper>
    )
}