import { createContext } from 'react';
import {useQuery} from "react-query";

const apiContext = createContext({
    detectors: [],
})



export const apiContextProvider = () =>{

    return(
        <apiContext.Provider>

        </apiContext.Provider>
    );
}