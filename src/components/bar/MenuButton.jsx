import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import {useContext} from "react";
import OpenCloseContext from "../merge/OpenCloseContext";

const MenuButton = () => {
    const ctx = useContext(OpenCloseContext)

    const handleClick = () => {
        if (ctx.isOpen){
            ctx.makeClose();
        }else {
            ctx.makeOpen();
        }
    }

    return(
        <IconButton onClick={handleClick} edge="start"
                    color="inherit" aria-label="menu">
            <MenuIcon />
        </IconButton>
    );
}

export default MenuButton;