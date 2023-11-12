import React from 'react'
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from './counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const count = useSelector(state => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div> 
      <p>{count}</p>
      <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        <button onClick={()=>dispatch(incrementByAmount(3))}>+3</button>
        <button onClick={()=>dispatch(decrementByAmount(3))}>-3</button>
      </div>
    </div>
  )
}

export default Counter
