import { Fragment } from "react/cjs/react.production.min"
import Card from "../UI/Card"
import AvailableMeals from "./AvailableMeals"
import MealSummary from "./MealSummary"

const Meals = ()=>{
    return <Fragment>
        <MealSummary></MealSummary>
        <AvailableMeals></AvailableMeals>
    </Fragment>
}

export default Meals;