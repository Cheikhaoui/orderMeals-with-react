import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from './Cart.module.css';
import { useContext } from "react";
import { CartContext } from "../../store/CartProvider";

const Cart = (props)=>{

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
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick = {props.onClose}>Close</button>
        </div>
    </Modal>)
}

export default Cart;