import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IconButton from '@mui/material/IconButton';
import Box from "@mui/material/Box";
import {css} from "@emotion/css";
import {useContext} from "react";
import VideoComponentContext from "./VideoComponentContext";
import {AnimatePresence, motion} from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Open = (props) => {

    const {render, name, id} = props
    const navigate = useNavigate();

    const myCss = css`
      transform: translate(0, -100%);
    `
    const handleClick = (id) => {
        navigate(`/dashboard/camera/${id}`)
    }

    return(
        <AnimatePresence>
            {render && <Box component={motion.div} className={myCss}
                 key={'open'}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.25 }}
                 position={`absolute`} top={`100%`} left={`0%`}>
                <IconButton aria-label="Open" size={`medium`}
                            onClick={()=> handleClick(id)}
                            sx={{
                                color: `#fff`,
                                backgroundColor: `#1d1d1d`,
                                m: 1,
                                '&:hover': { backgroundColor: `#1d1d1d` }
                            }}>
                    <OpenInNewIcon/>
                </IconButton>
            </Box>}
        </AnimatePresence>
    )
}

export default Open;
