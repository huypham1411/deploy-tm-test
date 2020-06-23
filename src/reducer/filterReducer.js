import {FILTER_TYPE} from '../action/action-type.js';

const initState={
routee:'/'
}
const filterType = (state=initState,action={})=>{
switch(action.type){
    case FILTER_TYPE:
       switch(action.routee){
           case 'fruit':
        return {...state,routee:'?filer=fruit'}
        case 'vegatable':
            return {...state,routee:'?filter=vegatable'}
       }
       case 'spice':
           return {...state,routee:'?filter=spice'}
    default: return state;
}
}

export default filterType;