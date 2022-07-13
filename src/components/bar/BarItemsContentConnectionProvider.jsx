import {createContext, useState} from "react";

const BarItemsContentConnectionContext = createContext({
    recordings: {
        detectors: '',
        setDetectors: ()=> {},
    },
    camera: {
        showSettings: false,
        setShowSettings: ()=>{},
    },
    boundaries: {
        showBoundaries: false,
        setShowBoundaries: ()=>{},
    },
    cameras: {
        showAddCamera: false,
        setShowAddCamera: ()=>{},
    }
})


export const BarItemsContentConnectionProvider = (props) => {
    const [detector, setDetector] = useState('all');
    const [showSettings, setShowSettings] = useState(false);
    const [showBoundaries, setShowBoundaries] = useState(false);
    const [showAddCamera, setShowAddCamera] = useState(false);



    return(
        <BarItemsContentConnectionContext.Provider value={{
            recordings: {
                detector,
                setDetector,
            },
            camera: {
                showSettings,
                setShowSettings,
            },
            boundaries: {
                showBoundaries,
                setShowBoundaries,
            },
            cameras: {
                showAddCamera,
                setShowAddCamera,
            },
        }}>
            {props.children}
        </BarItemsContentConnectionContext.Provider>
    );
}

export default BarItemsContentConnectionContext;