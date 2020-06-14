import { PAGE_NUM,PAGE_RESET } from './action-type'
//add cart action
export const pageGet= (num)=>{
    return{
        type: PAGE_NUM,
        number:num,
    }
}

export const pageReset= ()=>{
    return{
        type: PAGE_RESET
    }
}
