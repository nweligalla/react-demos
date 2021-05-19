import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment, decrement, multiply, zero} from './redux/ducks/counter';

const Counter = () => {

    const [localCount,setLocalCount]= useState(0);

    
    const dispatch = useDispatch();

    const handleIncrement =()=>{
      dispatch(increment());
      setLocalCount(localCount+1);
    }
    const handleDecrement =()=>{
      dispatch(decrement());
      setLocalCount(localCount-1);
    }
    const handleMultiply =()=>{
      dispatch(multiply());
      setLocalCount(localCount*2);
    }
    const handleZero =()=>{
      dispatch(zero());
      setLocalCount(0);
    }

  return (
    <>
      <h2>local Count : {localCount}</h2>
      <div>
        <button className="btn" onClick={handleIncrement}> + </button>
        <button className="btn" onClick={handleDecrement}> - </button>
        <button className="btn" onClick={handleMultiply}> x2 </button>
        <button className="btn" onClick={handleZero}> 0 </button>
      </div>
    </>
  );
};

export default Counter;