import {SORT_TYPE,FILTER_TYPE} from '../action/action-type.js';

const initState={
route:'/',
filter:'/'
}
const sortType = (state=initState,action={})=>{
switch(action.type){
    case SORT_TYPE:
       switch(action.route){
           case 'a-z':
        return {...state,route:'?sort=a-z'}
        case 'z-a':
            return {...state,route:'?sort=z-a'}
        case 'high_low':
            return {...state,route:'?sort=high_low'}
        case 'low_high':
            return {...state,route:'?sort=low_high'}
        case 'default':
            return {...state,route:'/'}
       }
       break;
       case FILTER_TYPE:{
           switch(action.filter){
            case 'fruit':
                return {...state,filter:'filter=fruit'}
            case 'vegetables':
                return {...state,filter:'filter=vegetable'}
            case 'spices':
                return {...state,filter:'filter=spice'}
            case 'default':
                return {...state,filter:'/'}
           }
       }
    default: return state;
}
}

export default sortType;