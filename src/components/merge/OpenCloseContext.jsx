import React, {useState} from 'react';


const OpenCloseContext = React.createContext({
    isOpen: false,
    makeOpen: () => {},
    makeClose: () => {}
})

export const OpenCloseContextProvider = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const makeOpen = () => {
        setIsOpen(true);
    }

    const makeClose = () => {
      setIsOpen(false)
    }

    return(
        <OpenCloseContext.Provider value={{
            isOpen: isOpen,
            makeOpen: makeOpen,
            makeClose: makeClose,
        }}>
            {props.children}
        </OpenCloseContext.Provider>
    )
}



export default OpenCloseContext;