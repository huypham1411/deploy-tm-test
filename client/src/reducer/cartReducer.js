import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from '../action/action-type'
import { data } from '../data/data'
const cartReducer = (state = data, action) => {
    //INSIDE HOME COMPONENT

    if (action.type === ADD_TO_CART) {
        //console.log(state)
        //console.log(action)
        let addedItem = state.items.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: Math.round((state.total + parseFloat(addedItem.price))*100)/100
            }
        }
        else {
           // console.log(action.quantity)
            addedItem.quantity = action.quantity || 1;
            //calculating the total
            let newTotal = state.total + parseFloat(addedItem.price* addedItem.quantity)

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: Math.round(newTotal*100)/100
            }

        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (parseFloat(itemToRemove.price) * parseFloat(itemToRemove.quantity))
        return {
            ...state,
            addedItems: new_items,
            total: Math.round(newTotal*100)/100
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + parseFloat(addedItem.price)
        return {
            ...state,
            total: Math.round(newTotal*100)/100
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - parseFloat(addedItem.price)
            return {
                ...state,
                addedItems: new_items,
                total: Math.round(newTotal*100)/100
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - parseFloat(addedItem.price)
            return {
                ...state,
                total: Math.round(newTotal*100)/100
            }
        }

    }
    else {
        return state
    }
}




export default cartReducer

