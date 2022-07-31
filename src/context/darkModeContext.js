import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  function dark(dark) {
    dispatch({
      type: "DARK",
      payload: true,
    });
  }

  function light(light) {
    dispatch({
      type: "LIGHT",
      payload: false,
    });
  }

  const toggle = () => {
    dispatch({
      type: "TOGGLE",
    });
  };

  return (
    <DarkModeContext.Provider
      value={{ darkMode: state.darkMode, toggle, dark, light }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
