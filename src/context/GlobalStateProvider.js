import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
const initialState = {
    transactions: [
        {id: 1, text: 'apple', amount: 20},
        {id: 2, text: 'flower', amount: 30},
        {id: 3, text: 'orange', amount: -25}
    ]
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{transactions: state.transactions}}>
        {children}
    </GlobalContext.Provider>)
}