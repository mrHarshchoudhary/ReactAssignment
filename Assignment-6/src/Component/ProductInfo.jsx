import React from 'react'

const ProductInfo = () => {
  let product=[
    {name:"Glowixir",price:"123",availability:"3"},
    {name:"LuminaSkin",price:"1200",availability:"7"},
    {name:"HydraBliss",price:"1000",availability:"2"}
  ]
  return (
   <>
  <ol>
        <li>
          <p>Name: {product[0].name}</p>
          <p>Price: {product[0].price}</p>
          <p>Availability: {product[0].availability} in stock</p>
        </li>
        <li>
          <p>Name: {product[1].name}</p>
          <p>Price: {product[1].price}</p>
          <p>Availability: {product[1].availability} in stock</p>
        </li>
        <li>
          <p>Name: {product[2].name}</p>
          <p>Price: {product[2].price}</p>
          <p>Availability: {product[2].availability} in stock</p>
        </li>
      </ol>
   </>
  )
}

export default ProductInfo
