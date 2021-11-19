import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../store/CartProvider';
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props)=>{
    const ctx = useContext(CartContext)
    const[isHighLighted,setHighLight] = useState(false)
    const {item} = ctx;
    const btnClasses = `${classes.button} + ${isHighLighted?classes.bump:''}`;
    useEffect(()=>{
        if(item.length == 0 ){
            return
        }
        setHighLight(true)
       const timeout =  setTimeout(() => {
            setHighLight(false)
        }, 300);

        return ()=>clearTimeout(timeout)
    },[item])
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className ={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{ctx.totalAmount}</span>
        </button>
    )
};

export default HeaderCartButton;