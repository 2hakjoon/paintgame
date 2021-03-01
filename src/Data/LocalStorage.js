const ITEMNAME_ID = 'paintGameId';

export let UserLoggedIn = false;


export const getUserId = () => {
    return localStorage.getItem(ITEMNAME_ID)
}

export const makeUser = () =>{
    localStorage.setItem(ITEMNAME_ID, );
} 

export const CheckUser = () => {
    const userId = localStorage.getItem(ITEMNAME_ID)
    if(userId){
        UserLoggedIn = true
    }
    else {
        UserLoggedIn = false
    }
    console.log(UserLoggedIn)
}
