
import React, { createContext, useContext, useReducer } from "react";

//preare data laywer
export const StateContext = createContext();

//wrap app and provide data layer
export const StateProvider =({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//pull info from data layer
export const useStateValue = () => useContext(StateContext);