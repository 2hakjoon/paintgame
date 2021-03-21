import { useEffect } from "react";
import styled from "styled-components"
import UserName from "../UserName"


const ScoreBoard = styled.div`
    background-color:white;
    border : 1px solid whitesmoke;
    border-radius : 20px;
    margin-top:200px;
    width : 300px;
    height : 600px;
    overflow: auto;
    display:flex;
    box-shadow:${props => props.theme.normalShadow};
`
const RankingWrapper = styled.ul`
    width: 20%;
    height : 100%;
    display:flex;
    flex-direction : column;
`
const Ranking = styled.li`
    width: 100%;
    height : 50px;
    text-align: center;
    vertical-align: middle;
    line-height: 50px;
    font-size :20px;
` 

const UserWrapper = styled.ul`
    width: 80%;
    height : 100%;
    display : flex;
    flex-direction: column;
    
`

const UserList = styled.li`
    width:100%;
    height : 50px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px;
    order : ${props => props.order};
`;

const Name = styled(UserName)`
`;

const Score = styled.div`
    font-size : 20px;
`


export default ({
    userList
}) => {
    return(
        <ScoreBoard  id = "scoreBoard">
            <RankingWrapper>
                {userList.map((_, index)=>
                    <Ranking key={index}>
                        {`${index+1} 등`}
                    </Ranking>
                )}
            </RankingWrapper>
            <UserWrapper>
                {userList.map(user=>
                    <UserList key={user.userId} order={0-user.score}>
                        <Name color={user.userColor} name={user.userId} fontsize="20px"/>
                        <Score>{`${user.score} 점`}</Score>
                    </UserList>
                )}
            </UserWrapper>
        </ScoreBoard>
    )
}