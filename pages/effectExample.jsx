import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

function EffectExample() {
  // compinentDidMount & ComponentDidUpate
  // we running a side-effect on counter change ->(every render)
  const [toggle, settoggle] = useState(true);
  return (
    <main className={styles.main}>
      {toggle && <Child />}
      <button onClick={() => settoggle(!toggle)}>
        {toggle ? "UnRender" : "Render"}
      </button>
    </main>
  );
}

function Child() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  //every render (default)
  //first render ()
  //after last render (unmount)
  //new function every time
  //   useEffect(() => {
  //     // date fetching
  //     // event handler
  //     const clickHandler = () => {
  //       // we get closure over count
  //     };
  //     // console.log("clicked for dom event with count", count);
  //     //Did mount?
  //     // Register for side effect / subscribe
  //     console.log("setting event lister");
  //     document.addEventListener("click", clickHandler);
  //     return () => {
  //       //Did Unmount?
  //       // DeRegister for side effect / subscribe
  //       document.removeEventListener("click", clickHandler);
  //       //   console.log("unmounted");
  //     };
  //   });

  //only want to run this once very mount
  //   useEffect(() => {
  //     const clickHandler = () => {};
  //     console.log("setting event handler");
  //     document.addEventListener("click", clickHandler);
  //     return () => {
  //       //Did Unmount?
  //       // DeRegister for side effect / subscribe
  //       console.log("removeing event handler");
  //       document.removeEventListener("click", clickHandler);
  //     };
  //     //dependancy array
  //   }, []);

  // foot gun  - weapon is very powerful and very accessible
  useEffect(() => {
    // on mount
    // on every render [that changes the count}
    console.log(`Clicked ${count} times `);
  }, [count]);

  return (
    <>
      <h2
        style={{
          background: "white",
          border: "2px solid black",
          fontSize: "16px",
          padding: "16px",
        }}
      >
        You Clicked {count} times
      </h2>
      <button
        style={{
          background: "white",
          border: "2px solid black",
          fontSize: "16px",
          padding: "16px",
          cursor: "pointer",
        }}
        onClick={() => setCount(count + 1)}
      >
        Click me!
      </button>
      <input
        style={{
          background: "white",
          border: "2px solid black",
          fontSize: "16px",
          padding: "16px",
          cursor: "pointer",
        }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
    </>
  );
}

export default EffectExample;
