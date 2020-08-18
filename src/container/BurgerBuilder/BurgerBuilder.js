import React,{Component} from 'react'
import Auxilary from '../../hoc/auxilary'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/BurgerControls/BurgerControls'
const ingredient_price={
  'salad':10,
  'meat':30,
  'bacon':20,
  'cheese':15
}
class BurgerBuilder extends Component{
  state={
    ingredients:{

      'meat':0,
      'cheese':0,
      'bacon':0,
      'salad':0
    },
    price:30,

  }

  addIngredientHandler=(item)=>{
    const oldCount=this.state.ingredients[item]
    const newCount=oldCount+1;
    const newIngredient={...this.state.ingredients}
    const oldPrice=this.state.price
    const newprice=oldPrice+ingredient_price[item]
     newIngredient[item]=newCount
    this.setState({
      ingredients:newIngredient,price:newprice
    })
  }

  lessIngredientHandler=(item)=>{
    const oldCount=this.state.ingredients[item]
    if(oldCount<=0){
      return;
    }
    const newCount=oldCount-1;
    const newIngredient={...this.state.ingredients}
    const oldPrice=this.state.price
    const newprice=oldPrice-ingredient_price[item]
     newIngredient[item]=newCount
    this.setState({
      ingredients:newIngredient,price:newprice
    })

  }

  render(){
  console.log(this.state.price)
    return (
      <Auxilary>
       <Burger ingredients={this.state.ingredients}/>
       <BurgerControls price={this.state.price} ingredients={this.state.ingredients} add={this.addIngredientHandler} less={this.lessIngredientHandler} />
      </Auxilary>
    )
  }
}
export default BurgerBuilder
