import React ,{createContext,useContext,useReducer} from "react";

// prepares the dataLayer
export const StateContext= createContext()

// wraps our app and provides the dataLayer
export const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider 
    value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

// pulls info form the dataLayer
export const useStateValue= ()=>useContext(StateContext);