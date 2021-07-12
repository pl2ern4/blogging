import { createContext, useReducer, useMemo, useCallback, useState } from 'react';

import { initialState} from './initialState';
import { store } from './store.js';

export const Application =  createContext(initialState);

const ApplicationContext = ({children}) => {

    const [state, dispatch] = useReducer(store, initialState);
    const value = useMemo(() => [state, dispatch], [state]);
    return <Application.Provider value={{...value, dispatch}}> {children} </Application.Provider>
}

export default ApplicationContext;