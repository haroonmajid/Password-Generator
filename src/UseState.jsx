import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function UseState() {
  const [text, setText] = useState("Haroon")
  const [value, setValue] = useState(0)
  // function changeText() {
  //   setText("Haroon Majid")
  // }
  function increment() {
    setValue(value+1)
  }
  function reset(params) {
    window.confirm("Do you want to reset this?")
    setValue(0)
  }
  function decrement(params) {
    if (value<1) {
      setValue(0)
    }else{
      setValue(value-1)
    }
  }
  return (
    <>
    <div className='container text-center'>
    <h1>This is Some Text</h1>
    <h1>{value}</h1>
    <Button variant='success' className='mx-2' onClick={increment}>Increment</Button>
    <Button variant='danger' className='mx-2' onClick={reset}>Reset</Button>
    <Button variant='warning' className='mx-2'onClick={decrement}>Decrement</Button>
    {/* <Button variant='success' onClick={changeText}>Click Here</Button> */}
    
    </div>
    </>
  )
}

