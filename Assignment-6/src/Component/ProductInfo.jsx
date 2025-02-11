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
    <h1>list are</h1>
        {product.map((x) => (
          <li >
            <p>Name: {x.name}</p>
            <p>Price: {x.price}</p>
            <p>Availability: {x.availability} in stock</p>
          </li>
        ))}
      </ol>
   </>
  )
}

export default ProductInfo
