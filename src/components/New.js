import React from "react";
import { useContext } from "react";
import { Counter } from "../context";

function New() {
  const { state, dispach } = useContext(Counter);

  return (
    <div>
      {state}
      <h1>this is new page </h1>
      <button onClick={() => dispach({ type: "DEC10" })}>decrease by 10</button>
    </div>
  );
}

export default New;
