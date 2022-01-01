import React, { useEffect, useRef } from "react";

function ReFExample() {
  // useReference (escape hatch)
  // ability to provide mutable references to object
  const inputEl = useRef(null);
  // ability to store any mutable value around
  const intervalRef = useRef();

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    console.log(inputEl.current);
    inputEl.current.focus();
  };

  useEffect(() => {
    const id = setInterval(() => {
      console.log("tick");
    }, 1000);
    intervalRef.current = id;
    return () => {
      console.log(id);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <input
        style={{
          background: "white",
          border: "2px solid black",
          fontSize: "16px",
          padding: "16px",
          cursor: "pointer",
        }}
        ref={inputEl}
        type="text"
      />
      <button
        style={{
          background: "white",
          border: "2px solid black",
          fontSize: "16px",
          padding: "16px",
          cursor: "pointer",
        }}
        onClick={onButtonClick}
      >
        Focus the input
      </button>
    </div>
  );
}

export default ReFExample;
