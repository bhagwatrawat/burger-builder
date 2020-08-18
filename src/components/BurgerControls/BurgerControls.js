import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl'
import './BurgerControls.css'
const burgerControls=(props)=>{
  const ingredient=Object.entries(props.ingredients)
 return <div className="BurgerControls">
      {ingredient.map(item =>{
       return <BurgerControl add={()=>{props.add(item[0])}}
          less={()=>{props.less(item[0])}}
           item={item[0]}
           key={item}
           quantity={item[1]}/>
      })}
      <div className="price">Total Price : ₹{props.price}</div>
 </div>
}
export default burgerControls
