import React from 'react'
import Auxilary from '../../hoc/auxilary'
import './layout.css'
const Layout =(props)=>{
 return(
  <Auxilary>
  <p>nav bar timeline etc</p>
  <main className="layout">{props.children}</main>
  </Auxilary>
)
}

export default Layout;
