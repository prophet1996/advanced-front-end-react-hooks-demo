import { useReducer, useEffect, useRef } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isRunning: true };
    case "stop":
      return { ...state, isRunning: false };
    case "reset":
      return { isRunning: false, time: 0 };
    case "tick":
      return { ...state, time: state.time + 1 };
    default:
      throw new Error();
  }
}

const initialState = {
  isRunning: false,
  time: 0,
};

export function Stopwatch() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const idRef = useRef(0);
  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    idRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isRunning]);

  return (
    <div>
      <div style={{ fontSize: "34px", background: "#e011ee", margin: "4rem" }}>
        {state.time}s
      </div>
      <button
        style={{
          color: "#e011ee",
          background: "#0a1f00",
          border: "5px solid black",
          padding: "1rem",
        }}
        onClick={() => dispatch({ type: "start" })}
      >
        Start
      </button>
      <button
        style={{
          color: "#26CE20",
          background: "#000",
          border: "5px solid black",
          padding: "1rem",
        }}
        onClick={() => dispatch({ type: "stop" })}
      >
        Stop
      </button>
      <button
        style={{
          color: "#EEA11191",
          background: "#000",
          border: "5px solid black",
          padding: "1rem",
        }}
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
}
