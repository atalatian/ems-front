import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {forwardRef, useState} from "react";

const MoreAlert = forwardRef((props, ref)=>{

    const [render, setRender] = useState(true);


    const handleScroll = () => {
        //props.functions.handleScroll(ref);
    }

    return(
        (
            props.states.render && <Box width={`100%`} position={`sticky`} bottom={0}>
                <Button onClick={handleScroll} fullWidth variant="contained"
                        size={`small`} endIcon={<ExpandMoreIcon/>}
                        sx={{ p: 0, borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0}}>More</Button>
            </Box>
        )
    );
})

export default MoreAlert;