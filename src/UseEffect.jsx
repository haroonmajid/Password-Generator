import React, { useState} from 'react'
import { Button } from 'react-bootstrap';

export default function UseEffect() {

    const [counter, setCounter] = useState(1);

    const increaseValue = ()=>{
        setCounter(counter + 1);
    }

    const decreaseValue = ()=>{
       

        if (counter < 1) {
            setCounter(0);
        }else{
            setCounter(counter - 1);
        }
    }
    const resetValue = ()=>{
        setCounter(0);
    }
    // let counter = 15;

    // const increaseValue = ()=>{
    //     counter = counter+1;
    //     console.log(counter);
        
    // }
    // const decreaseValue = ()=>{
    //     counter = counter-1;
    //     console.log(counter);
        
    // }
   
  return (
    <div>
        <h1>Counter:{counter}</h1>
        <Button variant='warning' className='mr-5' onClick={increaseValue}>Increase Value</Button>
        <Button variant='success' onClick={decreaseValue}>Decrease Value</Button>
        <Button variant='danger' className='ml-5' onClick={resetValue}>Reset</Button>
    </div>
  )
}
