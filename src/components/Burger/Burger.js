import React  from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';
const burger= (props)=>{

    let ingredient=Object.entries(props.ingredients).map(value=>{
      return [...Array(value[1])].map((v,i)=>{
        return <BurgerIngredient key={value[0]+i} type={value[0]} />
      })
    })
    const value =Object.values(props.ingredients)
    const sum=value.reduce((total,amount)=>total+amount);
    if (sum===0){
      ingredient=<p>Please Start adding ingredients</p>
    }

    return<div className="Burger">
      <BurgerIngredient type="bread-top"/>
      {ingredient}
      <BurgerIngredient type="bread-bottom"/>
         </div>
  }


export default burger;
