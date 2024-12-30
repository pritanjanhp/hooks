import React, { useState, useEffect } from "react";

const UseEffectEg = () => {
  let [count, setCount] = useState(0);
  let [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  return (
    <>
      <p>we clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} className="border-20 ">
        Click hrere
      </button>
    </>
  );
};

export default UseEffectEg;
