import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from './Cart.module.css';
import { useContext, useState } from "react";
import { CartContext } from "../../store/CartProvider";
import UserForm from "./UserForm";

const Cart = (props)=>{

    const [showUserForm,setShowUserForm] = useState(false);

    const onClickOrder= ()=>{
        setShowUserForm(true)
    }

const ctx = useContext(CartContext)

const cartItemRemoveHandler = (id)=>{
        ctx.removeItem(id)
}

const cartItemAddHandler = (item)=>{
        ctx.addItem({...item,amount :1})
}

const items = ctx.item.map(item=>{
return <CartItem
            {...item}
            onRemove={cartItemRemoveHandler.bind(null,item.id)}
            onAdd={cartItemAddHandler.bind(null,item)}
            />
})
    const cartItems = (
        <ul className={classes['cart-items']}>
            {items}
        </ul>
    )

    return (<Modal onClose = {props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>${ctx.totalAmount}</span>
        </div>
        {!showUserForm &&
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick = {props.onClose}>Close</button>
            <button onClick={onClickOrder} >Order</button>
        </div>
}
        {showUserForm && <UserForm onCancel = {props.onClose} ordredMeamls={ctx.item}/>}
    </Modal>)
}

export default Cart;