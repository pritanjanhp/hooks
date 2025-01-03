import React, { useReducer } from "react";

function reducer(state: { age: number }, action: { type: string }) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1
    };
  }
  if (action.type === "decrement_age") {
    return {
      age: state.age - 1
    };
  }
  if (action.type === "reset") {
    return {
      age: 30
    };
  }
}

const CounterRed = () => {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  return (
    <>
      <h3>Counter Reducer</h3>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        increment
      </button>

      <button
        onClick={() => {
          dispatch({ type: "decrement_age" });
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
      <p>Hellow ! you are {state.age} old</p>
    </>
  );
};

export default CounterRed;
