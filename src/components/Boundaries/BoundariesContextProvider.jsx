import {createContext, useState} from "react";
import {useSelector} from "react-redux";

const BoundariesContext = createContext({
    id: 0,
    setId: ()=>{},
    curMousePos: [],
    setCurMousePos: ()=>{},
    mode: 'draw',
    setMode: ()=> {},
    selectedId: 0,
    setSelectedId: ()=>{},
})


export const BoundariesContextProvider = (props) => {
    const [curMousePos, setCurMousePos] = useState([0, 0]);
    const [id, setId] = useState(0);
    const [mode, setMode] = useState('draw');

    const firstShape = useSelector(state => state.boundaries[0])
    const [selectedId, setSelectedId] = useState(firstShape.id);

    const contextValue = {
        curMousePos,
        setCurMousePos,
        id,
        setId,
        mode,
        setMode,
        selectedId,
        setSelectedId,
    }

    return(
        <BoundariesContext.Provider value={contextValue}>
            {props.children}
        </BoundariesContext.Provider>
    );
}


export default BoundariesContext;