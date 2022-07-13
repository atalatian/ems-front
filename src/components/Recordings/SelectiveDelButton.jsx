import IconButton from "@mui/material/IconButton";
import {Delete} from "@mui/icons-material";
import Box from "@mui/material/Box";
import React from "react";

const SelectiveDelButton = (props) => {

    const { setDeleteDialogOpen } = props;

    const handleClick = () => {
        setDeleteDialogOpen(true);
    }


    return(
        <Box m={1}>
            <IconButton onClick={handleClick} sx={{ bgcolor: `error.main`, color: `#fff`,
                '&:hover': { backgroundColor: `error.dark` }}}>
                <Delete/>
            </IconButton>
        </Box>
    );
}


export default SelectiveDelButton