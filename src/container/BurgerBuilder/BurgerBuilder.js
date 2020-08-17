import React,{Component} from 'react'
import Auxilary from '../../hoc/auxilary'
import Burger from '../../components/Burger/Burger'
class BurgerBuilder extends Component{
  state={
    ingredients:{

      'bread-top':1,
      'cheese':2,
      'bacon':2,
      'bread-bottom':1
    }
  }

  render(){
    return (
      <Auxilary>
       <Burger ingredients={this.state.ingredients}/>
       <p>Burgr builder</p>
      </Auxilary>
    )
  }
}
export default BurgerBuilder
