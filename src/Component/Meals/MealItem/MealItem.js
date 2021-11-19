import { useContext } from 'react';
import { CartContext } from '../../../store/CartProvider';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
const MealItem = (props)=>{
    const price = props.price.toFixed(2)
    const ctx = useContext(CartContext)
    const addToCart = (amount)=>{
            const item = {
                amount :amount,
                ...props
            }
            ctx.addItem(item)
    }
    return (
        <li className={classes.meal}>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>${price}</div>
            <div className={classes.mealItem}>
                <MealItemForm id = {props.id} onAddToCart = {addToCart} />
            </div>
        </li>
    )
}
export default MealItem;