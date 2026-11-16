import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../features/counter/counterSlice';

const Counter = () => {
   const count = useSelector((state) => state.counter.count);
   useEffect(()=>{
    console.log(count);
   },[count])

   const dispatch = useDispatch();
  return (
    <div>
        <h1>Redux counter Application</h1>
        <h2>Count: {count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  )
}

export default Counter