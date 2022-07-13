import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {css} from "@emotion/css";

const ActivateButton = (props) => {

    const myCss = css`
      transform: translate(-100%, -100%);
    `
    const {render, data} = props

    return(
        render &&
        <Box position={`absolute`} top={`100%`} left={`100%`} className={myCss}>
            <Button sx={{ m: 1 }} variant={`contained`}>Activate</Button>
        </Box>
    );
}

export default ActivateButton;