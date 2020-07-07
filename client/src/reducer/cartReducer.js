import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from '../action/action-type'
import { data } from '../data/data'
const cartReducer = (state = data, action) => {
    //INSIDE HOME COMPONENT
    console.log(state,action.type)

    if (action.type === ADD_TO_CART) {
        //console.log(state)
        //console.log(action)
        let addedItem = state.items.find(item => item._id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item._id)
        if (existed_item) {
            if(action.quantity){existed_item.quantity+=action.quantity}
            else{existed_item.quantity += 1}
            state.total = Math.round((state.total + parseFloat(addedItem.price))*100)/100
            localStorage.setItem('state', JSON.stringify(state));
            return {
                ...state
            }
        }
        else {
           // console.log(action.quantity)
            addedItem.quantity = action.quantity || 1;
            //calculating the total
            let newTotal = state.total + parseFloat(addedItem.price* addedItem.quantity)
            state.addedItems = [...state.addedItems, addedItem]
            state.total = Math.round(newTotal*100)/100
            localStorage.setItem('state', JSON.stringify(state));
            return {
                ...state,
            }

        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)
        console.log('reducer',action.id,state.items)
        //calculating the total
        let newTotal = state.total - (parseFloat(itemToRemove.price) * parseFloat(itemToRemove.quantity))
        state.addedItems = new_items
        state.total = Math.round(newTotal*100)/100
        localStorage.setItem('state', JSON.stringify(state));
        return {
            ...state,
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.addedItems.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + parseFloat(addedItem.price)
        state.total = Math.round(newTotal*100)/100;
        console.log('state--1')
        localStorage.setItem('state', JSON.stringify(state));
        return {...state}
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.addedItems.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - parseFloat(addedItem.price)
            state.addedItems = new_items
            state.total = Math.round(newTotal*100)/100
            localStorage.setItem('state', JSON.stringify(state));
            return {
                ...state,
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - parseFloat(addedItem.price)
            state.total = Math.round(newTotal*100)/100
            localStorage.setItem('state', JSON.stringify(state));
            return {
                ...state,
            }
        }
       
    }
    else {
        return state
    }
}




export default cartReducer

