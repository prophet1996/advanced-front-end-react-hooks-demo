import React, { useCallback, useMemo, useState } from "react";

// Difference B/W useMemo and useCallback
// both are used for memoization
// type of value they memo is diff
// useMemo uses a callback function to compute the value of that callback function
// useCallback memoizes the callback function itself so that it does not get create again
// on earch render
function CallbackExample() {
  const [counter, setCounter] = useState(0);
  //this will not create new instance of the doSomething method every time
  const doSomething = useCallback(() => "DOING SOMETHING!!", []);
  //new instance of the doSomething method every time
  // const doSomething = () => "DOING SOMETHING!!";

  // that it's prop changes
  // First of optimization is don't do optimization
  // first you need to do profiling

  // dont use useCallback or useMemo every time
  // you might make things
  // memoized
  // render -> Xms -> Yms
  return (
    <div>
      <button
        style={{
          background: "white",
          border: "2px solid black",
          fontSize: "16px",
          padding: "16px",
        }}
        onClick={useCallback(() => setCounter(counter + 1), [counter])}
      >
        Click Me!
      </button>
      <Child doSomething={doSomething} />
      <h2
        style={{
          background: "white",
          border: "2px solid black",
          fontSize: "16px",
          padding: "16px",
        }}
      >
        Count is {counter}
      </h2>
    </div>
  );
}

// Some complex component
// Expensive render to do
function Child({ doSomething }) {
  //synthetic load
  // to represent a heavy child component
  const memElement = useMemo(
    () =>
      new Array(3000).fill(0).map((_, idx) => {
        console.log("rendering child");
        return (
          <div
            key={idx}
            style={{
              background: "white",
              border: "2px solid black",
              fontSize: "16px",
              padding: "16px",
            }}
          >
            {doSomething()}
          </div>
        );
      }),
    [doSomething]
  );
  // const memoizedValue = useMemo(()=>computationIntensiveTask(...args),[...args])
  return <>{memElement}</>;
}

export default CallbackExample;
