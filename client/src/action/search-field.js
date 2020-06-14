import { SEARCH_FIELD } from './action-type'
//add cart action
export const searching= (name,data)=>{
    console.log(name,data)
    return{
        type: SEARCH_FIELD,
        name:name,
        data:data
    }
}

