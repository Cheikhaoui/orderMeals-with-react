import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from './AvailableMeals.module.css'
import { useEffect, useState } from "react";


const AvailableMeals = ()=> {

  const [meals,setMeals] = useState([])

  const getData= async ()=>{
    const request = await fetch('https://meals-a49ec-default-rtdb.firebaseio.com/meals.json',{
      method:'GET',
      headers : {
          'content-type' : 'application/json'
      }
    });

    let mealsFetched = [];
    const data = await request.json();
    for( const key in data){
      mealsFetched.push({
        name : data[key].name,
        description : data[key].description,
        price:data[key].price
      });
    }
    setMeals(mealsFetched)
  }
  useEffect(()=>{
    getData()
  },[])

 

    const mealList = meals.map(meal=><MealItem
    id = {meal.id}
    name = {meal.name}
    description = {meal.description}
    price ={meal.price}
    />)
 return(
     <section className={classes.meals}>
     <Card> 
         <ul>
             {mealList}
         </ul>
     </Card>
     </section>
 )   
}
export default AvailableMeals;