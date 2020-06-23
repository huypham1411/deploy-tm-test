import { SEARCH_FIELD } from '../action/action-type';
const intialState={
    name:'',
    data:[]
}
const searchReducer =(state=intialState,action={})=>{
    switch(action.type)
    {
        case SEARCH_FIELD:
            //console.log('aaa',action.name,action.data)
            return {...state,name:action.name,data:action.data};
	    default:
            return state;
    }
}
    
export default searchReducer;