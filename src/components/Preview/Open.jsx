import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IconButton from '@mui/material/IconButton';
import Box from "@mui/material/Box";
import {css} from "@emotion/css";
import {useContext} from "react";
import VideoComponentContext from "./VideoComponentContext";
import {AnimatePresence, motion} from "framer-motion";
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import {useGetStreamsQuery, useSetStreamMutation} from "../store/dataApi";
import {Settings} from "@mui/icons-material";

const Open = (props) => {

    const {render, id, disable} = props
    const navigate = useNavigate();

    const [setStream] = useSetStreamMutation();

    const myCss = css`
      transform: translate(-50%, -50%);
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
                 display={`flex`}
                 alignItems={`flex-end`}
                 flexDirection={`column`}
                 transition={{ duration: 0.25 }}
                 position={`absolute`} top={`50%`} left={`50%`}>
                <IconButton disabled={disable} aria-label="Open" size={`medium`}
                            onClick={()=> handleClick(id)}
                            sx={{
                                color: `#fff`,
                                backgroundColor: `#1d1d1d`,
                                m: 1,
                                '&:hover': { backgroundColor: `#1d1d1d` }
                            }}>
                    <Settings sx={{ fontSize: `5rem` }}/>
                </IconButton>
            </Box>}
        </AnimatePresence>
    )
}

export default Open;
