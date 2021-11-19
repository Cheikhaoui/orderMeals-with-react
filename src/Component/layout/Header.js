import { Fragment } from 'react/cjs/react.production.min'
import  classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
const Header = (props)=>{
    return (
        <Fragment>
        <header className={classes.header}>
         <h1>React Meals</h1>
         <HeaderCartButton onClick={props.show}/>
        </header>
        <div className={classes['main-image']}>
        <img src={mealsImage} alt ='A table full of delicious food yeami'></img>
        </div>
        </Fragment>
    )
}

export default Header;