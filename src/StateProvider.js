import React, { createContext, useContext, useReducer } from 'react'
// data layer to access user from any where in the app, no seperate auth at every component and reducer listens to any action that fires in data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);