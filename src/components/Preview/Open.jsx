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

const Open = (props) => {

    const {render, name, id} = props
    const navigate = useNavigate();
    const { data = [] } = useGetStreamsQuery();
    const streams = data

    const [setStream] = useSetStreamMutation();

    const myCss = css`
      transform: translate(0, -100%);
    `
    const handleClick = (id) => {
        navigate(`/dashboard/camera/${id}`)
    }

    const handleDisableClick = async () => {
        const stream = streams.find((stream)=> stream.id === id);
        const newStream = {...stream, is_active: false, is_streaming: false};

        try {
            await setStream(newStream);
        }catch (e) {
            console.log(e)
        }
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
                 position={`absolute`} top={`100%`} left={`0%`}>
                <Button onClick={handleDisableClick}
                        sx={{ m: 1 }} variant={`contained`}>غیر فعال کردن</Button>
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
