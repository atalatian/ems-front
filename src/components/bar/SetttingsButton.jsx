import { Settings } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import {useContext} from "react";
import BarItemsContentConnectionContext from "./BarItemsContentConnectionProvider";

const SettingsButton = () => {
    const { camera } = useContext(BarItemsContentConnectionContext);
    const { setShowSettings } = camera;

    const handleClick = () => {
        setShowSettings((prev)=> !prev)
    }
    
    return(
        <IconButton onClick={handleClick} color={`inherit`}>
            <Settings/>
        </IconButton>
    );
}


export default SettingsButton;