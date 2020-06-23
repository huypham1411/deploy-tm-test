import { SORT_TYPE,FILTER_TYPE } from './action-type'
//add cart action
export const sortChoose= (name)=>{
    return{
        type: SORT_TYPE,
        route:name,
        
    }
}
export const filterChoose= (name)=>{
    return{
        type: FILTER_TYPE,
        filter:name,
        
    }
}