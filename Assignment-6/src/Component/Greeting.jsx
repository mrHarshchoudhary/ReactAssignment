import React from 'react'

const Greeting = () => {
  let name="harsh choudhary"
  return (
    <>
    <h1>Hello my name is {name}</h1>
    <p>{new Date().toISOString()}</p>
    
    </>
  )
}

export default Greeting
