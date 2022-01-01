import React, { useContext } from "react";
import { ThemeContext } from "./_app";

function ContextExample() {
  return (
    <pre>
      <Level1 />
      <Sibling />
    </pre>
  );
}
function Sibling() {
  const {
    values: { foreground },
  } = useContext(ThemeContext);

  return (
    <h2 style={{ fontSize: "34px", fontWeight: "900", color: foreground }}>
      I;m the Sibling!!!
    </h2>
  );
}
// Themeing reporesent global state management
// nearly all of your (presentational 90%) components need to
// bw aware of your app theme

function Level1() {
  return <Level2></Level2>;
}
function Level2() {
  return <Level3></Level3>;
}
function Level3() {
  const {
    values: { background, foreground },
    changeTheme,
  } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: background,
        color: foreground,
        height: "500px",
        width: "500px",
        fontSize: "20px",
        fontWeight: "800",
      }}
    >
      Level3 - {">>>"}
      {JSON.stringify({ background, foreground })}
      <button
        onClick={changeTheme}
        style={{
          color: background,
          background: foreground,
          border: "5px solid black",
          padding: "1rem",
        }}
      >
        Change Theme Click ME!
      </button>
    </div>
  );
}
export default ContextExample;

// you react powers
