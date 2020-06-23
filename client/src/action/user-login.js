import { USER_LOGIN,USER_LOGOUT } from './action-type'
//add cart action
export const usrLogin= (data)=>{
    return{
        type: USER_LOGIN,
        username:data.name,
        id:data.id,
        phonenum:data.phonenum,
        address:data.address,
        history:data.history
    }
}
export const usrLogout= ()=>{
    return{
        type: USER_LOGOUT,
    }
}