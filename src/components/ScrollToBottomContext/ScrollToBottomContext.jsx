import React from "react";

const ScrollToBottomContext = React.createContext({
    scrollToBottom: ()=> {},
})

export const ScrollToBottomContextProvider = (props) =>{

    const scrollToBottom = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" })
    }


    return(
        <ScrollToBottomContext.Provider value={{
            scrollToBottom: scrollToBottom
        }}>
            {props.children}
        </ScrollToBottomContext.Provider>
    );
}


export default ScrollToBottomContext;