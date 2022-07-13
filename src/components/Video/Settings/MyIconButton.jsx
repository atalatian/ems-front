import { Settings } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";

const MyIconButton = () =>{
    return(
        <Box m={1} mt={0}>
            <IconButton size={`large`}>
                <Settings/>
            </IconButton>
        </Box>
    );
}


export default MyIconButton;