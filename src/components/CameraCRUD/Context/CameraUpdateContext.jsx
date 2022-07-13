import {createContext, useState} from "react";

const CameraUpdateContext = createContext({
    name: '',
    setName: ()=>{},
    url: '',
    setUrl: ()=>{},
    detectors: [],
    setDetectors: ()=>{},
})


export const CameraUpdateContextProvider = (props) => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [detectors, setDetectors] = useState([]);

    const contextValue = {
        name,
        setName,
        url,
        setUrl,
        detectors,
        setDetectors
    }

    return(
        <CameraUpdateContext.Provider value={contextValue}>
            {props.children}
        </CameraUpdateContext.Provider>
    );
}


export default CameraUpdateContext

