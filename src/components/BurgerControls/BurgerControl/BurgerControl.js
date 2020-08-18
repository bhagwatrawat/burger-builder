import React from 'react';
import './BurgerControl.css'

const ingredient_price={
  'salad':10,
  'meat':30,
  'bacon':20,
  'cheese':15
}
const BurgerControl=(props)=>{

  return <div className="BurgerControl">
            <div className="item">{props.item}  ₹{ingredient_price[props.item]}</div>
          <button className="buttonMore" onClick={props.add}>More</button>
          <button onClick={props.less} disabled={!props.quantity}>Less</button>
          </div>
}
export default BurgerControl
