// the reducer manages a state object with two fields: name and age.
import React, { useReducer } from "react";

let reducer = (state: any, action: any) => {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1
      };
    }
    case "decremented_age": {
      return {
        name: state.name,
        age: state.age - 1
      };
    }
    case "reset": {
      return {
        name: "Ram",
        age: 30
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age
      };
    }
  }
};

const initialState = { name: "pritanjan", age: 22 };

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }
  function handelInputChange(e: { target: { value: any } }) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value
    });
  }
  function handleInputReset(e: { target: { value: any } }) {
    dispatch({
      type: "reset",
      nextName: e.target.value
    });
  }
  return (
    <>
      <h3>Form</h3>
      <input value={state.name} onChange={handelInputChange} />
      <button onClick={handleButtonClick}>increment age</button>
      <button
        onClick={() => {
          dispatch({ type: "decremented_age" });
        }}
      >
        decrement age
      </button>
      <button onClick={handleInputReset}>reset</button>
      <p>
        Hello, {state.name}!. you are {state.age} old
      </p>
    </>
  );
};

export default Form;
