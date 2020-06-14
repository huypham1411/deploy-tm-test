import { PAGE_NUM,PAGE_RESET} from '../action/action-type'
const intialState={
    number:1,
}
const paginationReducer =(state=intialState,action={})=>{
    switch(action.type)
    {
        case PAGE_NUM:
            return {...state,number:action.number};
        case PAGE_RESET:
            return {...state,number:1}
	    default:
            return state;
    }
}
    
export default paginationReducer;