const ITEMNAME_ID = 'paintGameId';
const ITEMNAME_COLOR = 'paintGameColor';

export let UserLoggedIn = false;


export const getUserInfo = () => {
    const userId = localStorage.getItem(ITEMNAME_ID)
    const userColor = localStorage.getItem(ITEMNAME_COLOR)
    return {userId, userColor};
}


export const makeUser = (userId, userColor) =>{
    localStorage.setItem(ITEMNAME_ID, userId);
    localStorage.setItem(ITEMNAME_COLOR, userColor);
} 


export const CheckUser = () => {
    const userId = localStorage.getItem(ITEMNAME_ID)
    const userColor = localStorage.getItem(ITEMNAME_COLOR)
    if((userId !== null) && (userColor !== null)){
        UserLoggedIn = true
    }
    else {
        UserLoggedIn = false
    }
    console.log(UserLoggedIn)
}
