
import React, { createContext , useReducer} from "react";
import reducer from "./Reducer";

export const Counter = createContext();
const initialState = 0;


const Context = ({ children }) => {

     const [state, dispach] = useReducer(reducer, initialState);
  
  return <Counter.Provider
   value={{state , dispach}}
  >{children}</Counter.Provider>;
};

export default Context;