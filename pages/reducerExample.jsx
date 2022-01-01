import React, { useReducer } from "react";
import { Stopwatch } from "../component/StopWatch";

const initialState = {
  counter: 0,
};

function reducer(state, action) {
  let newState;
  switch (action.type) {
    case "increment":
      newState = { counter: state.counter + 1 };
      break;
    case "decrement":
      newState = { counter: state.counter - 1 };
      break;
    default:
      throw new Error("Unknown action");
  }
  return newState;
}

function ReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementAction = {
    type: "increment",
  };
  const decrementAction = {
    type: "decrement",
  };

  return (
    <div>
      <button
        style={{
          color: "#e011ee",
          background: "#000",
          border: "5px solid black",
          padding: "1rem",
        }}
        onClick={() => dispatch(incrementAction)}
      >
        Click Me to increase !
      </button>
      <button
        style={{
          color: "#000",
          background: "#e011ee",
          border: "5px solid black",
          padding: "1rem",
        }}
        onClick={() => dispatch(decrementAction)}
      >
        Click Me to decrease !
      </button>
      <h3 style={{ fontSize: "34px", fontWeight: "900", color: "#e011ee" }}>
        Counter: {state.counter}
      </h3>
      <Stopwatch />
    </div>
  );
}

export default ReducerExample;
