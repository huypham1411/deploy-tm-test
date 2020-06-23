import { FILTER } from './action-type'
//add cart action
export const filterChoose= (name)=>{
    return{
        type: FILTER,
        routee:name,
        
    }
}