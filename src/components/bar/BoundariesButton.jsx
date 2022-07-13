import { BorderOuter } from "@mui/icons-material";
import {IconButton} from "@mui/material";
import {useContext} from "react";
import BarItemsContentConnectionContext from "./BarItemsContentConnectionProvider";

const BoundariesButton = () => {

    const { boundaries } = useContext(BarItemsContentConnectionContext);
    const { setShowBoundaries } = boundaries;

    const handleClick = () => {
        setShowBoundaries((prev)=> !prev);
    }

    return(
        <IconButton onClick={handleClick} color={`inherit`}>
            <BorderOuter/>
        </IconButton>
    );
}

export default BoundariesButton;