import { USER_LOGIN,USER_LOGOUT } from './action-type'
//add cart action
export const usrLogin= (data)=>{
    return{
        type: USER_LOGIN,
        username:data.name,
        id:data.id
    }
}
export const usrLogout= ()=>{
    return{
        type: USER_LOGOUT,
    }
}