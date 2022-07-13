import React, {useState} from "react";

const VideoComponentContext = React.createContext({
    renderOpen: false,
    renderDescription: false,
    makeOpenVisible: ()=>{},
    makeOpenInvisible: ()=>{},
    makeDescriptionVisible: ()=>{},
    makeDescriptionInvisible: ()=>{},
})


export const VideoComponentContextProvider = (props) => {
    const [renderOpen, setRenderOpen] = useState(false);
    const [renderDescription, setRenderDescription] = useState(false);


    const makeOpenVisible = () => {
      setRenderOpen(true);
    }

    const makeOpenInvisible = () => {
      setRenderOpen(false);
    }

    const makeDescriptionVisible = () => {
      setRenderDescription(true)
    }

    const makeDescriptionInvisible = () => {
      setRenderDescription(false)
    }

    return(
        <VideoComponentContext.Provider value={{
            renderOpen: renderOpen,
            renderDescription: renderDescription,
            makeOpenVisible: makeOpenVisible,
            makeOpenInvisible: makeOpenInvisible,
            makeDescriptionVisible: makeDescriptionVisible,
            makeDescriptionInvisible: makeDescriptionInvisible,
        }}>
            {props.children}
        </VideoComponentContext.Provider>
    )
}

export default VideoComponentContext;