import React from 'react'
import Person from './Component/Person'
import Product from './Component/Product'

const App = () => {
  return (
   <>
   <center>
  <Person name="Harsh" age={21}/>
  <Person name="Vignesh" age={21}/>
  <Product name="Laptop" price={999}/>
  <Product name="smartphone" price={100.24}/>
  </center>
   </>
  )
}

export default App
