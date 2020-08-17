import React,{Component} from 'react';
import Layout from './components/layout/layout'
import Auxilary from './hoc/auxilary'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'

import './App.css';

class App extends Component{
render(){
  return (
    <Auxilary>
    <Layout></Layout>
    <BurgerBuilder />
  </Auxilary>
)
}

}
export default App;
