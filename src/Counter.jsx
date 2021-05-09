import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>The Count is : {count}</p>
      <div>
        <button className="btn" onClick={() => setCount(count + 1)}> + </button>
        <button className="btn" onClick={() => setCount(count - 1)}> - </button>
        <button className="btn" onClick={() => setCount(count * 2)}> x2 </button>
        <button className="btn" onClick={() => setCount(0)}> 0 </button>
      </div>
    </>
  );
};

export default Counter;
