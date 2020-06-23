import { Cookies} from '../action/action-type'
const intialState={
	cookies:'',
}
const loginReducer =(state=intialState,action={})=>{
	switch(action.type){
	case USER_LOGIN:
	return Object.assign({},state, {username:action.username, id: action.id})//(obj)thứ muốn change)//new state
	//hoặc return{...state, {searchField:action.payload}}//object spread operator
	case USER_LOGOUT:
		return {...state,username:'',id:''}
	default:
		return state;
	}
}
export default loginReducer;