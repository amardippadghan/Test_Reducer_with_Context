import React, { useReducer } from "react";

import { useContext } from "react";
import { Counter } from "./context";
import New from "./components/New";

function App() {
  const { state, dispach } = useContext(Counter);

  return (
    <div>
      <h1>this is use reduercer </h1>
      <h2>{state}</h2>
      <button
        onClick={() => {
          dispach({ type: "INCREMENT" });
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispach({ type: "DECREMENT" });
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispach({ type: "INC10" });
        }}
      >
        INC BY 10
      </button>
      <button
        onClick={() => {
          dispach({ type: "RESET" });
        }}
      >
        reset
      </button>
      <div style={{ marginTop: 10 }}>
        <New />
      </div>
    </div>
  );
}

export default App;
