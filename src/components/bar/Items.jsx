import { Route, Routes } from 'react-router-dom';
import SettingsButton from './SetttingsButton';
import MenuButton from "./MenuButton";
import BoundariesButton from "./BoundariesButton";
import Box from "@mui/material/Box";
import {useContext} from "react";
import BarItemsContentConnectionContext from "./BarItemsContentConnectionProvider";

const AllElements = (props) => {
    return(
        <Box mr={`auto`}>
            <BoundariesButton {...props.connection.boundaries}/>
            <SettingsButton {...props.connection.camera}/>
        </Box>
    )
}

const Items = () => {
    const connection = useContext(BarItemsContentConnectionContext);

    return(
        <>
            <MenuButton/>
            {
                /*
                <Routes>
                <Route path={`camera/:id`}
                       element={<AllElements connection={connection}/>}/>
            </Routes>
                 */
            }
        </>
    );
}


export default Items;
