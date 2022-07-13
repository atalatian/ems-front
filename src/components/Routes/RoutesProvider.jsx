import {createContext} from "react";

const routes = {
    login: `/`,
    dashboard: {
        root: `/dashboard/`,
        children: {
            cameras: `cameras`,
            recordings: `recordings`,
            camera: `camera/:id`,
        }
    },
}

const RoutesContext = createContext({...routes});


export const RoutesContextProvider = (props) => {
    return(
        <RoutesContext.Provider value={{...routes}}>
            {props.children}
        </RoutesContext.Provider>
    );
}


export default RoutesContext;
