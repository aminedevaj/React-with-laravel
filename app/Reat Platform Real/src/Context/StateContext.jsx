import { createContext } from "react";
import { fakedata } from "../services/services";

export const StateContext=createContext(null);
const StateContextProvider=(props)=>{
    const contextValue={fakedata}
    return(
        <StateContext.Provider value={contextValue}>
            {props.children}
        </StateContext.Provider>
    )
}
export default StateContextProvider;