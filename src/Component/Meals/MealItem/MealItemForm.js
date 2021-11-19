import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { useContext, useRef, useState } from 'react'
import { CartContext } from '../../../store/CartProvider'

const MealItemForm = (props)=>{

    const entredAmount = useRef();
    const[isAmountValid,setAmountValid] = useState(true);

    const addToCart = (event)=>{
        event.preventDefault();
        const amount = entredAmount.current.value;
        if(amount > 5 || amount <= 0 ){
            setAmountValid(false)
            return
        }else{
            props.onAddToCart(amount)
        }
        
    }

    return (
        <form className={classes.form} onSubmit = {addToCart}>
         <Input ref = {entredAmount} 
          label = 'amount'
          input = {{
              id : 'amount_'+props.id,
              type : 'number',
              min : '1',
              max : '5',
              step :'1',
              defaultValue : '1'
          }}
         />
         <button>Add +</button>
         {!isAmountValid && <p>pleaz enter a correct amount</p>}
    </form>
    )
}

export default MealItemForm;