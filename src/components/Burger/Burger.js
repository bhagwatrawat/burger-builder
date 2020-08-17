import React  from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';
const burger= (props)=>{

    const ingredient=Object.entries(props.ingredients).map(value=>{
      return [...Array(value[1])].map((v,i)=>{
        return <BurgerIngredient key={value[0]+i} type={value[0]} />
      })
    })

    return<div className="Burger"> {ingredient}</div>
  }


export default burger;
