import styled from "styled-components";


const UserName = styled.div`
    font-weight : bold;
    margin-right: 5px;
    color : ${props => props.color};
    font-size : ${props => props.fontsize};
`
export default ({color, name , fontsize="14px"}) => {
    return(
    <UserName color={color} fontsize={fontsize}>
        {name}
    </UserName>
    )
}