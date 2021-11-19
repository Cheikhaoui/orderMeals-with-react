import React  ,{ useReducer } from "react";

export const CartContext = React.createContext({
    item : [],
    totalAmount : 0,
    addItem : (item)=>{},
    removeItem : (id)=>{}
})
const initialState = {
    item : [],
    totalAmount : 0,
    }
const cartReducer = (state,action)=>{
    let newItems;
    if(action.type == 'Add'){
        const updateAmount = action.item.amount*action.item.price + Number(state.totalAmount)
        if(state.item.length>0){
        const updatedItem = state.item.filter(item=>item.id == action.item.id)[0]
        const index = state.item.indexOf(updatedItem);
        let element = [...state.item]
        if(updatedItem != null){
            element[index] = {...action.item,amount :Number(updatedItem.amount) + Number(action.item.amount) }
        }else{
            element=[...state.item,action.item]
        }
        return {
            item : element,
            totalAmount : Number(updateAmount).toFixed(2)
        }
        }else {
            return {
                item  : [{...action.item}],
                totalAmount:action.item.amount*action.item.price
            }
        }
        
    }else if(action.type == 'Remove'){
        const removedElement = state.item.filter(item=>item.id == action.id)[0];
        const index = state.item.indexOf(removedElement)
        const updateAmount = state.totalAmount - removedElement.price
        let elements = [...state.item];
        if(removedElement.amount == 1){
            elements = state.item.filter(item=>item.id != action.id)
            return {
                item  : elements,
                totalAmount:updateAmount.toFixed(2)
            }
        }else {
            const updated ={...removedElement,amount: removedElement.amount - 1}
            elements[index] = updated
            return {
                item  : elements,
                totalAmount:updateAmount.toFixed(2)
            }
        }
     
    }
    return initialState;
} 

const CartProvider = (props)=>{

    

    const [cartState,dispatchAction] = useReducer(cartReducer,initialState);

    const addItem = (item)=>{
         dispatchAction({
            type : 'Add',
            item :item
        })
    }

    const deleteItem = (id)=>{
        dispatchAction({
            type : 'Remove',
            id:id
        })
    }
    const ctx = {
            item : cartState.item,
            totalAmount : cartState.totalAmount,
            addItem : addItem,
            removeItem : deleteItem
    }

    return(
        <CartContext.Provider value={ctx}>
            {props.children}
        </CartContext.Provider>
        );
}

export default CartProvider;